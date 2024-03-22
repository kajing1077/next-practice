import OrderContent from '../components/order/order';
import { createClient } from '../utils/supabase/server';
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../lib/database.types';

export default async function Order() {


    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const userId = user.id;

    return (
        <OrderContent userId={userId}/>
    );
}