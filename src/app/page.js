'use client'
import Skill from '@/Components/SkillsAndProjects/Skill'
import About from '@/Components/about/About'
import Banner from '@/Components/banner/Banner'
import Contact from '@/Components/contact/Contact';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';



export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-in">
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Contact></Contact>
    </div>
  )
}
