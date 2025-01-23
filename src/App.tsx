import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import BasketballCard from './components/BasketballCard'

function App() {

  const title = 'NBA X React'

  const basketballArr = [
    { name: 'Steph', height: 6.3, mvp: true },
    { name: 'Klay', height: 6.4, mvp: false },
    { name: 'Draymond', height: 6.6, mvp: false },
    { name: 'Kobe', height: 6.5, mvp: true },
    { name: 'LeBron', height: 6.8, mvp: true },
    { name: 'Jordan', height: 6.5, mvp: true },
    { name: 'Shaquille', height: 7.1, mvp: true },
    { name: 'Jokic', height: 7.1, mvp: true }
  ];

  return (
    <>
      <Header title={title} />
      <main>
        <h2>Basketspelare</h2>
        {basketballArr.map((player, index) => (
          <BasketballCard 
          name={player.name} 
          height={player.height} 
          mvp={player.mvp} 
          key={index} />
        ))}
      </main>
      <Footer />
    </>

  )
}

export default App
