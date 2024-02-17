import {create} from 'zustand'
import {devtools,persist} from 'zustand/middleware'

const amountStore=(set)=>({
    amount:0,
    addAmount:(price)=>{
        set((state)=>({
            amount:state.amount+price,
        }))
    },
    subtractAmount:(price)=>{
        set((state)=>({
            amount:state.amount-price,
        }))
    },
    clearAmount:()=>{
        set(()=>({
            amount:0,
        }))
    }
})

const useAmountStore = create(
    devtools(
        persist(amountStore, {
            name: "amount",
        })
    )
)


export default useAmountStore;