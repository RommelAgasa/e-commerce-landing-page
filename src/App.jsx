import './App.css'
import TopBar from './components/topbar'
import Hero from './components/hero'
import Products from './components/products'
import Avail from './components/avail'

function App() {

  return (
    <>
      <div className='p-5 flex flex-col gap-4'>

        <div>
          <TopBar />
        </div>

        <div>
          <Hero />
        </div>

        <div>
          <Products />
        </div>

        <div>
          <Avail />
        </div>
      </div>
    </>
  )
}

export default App
