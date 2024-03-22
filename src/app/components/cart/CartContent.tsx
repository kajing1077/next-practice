// 'use client';

// import { useEffect, useState } from 'react';
// import CartItem from './CartItem';
// import CartSummary from './CartSummary';
// import { useRouter } from 'next/navigation'
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { OrderContext } from '@/app/context/OrderContext';
// import CartView from './CartView';
// import { OrderProvider, useOrder } from '@/app/context/OrderContext';

// interface OrderContextType {
//     order: any; // replace 'any' with the actual type of your order
//     setOrder: (order: any) => void; // replace 'any' with the actual type of your order
//     handleOrder: () => void; // add this line
// }

// function CartContent({ cartsWithBooks }) {
//     const [checkedItems, setCheckedItems] = useState([]);
//     const [orderData, setOrderData] = useState(null);
//     const supabase = createClientComponentClient();
//     const router = useRouter();
    

//     const checkedCarts = cartsWithBooks.filter(cart => checkedItems.includes(cart.id));

//     const totalQuantity = checkedCarts.reduce((acc, cart) => acc + cart.quantity, 0);
//     const totalPrice = checkedCarts.reduce((acc, cart) => acc + cart.book.price * cart.quantity, 0);

//     const handleCheckItem = (id) => {
//         if (checkedItems.includes(id)) {
//             setCheckedItems(checkedItems.filter((item) => item !== id));
//         } else {
//             setCheckedItems([...checkedItems, id]);
//         }
//     };

//     async function handleDeleteCheckedItems(id) {
//         const { error } = await supabase
//             .from('cartItems')
//             .delete()
//             .eq('id', id);

//         if (error) {
//             console.error('Failed to delete item', error);
//             return;
//         }
        
//         router.refresh();
//     }


//     // const handleOrder= () => {
//     //     if (checkedItems.length === 0) {
//     //         window.alert("주문할 상품을 선택해 주세요.");
//     //         return;
//     //     }

//     //     const newOrderData = {
//     //         items: checkedItems,
//     //         totalPrice,
//     //         totalQuantity,
//     //         firstBookTitle: cartsWithBooks[0]?.book.title,
//     //     };

//     //     setOrder(newOrderData); 
//     //     router.push('/order');
//     // }

//     return (
//             <CartContentInner 
//                 cartsWithBooks={cartsWithBooks} 
//                 handleCheckItem={handleCheckItem} 
//                 handleDeleteCheckedItems={handleDeleteCheckedItems} 
//                 checkedItems={checkedItems} 
//                 totalQuantity={totalQuantity} 
//                 totalPrice={totalPrice}
//             />
//     );
// }

// function CartContentInner({ cartsWithBooks, handleCheckItem, handleDeleteCheckedItems, checkedItems, totalQuantity, totalPrice }) {
//     const { setOrder } = useOrder();
//     const router = useRouter();


//     const handleOrder = () => {
//         if (checkedItems.length === 0) {
//             window.alert("주문할 상품을 선택해 주세요.");
//             return;
//         }

//         const newOrderData = {
//             items: checkedItems,
//             totalPrice,
//             totalQuantity,
//             firstBookTitle: cartsWithBooks[0]?.book.title,
//         };

//         setOrder(newOrderData);
//         console.log('newOrderData', newOrderData);
//         router.push('/order');
//     };


//     return (
//         <CartView 
//             cartsWithBooks={cartsWithBooks} 
//             handleCheckItem={handleCheckItem} 
//             handleDeleteCheckedItems={handleDeleteCheckedItems} 
//             handleOrder={handleOrder} // Pass handleOrder to CartView
//             checkedItems={checkedItems} 
//             totalQuantity={totalQuantity} 
//             totalPrice={totalPrice}
//         />
//     );
// }

// export default CartContent;