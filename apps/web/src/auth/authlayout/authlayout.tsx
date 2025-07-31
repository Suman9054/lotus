
import { Outlet } from '@tanstack/react-router';
import * as React from 'react';

const Authlayout: React.FunctionComponent = () => {
  return(
    <div className="flex flex-col items-center justify-center h-screen bg-fuchsia-50">
      <Outlet />
    </div>
  ) ;
};

export default Authlayout;
