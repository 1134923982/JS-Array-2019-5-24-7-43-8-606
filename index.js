// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
Array.isArray(a);
Array.isArray(b);


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0;i<a.length;i++){
  a[i]=a[i]*2;
}
console.log(a);


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var toString = function(a,str){
  var result="";
  a.forEach(function(item,i){
    if(result.length===0){
      result=result+item;
    }else{
       result=result+str+item;
    }
  });
  return result;
  };
var output1=toString(colors," ");
var output2=toString(colors,"+")
var output3=toString(colors,",")
console.log(output1);
console.log(output2);
console.log(output3);

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var sortArray=function(a){
  for(var i=0;i<a.length-1;i++){
    for(var j=1;j<a.length;j++){
      if(a[j-1]<a[j]){
        var t=a[j-1];
        a[j-1]=a[j];
        a[j]=t;
      }
    }
  }
  return a;
}
a=sortArray(a);
console.log(a);



// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var findMostNum=function(a){
  var maxEle;
  var maxNum=0;
  var t=a.reduce(function(r,item){
    r[item]?r[item]++:r[item]=1;
    if(r[item]>maxNum){
      maxEle=item;
      maxNum++;
    }
    return r;
  },{});
  return maxEle;
}
console.log('a数组出现频率最高的元素是:'+findMostNum(a));
