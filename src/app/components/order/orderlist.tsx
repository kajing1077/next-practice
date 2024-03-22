// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { formatNumber, formatDate } from '../../utils/format';
// import React from 'react';

// export default function OrderListTable({ orders }) {

//     return (
//         <>
//             <h1>주문 목록</h1>
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>주문일자</th>
//                             <th>주소</th>
//                             <th>수령인</th>
//                             <th>전화번호</th>
//                             <th>대표상품명</th>
//                             <th>수량</th>
//                             <th>금액</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order) => (
//                             <React.Fragment key={order.id}>
//                                 <tr>
//                                     <td>{order.id}</td>
//                                     <td>{formatDate(order.created_at, "YYYY.MM.DD")}</td>
//                                     <td>{order.address}</td>
//                                     <td>{order.receiver}</td>
//                                     <td>{order.contact}</td>
//                                     <td>{order.book_title}</td>
//                                     <td>{order.total_quantity} 권</td>
//                                     <td>{formatNumber(order.total_price)} 원</td>
//                                     <td>
//                                         <button>
//                                             자세히
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 {/* {selectedItemId === order.id && (
//                                     <tr>
//                                         <td></td>
//                                         <td colSpan={8}>
//                                             <ul className="detail">
//                                                 {order?.detail && order.detail.map((item) => (
//                                                     <li key={item.bookId}>
//                                                         <div>
//                                                             <span>{item.bookId}</span>
//                                                             <span>{item.title}</span>
//                                                             <span>{item.author}</span>
//                                                             <span>{formatNumber(item.price)} 원</span>
//                                                         </div>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </td>
//                                     </tr>
//                                 )} */}
//                             </React.Fragment>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// }