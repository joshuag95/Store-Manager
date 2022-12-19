
import './App.css';
import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home';
import StoresPage from './StoresPage';
import NavBar from './NavBar';
import StoreCard from './StoreCard';

function App() {

  const [storeData , setStoreData] = useState([])

  useEffect(() => {
    fetch('/stores')
    .then(resp => resp.json())
    .then(data => setStoreData(data))
  },[])

  const createNewStore = (obj) => {
    setStoreData( storeData => [...storeData, obj] )
  }
 
  console.log(storeData)
  return (
    <div className="App">
      
      <NavBar />

      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>

        <Route exact path="/stores" >
          <StoresPage storeData={storeData} createNewStore={createNewStore} />
        </Route>

        <Route exact path="/stores/:id">
          <StoreCard storeData={storeData} />
        </Route>

      </Switch>
    
    </div>
  );
}


export default App;