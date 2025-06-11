import logoDio from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  ErrorInput from "../components/ErrorInput";
import { signupSchema } from "../schemas/SignupSchema.js";
import { signup } from "../services/user.js";
import { useNavigate } from "react-router-dom";


export default function Signup() {   

    const {
        register, 
        handleSubmit,  
        formState: { errors } 
    } = useForm({ resolver: zodResolver(signupSchema) });
    
    const navigate = useNavigate();

    async function handleSubmitForm(data) {      
      try {
         await signup(data);
         navigate("/signin");

      } catch (error) {
        console.log(error.message);
        alert(error.message)
      }

    }
    
    return (
      
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">

                 <Link to="/signin" className="absolute top-4 left-4 text-white text-2xl hover:text-sky-600">
                     <BiArrowBack />
                </Link>             

                <img src={logoDio} alt="" className="w-44 m-8" />
                <h1 className="text-white font-bold text-5xl py-5">Register</h1>

                <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
                    <Input type="text" placeholder="Full Name" register={register} name="name" />    
                    {errors.fullName &&  <ErrorInput text={errors.fullName?.message} />}
                    <Input type="email" placeholder="Email" register={register} name="email" />  
                     {errors.email &&  <ErrorInput text={errors.email?.message} />}
                    <Input type="password" placeholder="Password" register={register} name="password" />
                     {errors.password &&  <ErrorInput text={errors.password?.message} />}
                    <Input type="password" placeholder="Confirm Password" register={register} name="confirmPassword" />               
                      {errors.confirmPassword &&  <ErrorInput text={errors.confirmPassword?.message} />}
                    <Button type="submit" text="SIGNUP" />     
                      
                </form>

                 
            </div>
    </div>        
         
    )
        
}