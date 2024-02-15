import {create} from 'zustand'
import {devtools,persist} from 'zustand/middleware'


const cartStore=(set)=>({
    cart:[],
    addSneaker:(sneaker)=>{
        set((state)=>({
            cart:[...state.cart,sneaker]
        }))
    },
    removeSneaker:(sneakerId)=>{
        set((state)=>({
            cart:state.cart.filter((s) => s.id !== sneakerId)
        }))
    },

    clearCart:()=>{
        set(()=>({
            cart:[]
        }))
    }

})

const useCartStore = create(
    devtools(
        persist(cartStore, {
            name: "cart",
        })
    )
)


export default useCartStore;