module.exports = function getZerosCount(number) {
    let index = 1,
        zeros = 0;

    while (Math.floor(number / Math.pow(5, index)) != 0) {
        zeros += Math.floor(number / Math.pow(5, index));
        index++;
    }
    return zeros;
}