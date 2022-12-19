import React, { useState } from "react";
import { Route } from "react-router-dom";
import StoresList from "./StoresList";
import StoreCard from "./StoreCard";


function StoresPage({ storeData, createNewStore }) {

  const [storeName, setStoreName] = useState('')

  function handleStore(e) {
    e.preventDefault()
    fetch("/stores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: storeName
        }),
    })
    .then((r) => r.json())
    .then((newStore) => createNewStore(newStore))        
    e.target.reset()
  }

  return (
    <div>
      <StoresList storeData={storeData} />

      <h1>Create New Store</h1>
      <form onSubmit={handleStore}>
        <input placeholder="Name of the Store" onChange={(e)=>setStoreName(e.target.value)}></input>
        <input type="submit" value='Create' className="glow-on-hover"></input>
      </form>
      
      <Route exact path="/stores/:id">
        <StoreCard storeData={storeData} />
      </Route>
    </div>
  );
}

export default StoresPage;