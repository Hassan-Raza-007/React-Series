import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordref = useRef(null);

//useref hook

const copypasswordtoclipboard = useCallback(()=>{
  passwordref.current?.select();
window.navigator.clipboard.writeText(password);

},[password]);

  const passwordGenerated = useCallback(
    () => {

      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) str += '0123456789';
      if (charAllowed) str += '*@#$%&';

      let pass = '';


      for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);

      };
      setPassword(pass)
    },
    [length, numberAllowed, charAllowed, setPassword],
  );

  useEffect(() => {
    passwordGenerated()
  }, [length, numberAllowed, charAllowed, passwordGenerated]);




  return (
    <>
      <div className='container'>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  my-8 text-blue-700 bg-gray-700'>
          <h1 className='text-white text-center font-bold font-serif my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordref}
            />
            <button onClick={copypasswordtoclipboard} className='outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input

                type="range"
                min={8}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label >Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='numberInput' >Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id='characterInput'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='characterInput' >Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App