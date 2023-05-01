// imports
import {Result} from './components/Result'
import {Header} from './components/Header'
import {Roll} from './components/Roll'
import {useState} from 'react'


function App() {
  const [result1, setResult1] = useState()
  const [result2, setResult2] = useState(0)

  
  // Randoming numbers
  const setNumbers = () => {
    const unFlooredNumber1 = Math.random() * 6 
    const unFlooredNumber2 = Math.random() * 6
   
    let number1 = Math.floor(unFlooredNumber1) 
    let number2 = Math.floor(unFlooredNumber2)
    if (number1 === 0){
      number1 += 1
    }
    if (number2 === 0){
      number2 += 1
    } 
    setResult1(number1)
    setResult2(number2)
  }

  // Comparing
  const Compare = () =>{
    if (result1 > result2){
       return <div className='comparasion'>Left number wins</div>
    } else if (result2 > result1){
      return <div className='comparasion'>Right number wins</div>
    } else if (result1 === result2){
      return <div className='comparasion'>Its draw</div>
    } 
   
 
  } 

  return (
        <div className="container">
          <Header  />
          <Result
           text1={result1}
           text2={result2}
          />
          <Compare  />
          <Roll
            onClick={setNumbers} 
          />
        </div>
  );
}

export default App;
