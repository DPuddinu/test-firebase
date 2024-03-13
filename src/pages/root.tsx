import { Button } from '@/components/ui/button';
import { auth } from '@/firebase';
import { useLogoutUser } from '@/hooks/useLoginUser';
import { useUserStore } from '@/store/store';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  const { login, logout, user } = useUserStore();
  const { mutate } = useLogoutUser();

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        login(user);
      } else {
        logout();
      }
    });
    return () => {
      listener();
    };
  }, []);

  return (
    <main className="bg-slate-800 text-white min-h-screen flex flex-col w-full gap-4">
      {user && (
        <nav className="h-16 shadow bg-slate-900/50  px-2 flex justify-end items-center">
          <Button variant={'destructive'} onClick={() => mutate()}>
            Logout
          </Button>
        </nav>
      )}
      <section className='p-2 grow flex flex-col'>
        <Outlet />
      </section>
    </main>
  );
}

export default Root;
