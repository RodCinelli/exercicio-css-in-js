import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle from './styles' // Importe o estilo global

function App() {
  return (
    <>
      <GlobalStyle /> {/* Adicione o estilo global */}
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
