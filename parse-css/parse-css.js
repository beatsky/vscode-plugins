const fs = require("fs");

fs.readFile('./parse-css/css/default.less', function (err, data) {
    if (err) {
        return console.error(err);
    }
    let cssString = data.toString();
   
    let jsonArray = [];
    // 匹配‘@’开头，‘:’结尾字符，且不包括开头和结尾
    let patt = /(?<=\@).*(?=\;)/g;
    let result;
    while ((result = patt.exec(cssString)) !== null)  {
        let JSONItem = `"${result[0].split(': ')[0]}": {
            "prefix": "@${result[0].split(': ')[0]}",
            "body": ["@${result[0].split(': ')[0]}"],
            "description": "[${result[0].split(': ')[1]}]"
        }`
        jsonArray.push(JSONItem);
    }
    let snippetJSON = jsonArray.join(',');
    fs.writeFile('./src/snippets/less.json', `{${snippetJSON}}`, 'utf8', (err) => {
        if (err) throw err;
        console.log('snippet less配置JSON导出成功');
    });
});


