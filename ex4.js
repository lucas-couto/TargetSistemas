const statesMonthlyBilling = [
    { state: "SP", amount: 6783643 },
    { state: "RJ", amount: 3667866 },
    { state: "MG", amount: 2922988 },
    { state: "ES", amount: 2716548 },
    { state: "Outros", amount: 1984953 },
]

function getTotalValue(){
    let totalValue = 0

    for (const state of statesMonthlyBilling)
        totalValue += state.amount
    

    return totalValue
}

function getPercentageByState(){

    const totalValue = getTotalValue()

    for (const state of statesMonthlyBilling){
        let percentage = (state.amount / totalValue) * 100
        percentage = percentage.toFixed(2)
        state.percentage = `${percentage}%`
    }

    for (const state of statesMonthlyBilling)
        console.log(`${state.state} -> ${state.percentage}`)
    

}

getPercentageByState()
