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
                price: faker.commerce.price(),
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
        sale(i) {
            return this.products[i].discount > 0;
        },
        price(i) {
            const {price, discount} = this.products[i];
            return (price - (discount/100) * price).toFixed(2);
        }
    }

}

Vue.createApp(listProduct).mount('#app');