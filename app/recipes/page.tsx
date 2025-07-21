"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const recipes = [
  {
    id: 1,
    title: "Zucchini Noodles with Pesto",
    category: "Vegetarian",
    cookTime: "20 min",
    difficulty: "Easy",
    image: "/images/zucchini.jpg",
    ingredients: [
      "2 zucchinis (spiralized)",
      "1/2 cup fresh basil pesto",
      "1 tbsp olive oil",
      "Salt & pepper to taste",
    ],
    instructions: [
      "Heat olive oil in a pan over medium heat.",
      "Add zucchini noodles and sauté for 2-3 minutes.",
      "Stir in pesto and cook another 2 minutes.",
      "Season with salt and pepper, then serve.",
    ],
  },
  {
    id: 2,
    title: "Vegan Quinoa Salad",
    category: "Vegan",
    cookTime: "25 min",
    difficulty: "Easy",
    image: "/images/vegan-quinoa-salad.jpg",
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup cherry tomatoes",
      "1/4 cup chopped cucumber",
      "2 tbsp olive oil",
      "Juice of 1 lemon",
    ],
    instructions: [
      "Mix quinoa, tomatoes, and cucumber in a bowl.",
      "Drizzle with olive oil and lemon juice.",
      "Toss well and serve chilled.",
    ],
  },
  {
    id: 3,
    title: "Grilled Chicken Breast",
    category: "High Protein",
    cookTime: "30 min",
    difficulty: "Medium",
    image: "/images/chicken-breast.jpg",
    ingredients: [
      "2 chicken breasts",
      "1 tbsp olive oil",
      "Salt, pepper, paprika",
    ],
    instructions: [
      "Season chicken breasts with spices.",
      "Grill over medium heat for 6-7 min per side.",
      "Let rest before slicing and serving.",
    ],
  },
  {
    id: 4,
    title: "Tofu Scramble Bowl",
    category: "Vegan",
    cookTime: "15 min",
    difficulty: "Easy",
    image: "/images/tofu.jpg",
    ingredients: [
      "1 block tofu",
      "1/2 tsp turmeric",
      "Salt, black pepper",
      "1/4 onion, diced",
    ],
    instructions: [
      "Crumble tofu into pan, sauté with onion.",
      "Add turmeric, salt, and pepper.",
      "Cook for 5-7 minutes and serve.",
    ],
  },
  {
    id: 5,
    title: "Keto Cauliflower Rice Bowl",
    category: "Low Carb",
    cookTime: "20 min",
    difficulty: "Easy",
    image: "/images/cauliflower.jpg",
    ingredients: [
      "1 cup cauliflower rice",
      "1/2 cup chopped vegetables",
      "Soy sauce, olive oil",
    ],
    instructions: [
      "Heat oil, stir-fry veggies and cauliflower rice.",
      "Add soy sauce and cook until tender.",
    ],
  },
  {
    id: 6,
    title: "Almond Flour Pancakes",
    category: "Gluten Free",
    cookTime: "15 min",
    difficulty: "Easy",
    image: "/images/almond-pancake.jpg",
    ingredients: [
      "1 cup almond flour",
      "2 eggs",
      "1/4 cup almond milk",
      "1 tsp vanilla extract",
    ],
    instructions: [
      "Mix ingredients until smooth.",
      "Cook on skillet 2-3 min each side.",
    ],
  },
  {
    id: 7,
    title: "Chia Seed Pudding",
    category: "Gluten Free",
    cookTime: "5 min + chill",
    difficulty: "Easy",
    image: "/images/chia.jpg",
    ingredients: [
      "2 tbsp chia seeds",
      "1 cup almond milk",
      "Honey or maple syrup",
    ],
    instructions: [
      "Mix all in a jar, shake well.",
      "Refrigerate 4+ hours or overnight.",
    ],
  },
  {
    id: 8,
    title: "Stuffed Bell Peppers",
    category: "Low Carb",
    cookTime: "40 min",
    difficulty: "Medium",
    image: "/images/bell.jpg",
    ingredients: [
      "2 bell peppers",
      "1/2 cup ground turkey",
      "Spices, onion, tomato paste",
    ],
    instructions: [
      "Cook turkey with spices and onion.",
      "Stuff into halved peppers and bake.",
    ],
  },
  {
    id: 9,
    title: "Lentil Soup",
    category: "Vegetarian",
    cookTime: "45 min",
    difficulty: "Medium",
    image: "/images/lentil.jpg",
    ingredients: [
      "1 cup lentils",
      "1 carrot, 1 celery stick",
      "Garlic, bay leaf, spices",
    ],
    instructions: [
      "Sauté aromatics, add lentils and water.",
      "Simmer for 35-40 minutes until tender.",
    ],
  },
  {
    id: 10,
    title: "Greek Yogurt Parfait",
    category: "High Protein",
    cookTime: "5 min",
    difficulty: "Easy",
    image: "/images/yogurt.jpg",
    ingredients: ["1 cup Greek yogurt", "Berries, granola, honey"],
    instructions: [
      "Layer yogurt, berries, and granola in a glass.",
      "Drizzle with honey and serve cold.",
    ],
  },
];

export default function RecipesPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const detailRef = useRef(null);

  const filtered =
    filter === "All" ? recipes : recipes.filter((r) => r.category === filter);

  useEffect(() => {
    if (selected && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selected]);

  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[70vh] bg-gray-200 flex items-center justify-center px-4">
        <Image
          src="/images/hero-recipes.jpg"
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

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Delicious Recipes</h1>
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            "All",
            "Vegetarian",
            "Vegan",
            "High Protein",
            "Low Carb",
            "Gluten Free",
          ].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                filter === cat
                  ? "bg-green-600 text-white border-green-600"
                  : "text-green-600 border-green-600 hover:bg-green-100"
              }`}
              onClick={() => {
                setSelected(null);
                setFilter(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((recipe) => (
            <div
              key={recipe.id}
              className="cursor-pointer border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              onClick={() => setSelected(recipe)}
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{recipe.title}</h3>
                <p className="text-sm text-gray-500">
                  {recipe.cookTime} · {recipe.difficulty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div
            ref={detailRef}
            className="mt-12 bg-gray-50 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                <ul className="list-disc ml-6 mb-4">
                  {selected.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <ol className="list-decimal ml-6">
                  {selected.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
