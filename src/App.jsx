import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import './App.css'
import { NavBar , Footer} from './components/index'
import { About, Blog, Contact, Home, Shop , Product1, Product2 } from './page/index'


const App = () => (
  <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop1/:id' element={<Product1/>}/>
        <Route path='/shop2/:id' element={<Product2/>}/>
      </Routes>
      <Footer />
    </Router>
  </>
)

export default App
