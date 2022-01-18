<template>
    <div class="row gx-4 gx-lg-5">
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
</template>