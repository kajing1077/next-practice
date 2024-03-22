// import {useEffect, useState} from "react";
// import {Category} from "../models/category.model";
// import { useSearchParams } from 'next/navigation';
// import { createClient } from "../utils/supabase/server";
// import { fetchCategory } from '../api/category/route';

// export const useCategory = async () => {
//     const supabase = createClient();
//     const searchParams = useSearchParams();
//     const [category, setCategory] = useState<Category[]>([]);



//   const setActive = () => {
//     const params = new URLSearchParams(searchParams);
//     if (params.get('category_id')) {
//       setCategory((prev) => {
//         return prev.map((item) => {
//           return {
//             ...item,
//             isActive: item.category_id === Number(params.get('category_id')),
//           };
//         });
//       });
//     } else {
//       setCategory((prev) => {
//         return prev.map((item) => {
//           return {
//             ...item,
//             isActive: false,
//           };
//         });
//       });
//     }
//   }

//   useEffect(() => {
    
//     fetchCategory().then((category) => {
//       if (!category) {
//         return;
//       }

//       const categoryWithAll = [
//         {
//           category_id: null,
//           category_name: '전체',
//         },
//         ...category,
//       ]
//       setCategory(categoryWithAll);
//       setActive();
//     });
//   }, []);

//   useEffect(() => {
//     setActive();
//   }, [searchParams]);


//   return { category };
// };

