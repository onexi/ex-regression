var xdata=[1,2,3,4,5];
var ydata=[2,4,9,6,7];
var sxy=0;
var sxx=0;
var sx=0;
var sy=0;
var n=xdata.length;
//xdata.map(function(item,))

function sumProduct(array1,array2){
    var sum=0;
    //if(array1.length!=array2.length){return error}
    for (var i=0;i<array1.length;i++){
        sum+=array1[i]*array2[i];
    }
    return sum;
}

// function sum(array){
//     var sum=0;
//     for(var i=0;i<array.length;i++){
//         sum+=array[i];
//     }
//     return sum;
// }
    function sum(array){
        return array.reduce(function(total,item){
            return total+item;
        },0);
    }


// for(var i=0;i<xdata.length;i++){
//     sxy+=xdata[i]*ydata[i];
// }

// for (var i=0;i<xdata.length;i++){
//     sxx+=xdata[i]*xdata[i];
// }

sxy=sumProduct(xdata,ydata);
sxx=sumProduct(xdata,xdata);
sx=sum(xdata);
sy=sum(ydata);


// for (var i=0;i<xdata.length;i++){
//     sx+=xdata[i];
// }

// for (var i=0; i<ydata.length;i++){
//     sy+=ydata[i];
// }

var m=(sxy-sx*sy/n)/(sxx-sx*sx/n);
var b=(sy-m*sx)/n;
console.log(m);
console.log(b);
//console.log(Math.dotMultiply(xdata,ydata));
