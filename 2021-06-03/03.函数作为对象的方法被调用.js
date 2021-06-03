//函数作为对象的方法被调用(谁调用我，我就指向谁)
var person ={
    name:'lili',
    run:function(time){
        console.log(`${this.name}在跑步 最多${time}min就不行了`);
    }
}

person.run(30)
//上面的语句是该语句的简写，说白了可以看作是该语句的语法糖
// person.run.call(person,30)