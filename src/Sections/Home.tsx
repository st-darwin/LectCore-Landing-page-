import Hero from "../Components/Hero"
import NavBar from "../Components/NavBar"
import Badges from "../Components/Badges"
import Features from "../Components/Features"
import Testimonials from "../Components/Testimonial"
import LecturerConnect from "../Components/LecturerConnect"
import CallToAction from "../Components/CallToAction"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Badges/>
      <Features/>
      <LecturerConnect/>
      <Testimonials />
      <CallToAction/>
      <Footer />

      
      
    </div>
  )
}

export default Home
