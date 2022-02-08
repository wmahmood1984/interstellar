
import Web3 from 'web3'





const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "Price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const tokenAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



var web3;
var RonContract
var address
export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async(a,thunkApi)=>{
    

        try {
            if(Web3.givenProvider){ 
                web3 = new Web3(Web3.givenProvider);
			
             //   await Web3.givenProvider.enable()
                const networkId = await web3.eth.net.getId()
				const SeekGoldAddress = "0x44540Ac7Eeb28f99156990191AbdF92DCCb8d4c5"
				const tokenAddres = "0x51dE1BF130514c175bb10E9a019283eb9B501C8D"
				var contract = new web3.eth.Contract(abi, SeekGoldAddress);
				var tokenContract = new web3.eth.Contract(tokenAbi,tokenAddres)
				RonContract = contract;
                const addresses = await web3.eth.getAccounts()
                address = addresses[0];
				var ethBalance = await web3.eth.getBalance(address)
				
                thunkApi.dispatch(balance({
                    contract: RonContract,
                    address: address,
					tokenContract

                }))
				return {
                    web3,
                    contract,
                    address,
					SeekGoldAddress,
					ethBalance,
                                                       }
            }else {console.log("error in loading web3")
					return {web3:null,contract:null,address:null,SeekGoldAddress:null}}
        } catch (error) {
            console.log("Error", error)
        }

    }
)



export const balance = createAsyncThunk("balance",
    async ({contract,address,tokenContract})=>{

		
        try {
            const balance1 = await tokenContract.methods.balanceOf(address).call()
			const price = 1500000000000

             return {balance1,price}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )


	export const Mint = createAsyncThunk("Mint",
    async ({quantity, value})=>{

		
        try {
			var LQuantity = quantity * 1000000000
            console.log("quantity",LQuantity)
            console.log("value",value)
			const result = await RonContract.methods.Buy(LQuantity).send({from:address, value:value })

        } catch (error) {
            console.log("Error in Buy Function",error)
        }
    }
    )







const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,
		ethBalance: null,
        address : null,
        balance: null,
		Price: null,
		Active: null,
        toggle: false,
		remaining: null,



    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
        },
		setAccount: (state,actions)=>{
			state.address = actions.payload
		}
    },
    extraReducers: {
        [initWeb3.fulfilled] : (state,action)=>{
            state.web3 = action.payload.web3;
            state.address = action.payload.address;
			state.ethBalance = action.payload.ethBalance;



         },

         [balance.fulfilled] : (state,action)=>{
            state.balance = action.payload.balance1
			state.Price = action.payload.price
		
            },


		

       
        [Mint.pending] : (state,action)=>{
			

            state.toggle = !state.toggle;
			state.error = null;
        },
        [Mint.fulfilled] : (state,action)=>{
			
            state.toggle = !state.toggle;
			state.error = action.payload;

        },



       
//
    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle } = adoptSlice.actions
