import  { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/input/PasswordInput'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance'
import Footer from '../../components/Footer/Footer'


 const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email");
            return;
        }

        if (!password) {
            setError("Please enter a password");
            return;
        }

        setError("")

        //Login API Call
        try {
            const response = await axiosInstance.post("/login", {
                email,
                password,
            });

            // Handle successful login response
            if (response.data && response.data.accessToken) {
                localStorage.setItem("token", response.data.accessToken);
                navigate("/dashboard");
            }
            
        } catch (error) {
            // Handle login Error
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while logging in. Please try again.");
            }
            }
    };


    return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
    
          <div className="flex-grow flex items-center justify-center  bg-slate-300">
            <div className="w-96 border rounded bg-white px-7 py-10 shadow-lg">
              <form onSubmit={handleLogin}>
                <h4 className="text-2xl mb-7">Login</h4>
    
                <input
                  type="text"
                  placeholder="Email"
                  className="input-box"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
    
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
    
                {error && <p className="text-red-500 text-xs pt-1">{error}</p>}
    
                <button type="submit" className="btn-primary mt-4">
                  Login
                </button>
    
                <p className="text-sm text-center mt-4">
                  Not registered yet?{" "}
                  <Link to="/signUp" className="font-medium text-primary underline">
                    Create an Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
    
          <Footer />
        </div>
      );
}


export default Login