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
    let ongkir = 5000;
    if(jarak >= 3){
        ongkir = 5000 + (jarak-2)*3000;
    }

    if(pajak == true){
        pajak = harga * 0.05;
    } else {
        false;
    }
    console.log(`Total Harga = ${harga}`);
    console.log(`Potongan    = ${diskon}`);
    console.log(`Biaya Antar = ${ongkir}`);
    console.log(`Pajak       = ${pajak}`);
    console.log(`SubTotal    = ${harga - diskon + ongkir + pajak}`);
    return;
}
PijarFood(75000, "PIJARFOOD5", 5, true);