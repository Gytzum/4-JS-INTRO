function reverse(array) {
    const reversed = [...array].reverse();
    return reversed
  }


consoler.log( reverse([1,2,3]), [3,2,1] )
// consoler.log( reverse([1,null,14,"two"]), ["two",14,null,1] )