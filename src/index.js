//3 . Seek and Destroy
function destroyer(arr) {
  let mainArr = arguments[0];
  let newArr = [];
  for (let i = 1; i < arguments.length; i++) {
    newArr.push(arguments[i]);
  }
  let answerArr = mainArr.filter((item) => !newArr.includes(item));
  return answerArr;

  // console.log(arr);
  // console.log(arguments.length)
  // console.log(mainArr)
  // console.log(newArr)
  // console.log(answerArr)
}

destroyer(
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht"
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan"
);
