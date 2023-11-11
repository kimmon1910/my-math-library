function sum(a, b) {
  if(Array.isArray(a)){
    let total = 0;
    a.forEach((i) => (sum +=i))
    return sum;
    }
    else if (typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
  }