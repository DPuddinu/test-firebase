import { Button } from '@/components/ui/button';
import { useLoginUser } from '@/hooks/useLoginUser';
import { useRegisterUser } from '@/hooks/useRegisterUser';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { data: registeredUser, mutate: register, isPending: isRegistering } = useRegisterUser();
  const { data: loggedUser, mutate: login, isPending: isLogging } = useLoginUser();
  const navigate = useNavigate();

  if (loggedUser || registeredUser) {
    navigate('/dashboard');
  }

  return (
    <div className='flex gap-2'>
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

export default Login;
