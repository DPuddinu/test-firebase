import { Button } from '@/components/ui/button';
import { UserContext } from '@/components/ui/userProvider';
import { auth } from '@/firebase';
import { useLogoutUser } from '@/hooks/useLoginUser';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  const [ user, setUser ] = useState<User |null>(null)
  
  const { mutate } = useLogoutUser();

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
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
      <section className="p-2 grow flex flex-col">
        <UserContext.Provider value={user}>
          <Outlet />
        </UserContext.Provider>
      </section>
    </main>
  );
}

export default Root;
