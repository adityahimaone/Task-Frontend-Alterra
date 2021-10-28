// 2
let A = "DDUUDDUDUUUD"
let B = "UDDDUDUU "
let C = "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"
let newA = A.split("");
let newB = B.split("");
let newC = C.split("");
const hitungLembah = (arr) => {
    let level = 0
    let lembah = 0
    arr.map(x => {
        if (x == 'U') {
            level++
            if (level == 0) {
                lembah++;
            }
        } else {
            level--;
        }
    })
    return lembah;
}
console.log(hitungLembah(newA));
console.log(hitungLembah(newB));
console.log(hitungLembah(newC));

// 3
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    perkenalanDiri() {
        return `Halo, saya ${this.nama}. ${this.umur > 17 ? 'Saya sudah dewasa' : 'Saya masih di bawah umur'}`
    }
}

class Pelajar extends Orang {
    constructor(nama, umur, pekerjaan) {
        super(nama, umur);
        this.pekerjaan = "Siswa/Mahasiswa"
    }

    perkenalanDiri() {
        return `Halo, saya ${this.nama}. Saya belum bekerja`
    }
}

class Pekerja extends Orang {
    constructor(nama, umur, pekerjaan) {
        super(nama, umur);
        this.pekerjaan = pekerjaan;
    }

    perkenalanProfesi() {
        return `Hi, saya seorang ${this.pekerjaan}`
    }
}

const ana = new Orang('Ana', 10);
const ini = new Pelajar('Ini', 18);
const budi = new Pekerja('Budi', 28, 'Koki');

console.log((ana.perkenalanDiri()));
console.log((ini.perkenalanDiri()));
console.log((ini.pekerjaan));
console.log((budi.perkenalanDiri()));
console.log((budi.perkenalanProfesi()));
console.log((budi.pekerjaan));


