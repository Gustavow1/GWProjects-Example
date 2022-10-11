import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import AccountLogin from './components/pages/AccountLogin'
import Account from './components/pages/Account'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'


import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'




function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass = "min-height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/login' element={<AccountLogin />} />
          <Route path='/account' element={<Account />} />
          <Route path='/newproject' element={<NewProject/>} />
          <Route path='/project/:id' element={<Project/>} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App;
