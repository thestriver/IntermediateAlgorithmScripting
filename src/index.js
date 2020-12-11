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

  //map and add
  let answer = splitArr.map((x) => [x, pairs[x]]);
  console.log(answer);

  return str;
}

pairElement("ATCGA");
