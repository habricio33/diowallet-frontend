 import logoDio from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
        <img src={logoDio} alt="" className="w-44 m-8" />
        
        <form className="flex flex-col justify-center gap-4 w-full text-2xl">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
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
