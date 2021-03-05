const min = (arr) => {
    if(arr.length == 0)
        return null;
    else
        return Math.min(...arr);  
}
module.exports = min;