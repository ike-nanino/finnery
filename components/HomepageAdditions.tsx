'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomepageAdditions() {
  return (
    <section className="bg-white py-16 px-4 space-y-24">

      {/* Testimonials Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-emerald-700">What Our Clients Say</h2>
        <p className="text-gray-600 mb-10">Real stories from people who’ve transformed their nutrition with us.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Lena M.',
              role: 'Mother of 2',
              text: 'Finnery helped me change how I think about food. Their vegetarian plans are lifesavers!'
            },
            {
              name: 'Jordan K.',
              role: 'Fitness Enthusiast',
              text: 'The high-protein recipes made a big difference in my training results.'
            },
            {
              name: 'Sophie A.',
              role: 'Teacher',
              text: 'I love how realistic and sustainable their meal plans are. Highly recommended!'
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="border border-emerald-100 p-6 rounded-xl shadow-md text-left bg-gray-50"
            >
              <div className="flex items-center gap-2 mb-3 text-yellow-400">
                {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-emerald-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meet the Nutritionist Section */}
     <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
  <div>
    <Image
      src="/images/sh.jpg"
      alt="Fresh produce being misted in a wellness kitchen"
      width={500}
      height={500}
      className="rounded-2xl shadow-lg object-cover w-full h-auto"
    />
  </div>
  <div>
    <h2 className="text-3xl font-bold text-emerald-700 mb-4">Our Philosophy on Wellness</h2>
    <p className="text-gray-700 mb-4">
      At Finnery Nutritional Centre, we believe nutrition is more than a science, it’s a lifestyle. Our approach blends
      clean, plant-forward eating with sustainable habits and personalized guidance, making wellness both accessible
      and enjoyable.
    </p>
    <p className="text-gray-700 mb-4">
      The image above reflects our values: freshness, intentional choices, and connection to nature. Every plan we
      create stems from a deep understanding of food as fuel and medicine.
    </p>
    <p className="text-gray-600">
      Whether you're on a journey to lose weight, improve energy, or simply eat better, we’re here to support you with
      practical tools and empathy-driven care.
    </p>
  </div>
</div>


      {/* How It Works Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-10">Getting started with your nutrition journey is simple and stress-free.</p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: '🥗', title: 'Choose Your Plan', desc: 'Pick from vegetarian, balanced, or performance-focused plans.' },
            { icon: '🧑‍🍳', title: 'Follow Recipes', desc: 'Enjoy easy, delicious, and healthy meals every day.' },
            { icon: '📈', title: 'Track Progress', desc: 'Use our tools to measure your success and stay motivated.' },
            { icon: '💬', title: 'Stay Connected', desc: 'Reach out anytime — we’re here to support you.' },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-left"
            >
              <div className="text-4xl mb-2">{step.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
