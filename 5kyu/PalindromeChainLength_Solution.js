var palindromeChainLength = function(n) {
      function reverseNum(num) {
        return parseInt(("" + num).split("").reverse().join(""))
      }
      let steps = 0;
      while (n !== reverseNum(n)) {
        steps++;
        n += reverseNum(n)
      }
      
      return steps;
}