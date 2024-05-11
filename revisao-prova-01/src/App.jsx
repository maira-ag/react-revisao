import './App.css'
import "./styles/styles.css"
import Footer from './components/Footer'
import Header from './components/Header'
import Gallery from './components/Gallery'
import ListItems from './components/ListItems'

function App() {
  return (
    <>
      <div className='content'>
        <Header />
        <Gallery />
        <div className='list'>
          <ListItems item1={"Rihanna"} item2={"36 y"} />
          <ListItems item1={"Beyoncé"} item2={"42 y"} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
