/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const listProduct = {
    data() {
        const productsArray = [];
        for (let i = 0; i < 3; i++) {
            productsArray.push({
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: Number(faker.commerce.price()),
                discount: 0,
                quantity: 3
            });
        }
        return {
            products: productsArray
        }
    },

    methods: {
        remove(i) {
            this.products.splice(i, 1);
        },
    }

}

const productCard = {
    props: {
        name: String,
        price: Number,
        quantity: Number,
        discount: Number
    },
    computed : {
        sale() {
            return this.discount > 0;
        },
        priceWithDiscount() {;
            return (this.price - (this.discount/100) * this.price).toFixed(2);
        }
    },
    template: `<div class="col mb-5">
                <div class="card h-100">
                    <div v-if="sale" class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                    <!-- Product image-->
                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">{{name}}</h5>
                            <!-- Product price-->
                            <span v-if="sale" class="text-muted text-decoration-line-through">R\${{price}}</span>
                            <span v-if="sale"> R\${{priceWithDiscount}}</span>
                            <span v-else>R\${{price}}</span>
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a v-if="quantity" class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
                            <a v-else class="btn btn-outline-danger mt-auto" href="#">Out of stock</a>
                        </div>
                    </div>
                </div>
            </div>`,
}

const app = Vue.createApp(listProduct)

app.component('product-card', productCard);

app.mount('#app');