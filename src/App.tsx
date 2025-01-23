import './App.css'
import Header from './components/header'
import Footer from './components/Footer'

function App() {

  const title = 'NBA X React'

  return (
    <>
     <Header title={title} />
      <main>
        <h1>Hello world!</h1>
      </main>
      <Footer />
    </>

  )
}

export default App
