import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
// import CustomReactQuery from './customReactQuery';

function App() {

  const [search, setSearch] = useState('')

  
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  /* when we avoid to use .then with axios and we firstly hold data and then run some events on it 
  then how we get data through async await

  useEffect((async)=>{
    const response = await axios.get('api/products')
    // then where we write async 
    // this is totally wrong
  })

  // for this use IIFE ()()

  */

  // saving from cors error use proxy in package.json
  useEffect(()=>{
    // to avoid RACE CONDITION (means 1req of data comes 1st time and 2nd req of data comes 2nd time and alternate)
    // to avoid this race condition call api all times when inputted by DEBOUNCE in that only 1 request send after search completed
    const controller = new AbortController()
    // use semicolon for safety purpose for it not run previous code with this IIFE run it separately
    ;(async () => {
      try {
        setLoading(true);
        // and always setError to false when api succesfully run
        setError(false);
        const response = await axios.get('/api/products?search=' +search, {
          signal: controller.signal
          // but it send all cancel request to catch so we also handle this in catch
        })
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('request cancelled', error.message);
          return
        }
        // always handle error through state
        setError(true);
        setLoading(false);
      }
    })()

    //cleanup method
    // unmount all the work when component unmount
    return () => {
      controller.abort();
    }
  }, [search])
  // when we search then when we input a single letter then on every letter there is a api call so by this the perfomance of app is slow
  // to avoid this through axios we use abortController it camcel the previous request during search 
  // and react query automitcally work this to cancel the previous request


  // we also making custom react query

  // someterms like (race condition , debouncing) in APIS call

  // const [products, error, loading] = CustomReactQuery('/api/products')
  // const [products, error, loading] = CustomReactQuery('/api/products?search=' +search)
  

  // if(error)
  // {
  //   return <h1>Something went wrong</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <div>
      <h2>chai aur code</h2>
      <input
      type='text'
      placeholder='Search'
      value={search}
      onChange={(e) => {setSearch(e.target.value)}}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>something went wrong</h1>}
      <h3>number of products are : {products.length}</h3>
    </div>
  );
}

export default App;
