function PijarFood(harga, voucher, jarak, pajak){
    let diskon = 0;
    if(voucher == "PIJARFOOD5"){
        if(harga >= 50000){
            diskon = harga * 0.5;
            if(diskon>50000){
                diskon = 50000;
            }
        }
    }
    else if(voucher == "DITRAKTIRPIJAR"){
        if(harga >= 25000){
            diskon = harga * 0.6;
            if(diskon>30000){
                diskon = 30000;
            }
        }
    }
    let biaya = 5000;
    if(jarak >= 3){
        biaya = 5000 + (jarak-2)*3000;
    }

    if(pajak == true){
        pajak = harga * 0.05;
    } else {
        pajak = 0;
    }
    console.log(`Total Harga = ${harga}`);
    console.log(`Potongan    = ${diskon}`);
    console.log(`Biaya Antar = ${biaya}`);
    console.log(`Pajak       = ${pajak}`);
    console.log(`SubTotal    = ${harga - diskon + biaya + pajak}`);
    return;
}
PijarFood(75000, "PIJARFOOD5", 5, false);