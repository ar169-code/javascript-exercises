const removeFromArray = function(arr, ...items) {
    copiedArr = arr.slice()

    for (item of items){
        while (copiedArr.includes(item)) {
            copiedArr.splice(copiedArr.indexOf(item),1)}}
    
    return copiedArr 
};


// Do not edit below this line
module.exports = removeFromArray;
