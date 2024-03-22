import { NextResponse } from "next/server";
import db from "../../../db";

export async function GET({ params }) {
  try {
    const id = params.id;
    const results = await new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM books WHERE book_id = ?",
        [id],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
