import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RenderProducts from "./RenderProducts";
import CreateProducts from "./CreateProducts";

function StoreCard( {storeData} ) {

    const [ store, setStore ] = useState([])

    const {id} = useParams();

  useEffect(() => {
      getProducts()
  }, [])

  const [products, setProducts] = useState([])

  const getProducts = () => {
      fetch('/products')
          .then(resp => resp.json())
          .then(resp => setProducts(resp))
  }

    useEffect(() => {
        fetch(`/stores/${id}`)
        .then(resp => resp.json())
        .then(data => setStore(data))
      },[id])

  return (
    <div>
      <h1><u>{store.name}</u></h1>
      <br />
      < CreateProducts id={id} products={products} getProducts={getProducts} />
      < RenderProducts store={store} products={products} getProducts={getProducts} />
    </div>
  );
}

export default StoreCard;