/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const root = {
    data() {
        const productsArray = [];
        for (let i = 0; i < 4; i++) {
            productsArray.push({
                id: i + 1,
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: Number(faker.commerce.price()),
                discount: 0,
                quantity: 3,
                rating: Math.floor(Math.random() * 5)
            });
        }
        return {
            products: productsArray
        }
    },

    methods: {
        remove(id) {
            let index = 0;
            for (let product of this.products) {
              if (product.id === id) {
                break;
              }
              index = index + 1;
            }
            this.products.splice(index, 1);
        }
    }

}

const listProduct = {
    template: `
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <slot></slot>
        </div>
    `
}

const productCard = {
    props: {
        name: String,
        price: Number,
        quantity: Number,
        discount: Number,
        rating: Number
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
                    <div v-if="sale" :class="{ 'bg\-danger': sale}" class="badge text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                    <!-- Product image-->
                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">{{name}}</h5>
                            <!-- Product reviews-->
                            <div v-if="rating" class="d-flex justify-content-center small text-warning mb-2">
                                <div v-for="i in rating" class="bi-star-fill"></div>
                            </div>
                            <!-- Product price-->
                            <span :class="{ 'text\\-decoration\\-line\-through' : sale, 'text\-muted': sale}">\${{price}}</span>
                            <span v-if="sale"> - {{priceWithDiscount}}</span>
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

const stock = {
    template: `<div class="row gx-4 gx-lg-5">
                    <div class="col">
                        <h2>Estoque</h2>
                        <hr>
                        <table class="table table-stripped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Qtd</th>
                                    <th>Price</th>
                                    <th>Discount(%)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <slot></slot>
                            </tbody>
                        </table>
                    </div>
                </div>
    `
}

const stockItem = {
    props: {
        id: Number,
        name: String,
        description: String,
        price: Number,
        quantity: Number,
        discount: Number
    },
    emits: ['update:quantity', 'update:discount'], 
    computed : {
        modelDiscount: {
            get() {
                return this.discount;
            }, 
            set(value) {
                this.$emit('update:discount', value);
            }
        },
        mQuantity: {
            get() {
                return this.quantity;
            }, 
            set(value) {
                this.$emit('update:quantity', value);
            }
        }
    },
    template: `
    <tr>
        <td>{{id}}</td>
        <td>{{name}}</td>
        <td>{{description}}</td>
        <td><input type="number" min="0" step="1" max="1000" v-model="mQuantity"></td>
        <td>{{price}}</td>
        <td><input type="number" min="0" max="95" step="5" v-model="modelDiscount"></td>
        <td><button class="btn btn-danger" @click="$emit('remove', id - 1)">Delete</button></td>
    </tr>`

}

const app = Vue.createApp(root)

app.component('list-product', listProduct);
app.component('product-card', productCard);

app.component('stock', stock);
app.component('stock-item', stockItem);

app.mount('#app');