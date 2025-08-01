import React from 'react'
import { AboutCard } from '../components/AboutCard'
import { HeaderSection } from './HeaderSection'
import { motion } from 'framer-motion'
import { zoomIn, fadeInLeft, fadeInRight, fadeInDown, fadeInUp } from '../utils/Animations'
export const AboutUs = () => {

    const products = [
        {
          img: '/images/Group 1.png',
          title: 'Large Assortment',
          price: 'we offer many different types of products with fewer variations in each category.',
        },
        {
          img: '/images/Group 1 (2).png',
          title: 'Fast & Free Shipping',
          price: '4-day or less delivery time, free shipping and an expedited delivery option.',
        },
        {
          img: '/images/Group 1 (1).png',
          title: '24/7 Support',
          price: 'answers to any business related inquiry 24/7 and in real-time.',
        },
      ]


  return (
    <motion.div 
    variants={zoomIn}
    initial="hidden"
    whileInView="show"
    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6'>
       <HeaderSection header="AboutUs" subHeader="Order now and appreciate the beauty of nature" />
        {/* card */}
       
        {products.map((product, index) => {
        const animationVariant =
          index === 0
            ? fadeInLeft
            : index === 1
            ? fadeInUp
            : index === 2
            ? fadeInRight
            : fadeInDown;

        return (
          <motion.div
            key={index}
            variants={animationVariant}
            initial="hidden"
            whileInView="show"
          >
            <AboutCard
              img={product.img}
              title={product.title}
              price={product.price}
            />
          </motion.div>
        );
      })}
          
      
    </motion.div>
  )
}
