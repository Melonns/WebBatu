import { useState } from 'react'
import './App.css'
import Header from './Header'
import Utama from './Utama'
import Footer from './Footer'
import '@fontsource/dosis'
import '@fontsource/quattrocento'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* <Header /> */}
            <Utama />
            <Footer />
        </div>
    )
}

export default App
