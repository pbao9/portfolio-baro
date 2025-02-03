import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Master from './pages/Master'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Master />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
