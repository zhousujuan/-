## js-this面试题

- ### 阿里巴巴面试题题目

```js

        var name=222
        var a={
            name:111,
            say:function(){
                console.log(this.name);
            }
        }
        var fun=a.say
        fun()//第一个输出
        a.say()//第二个输出

        var b={
            name:333,
            say:function(){
                fun()
            }
        }
        b.say(a.say)
        b.say=a.say
        b.say()
```

### 分析：
#### 有关this的使用

- 在函数中直接使用

```js
//在函数中直接使用
//函数即对象，有对象就有方法
function get(content){
    console.log(content);
}

get('hello')

//上面的语句是该语句的简写，说白了可以看作是该语句的语法糖
// get.call(window,'hello')

```

- 函数作为对象被调用（谁调用我，我就指向谁）

```js
var person ={
    name:'lili',
    run:function(time){
        console.log(`${this.name}在跑步 最多${time}min就不行了`);
    }
}

person.run(30)
//上面的语句是该语句的简写，说白了可以看作是该语句的语法糖
person.run.call(person,30)
```

#### 回到题目:

- 第一个输出

```js
//该调用属于:函数的直接使用==》fun.call(window)==》输出：222
        fun()//222
```

- 第二个输出

```js
//可以看作a.say.call(a)==》输出：111
        a.say()//111
```

- 第三个输出

```js
var b={
	name:333,
 	say:function(fun){
		fun()
	}
}
b.say(a.say)//222
//a.say是传入的参数==》
/*
        var b={
            name:333,
            say:function(fun){
                fun()//fun.call(window)
            }
        }
        
*/
      
```

- 第四个输出

```js
b.say=a.say
/*
这里结果导致：
		var b={
            name:333,
            say:function(fun){
                fun()
            }
        }
变成：
		var b={
            name:333, 
            say:function(){
                console.log(this.name);
            }
        }

*/
b.say()//333
//该调用可以看作：b.say.call(b)==》输出：333
```

运行结果截图：

![](..\2021-06-03\运行结果截图.PNG)