function alphabetPosition(text) {
  return text.toUpperCase().split("").filter( item => { return /[A-Z]/.test(item)}).map( item => item.charCodeAt() - 64).join(" ");
}