export default function InputGroup({onInvestmentChange}) {
    return (
        <>
            <div id="input-group">
                <table id="user-input">
                    <thead>
                        <tr>
                            <td>
                                <label>Initial Investment</label>
                            </td>
                            <td>
                                <label>Annual Investment</label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input id="initialInvestment" type="text" defaultValue="10000" onChange={(event) => onInvestmentChange("initialInvestment", event) }/>
                            </td>
                            <td>
                                <input id="annualInvestment" type="text" defaultValue="1000" onChange={() => onInvestmentChange("annualInvestment", event) } />
                            </td>
                        </tr>
                    </tbody>
                <thead>
                <tr>
                    <td>
                        <label>Expected Return</label>
                    </td>
                    <td>
                        <label>Duration</label>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input id="expectedReturn" type="text" defaultValue="6" onChange={() => onInvestmentChange("expectedReturn", event) }/>
                    </td>
                    <td>
                        <input id="duration" type="text" defaultValue="10" onChange={() => onInvestmentChange("duration", event) } />
                    </td>
                </tr>
            </tbody>
        </table >         

        </div >      
    </>
    )
}