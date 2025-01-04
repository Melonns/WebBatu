import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Utama from './Utama'
import Footer from './Footer'
import '@fontsource/dosis'
import '@fontsource/quattrocento'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar />
            <Utama />
            <Footer />
        </div>
    )
}

export default App
