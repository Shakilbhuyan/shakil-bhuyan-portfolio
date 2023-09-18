'use client'
import Skill from '@/Components/SkillsAndProjects/Skill'
import About from '@/Components/about/About'
import Banner from '@/Components/banner/Banner'
import Contact from '@/Components/contact/Contact'
import { Fade, Slide } from 'react-reveal';





export default function Home() {

  return (
    <div>
      <Fade bottom cascade>
        <Banner></Banner>
        <Slide left>
          <About></About>
        </Slide>
        <Slide right>
          <Skill></Skill>
        </Slide>
        <Contact></Contact>
      </Fade>

      {/* <Banner></Banner>
      <About></About>
      <Skill></Skill>
     <Contact></Contact> */}
    </div>
  )
}
