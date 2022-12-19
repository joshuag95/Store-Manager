import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function RenderProducts({ store, products, getProducts }) {

    const arrayProducts = products.filter((obj) => {
        return (
            obj.store_id == store.id
        )
    })
    
    const handleClick = (obj) => {
        fetch(`/products/${obj}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => handleDelete())
    }
    
    const updateInventory = ()=>{
        getProducts()
    }
    
    const handleDelete = () => {
        getProducts()
    }

    const productInfo = arrayProducts.map((obj) => {
        return (
            < ProductCard id={obj.id}
                            name = {obj.name}
                            price = {obj.price}
                            inventory = {obj.inventory}
                            obj = {obj}
                            handleClick = {handleClick}
                            category = {obj.category}
                            updateInventory = {updateInventory}
                            key = {obj.id}
                            handleDelete = {handleDelete} />)
        })

    return (
        <div>
            {productInfo}
        </div>
    )
}

export default RenderProducts;