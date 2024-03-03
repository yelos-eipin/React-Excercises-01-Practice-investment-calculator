import {formatter} from '../util/investment'

export default function Result({dataToRender}){
    let investedCapital = 0
  

    // console.log('parameters : ' + JSON.stringify({dataToRender})  )

    return(
        <div className="input-group">
            <table id="result">
                <thead>
                    <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody key="results-body">
                    {                                 
                        dataToRender.length !== 0 ?
                            (
                                dataToRender.map( investmentResult => 
                                                    <tr key={investmentResult.year}>
                                                        <td>{investmentResult.year}</td>
                                                        <td>{formatter.format(investmentResult.valueEndOfYear)}</td>
                                                        <td>{formatter.format(investmentResult.interest)}</td>
                                                        <td>{formatter.format(investmentResult.totalInterest)}</td>
                                                        <td>{formatter.format(investmentResult.investedCapital)}</td>
                                                    </tr>     
                                )
                            )   
                            : null                    
                         
                    }

                </tbody>                
                </table>
        </div>
    )
}