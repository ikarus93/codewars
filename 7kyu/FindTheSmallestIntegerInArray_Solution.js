class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort( (a,b) => { return a - b})[0]
  }
}