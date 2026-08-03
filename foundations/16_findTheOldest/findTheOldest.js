const findTheOldest = function(array) {
    const oldest = array.reduce((oldest, item) => {
        if (!oldest) {
        return oldest = item;
        }
        
        const oldestEndYear = oldest.yearOfDeath ? oldest.yearOfDeath : new Date().getFullYear();
        const itemEndYear = item.yearOfDeath ? item.yearOfDeath : new Date().getFullYear();

        if (oldestEndYear - oldest.yearOfBirth > itemEndYear - item.yearOfBirth) {
            return oldest}

    return oldest = item;
    }, {})

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
