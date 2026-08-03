const fibonacci = function(term) {
    if (term < 0) {
        return ("OOPS")
    }
    
    // create array with initial values 
    const fibArray = [0, 1, 1]

    // create for loop to push preceding values up to the term.
    for (let i = 3; i <= term; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2])
    }

    console.log(fibArray)

    return fibArray[term]
};

// Do not edit below this line
module.exports = fibonacci;
