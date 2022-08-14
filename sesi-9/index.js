class Hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama;
    }

    set newColor(color){
        this.warna = color;
    }

    set newSkill(skill){
        this.keahlian = skill;
    }

    get detail(){
        return `Hi saya ${this.nama}, saya berwarna ${this.warna}, dan keahlian saya ${this.keahlian}`
    }

}

const kucing = new Hewan("Tyas")
kucing.newColor = "Red";
kucing.newSkill = "Menggoda";
console.info(kucing.detail);
















// let i = 0;
// standar function
// function getDetailPerson() {
//     i += 1;
//     if (i > 5) {
//         console.info('lebih dari 5x di klik');
//     } else {
//         console.info('jatah klik masih ada');
//     }
// }

// // arrow function
// const getDetailPerson2 = () => {
//     i += 1;
//     i > 5 ? console.info('lebih dari 5x bro person2') : console.info('jatah masih ada human2');;
// }



// ============================================================

// const mahasiswa = [
//     {
//         nama: "Akhmad Sakhoji Jamaludin",
//         alamat: "Prupuk Selatan",
//         usia: 21,
//         pekerjaan: "Mahasiswa"
//     },
//     {
//         nama: "Diah Ayu Putri Caturningtyas",
//         alamat: "Karang Benda",
//         usia: 22,
//         pekerjaan: "Karyawan Swasta"
//     }
// ]



// function getDetailData() {
//     // mahasiswa.map(function(result, i){
//     //     console.table(result);
//     // })

//     mahasiswa.forEach(result => {
//         console.table(result);
//     });

//     // console.info(`data yang anda cari adalah: ${mahasiswa}`);
// }
