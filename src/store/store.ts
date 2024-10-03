// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'
import favoritosReducer from './favoritosSlice'
import { apiSlice } from './apiSlice' // Importando o serviço da API

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer // Adicionando o reducer da API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware) // Adicionando o middleware da API
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
