var arr = [-3, 9, 2, 5, 4, -6, 8, 7];

console.log("Câu 1:");
function ex1() {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  console.log("Tổng số dương trong mảng:", sum);
}
ex1();

console.log("Câu 2:");
function ex2() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      count++;
    }
  }
  console.log("Mảng có", count, "số dương");
}
ex2();

console.log("Câu 3:");
function ex3() {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Số nhỏ nhất trong mảng:", min);
}
ex3();

console.log("Câu 4:");
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
  console.log("Số dương nhỏ nhất trong mảng:", min);
}
ex4();

console.log("Câu 5:");
function ex5() {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      console.log("Số chẵn cuối cùng trong mảng:", arr[i]);
      return;
    }
  }
  return -1;
}
ex5();

console.log("Câu 6:");
function ex6() {
  var temp = arr[3];
  arr[3] = arr[5];
  arr[5] = temp;
  console.log(arr);
}
ex6();

console.log("Câu 7:");
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
      console.log(arr);
      return;
    }
  }
  console.log(arr);
}
ex7();

console.log("Câu 9:");
function ex9() {
  var array = [3, 4, 5.2, 6, 8.7, 9.5, 1];
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i]) === true) {
      count++;
    }
  }
  console.log("Mảng có", count, "số nguyên");
}
ex9();

console.log("Câu 10:");
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
  if (countNegative > countPositive) {
    console.log("Số âm > Số dương");
  } else if (countNegative < countPositive) {
    console.log("Số âm < Số dương");
  } else {
    console.log("Số âm = Số dương");
  }
}
ex10();
