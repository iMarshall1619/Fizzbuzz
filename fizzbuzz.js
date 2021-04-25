var x='';
for(var i=1;i<=100;i++) {
    if(i%3==0); {
    x += "Fizz";}
    if(i%5==0); {
    x += "Buzz";}
    if(i%3==0 && i%5==0); {
    x += "Fizzbuzz";}
    if(i%3!==0 && i%5!==0){
    x += i;}
}
console.log(x)
