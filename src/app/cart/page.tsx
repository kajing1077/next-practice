// import { createClient } from "../utils/supabase/server";
// import CartItem from "../components/cart/CartItem";
// import CartSummary from '../components/cart/CartSummary';


// export default async function Cart() {
//     const supabase = createClient();
//     const { data: carts, error } = await supabase.from("cartItems").select();

//     if (error) {
//         console.error('Failed to fetch cart items', error);
//         return;
//     }

//     const bookIds = carts.map(cart => cart.book_id);

//     const { data: books, error: booksError } = await supabase
//         .from("books")
//         .select("*")
//         .in("id", bookIds);

//     if (booksError) {
//         console.error('Failed to fetch books', booksError);
//         return;
//     }

//     const cartsWithBooks = carts.map(cart => ({
//         ...cart,
//         book: books.find(book => book.id === cart.book_id),
//     }));


//     const totalPrice = cartsWithBooks.reduce((acc, cart) => { // useMemo??
//         return acc + cart.book.price * cart.quantity;
//     }, 0);

//     const totalQuantity = cartsWithBooks.reduce((acc, cart) => {
//         return acc + cart.quantity;
//     }, 0);


//     return (
//         <div className="flex w-[1020px] py-5 px-0 my-0 mx-auto">
//             <h1 className="mb-4">장바구니</h1>

//             <div className="flex gap-2 flex-1 justify-center pt-4">
//                 <div className="flex-col gap-2">

//                     {cartsWithBooks.map((cart, index) => (
//                         <CartItem key={index + 1} id={cart.id} bookId={cart.book_id} quantity={cart.quantity} book={cart.book}
//                         />
//                     ))}

//                 </div>

//                 <div className="flex-col gap-6">
//                     <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
//                     <div className="flex justify-end">
//                         <button>주문하기</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );

// }


import { createClient } from "../utils/supabase/server";
import CartContent from '../components/cart/CartContent';


export default async function Cart() {
    const supabase = createClient();

    async function fetchCartsWithBooks() {
        const { data: carts, error } = await supabase.from("cartItems").select();

        if (error) {
            console.error('Failed to fetch cart items', error);
            return;
        }

        const bookIds = carts.map(cart => cart.book_id);

        const { data: books, error: booksError } = await supabase
            .from("books")
            .select("*")
            .in("id", bookIds);

        if (booksError) {
            console.error('Failed to fetch books', booksError);
            return;
        }

        return { carts, books };
    }

    const { carts, books } = await fetchCartsWithBooks();

    



    const cartsWithBooks = carts.map(cart => ({
        ...cart,
        book: books.find(book => book.id === cart.book_id),
    }));



    return (
        <CartContent cartsWithBooks={cartsWithBooks} />
    );
}