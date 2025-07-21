"use client";

import Image from "next/image";
import { useState } from "react";

const plans = [
  {
    id: "balanced",
    name: "Balanced Plan",
    image: "/images/breakfast.jpg",
    description: "A well-rounded mix of carbs, protein, and healthy fats.",
    highlights: [
      "Great for general health",
      "Easy to follow",
      "Supports all food groups",
    ],
    menu: {
      Breakfast: "Oatmeal with banana and almond butter",
      Lunch: "Grilled chicken with quinoa and roasted vegetables",
      Snack: "Greek yogurt with berries",
      Dinner: "Salmon with brown rice and steamed broccoli",
    },
    pdf: "/plans/balanced.pdf",
  },
  {
    id: "vegetarian",
    name: "Vegetarian Plan",
    image: "/images/fruit.jpg",
    description: "A plant-focused diet packed with fiber and antioxidants.",
    highlights: [
      "Meat-free meals",
      "High in plant protein",
      "Supports heart health",
    ],
    menu: {
      Breakfast: "Avocado toast with hemp seeds",
      Lunch: "Chickpea salad with tahini dressing",
      Snack: "Carrot sticks with hummus",
      Dinner: "Lentil curry with brown rice",
    },
    pdf: "/plans/vegetarian.pdf",
  },
  {
    id: "performance",
    name: "Performance Plan",
    image: "/images/workout.jpg",
    description: "Fuel your workouts and recovery with high-protein meals.",
    highlights: ["Muscle support", "Optimal macros", "Targeted energy"],
    menu: {
      Breakfast: "Protein smoothie with spinach and peanut butter",
      Lunch: "Turkey wrap with whole grain tortilla",
      Snack: "Protein bar",
      Dinner: "Grilled steak with sweet potatoes and green beans",
    },
    pdf: "/plans/performance.pdf",
  },
  {
    id: "low-carb",
    name: "Low-Carb Plan",
    image: "/images/carb.jpg",
    description: "Lower your carb intake while focusing on fats and proteins.",
    highlights: [
      "Supports weight loss",
      "Reduces sugar spikes",
      "Rich in healthy fats",
    ],
    menu: {
      Breakfast: "Scrambled eggs with spinach and feta",
      Lunch: "Zucchini noodles with pesto and grilled chicken",
      Snack: "Mixed nuts",
      Dinner: "Baked salmon with cauliflower mash",
    },
    pdf: "/plans/lowcarb.pdf",
  },
  {
    id: "gluten-free",
    name: "Gluten-Free Plan",
    image: "/images/low.jpg",
    description:
      "Designed for individuals avoiding gluten while staying balanced.",
    highlights: [
      "Celiac-safe",
      "Naturally gluten-free foods",
      "Diverse and tasty",
    ],
    menu: {
      Breakfast: "Gluten-free pancakes with maple syrup",
      Lunch: "Quinoa salad with veggies and grilled tofu",
      Snack: "Rice cakes with almond butter",
      Dinner: "Stuffed bell peppers with ground turkey",
    },
    pdf: "/plans/glutenfree.pdf",
  },
];

export default function NutritionPlanPage() {
  const [filter, setFilter] = useState("all");

  const filteredPlans =
    filter === "all" ? plans : plans.filter((plan) => plan.id === filter);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[70vh] bg-gray-200 flex items-center justify-center px-4">
        <Image
          src="/images/nutrition.jpg"
          alt="Healthy Vegetarian Food"
          fill
          className="object-cover z-0"
        />
        <div className="z-10 bg-green-800/50 p-6 rounded-xl text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wholesome Recipes
          </h1>
          <p className="text-lg">
            Delicious plant-based meals that nourish and satisfy.
          </p>
        </div>
      </section>

      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Nutrition Plans</h1>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {[
            { label: "All", value: "all" },
            { label: "Balanced", value: "balanced" },
            { label: "Vegetarian", value: "vegetarian" },
            { label: "Performance", value: "performance" },
            { label: "Low Carb", value: "low-carb" },
            { label: "Gluten Free", value: "gluten-free" },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                filter === btn.value
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "text-emerald-700 border-emerald-300 hover:border-emerald-600"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
            >
              <Image
                src={plan.image}
                alt={plan.name}
                width={600}
                height={400}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
              <p className="mb-3 text-sm text-gray-600">{plan.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
                {plan.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mb-3 text-sm">
                <p>
                  <strong>Sample Menu:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  {Object.entries(plan.menu).map(([meal, desc]) => (
                    <li key={meal}>
                      <strong>{meal}:</strong> {desc}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={plan.pdf}
                download
                className="inline-block mt-3 px-4 py-2 bg-emerald-600 text-white rounded-md text-sm hover:bg-emerald-700 transition"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
