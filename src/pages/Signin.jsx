import logoDio from "../assets/logo.png";

export default function Signin() {   
    
    return (
        <>
             <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8
              h[35rem] w[35rem]">
                <img src={logoDio} alt="" className="w-44 m-8" />
                <form className="flex flex-col justify-center gap-4 w-full text-2xl">
                    <input 
                      type="email" 
                      placeholder="email"
                      className="rounded p-2 w-full"
                    />
                     <input 
                      type="password" 
                      placeholder="password"
                      className="rounded p-2 w-full"
                    />       
                    <button 
                     type="submit"
                      className="rounded px-4 py-2 w-full font-bold text-white text-2xl"
                    >
                    SIGN IN
                    </button>
                                     
                </form>

                 <p className="text-white text-2xl">
                    Dont have an account?{" "}
                    {/* <Link to="/signup" className="text-sky-400 hover:text-sky-600">
                     Register
                    </Link> */}
                </p>
            </div>
        </>
    )
        
}