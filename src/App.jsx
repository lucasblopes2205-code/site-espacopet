import './index.css'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Benefits     from './components/Benefits'
import Steps        from './components/Steps'
import Services     from './components/Services'
import HowItWorks   from './components/HowItWorks'
import CTA          from './components/CTA'
import Footer       from './components/Footer'
import ChatAssistant from './components/ChatAssistant'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Steps />
        <Services />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  )
}