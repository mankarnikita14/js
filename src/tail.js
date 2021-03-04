const tail = (arr) => {
    if(arr == null)
        return [];
    else
        return arr.slice(1);   
}
module.exports = tail;