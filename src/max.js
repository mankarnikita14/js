const max = (arr) => {
    if(arr.length == 0)
        return null;
    else
        return Math.max(...arr);  
}
module.exports = max;