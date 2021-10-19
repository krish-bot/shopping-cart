import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function updateLocalStorage(cart){
    localStorage.setItem('cart',JSON.stringify(cart))
}

export const store = new Vuex.Store({
    state:{
        cart:[]
    },
    getters:{
        totalProduct(state){
            return state.cart.length   
        },  
        totalPrice(state){
            let total = 0;
            state.cart.forEach(item => {
                total += item.product.price * item.quantity
            })
            return total
        }
    },
    mutations:{
        addToCartItem(state,{product,quantity}){
            let cartItem = state.cart.find(item => item.product.id === product.id)
            if(cartItem){
                cartItem.quantity += quantity
            }else{
                state.cart.push({product, quantity})
            }
            updateLocalStorage(state.cart)
        },
        removeCartItem(state,product){
            state.cart = state.cart.filter(item => {
                return item.product.id !== product.id;
            })
            updateLocalStorage(state.cart)
            
        },
        clearCartItem(state){
            state.cart= []
            updateLocalStorage(state.cart)
        },
        getCartItem(state){
            let cart = localStorage.getItem('cart')
            if(cart){
                state.cart = JSON.parse(cart) 
            }
        }

    },
    modules:{

    },
    actions:{
        addProductToCart({ commit },{product,quantity}){
            commit('addToCartItem',{product,quantity})
        },
        removeProductFromCart({ commit },product){
            commit('removeCartItem',product);
        },
        clearCartItem({commit}){
            commit('clearCartItem')
        }
    }
})