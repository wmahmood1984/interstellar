import React, { useState } from 'react'
import './main.css'
import { useSelector,useDispatch } from 'react-redux';
import { Mint} from '../state/ui/index'
import Logo from '../images/LOGO_YELLOW.png'
import Gif from '../images/Untitled.gif'
import McText from 'mctext-react'

export default function Main() {
    const [NFTSelected,setNFTSelected] = useState()
    const [quantity,setQuantity] = useState(1)
    const [referror,setReferror] = useState()

    const dispatch = useDispatch();

    const balanceArray = useSelector((state)=>{
       const result =  state.adoptReducer.balance; 
      return result
      });

     

      const Active = useSelector((state)=>{
        return state.adoptReducer.Active;
      });

      const Price = useSelector((state)=>{
        return state.adoptReducer.Price;
      });

      console.log("Price",Price)

      const remaining = useSelector((state)=>{
        return state.adoptReducer.remaining;
      });

      const address = useSelector((state)=>{
        return state.adoptReducer.address;
      });

      const ethBalance = useSelector((state)=>{
        return state.adoptReducer.ethBalance;
      });








    window.ethereum.on('accountsChanged',async (accounts)=>{window.location.reload() })


      async function handleConnect(e){
        e.preventDefault()
        
        window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{
            eth_accounts: {},
          }]
        }); 
       }
      

       function handleSubmit(e){
            e.preventDefault()
         dispatch(Mint({quantity,value: quantity*Price}))
            
            
       }



      return (

        <div className="Main">
         

            <div style={{display:"flex"}}>
            <a href={'/'}><img alt="Logo will come here" className="Main-Logo" ></img></a>
 
            </div>
            
            <div className="Center">
                <div  className="Pic">
                    InterStellar 2.0;
                </div>

                <button onClick={handleConnect} className="ConnectButton">{address? `${address.slice(0,3)}...${address.slice(38,42)}` :"Connect MetaMask"}</button>
                <div className="QtyPrice">
                    <div className= "QtyPriceBox" style={{fontSize:"18px"}}>
                    My FTM balance :  {ethBalance && (ethBalance/1000000000000000000).toFixed(4)}
                    </div>
 
                    <div className= "QtyPriceBox" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey"}}>
                        <label>                    Qty  {' '}
                        <button style={{color:"white", backgroundImage: 'linear-gradient(180deg, black, pink)'}} onClick={()=>{if(quantity>=1){setQuantity(quantity-1)} }}> -</button>                            
                            {' '}
                           <input style={{position:"relative", width:"80px",background:"transparent", border:"none",color:"red",fontWeight:"bold", textAlign:"center", fontSize:"20px"}}
                            value={quantity} type="value"            
                            onChange={({ target }) => {setQuantity(target.value)}}/></label>
                            <button style={{color:"white", backgroundImage: 'linear-gradient(180deg, black, pink)'}}  onClick={()=>{setQuantity(quantity+1)}}>+</button>

                            <button 
                            style={{color:"white", backgroundImage: 'linear-gradient(180deg, black, red)'}}
                            onClick={()=>{
                              setQuantity((ethBalance/Price).toFixed(0))
                              
                              }}>max</button><br/>
                      
                    </div>
                    <div >
                    Total Value =   { quantity * Price/1000000000000000000} FTM
                    </div>

                </div>
                    <button onClick={handleSubmit} 
                    style={{position:"relative", left:"45px", height:"50px", width:"450px", background:"pink", borderRadius:"15px",color:"white", backgroundColor:"#4c87e6"}}>B U Y</button>

            </div>

            <div className="Main-bottom">
                
                <div >
                Price

                    <div style={{ width:"120px",height:"35px",position:"relative",left:"20px", marginTop:"10px"}}>{Price && (Price/10000000000000000000).toFixed(4)} Eth</div>
                </div>
            </div>
        </div>
    )
}
