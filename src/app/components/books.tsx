// 'use client';
// import { useState } from "react";
// import { createClient } from "../utils/supabase/server";
// import { formatNumber } from "../../app/utils/format";
// import { getImgSrc } from "../utils/image";
// import Filter from '../ui/filter';

// export default function BooksList() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const supabase = createClient();
//   const { data: books, error } = supabase.from("books").select();

//   if (error) {
//     console.error("Error fetching books:", error);
//     return;
//   }

//   const handleFilterChange = async (category) => {
//     setSelectedCategory(category);
//     const { data: books, error } = await supabase
//       .from("books")
//       .select()
//       .eq('category_id', category);
//     if (error) {
//       console.error("Error fetching books:", error);
//       return;
//     }
//     return books;
//   };

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>

//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {/* <Filter onFilterChange={handleFilterChange} />
//           <Books books={books} /> */}
//         </div>
//       </div>
//     </div>
//   );
// }