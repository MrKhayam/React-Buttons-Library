import Sidebar from './components/Sidebar'
import MainLib from './components/MainLib'
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <Router>
        <div className='h-screen flex gap-4 justify-between items-center px-4 w-full'>
        <Sidebar />
        <MainLib />
    </div>
    </Router>
  )
}

export default App
