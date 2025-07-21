import Image from "next/image";

export default function HomePage() {
  return (
    <main className="font-sans text-gray-800">
      {/* Header / Navigation */}
      {/* <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-emerald-600">NutriVibe</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#recipes" className="hover:text-emerald-600">Recipes</a>
          <a href="#results" className="hover:text-emerald-600">Results</a>
          <a href="#plans" className="hover:text-emerald-600">Nutrition Plans</a>
          <a href="#blog" className="hover:text-emerald-600">Blog</a>
          <a href="#contact" className="hover:text-emerald-600">Contact</a>
        </nav>
      </header> */}

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-200 flex items-center justify-center">
        <Image
          src="/images/veg.jpg"
          alt="Fresh Vegetables"
          fill
          className="object-cover z-0"
        />
        <div className="z-10 bg-green-800/50 p-6 rounded-xl text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nourish. Thrive. Repeat.</h1>
          <p className="text-lg">Discover the power of plant-forward nutrition. Healthy eating made vibrant, simple, and impactful.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Nutrition Matters</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Image src="/icons/heart.svg" alt="Heart Health" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Heart Health</h3>
            <p>Vegetarian diets help lower blood pressure and cholesterol.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Image src="/icons/brain.svg" alt="Mental Clarity" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mental Clarity</h3>
            <p>Whole foods rich in nutrients boost brain function and mood.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Image src="/icons/gut.svg" alt="Digestive Health" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gut Health</h3>
            <p>Fiber-rich meals nourish your gut microbiome and digestion.</p>
          </div>
        </div>
      </section>

      {/* Teasers */}
      <section className="bg-emerald-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
            <Image src="/images/foodr.jpg" alt="Recipes" width={600} height={400} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Explore Recipes</h3>
            <p>Find delicious vegetarian recipes for any meal or mood.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
            <Image src="/images/results.jpg" alt="Results" width={600} height={400} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">See Results</h3>
            <p>Discover how real people transformed their lives through food.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
            <Image src="/images/blog.jpg" alt="Blog" width={600} height={400} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Read the Blog</h3>
            <p>Get insights, food tips, and the latest nutrition trends.</p>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">A Journey to Wellness Starts with Food</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At NutriVibe, we believe in food as a foundation for wellness. Whether you're transitioning to a vegetarian lifestyle or simply looking to eat cleaner, we're here with the knowledge, tools, and inspiration to support your journey. No gimmicks, no fads — just nourishing, whole foods.
          </p>
        </div>
      </section>

      <section className="bg-emerald-600 py-20 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Feel Your Best?</h2>
        <p className="text-lg mb-6">Explore plant-based plans, easy recipes, and expert tips tailored just for you.</p>
        <a href="#plans" className="inline-block px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition">Explore Plans</a>
      </section>
    </main>
  );
}