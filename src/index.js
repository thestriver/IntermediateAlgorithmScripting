function uniteUnique(arr) {
  let arrayed = [];
  for (let i = 0; i < arr.length; i++) {
    arrayed.concat(arr[i]);
  }
  let concatArr = [...arr];
  console.log(arrayed);
}
let arr = [
  [1, 3, 2],
  [5, 2, 1, 4],
  [2, 1]
];
let concatArr = [...arr];
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
