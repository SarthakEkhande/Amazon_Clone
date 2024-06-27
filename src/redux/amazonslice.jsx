import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Products:[],
    userInfo:null,
}

export const amazonSlice=createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            const item= state.Products.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity
            }
            else{
                state.Products.push(action.payload)
            }
          

        },
      
        incrementQuantity:(state,action)=>{
               const item=state.Products.find((item)=>item.id===action.payload)
               item.quantity++
        },
        decrementquantity:(state,action)=>{
            const item=state.Products.find((item)=>item.id===action.payload)

            if(item.quantity===1){
                item.quantity=1
            }
            else{
                item.quantity--
            }
        },
        deleteItem:(state,action)=>{
            state.Products=state.Products.filter((item)=>item.id!==action.payload)    
        },
        resetCart:(state)=>{
            state.Products=[]

        },
        setuserInfo:(state,action)=>{
            state.userInfo=action.payload

        },
        userSignOut:(state)=>{
            state.userInfo=null
        }
    }
})

export const{addTocart, deleteItem, resetCart, incrementQuantity, decrementquantity,setuserInfo, userSignOut}=amazonSlice.actions
export default amazonSlice.reducer