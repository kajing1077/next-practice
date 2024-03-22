
import { getImgSrc } from '../utils/image';
import { formatDate } from '../utils/format';
import Link from 'next/link';
import AddToCart from './AddToCart';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '../lib/database.types';



export default async function BookDetail({ book, params }) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <>
      <header className="flex items-start gap-6 pb-6">
        <div className="">
          <img src={getImgSrc(book.img)} alt={book.title} className="object-cover object-center group-hover:opacity-75 rounded-lg" />
        </div>
        <div className="flex-col">
          <div>
            {book.title}
          </div>

          <p>{book.summary}</p>
          <div>like button</div>
          <div>
            <AddToCart book={book} session={session}/>
          </div>
        </div>
      </header>
      <div className="content">
        <div>book detail</div>
        <div>목차</div>
        <div>리뷰</div>
      </div>
    </>
  )
}

