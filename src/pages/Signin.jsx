import logoDio from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  ErrorInput from "../components/ErrorInput";
import { signinSchema } from "../schemas/SigninSchema.js";
import { signin } from "../services/user.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Signin() {
   
  const { 
    register, 
    handleSubmit,  
    formState: { errors } 
  } = useForm({ resolver: zodResolver(signinSchema) });   
  

  const navigate = useNavigate();

async  function handleSubmitForm(data){
    try {
           const token = await signin(data); //pega o token atraves dessa função que vem de services/user.js
           Cookies.set("token", token.data, { expires: 1 });
           navigate("/");

          } catch (error) {
            console.log(error.message);
            alert(error.message)
          }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
        <img src={logoDio} alt="" className="w-44 m-8" />
        
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
            <Input type="email" placeholder="Email" register={register} name="email" />           
            {errors.email &&  <ErrorInput text={errors.email?.message} />}

            <Input type="password" placeholder="Password" register={register} name="password" />
            {errors.password &&  <ErrorInput text={errors.password?.message} />}  

            <Button type="submit" text="SIGNIN" />
        </form>

        <p className="text-white text-2xl mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-sky-400 hover:text-sky-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
