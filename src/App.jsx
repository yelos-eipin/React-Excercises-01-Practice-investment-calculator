import { useState } from "react";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";
import * as investmentFunctions from './util/investment'

const INVESTMENT_VALUES = {
  'initialInvestment': 10000,
  'annualInvestment': 2000,
  'expectedReturn': 6,
  'duration': 10
}


function App() {
  const [investmentValues, setInvestmentValues]= useState(INVESTMENT_VALUES)
  const [updatedInvestmentResults, updateInvestmentResults] = useState([])

  function handleInvestmentChange(inputId, event){
    let tmpInvestmentValues = investmentValues
    let newValue = event.target.value
    tmpInvestmentValues[inputId] = newValue

    setInvestmentValues(tmpInvestmentValues)
    console.log( 'after \n' + JSON.stringify({investmentValues}) )
    let tmp = investmentValues['initialInvestment']
    //console.log( "investmentValues['initialInvestment'] \n" + JSON.stringify({tmp}) )
    let investmentResults = investmentFunctions.calculateInvestmentResults(investmentValues)
    //console.log( 'investment results \n' + JSON.stringify({investmentResults}) )                                                      

    updateInvestmentResults(investmentResults)
    
  }  



  return (
    <>
    <InputGroup onInvestmentChange={handleInvestmentChange} />
    <Result dataToRender={updatedInvestmentResults} />
    </>
  )
}

export default App
