/**
 * Created by Administrator on 2016/12/5.
 */
var varStaing ="abc";//string 数据类型
var varNumber =123; //number
var varUndefind = undefined;//undefined
var varBoolean =true;//boolean
var varNall =null;//null

/*变量类型检查
* */
var varType = typeof "abc"; // typeof 变量类型检查
document.write(varType);

var varType = typeof 123;
document.write("<br>");//换行
document.write(varType);
var varType = typeof undefined;
document.write("<br>");
document.write(varType);
var varType = typeof true;
document.write("<br>");
document.write(varType);
var varType = typeof null;
document.write("<br>");
document.write(varType);

var varNumber2=8;
varNumber2= varNumber2+12;
document.write("<br>");
var varNumberInfi=1/0;
document.write("<br>");
document.write(varNumberInfi);

var hello="Hello Wrod!";
var i =hello.length;
document.write("<br>");
document.write(i);
document.write("<br>"); //字符串
document.writeln(hello[0]);
document.writeln(hello[1]);
document.writeln(hello[2]);
document.writeln(hello[3]);
document.writeln(hello[hello.length-1]);

var helloPre = hello.substring(0,5);//substring 截取字符一部分
document.write("<br>");
document. writeln(helloPre);

var flag = true;
document.write("<br>");
if("1" === 9/9){ //双等号判断对错
    document.write('flag=ture');
}
else{
    document.write('flag=false');
}

var undefinedVar;

/**
 * 类型转换
 */
var strNumberConvert = String(123);
document.write("<br>");
document. writeln(typeof strNumberConvert );

var dateStr = String(new Date());
document.write("<br>");
document. writeln(dateStr);

var aVer= Number(1234);
document.write("<br>");
document. writeln(typeof aVer );

var bNumber= Number(true);
document.write("<br>");
document. writeln( bNumber );

var nNumber= Number(null);
document.write("<br>");
document. writeln( nNumber );

var uNumber= Number(undefined);
document.write("<br>");
document. writeln( uNumber );

/**
 * 一元运算符
 */
var y =5;
var x=2;
x= x+y;
document.write("<br>");
document. write(  x );

/*
* object 对象类型
* */
var person={
    name:"Bob",
    age:20,
    tag:['js','web','moblie'],
    city:"Beijing",
    hasCar:true,
    zipcode:null
};
document.write("<br>");
document.writeln( typeof person.name);
document.writeln(person.age);
document.writeln(person.tag);
document.writeln(person.city);
document.writeln(person.hasCar);
document.writeln(person.zipcode);