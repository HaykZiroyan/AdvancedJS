function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
}
