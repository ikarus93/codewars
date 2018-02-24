function countSmileys(arr) {
    return arr.filter( x => { return /[:|;][-|~]?[)|D]/.test(x)}).length
}