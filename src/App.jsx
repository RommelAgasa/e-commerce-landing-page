import './App.css'
import TopBar from './components/topbar'
import Hero from './components/hero'

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
      </div>
    </>
  )
}

export default App
