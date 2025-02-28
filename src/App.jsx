import { About, Contact, Experience, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas} from './components';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'> {/* bg-primary is a class that sets the background color to the primary color defined in the styles.css file */}
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
        </div>
      </BrowserRouter>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </>
  )
}

export default App
