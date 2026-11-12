import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 1000000,
        annualInvestment: 2000000,
        expectedReturn: 5,
        duration: 10,
    })

    const durationIsValid = userInput.duration >= 1;

    function handleChange(inputTarget, inputValue){
        setUserInput(prevInput =>{
            return {
                ...userInput,
                [inputTarget]: inputValue*1// Ha szám kell ez a másik opció: [inputTarget]: +inputValue
            }
        })
    }


      
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!durationIsValid && <p className="center" >{"Please enter a valid (>=1) duration!"}</p>}
      {durationIsValid && <Results datas={userInput}/>}
      
    </>

  )
}

export default App
