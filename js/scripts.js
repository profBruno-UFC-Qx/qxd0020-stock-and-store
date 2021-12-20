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
        for (let i = 0; i < 5; i++) {
            productsArray.push({
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                sale: Math.random() > 0.5,
            });
        }
        return {
            products: productsArray
        }
    }
}

Vue.createApp(listProduct).mount('#app');