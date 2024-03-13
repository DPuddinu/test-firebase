import { Button } from '@/components/ui/button';
import { UserContext } from '@/components/ui/userProvider';
import { useLoginUser } from '@/hooks/useLoginUser';
import { useRegisterUser } from '@/hooks/useRegisterUser';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const user = useContext(UserContext);
  const { mutate: register, isPending: isRegistering } = useRegisterUser();
  const { mutate: login, isPending: isLogging } = useLoginUser();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user]);

  return (
    <div className="bg-slate-800 text-white w-full flex gap-4 justify-center items-center grow">
      <Button
        onClick={() =>
          register({
            email: 'dario.puddinu92@gmail.com',
            password: 'asdfasdf1234!!'
          })
        }
      >
        {isRegistering ? 'isPending' : 'Register'}
      </Button>
      <Button
        onClick={() =>
          login({
            email: 'dario.puddinu92@gmail.com',
            password: 'asdfasdf1234!!'
          })
        }
      >
        {isLogging ? 'isPending' : 'Login'}
      </Button>
    </div>
  );
};

export default LoginPage;
