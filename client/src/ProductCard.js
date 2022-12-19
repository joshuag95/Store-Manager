import { useState } from "react"

export default function ProductCard({ name, price, inventory, category, obj, handleClick, handleDelete, id }) {

    function handleUpdate(e){
        e.preventDefault();
            fetch(`/products/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newName,
                    price: newPrice,
                    inventory: newInventory,
                    category: newCategory
                })
            })
            .then((r) => r.json())
            .then(() => handleDelete())
        e.target.reset()
    }

    const [newName, setNewName] = useState(name)
    const [newPrice, setNewPrice] = useState(price)
    const [newInventory, setNewInventory] = useState(inventory)
    const [newCategory, setNewCategory] = useState(category)

    return (
        <div>
            <span className="card">
                Name: {obj.name}<br/>
                Price: ${obj.price}<br/>
                Inventory: {obj.inventory}<br/>
                Category: {obj.category}<br/>
                <form id="form" onSubmit={handleUpdate}>
                    <input placeholder={name} onChange={(e) => setNewName(e.target.value)}></input>
                    <input placeholder={`Price: $${price}`} onChange={(e) => setNewPrice(e.target.value)}></input>
                    <input placeholder={`Inventory: ${inventory}`} onChange={(e) => setNewInventory(e.target.value)}></input>
                    <input placeholder={category} onChange={(e) => setNewCategory(e.target.value)}></input>
                    <input value="Update" type="submit" />
                </form>
                <button onClick={() => handleClick(obj.id)}>Delete Product</button>
                <br />
            </span>
        </div>
    )
}