import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempore voluptates velit corrupti vero quisquam aut quas. Alias beatae ratione aliquam, rerum quos quaerat accusantium necessitatibus debitis iusto libero eius?</p>
        <br/>
        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, corrupti? Totam, eveniet fuga repellat recusandae quo vero ad natus dolor mollitia repellendus perspiciatis reiciendis labore veniam nesciunt iusto, illo adipisci?</p>
      </div>

    </div>
  )
}

export default About