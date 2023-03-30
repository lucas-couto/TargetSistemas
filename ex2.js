function fibonacci(numberToStop) {
    const sequence = [0, 1]
    let lastIndex = 1
    let penultimateIndex = 0
    let nextNumber = 0;

    while (nextNumber < numberToStop) {
        nextNumber = sequence[lastIndex] + sequence[penultimateIndex]
        sequence.push(nextNumber)
        lastIndex++
        penultimateIndex++
        
        if(nextNumber == numberToStop) return `O numero ${numberToStop} esta na sequencia`
    }

    return `O numero ${numberToStop} nao esta na sequencia`
}

console.log(fibonacci(34))