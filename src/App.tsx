import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

export default function App (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}
