import Sidebar from './components/Sidebar'
import MainLib from './components/MainLib'
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from "react-hot-toast";



const App = () => {
  return (
    <Router>
        <Toaster />
        <div className="w-full absolute h-screen md:hidden flex items-center justify-center">
          <h1 className='text-black text-2xl'>Only for larger screens.</h1>
        </div>
      <div className='h-screen hidden md:flex gap-4 justify-between items-center px-4 w-full'>
        <Sidebar />
        <MainLib />
        </div>
    </Router>
  )
}

export default App
