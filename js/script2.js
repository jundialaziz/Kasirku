const daftarProduk = [{
    nama: "Terigu", 
    harga: 12000,
    stock: 50,
},
{
    nama: "Gula",
    harga: 10000,
    stock: 45,

},
{
    nama: "Gandum",
    harga: 40000,
    stock: 50,

}];

console.log(daftarProduk);

// if : menghitung diskon
//const totalBelanja = 120000;
function menghitungDiscound(totalBelanja){
    let discound = 0;
    if (totalBelanja >= 100000){
        discound = totalBelanja * 0.1;
    } else if (totalBelanja >= 50000){
        discound = totalBelanja * 0.05;
    } else {
        discound = 0;
    }
    return discound
}

console.log(`Harga Beli 130.000 dapat discound : ${menghitungDiscound(130000)}`);
console.log(`Harga Beli 75.000 dapat discound : ${menghitungDiscound(75000)}`);

// switch : nyari tau metode pembayaran
// let metodeBayar = "qris"
function metodeBayar(metode){
    let biayaAdmin = 0;
    switch (metode) {
        case "cash":
            biayaAdmin = 2000;
            break;
        case "Transfer":
            biayaAdmin = 3000;
            break;
        case "qris":
            biayaAdmin = 0;
            break;
    
        default:
            biayaAdmin= 2500;
            break;
    }
    return biayaAdmin
} 
    
console.log(`biaya admin ${metodeBayar("Transfer")} dengan metode pembayaran adalah Transfer`);

// far.. of : hitung satu total
let totalHarga = 0;
for(const produk of daftarProduk){
totalHarga += produk.harga * produk.stock;
}

console.log(`Total belanja Adalah: ${totalHarga}`)