import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Auth = () => {

  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[confirmpassword,setConfirmpassword]=useState();

  return (
    <>
    
    <div className="container flex justify-center items-center min-h-screen">
      <div className="bg- p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="flex justify-center text-center text-4xl font-semibold">
        Welcome
        </div>
        <Tabs defaultValue="account">
          <TabsList className="flex justify-center mb-4">
            <TabsTrigger
              value="account"
              className="px-4 py-2 font-semibold text-gray-700 hover:text-white hover:bg-black rounded"
            >
              Sign Up
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="px-4 py-2 font-semibold text-gray-700 hover:text-white hover:bg-black rounded"
            >
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmpassword}
                  onChange={(e)=>setConfirmpassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form>
          </TabsContent>
          <TabsContent value="password">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>

    <div className="">

    </div>
    </>
  );
};

export default Auth;
