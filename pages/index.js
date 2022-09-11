import Head from 'next/head'
import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Muhammad Nurwibawanto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
