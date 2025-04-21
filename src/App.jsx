
import { Outlet } from 'react-router'
import './App.css'

function App() {
  

  return (
    <>
     <h1 className='text-7xl text-sky-500'>navbar</h1>
     <Outlet></Outlet>
     <h1 className='text-7xl text-sky-500'>footer</h1>
    
    </>
  )
}

export default App
