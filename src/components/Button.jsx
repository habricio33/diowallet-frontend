import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Button({type, text, icon, transaction }) {

  const navigate = useNavigate();
 
  let IconComponent ;

  if(icon === "plus") { IconComponent = BiPlusCircle }
  if(icon === "minus") { IconComponent = BiMinusCircle }

    return (
          <button 
            type={type}
            className="rounded px-4 py-2 w-full font-bold text-white text-2xl bg-gradient-to-r from-sky-500 to-indigo-500"
            onClick={() => transaction && navigate(`/transaction/${transaction}`)}
          >
           {IconComponent && <IconComponent />} {text}
         </button>
    )
}