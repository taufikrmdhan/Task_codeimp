// function reserve(str) {
//     var arr = str.split(" ");
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.unshift(arr[i]);
//     }
//     return newArr.join(" ");
// }
// console.log(reserve("hello world"));
function reserve(kalimat){
    return kalimat.split(" ").reverse().join(" ");
}
console.log(reserve("hello world"));



