import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { adicionarAoCarrinho } from './store/carrinhoSlice'
import { adicionarOuRemoverFavorito } from './store/favoritosSlice'
import { useGetProdutosQuery } from './store/apiSlice'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos = [], isLoading } = useGetProdutosQuery() // Usando o hook da API
  const carrinho = useSelector((state: RootState) => state.carrinho.carrinho)
  const favoritos = useSelector((state: RootState) => state.favoritos.favoritos)
  const dispatch = useDispatch()

  function adicionarAoCarrinhoRedux(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function favoritarRedux(produto: Produto) {
    dispatch(adicionarOuRemoverFavorito(produto))
  }

  if (isLoading) {
    return <div>Carregando...</div> // Exibe um estado de carregamento
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarRedux}
          adicionarAoCarrinho={adicionarAoCarrinhoRedux}
        />
      </div>
    </>
  )
}

export default App
