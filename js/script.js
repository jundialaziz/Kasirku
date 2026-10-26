const produkUtama = {
    nama: "kopi",
    harga: 2500,
    stock: 10,
    tersedia: true
};

const daftarProduk = [
//index 0   
    produkUtama,
    {
        nama: "teh",
        harga: 2000,
        stock: 20,
        tersedia: true
    },
     
//index 1
    {
        
        nama: "susu",
        harga: 3000,
        stock: 15,
        tersedia: false
    },

//index 2
    {
        nama: "jus",
        harga: 12000,
        stock: 20,
        tersedia: true
    }
];

console.log(daftarProduk[2].nama);
console.log(Number("2500"));
console.log(Number("abc"));
console.log(daftarProduk[0]);