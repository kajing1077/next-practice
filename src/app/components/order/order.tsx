// 'use client';
// import { useState } from 'react';
// import { useOrder } from '../../context/OrderContext';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// export default function OrderContent({ userId }) {
//     const [address, setAddress] = useState('');
//     const [receiver, setReceiver] = useState('');
//     const [contact, setContact] = useState('');
//     const [addressDetail, setAddressDetail] = useState('');
//     const [deliveryId, setDeliveryId] = useState(null);
//     const { order, setOrder } = useOrder();
//     const supabase = createClientComponentClient();

//     console.log(order,"order")

//     const handleSubmit = async (event) => {
//         event.preventDefault();


//         const fullAddress = `${address} ${addressDetail}`;


//         const { data, error } = await supabase
//             .from('delivery')
//             .upsert(
//                 { address: fullAddress, receiver, contact },
//             ).select();

//             console.log(data,"data")

//         if (error ) {
//             console.error('Failed to insert delivery', error);
//             return;
//         }

//         setDeliveryId(data.id);

//         const { error: orderError } = await supabase
//             .from('orders')
//             .insert(
//                 {
//                     book_title: order.firstBookTitle,
//                     total_quantity: order.totalQuantity,
//                     total_price: order.totalPrice,
//                     user_id: userId,
//                     delivery_id: deliveryId,
//                     created_at: new Date(),
//                 },
//             );

//         if (orderError) {
//             console.error('Failed to insert order', orderError);
//             return;
//         }

//         console.log('Successfully inserted delivery and order');

//     };
//     return (
//         <>
//             <h1>
//                 주문서 작성
//             </h1>

//             <div>
//                 <div className="content">
//                     <div className="order-info">
//                         <div>
//                             배송 정보
//                         </div>
//                         <form className="delivery" onSubmit={handleSubmit}>
//                             <fieldset>
//                                 <label>주소</label>
//                                 <div className="input">
//                                     <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//                                 </div>
//                                 주소찾기
//                                 {/* <FindAddressButton onCompleted={(address) => {
//               setValue("address", address);
//             }}/> */}
//                             </fieldset>
//                             {/* {errors.address && <p className="error-text">주소를 입력해주세요.</p>} */}

//                             <fieldset>
//                                 <label>상세 주소</label>
//                                 <div className="input">
//                                     <input type="text" value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)} />
//                                 </div>
//                             </fieldset>
//                             {/* {errors.addressDetail && <p className="error-text">상세 주소를 입력해주세요.</p>} */}

//                             <fieldset>
//                                 <label>수령인</label>
//                                 <div className="input">
//                                     <input type="text" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
//                                 </div>
//                             </fieldset>
//                             {/* {errors.receiver && <p className="error-text">수령인을 입력해주세요.</p>} */}

//                             <fieldset>
//                                 <label>전화번호</label>
//                                 <div className="input">
//                                     <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
//                                 </div>

//                                 <button type="submit">결제하기</button>
//                             </fieldset>
//                             {/* {errors.contact && <p className="error-text">전화번호를 입력해주세요.</p>} */}
//                         </form>
//                     </div>
//                     <div className="order-info">
//                         <p>
//                             주문 정보
//                         </p>
//                         <strong>
//                             {/* {order.totalPrice} 등 총 {order.totalQuantity} 권 */}
//                         </strong>
//                     </div>
//                 </div>

//                 <div className="summary">
//                     {order.firstBookTitle} 등 총 {order.totalQuantity} 권 {order.totalPrice}원
//                     <button type="submit">
//                         결제하기
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }