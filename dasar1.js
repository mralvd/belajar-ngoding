//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c'

//variabel bisa menampung tipe data string (text), integer/number, boolean, array, object, 

let nama = "bryan"; //string
let umur = 22; //number
let apakahBenar = true; //boolean
let uang = 5000.5 //number namun ada koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;

console.log (angka1 + angka2, 'pertambahan');
console.log (angka1 - angka2, 'pengurangan');
console.log (angka1 / angka2, 'pembagian');
console.log (angka1 * angka2, 'perkalian');
console.log (angka1 % angka2, 'modulus');

// disini kita belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); // 30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); // -10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //ntah berapa

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); //200

//string juga bisa ditambahnamun string ga bisa dikurang operator aritmatika

let firstname = 'agus';
let lastname = 'setiawan';
let fullname = firstname + ' ' + lastname;
console.log(fullname);
console.log(firstname + lastname);
console.log(firstname - lastname) //NaN

//alur pembacaan code
//untuk membaca code kalian harus membacanya dari kiri ke kanan, dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10);
number = false;
console.log(number + 10);

//pertanyaan? kenapa false - 10 tetap menjadi 10??? karena false = 0, true = 1;
console.log(true + 10); //11

//membaca error
//error it jangan kalian takut, justru kalian harus takut kalau ada tidak ada yang namanya error dalam pemrograman
//karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si programmer rada
//muak buat mencari errornya atau letak kesalahannya

//contoh error
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya';

//auto komentar bisa dengan mencet ctrl+/

//Tipsnya adalah, selalu teliti, dan kalau ada error dibaca aja, dan belajar ngoding itu perlu kebiasaaan
//karena ngoding itu adalah habit