import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
// import Navigation from './components/navigation/Navigation';
import axios from 'axios';
import A from './components/home/A';
import Example from './components/home/A';

const App = () => {
const [theme , setTheme] = useState("lightTheme")
const [btc , setbtc] = useState("btc")
const [ada , setada] = useState("ada")
const [eth , seteth] = useState("eth")
const [shib , setshib] = useState("shib")
const [trx , settrx] = useState("trx")



useEffect(() => {
  axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctron%2Cethereum%2Cshiba-inu%2Ccardano&vs_currencies=usd")
  .then(r =>{setada(r.data.cardano.usd);setbtc(r.data.bitcoin.usd);seteth(r.data.ethereum.usd);settrx(r.data.tron.usd);
  })
}, [])
  return ( 
    <div className={`${theme} m-0 p-0 box-border`} >
     <BrowserRouter>
     {/* <Navigation/> */}
     {/* <A/> */}
     <Home theme={theme} setTheme={setTheme} />
     
     <Example/>
     
     
     </BrowserRouter>
    </div>
   );
}
 
export default App;