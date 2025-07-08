import { ArrowDown } from 'lucide-react'
import React from 'react'

export const HeroSection = () => {
    const handleScroll = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
    id='hero'
    className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'>Trupti</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>Khadtare</span>
                </h1>
                <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>I'm a stellar web developer with a sharp eye for design and seamless functionality. I turn complex ideas into fast, responsive, and user-friendly digital experiences.</p>
                <div className='opacity-0 animate-fade-in-delay-4 pt-4'>
                    <a href='#projects' className='cosmic-button'>
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'  onClick={handleScroll}>
            <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
            <ArrowDown className='h-5  w-5 text-primary'></ArrowDown>
        </div>
    </section>
  )
}
