
import './App.css';
import {sseState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'


function App() {

  const [storeData , setStoreData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stores')
    .then(resp => resp.json())
    .then(data => setStoreData(data))
  },[])

  const createNewStore = (obj) => {
    setStoreData( storeData => [...storeData, obj] )
  }
 
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