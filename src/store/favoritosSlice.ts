// src/store/favoritosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarOuRemoverFavorito: (state, action: PayloadAction<Produto>) => {
      const produtoExiste = state.favoritos.find(
        (p) => p.id === action.payload.id
      )
      if (produtoExiste) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarOuRemoverFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
