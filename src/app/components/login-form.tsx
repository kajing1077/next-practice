'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import type { Session } from '@supabase/auth-helpers-nextjs'

export default function LoginForm({ session }: { session: Session | null }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:3000/',
      }
    })
  }


  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      window.alert('Failed to sign in');
      setEmail('');
      setPassword('');
      return;
    }

    window.alert('Signed in!')
    router.push('/');
    router.refresh();
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.alert('Signed out!');
    router.refresh();
  }


  return session ? (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>Sign out</button>
  ) : (
    <div className="flex items-start justify-center mt-72" style={{ height: '50vh' }}>
      <div className="flex flex-col space-y-3 w-full max-w-md">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignUp}>Sign up</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignIn}>Sign in</button>
      </div>
    </div>
  )
}
