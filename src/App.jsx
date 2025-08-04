import { Outlet } from 'react-router-dom'
import './App.css'
import PageTransition from './components/PageTransition'

function App() {
  return (
    <PageTransition>
      <Outlet />
    </PageTransition>
  );
}

export default App
