import React from 'react'
const intro = {
  title: 'Welcome to bongoDev Community!',
  text: ' At BongoDev, our students are more than learners—they are contributors driving our vision of empowering the Bangladeshi tech community globally. This page celebrates their efforts, showcasing their contributions as they learn, grow, and collaborate on real-world projects.'
}
export  function Introduction() {
  return (
    <div className='bg-gradient-to-r from-[#4A78C7] via-[#3E62AF] to-[#2C4B8E] text-white text-center p-6'>
      <h2 className='text-3xl font-[800]'>{intro.title}</h2>
      <p class="text-lg font-[400] py-6 px-4">
            {intro.text}
        </p>
    </div>
  )
}
