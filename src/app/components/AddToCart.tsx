'use client';
import { useState } from 'react';
import type { Session } from '@supabase/auth-helpers-nextjs'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

function AddToCart({ book, session }) {
    const [quantity, setQuantity] = useState<number>(1);
    const supabase = createClientComponentClient();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }

    const addToCart = async (quantity: number) => {
        if (!session || !session.user) {
            alert('로그인이 필요합니다.');
            return;
        }
        const userId = session.user.id;


        const { data, error } = await supabase.from('cartItems').insert({
            user_id: userId,
            book_id: book.id,
            quantity,
        });

        if (error) {
            alert('장바구니에 담기에 실패했습니다.');
            console.error(error);
            return;
        }

        alert('장바구니에 담겼습니다.');
    }

    return (
        <>
            <label htmlFor="quantity">
                수량{' '}
                <input type="number" onChange={handleChange} value={quantity} id="quantity" name="quantity" min="1" max="100" />
            </label>
            <button onClick={() => addToCart(quantity)}>장바구니 담기</button>
        </>
    )
}

export default AddToCart;