"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Category = ({ categories, categoryName  }) => {
  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    params.get("category_id") || "All"
  );

  // console.log("Initial selected category:", selectedCategory);
  // console.log("category_id parameter:", params.get("category_id"));
  

  return (
    <section>
      <div className="flex items-start justify-content mb-4">
      <Link href='/products' key='All' onClick={() => setSelectedCategory('All')} className={`font-bold py-2 px-4 rounded ml-2 ${selectedCategory === "All" ? "bg-gray-700 text-white" : "bg-gray-500 hover:bg-gray-700 text-white"}`}>All</Link>
        {categories.map((category, index) => {
          
          const isSelected = category === selectedCategory;
          // console.log("isSelected for category", category, isSelected);
          return (
              <Link
                href={`?category_id=${category}`}
                key={category}
                onClick={() => {
                  setSelectedCategory(category)}
                }
                className={`font-bold py-2 px-4 rounded ml-2 ${
                  isSelected
                    ? "bg-gray-700 text-white"
                    : "bg-gray-500 hover:bg-gray-700 text-white"
                }`}
              >
                {categoryName[index]}
              </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
