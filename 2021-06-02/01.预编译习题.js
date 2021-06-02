function fn(a,c){
    console.log(a);
    var a=123;
    console.log(a);
    console.log(c);
    function a(){}//函数声明
    if(false){
        var b=678;
    }
    console.log(d);
    console.log(b);
    var b=function(){}//函数表达式
    console.log(b);
    function c(){}//函数声明
    console.log(c);
}
fn(1,2)