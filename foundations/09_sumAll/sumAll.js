const sumAll = function(first, second) {
    if ((typeof(first) !== "number" || typeof(second) !== "number")
    || (first < 0 || second < 0)
    || (Math.floor(first) !== first || Math.floor(second) !== second)) {
        return "ERROR"
    }

    let sum = 0;
    let initial;
    let final;

    if (first < second) {
        initial = first;
        final = second;
    } else {
        initial = second;
        final = first;
    }

    for (let i = initial; i <= final; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
