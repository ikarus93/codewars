function autocomplete(input, dictionary){
  input = input.replace(/[^\sA-Za-z]/g, ""); 
  const re = new RegExp("^" + input, "i");
  return dictionary.filter( word => { return re.test(word)}).slice(0, 5)
}