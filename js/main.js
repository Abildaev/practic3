const products = [
    {
        id: 1,
        name: "Apple",
        price: 12000,
        imgUrl: "img/ap.png"
    },
    {
        id: 2,
        name: "Nokia",
        price: 20000,
        imgUrl: "img/ap2.png"
    },
    {
        id: 3,
        name: "Apple 2",
        price: 10000,
        imgUrl: "img/ap3.png"
    },
    {
        id: 4,
        name: "Samsung",
        price: 5000,
        imgUrl: "img/ap.png"
    },
    {
        id: 4,
        name: "Samsung",
        price: 5000,
        imgUrl: "img/ap.png"
    }
]

const productsId = document.getElementById('products');
const ad = document.getElementById('ad');

const searchBtn = document.getElementById('search__btn');
const searchInput = document.getElementById('search__input')

products.forEach(product => {
    productsId.innerHTML += `
            <div class="col-lg-3 mb-3">
                <div class="product">
                    <img src=${product.imgUrl} alt="#">
                    <h5>${product.name}</h5>
                    <h6>${product.price} сом</h6>
                    <button class="product__basket-btn" data-id=${product.id} data-name=${product.name} data-price=${product.price}>Добавить в корзину</button>
                </div
            </div>
`
})

/// добавление рекламы

const handleAd = {
    counterElement: document.getElementById('ad__counter-count'),
    btnElement: document.getElementById('closeBtn'),
    showAd: function () {
        setTimeout(function (){
            ad.classList.add('active')
            this.interval();
        }.bind(this),1000);
    },
    interval: function (){
        let count = 10;
        this.setIntervalId = setInterval(function (){
            count--
            this.counterElement.textContent = count;
            if (count === 0) {
                this.counterElement.textContent = "можете закрыть рекламу"
                clearInterval(this.setIntervalId);
                this.btnElement.disabled = false;
            }
        }.bind(this),1000)
    },
    hideAd: function () {
        this.btnElement.disabled = false;
        ad.classList.remove('active');
    }
}

////--------

handleAd.showAd();
handleAd.btnElement.addEventListener('click', handleAd.hideAd);












