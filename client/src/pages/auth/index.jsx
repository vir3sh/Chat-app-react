import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const validateSignup = () => {
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };
  
const handleSignup = (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  if (validateSignup()) {
    alert("done");
  }
};


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Left Side: Text and Form */}
        <div>
          <div className="text-4xl font-semibold mb-8 text-center">
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
              <form className="space-y-4" onSubmit={handleSignup}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
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
              <form className="space-y-4"  onSubmit={handleSignup}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <br></br>
                  <br></br>
                  <br></br>
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

        {/* Right Side: Image */}
        <div className="w-1/2 hidden md:block ml-14">
          <img
            src="/src/assets/chatimage.png"
            alt="Chat Illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
