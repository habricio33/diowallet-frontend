export default function Button({type, text}) {

    return (
          <button 
            type={type}
            className="rounded px-4 py-2 w-full font-bold text-white text-2xl bg-gradient-to-r from-sky-500 to-indigo-500"
          >
            {text}
         </button>
    )
}