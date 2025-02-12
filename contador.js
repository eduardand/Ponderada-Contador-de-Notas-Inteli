//define as três notas
var nota1 = 8.0;
var nota2 = 6.0;
var nota3 = 5.0;

//calcula a média
var media = (nota1 + nota2 + nota3) / 3;

//exibe as notas e a media no console
console.log("Nota 1: " + nota1);
console.log("Nota 2: " + nota2);
console.log("Nota 3: " + nota3);
console.log("🎓Média: " + media.toFixed(2) + ".");

//verifica se o aluno está aprovado ou reprovado
if(media>= 7.0){
    console.log("✅ APROVADO!");
}else{
    console.log("❌ REPROVADO!");
}
