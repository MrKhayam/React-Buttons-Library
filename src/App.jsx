import Sidebar from './components/Sidebar'
import MainLib from './components/MainLib'
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from "react-hot-toast";



const App = () => {
  return (
    <Router>
        <Toaster />
        <div className='h-screen flex gap-4 justify-between items-center px-4 w-full'>
        <Sidebar />
        <MainLib />
    </div>
    </Router>
  )
}

export default App
