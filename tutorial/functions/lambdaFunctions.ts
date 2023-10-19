// Lambda Functions : Hàm mũ tên

const  foo = (x:number) => {
    x = 10 + x
    // console.log(x);
}
// foo(100);


// Parameter type Inference : Loại tham số Suy luận
var func = (x: any) => {
    if (typeof(x) == "number") {
        console.log(x + " is number");
    } else if (typeof(x) == "string") {
        console.log(x + " is string");
    }
}

func(12);
func("Tom");

var display = (x:any) => { 
    console.log("The function got "+x) 
 } 
 display(12)

 var disp =()=> { 
    console.log("Function invoked"); 
 } 
 disp();