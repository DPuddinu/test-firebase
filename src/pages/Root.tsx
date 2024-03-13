import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div className='bg-slate-800 text-white min-h-screen w-full flex flex-col gap-4 justify-center items-center'>
      <Link to={'/dashboard'}>Go to Dashboard</Link>
      <Outlet />
    </div>
  );
}

export default Root;
