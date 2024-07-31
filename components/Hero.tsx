import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py20 xl:flex-row '>
      <div className='hero-map' />
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 my-4'>
      <Image
        src="/camp.svg"
        alt='camp'
        width={50}
        height={50}
        className='absolute left-[-18px] top-[-45px] w-10 lg:w-[50px]'
      />
      <h1 className='bold-52 lg:bold-88'>Temukan Kemah<br />Impianmu!</h1>
      <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'><span className='font-semibold text-green-600/80 text-2xl'>Selamat datang di KemahKuy!</span><br />Temukan destinasi berkemah terbaik di Indonesia, dari pantai eksotis hingga pegunungan menakjubkan. Rencanakan perjalanan berkemah impian Anda dengan informasi lengkap tentang lokasi, fasilitas, dan tips berguna. Mulailah petualangan tak terlupakan Anda sekarang!</p>
    
      <div className='my-11 flex flex-wrap gap-5'>
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) =>(
              <Image
              src="/star.svg"
              key={index}
              alt='star'
              width={24}
              height={24}
              />
            ))}
          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>
            10k
            <span className='regular-16 lg:regular-20 ml-1'>Tinjauan terbaik</span>
          </p>
      </div>

      <div className='flex w-full gap-3 sm:flex-row'>
           <Button
            type='button'
            title="Download App"
            variant="btn_green"
             />   
           <Button
            type='button'
            title="Cara kerja?"
            icon='/play.svg'
            variant="btn_white_text" 
            />   
      </div>
      </div>

      <div className='relative flex flex-1 items-start mr-16'>
            <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
              <div className="flex flex-col">
                <div className="flexBetween">
                  <p className='regular-16 text-gray-20 '>Lokasi</p>
                  <Image 
                  src="/close.svg" 
                  alt='close' 
                  width={24} 
                  height={24}
                   />
                </div>
                <p className='bold-20 text-white'>Ranu Pani Semeru</p>
                </div>
                <div className="flexBetween">
                 <div className="flex flex-col">
                    <p className='regular-16 text-gray-20'>Jarak</p>
                    <p className='bold-20 text-white'>30 km</p>
                 </div>
                 <div className="flex flex-col">
                    <p className='regular-16 text-gray-20'>Ketinggian</p>
                    <p className='bold-20 text-white'>2.040 km</p>
                 </div>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Hero