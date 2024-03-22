'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function Account() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const supabase = createClientComponentClient();
  const router = useRouter();


  const handlePasswordChange = async () => {
    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      window.alert('Failed to update password');
      console.error('Failed to update password', error);
    } else {
      window.alert('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');

      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) {
        console.error('Failed to sign out', signOutError);
      } else {
        router.push('/');
        router.refresh();
      }
    }
  };

  return (
    <>
      <div>
        <div className="flex items-start justify-center mt-72" style={{ height: '50vh' }}>
          <div className="flex flex-col space-y-3 w-full max-w-md items-center font-semibold">
            <p className="mb-4 text-2xl text-slate-700">Change password</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePasswordChange}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}