//1. ЗадатакНаписати програм који исписује рачун у кафани, али само муштеријама које имају више од 18годинаДодатно, попуст се одобрава у два следећа случаја:1. Број година дељив са 7 (15% попуста)2. Број година дељив са 11 (25% попуста)Улазни подаци:Количина (број пића)Цена једног пићаБрој година муштеријеНапомена: Проверити улазне податке (Валидност количине, цене и година)

let kolicina = 9
let cenaPoKomadu = 180
let godine = 21
let suma = kolicina * cenaPoKomadu

if(godine % 7 === 0){
    console.log(`Racun: ${suma * 0.85} rsd`,'\n','Objasnjenje:','\n',`- ${kolicina} * ${cenaPoKomadu} = ${suma} din`,'\n','- 21 je дељиво са 7, па се рачуна и попуст од 15%')
}
if(godine % 11 === 0){
    console.log(`Racun: ${suma * 0.75} rsd`,'\n','Objasnjenje:','\n',`- ${kolicina} * ${cenaPoKomadu} = ${suma} din`,'\n','- 21 je дељиво са 11, па се рачуна и попуст од 25%')
}
else{console.log(`Racun: ${suma} din.`)}
console.log(kolicina, cenaPoKomadu, godine)