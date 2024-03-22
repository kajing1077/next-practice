import { createClient } from "../../utils/supabase/server";
import { getImgSrc } from "../../utils/image";
import BookDetail from "../../components/BookDetail";

export default async function Books({ params }) {
  const supabase = createClient();
  const id = params.id;

  const { data: book, error } = await supabase
    .from("books")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching book:", error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <BookDetail book={book} params={params} />
    </>
  );
}
