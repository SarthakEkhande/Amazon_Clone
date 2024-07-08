import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Products:[],
    userInfo:null,
    favitem:[]
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
        favitem1:(state,action)=>{
            const item= state.favitem.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity
            }
            else{
                state.favitem.push(action.payload)
            }

        },
        removefavitem:(state,action)=>{
             
            state.favitem=state.favitem.filter((item)=>item.id!==action.payload)    
        },
        resetfavitem:(state)=>{
            state.favitem=[]

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

export const{addTocart, deleteItem, removefavitem, resetCart, resetfavitem, incrementQuantity, decrementquantity,setuserInfo, userSignOut, favitem1}=amazonSlice.actions
export default amazonSlice.reducer