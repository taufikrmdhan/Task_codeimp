// function PijarFood(jmlMakanan,hargaMakanan) {
//     totalHarga = jmlMakanan * hargaMakanan;
//     if (totalHarga >= 60000) {
//         let diskon = totalHarga * 0.35;
//         if(diskon <= 50000) {
//             console.log(`Total harga = ${totalHarga}`)
//             console.log(`Potongan    = ${diskon}`);
//             console.log(`SubTotal    = ${totalHarga - diskon}`);
//         }else if (diskon > 50000) {
//             console.log(`Total harga = ${totalHarga}`)
//             console.log(`Potongan    = ${diskon = 50000}`);
//             console.log(`SubTotal    = ${totalHarga - diskon}`);
//         }
//     } else {
//         console.log(`Total harga = ${totalHarga}`)
//         console.log(`Potongan    = ${diskon = 0}`);
//         console.log(`SubTotal    = ${totalHarga - diskon}`);
//     }
//     return;
// }

// discount(4,60000);
function PijarFood(harga, voucher, jarak, pajak){
    let diskon = 0;
    if(voucher == "PIJARFOOD5"){
        if(harga >= 50000){
            if(diskon<=50000){
                diskon = harga * 0.5;
            }
        }
    }
    else if(voucher == "DITRAKTIRPIJAR"){
        if(harga >= 25000){
            if(diskon<=30000){
                diskon = harga * 0.6;
            }
        }
    }
    else{
        false;
    }

    let biayaAntar = 5000;
    if(jarak == 1 && jarak == 2){
        biayaAntar *= jarak;
    } else{
        for(let i = 3; i <= jarak; i++){
            biayaAntar = biayaAntar + 3000;
        }
    }

    if(pajak == true){
        pajak = harga * 0.05;
    } else{
        false;
    }
    console.log(`Total Harga = ${harga}`);
    console.log(`Potongan    = ${diskon}`);
    console.log(`Biaya Antar = ${biayaAntar}`);
    console.log(`Pajak       = ${pajak}`);
    console.log(`SubTotal    = ${harga - diskon + biayaAntar + pajak}`);
    return;
}
PijarFood(75000, "PIJARFOOD5", 5, true);