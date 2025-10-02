import './App.css'
import TopBar from './components/topbar'
import Hero from './components/hero'
import Products from './components/products'

function App() {

  return (
    <>
      <div className='p-5'>
          <div>
            <TopBar />
          </div>
          <div className='mt-2'>
            <Hero />
          </div>
          <div className='mt-5'>
            <Products />
          </div>
      </div>
    </>
  )
}

export default App
