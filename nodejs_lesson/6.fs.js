var fs = require('fs');

/*var f1 = fs.readFile('1.txt','utf8',function(err,data){
    if(err)
        console.log("读取失败")
    else
        console.log(data);
});*/

/*
try{
    var f2 = fs.readFileSync('2s.txt','utf8');
}catch(e){
    console.log('文件读取失败');
}

console.log(f2);
*/

/*
fs.writeFile('1.txt','Sedelor','utf8',function(err){
    if(err)
        console.log('写入失败');
});
*/

//  fs.writeFileSync('1.txt','Tom','utf8');

/*
function copy(src,dest){
    fs.readFile(src,'utf8',function(err,data){
        fs.writeFile(dest,data,'utf8',function(err){
            if(err)
                console.log('复制失败');
            else
                console.log('复制成功');
        });
    });
}

copy('1.txt','2.txt');
*/

//  fs.mkdirSync('test2');

/*
fs.readdir('test2',function(err,files){
    if(err)
        console.log('读取失败');
    else
        console.log(files);
});
*/

/*
fs.stat('test2',function(err,stat){
    console.log(stat.isDirectory()); //判断是目录返回true
    console.log(stat.isFile());
});
*/
/*
fs.exists('test2',function(exists){
    console.log(exists);
});  */

var path = require('path');
/*
let fullPath = path.join(__dirname,'a','b','c');
console.log(fullPath);
*/

console.log(path.resolve('.'));
console.log(path.resolve('..'));
console.log(path.resolve('/'));
console.log(path.resolve('a'));

console.log(path.basename('./a/a.html'));
console.log(path.basename('./a/b.html'));
console.log(path.extname('./a/b.html'));

