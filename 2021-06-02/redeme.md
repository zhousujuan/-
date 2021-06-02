## 01.预编译习题

给出下面的输出：

```js
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
```

- 预编译
- 作用域的创建阶段	预编译的阶段
- 预编译的时候做了那些事情
- js的变量对象	AO对象	供js引擎自己去访问的
  - ​	创建了ao对象
  - ​	找形参和变量的声明,作为ao对象的属性名，值时undefined
  - ​	实参和形参相统一
  - ​	找函数声明，会覆盖变量的声明

```js
//创建ao对象
AO:{
    a:undefined	1 function a(){}
    c:undefined	2 function c(){}
    d:undefined 
    b:undefined 

}

//js的解释执行，也就是js的逐行执行

```

结果：

```
ƒ a(){}

123

ƒ c(){}

undefined

undefined

ƒ (){}

ƒ c(){}
```



