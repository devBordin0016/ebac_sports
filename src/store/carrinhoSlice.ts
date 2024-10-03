// src/store/carrinhoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type CarrinhoState = {
  carrinho: Produto[]
}

const initialState: CarrinhoState = {
  carrinho: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoExiste = state.carrinho.find(
        (p) => p.id === action.payload.id
      )
      if (!produtoExiste) {
        state.carrinho.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.carrinho = state.carrinho.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
