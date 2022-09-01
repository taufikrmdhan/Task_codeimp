function DivideSort (num){
    let tmp = num.toString().split('0');
    let result = [];
    for(let i = 0; i < tmp.length; i++){
        result.push(tmp[i].split("").sort().join(""));
    }
    return result.join("");
}
console.log(DivideSort(23451088823));