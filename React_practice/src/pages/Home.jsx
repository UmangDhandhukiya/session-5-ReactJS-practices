//this is our function component

import React, { useEffect} from "react";

const Home = ({stat,setState}) => {
  //UseState with initial value 0
  // const [count, setcount] = useState(0);

  //useEffect example
   useEffect(()=>{
        console.log("use Effect call at",stat)
    },[])
  
  return (
    <div className="flex flex-col flex-wrap gap-4 justify-center items-center">
      <h1 className="text-[clamp(2rem,2.5vw,5rem)] font-bold">Hear is our counter: {stat}</h1>

      {/* conditional rendering */}
      <h1 className="text-[clamp(2rem,2.5vw,5rem)] font-bold">
        Status: {stat <= 0 ? "Negative" : "Positive"}
      </h1>
      <button
        type="button"
        className="px-5 py-2 border bg-emerald-400 rounded-2xl"
        onClick={() => setState(stat + 1)}
      >
        increase value
      </button>
      <button
        type="button"
        className="px-5 py-2 border bg-red-400 rounded-2xl"
        onClick={() => setState(stat - 1)}
        // disabled={count<=0}
      >
        decrease value
      </button>
    </div>
  );
};

export default Home;
