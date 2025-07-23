"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <section className="relative h-[60vh] lg:h-[80vh] bg-gray-200 flex items-center justify-center px-4">
        <Image
          src="/images/about.jpg"
          alt="Fresh Vegetables"
          fill
          className="object-cover z-0"
        />
        <div className="z-10 bg-green-800/50 p-6 rounded-xl text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Get to know us</p>
        </div>
      </section>

      <div className="px-6 md:px-20 py-10 space-y-20">
        {/* Hero */}
        <section className="relative h-[400px] w-full rounded-2xl overflow-hidden mt-10">
          <Image
            src="/images/about-hero.jpg"
            alt="About Finnery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Empowering Lives Through Nutrition
            </h1>
            <p className="mt-4 text-lg max-w-2xl">
              At Finnery Nutritional Centre, we believe in nurturing health from
              the inside out.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Finnery Nutritional Centre was founded with one goal: to improve
              the lives of our community through accessible, personalized
              nutrition. From humble beginnings in Titusville, our team of
              expert dietitians, nutritionists, and wellness advocates has grown
              into a trusted resource for healthy living.
            </p>
          </div>
          <div className="w-full h-80 relative rounded-xl overflow-hidden">
            <Image
              src="/images/clinic-interior.jpg"
              alt="Our story"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Our Mission & Values */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-emerald-50 rounded-xl">
              <h3 className="font-semibold mb-2">Personalized Plans</h3>
              <p className="text-gray-600 text-sm">
                Tailored to your unique lifestyle and goals.
              </p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl">
              <h3 className="font-semibold mb-2">Science-Backed Guidance</h3>
              <p className="text-gray-600 text-sm">
                Everything we recommend is backed by research.
              </p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl">
              <h3 className="font-semibold mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-sm">
                We’re here to support your journey every step of the way.
              </p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl">
              <h3 className="font-semibold mb-2">Lifelong Wellness</h3>
              <p className="text-gray-600 text-sm">
                We focus on sustainable habits, not quick fixes.
              </p>
            </div>
          </div>
        </section>

        {/* New Section: Our Approach */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full h-80 relative rounded-xl overflow-hidden">
            <Image
              src="/images/our-approach.jpg"
              alt="Our approach"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Our Holistic Approach
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We combine cutting-edge nutritional science with emotional support
              and lifestyle counseling. Our team works collaboratively with you
              to address your needs from every angle—nutrition, mental
              wellbeing, activity, and beyond.
            </p>
          </div>
        </section>

        {/* New Section: Why Choose Finnery? */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Choose Finnery?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h4 className="text-xl font-medium mb-2">
                Experienced Professionals
              </h4>
              <p className="text-gray-600 text-sm">
                Our team includes registered dietitians, certified coaches, and
                specialists with decades of experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h4 className="text-xl font-medium mb-2">
                Evidence-Based Programs
              </h4>
              <p className="text-gray-600 text-sm">
                Our programs are built on proven science, not trends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h4 className="text-xl font-medium mb-2">Client-Centered Care</h4>
              <p className="text-gray-600 text-sm">
                We listen to your goals and partner with you to reach them
                sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <Phone className="text-emerald-600" />
              <span>321-466-5535</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-emerald-600" />
              <span>shirleytortsen@outlook.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-emerald-600" />
              <span>5 Main St, Titusville, FL 32796</span>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="relative h-[250px] rounded-xl overflow-hidden mt-16">
          <Image
            src="/images/quote-bg.jpg"
            alt="Inspiration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
            <blockquote className="text-white text-xl md:text-2xl font-medium text-center max-w-3xl">
              “Let food be thy medicine and medicine be thy food.” – Hippocrates
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  );
}
