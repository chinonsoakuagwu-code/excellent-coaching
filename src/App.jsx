import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CourseDetail from './pages/CourseDetail'
import Faculty from './pages/Faculty'
import SuccessStories from './pages/SuccessStories'
import PriceList from './pages/PriceList'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseName" element={<CourseDetail />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App