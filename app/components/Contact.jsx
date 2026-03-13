'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'
const Contact = () => {
  const [result, setResult] = React.useState("");
  const apiKey = 'cfdba917-e4b2-488c-9622-cc0d9a4072e3'
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
  <motion.div
    id='contact'
    className='w-full px-6 md:px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
               bg-no-repeat bg-center bg-[length:90%_auto]'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.h4
      className='text-center mb-2 text-lg font-Ovo'
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      Connect With Me
    </motion.h4>

    <motion.h2
      className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo'
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Get in touch
    </motion.h2>

    <motion.p
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo px-2'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      I would love to hear from you! If you have any questions, comments, or
      feedback, please use the form below.
    </motion.p>

    <motion.form
      onSubmit={onSubmit}
      className='max-w-2xl mx-auto w-full'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <div className='flex flex-col sm:flex-row gap-4 mt-10 mb-2'>
        <motion.input
          type='text'
          name='name'
          required
          placeholder='Enter your name'
          className='w-full p-3 outline-none border border-gray-400 rounded-md bg-white'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        />

        <motion.input
          type='email'
          name='email'
          required
          placeholder='Enter your e-mail'
          className='w-full p-3 outline-none border border-gray-400 rounded-md bg-white'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        />
      </div>

      <motion.textarea
        rows='6'
        name='message'
        required
        placeholder='Enter your message'
        className='w-full p-4 outline-none border border-gray-400 rounded-md bg-white mt-2'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      />

      <motion.button
        type='submit'
        className='py-3 px-8 w-max flex items-center justify-between gap-2 
                   bg-black/80 text-white rounded-full mx-auto 
                   hover:bg-black duration-500 mt-4'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Submit now
        <Image src={assets.right_arrow_white} alt='' className='w-4' />
      </motion.button>
    </motion.form>

    <p className='mt-4 text-center'>{result}</p>
  </motion.div>
)
}

export default Contact