function DivideSort(num) {
  if (typeof num !== "number") {
    return "Inputkan angka";
  } else {
    let tmp = num.toString().split("0");
    let result = [];
    for (let i = 0; i < tmp.length; i++) {
      result.push(tmp[i].split("").sort().join(""));
    }
    return parseInt(result.join(""));
  }
}
console.log(DivideSort(23451088823));
