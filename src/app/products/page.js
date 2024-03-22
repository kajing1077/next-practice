import { createClient } from "../utils/supabase/server";
import { formatNumber } from "../../app/utils/format";
import { getImgSrc } from "../utils/image";
import Category from "../ui/filter";

export default async function BooksList({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const supabase = createClient();
  const { data: books, error } = await supabase.from("books").select();

  

  const categories = await supabase.from("category").select();

  const categoryName = categories.data.map(
    (category) => category.category_name
  );
  const categoryArr = categories.data.map((category) => category.category_id);

  if (error) {
    console.error("Error fetching books:", error);
    return;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <Category categories={categoryArr} categoryName={categoryName} />
        
        {/* <h2 className="sr-only">Products</h2> */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {books.map((book) => {
            const categoryId = params.get("category_id");
            return (
              (!categoryId || book.category_id === categoryId) && (
                <a
                  key={book.id}
                  href={`/products/${book.id}`}
                  className="group"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={getImgSrc(book.img)}
                      alt={book.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-lg text-gray-700">{book.title}</h3>
                  <p className="mt-1 text-base font-medium text-gray-900">
                    {`${formatNumber(book.price)} 원`}
                  </p>
                </a>
              )
            );
          })}
          {/* {books.map((book) => (
            book.category_id === params.get("category_id") && (
            <a key={book.id} href={`/products/${book.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={getImgSrc(book.img)}
                  alt={book.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg text-gray-700">{book.title}</h3>
              <p className="mt-1 text-base font-medium text-gray-900">
                {`${formatNumber(book.price)} 원`}
              </p>
            </a>
            )
          ))} */}
        </div>
      </div>
    </div>
  );
}
