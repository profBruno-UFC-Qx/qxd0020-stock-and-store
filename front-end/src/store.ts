import { createStore } from 'vuex';
import './assets/js/faker.min.js';

type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    discount: number,
    quantity: number,
    rating: number
}

function getFakeProducts(): Product[]{
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
    return productsArray;
}

export default createStore({
    state: {
        products: getFakeProducts()
    },
    mutations: {
        remove(state, id: number) {
            let index = 0;
            for (let product of state.products) {
              if (product.id === id) {
                break;
              }
              index = index + 1;
            }
            state.products.splice(index, 1);
        },
        update(state, props: object) {
            const product = state.products.find(p => p.id === props.id);
            if(product) {
                Object.assign(product, props);
            }
        }
    },
    actions: {
        remove(context, id: number) {
            context.commit('remove', id);
        },
        update(context, payload) {
            
            context.commit('update', payload);
        }
    }
});
