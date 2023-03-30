const JSONValues = require('./ex3.json')
const values = Object.values(JSONValues)


function getLowerValue() {
    let lowerValue = values[0]

    for (const number of values)
        if (number < lowerValue)
            lowerValue = number

    return lowerValue
}

function getHigherValue() {
    let higherValue = values[0]

    for (const number of values)
        if (number > higherValue)
            higherValue = number

    return higherValue
}

function getAverage() {
    let sumValues = 0

    for (const number of values)
        sumValues += number

    const average = sumValues / values.length
    
    return average
}

function getDaysNumberHigherThanAverage() {
    const average = getAverage()
    let amountDays = 0

    for (const number of values)
        if(number > average)
            amountDays++

    return amountDays
}

function ex4(){
    console.log(`O menor valor de faturamento ocorrido em um dia do mês;: ${getLowerValue()}`)
    console.log(`O maior valor de faturamento ocorrido em um dia do mês;: ${getHigherValue()}`)
    console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${getDaysNumberHigherThanAverage()}`)
}

ex4()