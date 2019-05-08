var fs = require('fs');

var rs = fs.createReadStream('./1.txt');
/*
rs.setEncoding('utf8');

rs.pause();

rs.on('data',function(data){
    console.log(data);
});

setTimeout(function(){
    rs.resume();
},3000);

rs.on('end',function(){
    console.log('文件读取完成');
});

rs.on('err',function(){
    console.log('文件读取错误');
});

*/

var out = fs.createWriteStream('2.txt');
/*
rs.on('data',function(data){
    var flag = out.write(data); //但缓冲区满时返回
    if(!flag){
        rs.pause();
    }
});

out.on('drain',function(){  //缓冲区清空时
    rs.resume();
});

rs.on('end',function(){
    out.end();
});
*/

rs.pipe(out);
