//typescript tip güvenli
//var , let , const

let sayi1 =10;
 sayi1="Engin Demiroğ"
student ={id:1 , name:"Engin"}
//console.log(student);

function save( puan=10 ,ogrenci) {
    console.log(ogrenci.name+ " : "+puan)
}
save(undefined ,student);