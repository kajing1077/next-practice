
// import {useCategory} from "./hooks/useCategory";
// import { useSearchParams } from 'next/navigation';

// function BooksFilter() {

//   const {category} = useCategory();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleCategory = (id: number | null) => {
//     const newSearchParams = new URLSearchParams(searchParams); // 객체 인스턴스


//     if (id === null) {
//       newSearchParams.delete('category_id');
//     } else {
//       newSearchParams.set('category_id', id.toString());
//     }
//     setSearchParams(newSearchParams);
//   }
//   // const handleNews = () => {
//   //   const newSearchParams = new URLSearchParams(searchParams)

//   //   if (newSearchParams.get(QUERYSTRING.NEWS)) {
//   //     newSearchParams.delete(QUERYSTRING.NEWS);
//   //   } else {
//   //     newSearchParams.set(QUERYSTRING.NEWS, 'true');
//   //   }

//   //   setSearchParams(newSearchParams);
//   // }


//   return (
//     <>
//         <div className="category">
//           {category.map((item) => (
//               <button
//                       key={item.category_id} onClick={() => handleCategory(item.category_id)}>
//                 {item.category_name}
//               </button>
//           ))}
//         </div>
//         {/* <div className="new">
//           <button
//               onClick={() => handleNews()}>
//             신간
//           </button>
//         </div> */}
//         </>
//   );
// }

// // const BooksFilterStyle = styled.div`
// //   display: flex;
// //   gap: 24px;

// //   .category {
// //     display: flex;
// //     gap: 8px;
// //   }

// // `;

// export default BooksFilter;