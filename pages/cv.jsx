import React from 'react'
import Navbar from '../components/Navbar'

const Cv = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full py-16 px-2">
        <div className="grid grid-cols-8 gap-8">
          <div className='col-span-8'>
            <iframe src="/muhmmad_nurwibawanto.pdf" style={{ width: '100%', height: '800px' }}>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cv
