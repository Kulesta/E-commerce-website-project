import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16' >
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Obsidian, we craft jewelry that celebrates the natural beauty of gemstones. Each piece is designed with simplicity and elegance, highlighting the unique character of stones shaped by the earth.</p>
          <p>We believe jewelry should be timeless made to be worn every day, yet special enough to mark life’s meaningful moments. With ethical sourcing at our core, every gem carries a story of integrity and beauty.</p>
          <p>Discover jewelry that connects you to the earth and to yourself. Welcome to Obsidian, where nature’s artistry meets timeless design.</p>  
          <b className='text-gray-800'>Our Mission</b>
          <p>To craft timeless gemstone jewelry that celebrates nature’s beauty with integrity and elegance.</p>
        </div>
      </div>

      <div>
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20' >
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At Obsidian, every gemstone is chosen for authenticity and crafted with care to ensure lasting beauty.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>We make shopping simple with clear details, secure checkout, fast delivery, and easy returns.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Your satisfaction comes first. Our team provides friendly, reliable support to make your experience effortless.</p>
          </div>
        </div>

        <NewsLetterBox />
      </div>
    </div>
  )
}

export default About
