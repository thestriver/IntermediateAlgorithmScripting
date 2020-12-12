//Intermediate Algorithm Scripting
//1. //Sum All Numbers in a Range
function sumAll(arr) {
  let newArray = [];
  let small = arr[0] < arr[1] ? arr[0] : arr[1];
  let big = arr[0] > arr[1] ? arr[0] : arr[1];
  for (let i = small; i <= big; i++) {
    newArray.push(i);
  }
  const answerArray = newArray.reduce((sum, current) => sum + current, 0);
  console.log(newArray);
  console.log(answerArray);
}

sumAll([1, 4]);

//2. //Get Diff between Two Arrays
function diffArray(arr1, arr2) {
  let concatArr = arr1.concat(arr2);
  let newArr = concatArr.filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

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

//4. PigLatin

function translatePigLatin(str) {
  const vowels = /^[^aeiou]+/;
  let text = str.match(vowels);
  let answer =
    text != null
      ? str.replace(text, "").concat(text).concat("ay")
      : str.concat("way");
  console.log(text);
  console.log(answer);
}

translatePigLatin("consonant");

//5. Search and Replace
function myReplace(str, before, after) {
  // console.log(/^[A-Z]/.test(before));
  let replaced = after.charAt(0).toUpperCase().concat(after.substring(1));
  let lowerPlaced = after.charAt(0).toLowerCase().concat(after.substring(1));
  if (/^[A-Z]/.test(before)) {
    after = replaced;
  } else {
    after = lowerPlaced;
  }
  // return str.replace(before, after)
  console.log(str.replace(before, after));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//6. DNA Missing Pairing
function pairElement(str) {
  //pairs
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  //split to individual pairs
  let splitArr = str.split("");
  console.log(splitArr);

  //map and add each letter to its specified pair
  let answerArr = splitArr.map((DNAcharacter) => [
    DNAcharacter,
    pairs[DNAcharacter]
  ]);
  console.log(answerArr);

  return answerArr;
}

pairElement("ATCGA");
