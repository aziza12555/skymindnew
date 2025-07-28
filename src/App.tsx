import { Route, Routes } from "react-router-dom"
import Footer from "./components/shared/footer"
import Navbar from "./components/shared/navbar"
import AdminPage from "./components/pages/admin/admin"
import About from "./components/pages/about"
import Graduates from "./components/pages/graduates"
import HomePage from "./components/pages/page"
import Course from "./components/pages/couse"
import LoginForm from "./components/pages/auth/login"
import RegisterForm from "./components/pages/auth/register"

const App = () => {
  return (
  <>
  <Navbar/>
  <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<About />} />
         <Route path="/courses" element={<Course />} />
         <Route path="/graduates" element={<Graduates />} />
      </Routes>
  <Footer/>
  </>
  )
}

export default App
