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
