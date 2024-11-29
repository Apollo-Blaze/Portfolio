import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { Analytics } from "@vercel/analytics/react";
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <div className='relative z-0'>
          <Suspense fallback={<div>Loading stars...</div>}>
            <StarsCanvas />
            <About />
          </Suspense>
        </div>
        
        <Experience />


        <div className='relative z-0 flex flex-col min-h-screen bg-gradient-to-b from-primary to-[#0f0429]'>
  {/* Yellow section for Tech component, centered */}
  <div className='z-20 flex-1 flex justify-center items-center'>
    <div className="p-2 sm:p-4">
      <Tech />
    </div>
  </div>
</div>






        <div className='relative z-0 bg-gradient-to-b  from-[#0f0429] to-primary'>
        <Works />
        </div>

        <Feedbacks />

        <div className='relative z-0'>
          <Suspense fallback={<div>Loading stars...</div>}>
            <StarsCanvas />
            <Contact />
          </Suspense>
        </div>
      </div>
      
      <Analytics />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
