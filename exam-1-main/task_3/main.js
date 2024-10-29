let nums = [2, 2, 1];
let n = nums.lenght;
var result = '';
function nonrep() {
    for (var i = 0; i < n; i++) {
      var j;
      for (j = 0; j < n; j++)
        if (i != j && arr[i] == arr[j]) {
          result = arr[i];
          break;
        }
      if (j == n)
        return arr[i];
    }
    return result;
  }
  console.log(nonrep())

  
  