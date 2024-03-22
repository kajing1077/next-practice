import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from './lib/database.types';
import { OrderProvider } from './context/OrderContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My book shop",
  description: "welcome to my book shop",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body>
        <OrderProvider>
          <Header session={session} />
          <main>{children}</main>
        </OrderProvider>
      </body>

    </html>
  );
}
