/*
 - There are three scope of variable 
 + Global Scope 
 + Class Scope
 + Local Scope
 */

var global_num =  12    // global variable
class Numbers {
    num_val = 13;       //class variable
    static  sval = 10;      // static field

     storeNum():void {
        var local_num = 14;     // local variable
        console.log(local_num);
    }

}

console.log("Global num: " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
obj.storeNum();