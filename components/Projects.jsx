import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg'
import cbtImg from '../public/assets/projects/cbt.jpg'
import ProjectItem from './ProjectItem'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto p-2 py-16'>
        <p className='text-xl uppercase tracking-widest text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What i've build</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Proprty Finder'
            description='React Js'
            backgroundImg={propertyImg}
            urlGit='https://github.com/anto1290/cbt'
            url='/property'
          />
          <ProjectItem
            title='Computer Based Test'
            description='Codeignater 3'
            backgroundImg={cbtImg}
            urlGit='https://github.com/anto1290/cbt'
            url='/cbt'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
