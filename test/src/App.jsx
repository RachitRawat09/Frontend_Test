import React, {  useState } from 'react'

const App = () => {
  const [bill, setBill]= useState("");
  const [tip, setTip]= useState(0);
  const [ people, setPeople]= useState(1);

  const reset = ()=>{
    setBill(" ");
    setTip(0);
    setPeople(1);
  }
  let tipAmount =0 ;
  let total=0;
  if(bill>0){
    tipAmount= (bill* tip )/100/people;
    total= bill / people+ tipAmount;
  }
  return (
    <div className='flex items-center justify-center bg-gray-100 min-h-screen'>
     <div className='bg-white w-[900px] grid grid-cols-2 gap-6 p-8'>
      {/* left side  */}
      <div>
        {/* bill  */}
        <label className='text-gray-800 font-bold'>Bill</label>
        <input type="number" value={bill} onChange={(e)=>setBill(Number(e.target.value))} placeholder=' $' className='w-full rounded-lg border border-gray-300 text-xl mb-5 p-3 mt-2 text-right' />

        {/* tip */}
        <label className='text-gray-800 font-bold'>Select Tip %</label>
        <div className='mt-3 mb-5 grid grid-cols-3 gap-4 '>
          {[5,10,15,25,50].map((value)=>(
            <button key={value}  onClick={()=>{setTip(value)}} className='text-white  bg-teal-600 py-2 font-bold text-xl '>{value} %</button>
          ))}
          
          {/* custom input  */}

          <input type="number" placeholder='Custom'  className='w-full text-xl p-2 rounded-lg border border-gray-400 font-bold text-right' onChange={(e)=>{
            setTip(Number(e.target.value))
          }} />
           
        </div>

        {/* people  */}
        <label className='text-gray-800 font-bold'>Number of People</label>
        <input type="number" value={people} onChange={(e)=>setPeople(e.target.value)} placeholder=' ' className='w-full rounded-lg border border-gray-300 text-xl mb-5 p-3 mt-2 text-right' />


      </div>
      {/* right side */}
      <div className='bg-gray-700 rounded-2xl p-6 flex flex-col justify-between'>
          <div>
            {/* tip amount */}
            <div className='flex items-center justify-between mb-8'>
              <div>
                <h3 className='text-white font-semibold text-lg'>Tip Amount</h3>
                <p className='text-gray-500'>/person</p>
              </div>
              <h2 className=' '> ${tipAmount}</h2>

            </div>

            {/* total  */}
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-white font-semibold text-lg'>Total</h3>
                <p className='text-gray-500'>/person</p>
              </div>
              <h2>${total}</h2>
            </div>

            {/* Reset  */}
            <button onClick={reset} className='w-full py-3 mt-10 bg-teal-700 text-black font-bold text-xl rounded-lg'>RESET</button>
          </div>
      </div>
     </div>
    </div>
  )
}

export default App
