var arr = [];

function addArray() {
  var n = +document.getElementById("array").value;
  arr.push(n);
  document.getElementById("arr__text").innerHTML = arr.join();
}

function ex1() {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  document.getElementById("ex1__text").innerHTML = sum;
}

function ex2() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      count++;
    }
  }
  document.getElementById("ex2__text").innerHTML = count;
}

function ex3() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  document.getElementById("ex3__text").innerHTML = min;
}

function ex4() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      var min = arr[i];
      break;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] < min) {
      min = arr[i];
    }
  }
  document.getElementById("ex4__text").innerHTML = min;
}

function ex5() {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      document.getElementById("ex5__text").innerHTML = arr[i];
      return;
    }
  }
  return -1;
}

function swap(index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
function ex6() {
  var i1 = +document.getElementById("index1").value;
  var i2 = +document.getElementById("index2").value;
  swap(i1, i2);
  document.getElementById("ex6__text").innerHTML = arr;
}

function ex7() {
  for (var k = arr.length - 1; k >= 0; k--) {
    var isSwapped = false;
    for (var i = 0; i < k; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      document.getElementById("ex7__text").innerHTML = arr;
      return;
    }
  }
  document.getElementById("ex7__text").innerHTML = arr;
}

function checkPrime(n) {
  var isPrime = 1;
  if (n < 2) {
    return (isPrime = 0);
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return (isPrime = 0);
    }
  }
  return isPrime;
}
function ex8() {
  for (var i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i]) === 1) {
      document.getElementById("ex8__text").innerHTML = arr[i];
      break;
    }
  }
  return -1;
}

var array = [];
function addArrayReal() {
  var n = +document.getElementById("arrayReal").value;
  array.push(n);
  document.getElementById("arr__real").innerHTML = array.join();
}
function ex9() {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i]) === true) {
      count++;
    }
  }
  document.getElementById("ex9__text").innerHTML = count;
}

function ex10() {
  var countPositive = 0;
  var countNegative = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countNegative++;
    } else {
      countPositive++;
    }
  }
  if (countPositive > countNegative) {
    document.getElementById("ex10__text").innerHTML = "Số dương > Số âm";
  } else if (countPositive < countNegative) {
    document.getElementById("ex10__text").innerHTML = "Số dương < Số âm";
  } else {
    document.getElementById("ex10__text").innerHTML = "Số dương = Số âm";
  }
}
