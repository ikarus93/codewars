function duplicateCount(text){
  text = text.toUpperCase().split("");
  text = text.filter( char => { return /[A-Z]/.test(char) || /\d/.test(char)})
  let letters = [];
  let dupls = [];  
  
  text.forEach( item => {
    if (letters.indexOf(item) !== -1 && dupls.indexOf(item) === -1) {
      dupls.push(item)
    } else {
      letters.push(item)
    }
  }) 
  
  return dupls.length
  //...
} 