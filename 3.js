// 3. ЗадатакНаписати програм који исписује збир бројева дељивих са 3, и производ бројева који нису дељивиса 3,а јесу са 7 (Између K и N, укључујући њих)Напомена: K може да буде веће од NПример

let K = 3
let N = 35
let zbir = 0
let proizvod = 1
   for(let i = K; i <= N; i++){
       if(i % 3 === 0){
           zbir += i
       }
   }
   console.log(`Zbir: ${zbir}`)
   for(let i = K; i <= N; i++){
    if(i % 3 !== 0 && i % 7 === 0){
        proizvod *= i
    }
}
console.log(`Proizvod: ${proizvod}`)
