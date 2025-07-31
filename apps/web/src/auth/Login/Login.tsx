import React, { useState } from 'react';
import type { LoginData } from '@repo/zodscema/RoomData';
import { authClient } from '../../lib/auth_client';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData: LoginData = {
      email,
      password,
    };
   await authClient.signIn.email(loginData,{
    onSuccess:()=>{
      window.location.href = '/home';
    },
    onError: (error) => {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
      setEmail('');
      setPassword('');
    }

    
   });
         
   
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gradient-to-b from-gray-100 to-gray-200"> 
        <div className="bg-transparent shadow-2xl rounded-lg p-8 space-y-6"> 
          <h2 className="text-3xl font-bold text-gray-900 text-center">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-colors  focus:shadow-xl peer  placeholder-transparent "
                placeholder="Enter Email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-3.5 bg-transparent px-2 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-lg"
              >
                Enter Email
              </label>
            </div>
            
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg  focus:shadow-xl transition-colors peer placeholder-transparent"
                placeholder="Enter Password"
              />
              <label
                htmlFor="password"
                className="absolute left-4 -top-2.5 bg-transpirant px-2 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5  peer-focus:text-lg"
              >
                Enter Password
              </label>
            </div>
            
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-500 hover:underline"
              >
                Forgot your password?
              </button>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-b from-gray-700 via-gray-800 to-black text-white py-3 px-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-gray-400/50 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          </form>
          
          {/* Now INSIDE the white box */}
          <div className="text-center">
            <span className="text-gray-500">
              Don't have an account?{' '}
              <button className="text-blue-500 hover:text-blue-600 hover:underline font-medium">
                Sign Up
              </button>
            </span>
          </div>
          
          <div className="flex justify-center">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors duration-200 group">
              <svg 
                className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
