const factorial = (x) => { 
    if(x == 0 ){
        return 1
    } else {
        return x * factorial(x-1)
    }
}

module.exports = factorial;