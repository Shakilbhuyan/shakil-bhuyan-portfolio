'use client'
import Skill from '@/Components/SkillsAndProjects/Skill'
import About from '@/Components/about/About'
import Banner from '@/Components/banner/Banner'
import Contact from '@/Components/contact/Contact';




export default function Home() {
  
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Contact></Contact>
    </div>
  )
}
