import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import {  useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user.js";
import { findAllTransaction } from "../services/transactions.js";
 import dayjs from "dayjs";
 

export default function Home() {    
    
    const navigate = useNavigate();
    const location = useLocation();  

    const [ user, setUser ] = useState({});
    const [ transactions, setTransactions ] = useState([]);
    const [balance, setBalance] = useState(0);
    const [apiErrors, setApiErrors] = useState("");


    function validateToken() {
        const token = Cookies.get("token");
        if(!token) {
            navigate("/signin");
        }

    }

    async function getUserLogged() {
        try {

        const userResponse = await userLogged();
        setUser(userResponse.data);

        } catch (error) {
            console.log(error);
             setApiErrors(error.message);
        }
    }

    async function getAllTransactions() {
        try {

          const response = await findAllTransaction();
          setTransactions(response.data);
          calculateBalance(response.data);

        } catch(error) {
            console.log(error);
            setApiErrors(error.message);
        }
    }

  function calculateBalance(transactions) {
    let total = 0;
    transactions.forEach((transaction) => {
      transaction.type === "input"
        ? (total += Number(transaction.value))
        : (total -= Number(transaction.value));
    });

    setBalance(total);
  }


useEffect(() => {   
    validateToken();
    getUserLogged();
    getAllTransactions();      
    
}, []);  

    return (
     <main className="flex flex-col items-center justify-center bg-zinc-900 rounded p-8 w-[60rem] h-[35rem] text-2xl">
        
        <header className="flex items-center justify-between w-full pb-4">
            <img src={logo} alt="Logo Dio Wallet" className="w-32" />
            <div className="flex items-center gap-4 text-white text-2xl">
                    <h1>Olá, {user.name}</h1>
                <Link to="/signin">
                  <GoSignOut />
                </Link>
            </div>
        </header>
          {apiErrors && <ErrorInput text={apiErrors} />}

       <section className="bg-zinc-300 p-4 w-full h-full rounded flex items-center justify-center ">
               {transactions.length ? (
                 <ul className="w-full h-full flex flex-col justify-between">
                   <div className="h-[17rem] overflow-auto p-3">
                     {transactions.map((transaction, index) => (
                       <li
                         key={index}
                         className="flex justify-between items-start w-full"
                       >
                         <span className="flex items-center gap-2">
                           <span className="text-base text-zinc-500">
                             {dayjs(transaction.created_at).format("DD/MM")}
                           </span>
                           {transaction.description}
                         </span>
       
                         <span
                           className={`${transaction.type === "input" ? "text-green-700" : "text-red-700"}`}
                         >
                           R$ {transaction.value}
                         </span>
                       </li>
                     ))}
                   </div>
                   <li className="flex justify-between items-start w-full px-3 ">
                     <span>Balance</span>
                     <span
                       className={`
                           ${balance > 0 ? "text-green-700" : "text-red-700"}
                         `}
                     >
                       R$ {balance}
                     </span>
                   </li>
                 </ul>
               ) : (
                 <p>There is no check-in or check-out</p>
               )}
             </section>

         <footer className="w-full pt-2 flex gap-2 text-white text-lg font-bold">
            <Button 
                className="px-4 py-2 rounded w-full font-bold text-white text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center gap-2"
                type="button" 
                text="New input" 
                icon="plus" 
                transaction="input"
            />
            <Button 
                className="px-4 py-2 rounded w-full font-bold text-white text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center gap-2"
                type="button" 
                text="New output" 
                icon="minus" 
                transaction="output"
            />
         </footer>

     </main>
    )
}