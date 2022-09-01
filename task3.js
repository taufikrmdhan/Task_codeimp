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
    if(jarak > 1){
        biayaAntar = 5000 * jarak;
    }
}