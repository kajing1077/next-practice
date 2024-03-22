// import CartItem from './CartItem';
// import CartSummary from './CartSummary';

// export default function CartView({ cartsWithBooks, handleCheckItem, handleDeleteCheckedItems, checkedItems, totalQuantity, totalPrice, handleOrder }) {
   

//     return (
//         <div>
//             {cartsWithBooks.map((cart) => (
//                 <CartItem
//                     key={cart.id}
//                     id={cart.id}
//                     bookId={cart.book_id}
//                     quantity={cart.quantity}
//                     book={cart.book}
//                     onCheckItem={handleCheckItem}
//                     isChecked={checkedItems.includes(cart.id)}
//                     onDeleteItem={() => handleDeleteCheckedItems(cart.id)}
//                 />
//             ))}
//             <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice}>
//                 <button onClick={handleOrder}>
//                     주문하기
//                 </button>
//             </CartSummary>
//         </div>
//     );
// }