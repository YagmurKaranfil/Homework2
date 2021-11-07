// Asal Sayi
function sayilar(...numbers) {
    let asalOlan = []
    let asalOlmayan = []

    for (let i=0 ; i <numbers.length ; i++){
        let asal = 0
        if (numbers[i] >=2) {
            for (let j =2; j < numbers[i]; j++ ) {
                if (numbers [i] % j == 0 )
                {
                asalOlmayan.push(numbers[i])
                asal = asal + 1
                break
                }
            }

            if (asal==0){
                asalOlan.push(numbers[i])
            }
        }
        else
        {
        asalOlmayan.push(numbers[i])
        }
    }

    console.log("Girilen  sayılardan : ")
    console.log("Asal Sayılar : "+ asalOlan)
    console.log("Asal Olmayan Sayılar : " + asalOlmayan)

}

sayilar ( 2  , 19 , 74 , 3 , 96 , 78 , -3   )

//Arkadas Sayilar

function arkadasSayilar(sayi1 , sayi2) {
    let toplamSayi1 =0
    let toplamSayi2 =0

    for(let i =0 ; i< sayi1 ; i++ ){
        if(sayi1 % i == 0){
            toplamSayi1 =toplamSayi1 + i
        }
    }

    for(let j =0 ; j< sayi2 ; j++ ){
        if(sayi2 % j == 0){
            toplamSayi2 =toplamSayi2 + j
        }
    }

    if(sayi1 == toplamSayi2 && sayi2 ==toplamSayi1) {
        console.log(" " +sayi1 + " , "+ " " + sayi2 +" arkadaş sayılardır...")
    } else{
        console.log(" " +sayi1 + " , "+ " " + sayi2 +" arkadaş sayı değillerdir...")
    }
}

arkadasSayilar(17296 , 18416 )
arkadasSayilar(52 , 16 )

//Mukemmel Sayi

for( let i=1 ; i< 1000 ; i++){
    let toplam = 0
     for (let j=1 ; j<=i ; j++ ){
         if(i % j ==0){
             toplam =toplam + j
         }
     }

     if(i * 2 == toplam){
         console.log("Mükemmel Sayılar : " + i)
     }
}

// Asal Sayılar

for( let i = 2 ; i <1000 ; i++){
    let asal = 0

    for(let j =2; j < i ; j++){
        if( i % j == 0){
            asal = asal + 1
            break
        }
    }

    if (asal == 0){
        console.log( i + "Sayı asaldır")
    }
}
