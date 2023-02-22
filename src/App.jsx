import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './componet/Navbar'
import Navbar from './componet/Navbar'
import Hero from './componet/Hero'
import Analytics from './componet/Analytics'
import NewsLetter from './componet/NewsLetter'
import Cards from './componet/Cards'
import Footer from './componet/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
     <Navbar />
     <Hero />
     <Analytics />
     <NewsLetter />
     <Cards />
     <Footer />

      </main>
    </div>
  )
}

export default App
