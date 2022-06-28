import React from 'react'

export default function Intro () {
  return (
    <section className='flex-col md:flex-row flex items-end md:justify-between mt-16 mb-16 md:mb-12'>
      <h1
        style={{ color: '#243755' }}
        className='text-7xl pl-10 md:text-7xl font-bold tracking-tighter leading-tight md:pr-8'
      >
        Expurtle
      </h1>
      <p style={{ color: '#243755' }} className='text-2xl pb-3'>
        The Leading Digital Marketplace for Investment Experts
      </p>
    </section>
  )
}
