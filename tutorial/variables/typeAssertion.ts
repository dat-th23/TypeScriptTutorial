var str = '1'
var str2:number =  <number> <any> str // str is now of type number
console.log(typeof(str2));              


var num = 2;    // data type inferred as  number 
console.log("value of num "+num);
// num = "12" 
num = 6;
console.log(num);