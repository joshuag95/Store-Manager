import React, { useState } from "react";

function CreateProducts ({id, products, getProducts}) {

    const [newProducts, setNewProducts] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [inventory, setInventory] = useState('')
    const [category,setCategory] = useState('')

    const newProduct = obj => {
        setNewProducts(products => [...products, obj])
    }

    const CreateProduct = (e)=> {
        e.preventDefault()
        fetch ('/products', {
            method: "POST",
            headers: {
                'Content-type':"application/json",
            },
            body: JSON.stringify ({
                name,
                price,
                inventory,
                category,
                store_id: id
            }),
        })
        .then(res => res.json())
        .then(newProductobj => newProduct(newProductobj))
        getProducts();
        e.target.reset()
    }

    return (
        <div>
            <label /><h3>Add a Product</h3>
            <form onSubmit={CreateProduct} className='form'>
                <input placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
                <input placeholder="Price" onChange={(e)=>setPrice(e.target.value)}></input>
                <input placeholder="Inventory" onChange={(e)=>setInventory(e.target.value)}></input>
                <input placeholder="Category" onChange={(e)=>setCategory(e.target.value)}></input>
                <input type='submit' value="Add" ></input>
            </form>
            <label style={{
                borderBottom: "2px solid black",
                paddingBottom: "30px",
                marginTop: "-50px",
                marginBottom: "50px",
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "10%",
                listStyle: "none"
            }} />
        </div>
    )

}

export default CreateProducts;
