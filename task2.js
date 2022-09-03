function reserve(kalimat){
    let result = kalimat.split(" ");
    if (result.length > 1) {
        return kalimat.split(" ").reverse().join(" ")
    } else {
        return ("Masukkan kalimat");
    }
}
console.log(reserve("Saya belajar Javascript"));



