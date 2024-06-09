import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Galery } from './pages/Galery'

export default function App (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/ClaraPH' element={<Home />} />
        <Route path='/ClaraPH/galery' element={<Galery />} />
      </Routes>
    </>
  )
}
