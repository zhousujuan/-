
//在函数中直接使用
//函数即对象，有对象就有方法
function get(content){
    console.log(content);
}

get('hello')

//上面的语句是该语句的简写，说白了可以看作是该语句的语法糖
// get.call(window,'hello')

