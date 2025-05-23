import logoDio from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Signup() {   
    
    return (
      
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">

                 <Link to="/signin" className="absolute top-4 left-4 text-white text-2xl hover:text-sky-600">
                     <BiArrowBack />
                </Link>             

                <img src={logoDio} alt="" className="w-44 m-8" />
                <h1 className="text-white font-bold text-5xl py-5">Register</h1>
                <form className="flex flex-col justify-center gap-4 w-full text-2xl">
                    <Input type="text" placeholder="Full Name" />                      
                    <Input type="email" placeholder="Email" />  
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />               
                    <Button type="submit" text="SIGNUP" />     
                      
                </form>

                 
            </div>
    </div>        
         
    )
        
}