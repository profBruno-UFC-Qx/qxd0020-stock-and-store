<script lang="ts">
    export default {
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
    }
</script>

<template>
    <tr>
        <td>{{id}}</td>
        <td>{{name}}</td>
        <td>{{description}}</td>
        <td><input type="number" min="0" step="1" max="1000" v-model="mQuantity"></td>
        <td>{{price}}</td>
        <td><input type="number" min="0" max="95" step="5" v-model="modelDiscount"></td>
        <td><button class="btn btn-danger" @click="$emit('remove', id)">Delete</button></td>
    </tr>
</template>