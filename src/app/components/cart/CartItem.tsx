// // 'use client';
// // import CheckIconButton from './CheckIconButton';
// // import { formatNumber } from '../../utils/format';
// // import { useState } from 'react';

// // export default function CartItem({ id, bookId, quantity, book }) {
// //     const [checkedItems, setCheckedItems] = useState([]);


// //     const handleCheckItem = (id) => {
// //         if (checkedItems.includes(id)) {
// //             // 언체크
// //             setCheckedItems(checkedItems.filter((item) => item !== id));
// //         } else {
// //             // 체크
// //             setCheckedItems([...checkedItems, id]);
// //         }
// //     };


// //     return (
// //         <div className="flex justify-between items-start border-solid border-2 border-slate-950 p-3 mb-2">

// //             <div className="flex items-start flex-1">
// //                 <CheckIconButton IsChecked={checkedItems.includes(id)} onCheck={() => handleCheckItem(id)} checkedItems={checkedItems}/>
// //                 <div className="flex-col flex-1 gap-2 w-full">
// //                     <div className="flex-grow">
// //                         <h2>{book.title}</h2>
// //                         <p>{book.summary}</p>
// //                         <p>{formatNumber(book.price)} 원</p>
// //                         <p>{quantity}권</p>
// //                     </div>
// //                 </div>
// //             </div>

// //             <button className="flex justify-self-end">
// //                 장바구니 삭제
// //             </button>
// //         </div>
// //     )

// // }

// import CheckIconButton from './CheckIconButton';
// import { formatNumber } from '../../utils/format';

// export default function CartItem({ id, bookId, quantity, book, onCheckItem, isChecked, onDeleteItem }) {
//     return (
//         <div className="flex justify-between items-start border-solid border-2 border-slate-950 p-3 mb-2">
//             <div className="flex items-start flex-1">
//                 <CheckIconButton IsChecked={isChecked} onCheck={() => onCheckItem(id)} />
//                 <div className="flex-col flex-1 gap-2 w-full">
//                     <div className="flex-grow">
//                         <h2>{book.title}</h2>
//                         <p>{book.summary}</p>
//                         <p>{formatNumber(book.price)} 원</p>
//                         <p>{quantity}권</p>
//                     </div>
//                 </div>
//                 <button onClick={() => onDeleteItem(id)}>삭제하기</button>
//             </div>
//         </div>
//     );
// }