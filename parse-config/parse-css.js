const fs = require("fs");

fs.readFile('./src/index.less', function (err, data) {
    if (err) {
        return console.error(err);
    }
    let cssString = data.toString();
   
    let arr = []
    // 匹配‘@’开头，‘:’结尾字符，且不包括开头和结尾
    let patt = /(?<=\@).*(?=\:)/g;

    while ((result = patt.exec(cssString)) != null)  {
        let JSONItem = `"${result[0]}": {
            "prefix": "@${result[0]}",
            "body": ["@${result[0]}"],
            "description": "[${result[0]}]"
        }`
        arr.push(JSONItem);
    }
    let snippetJSON = arr.join(',');
    fs.writeFile('./configs/css.json', `{${snippetJSON}}`, 'utf8', (err) => {
        if (err) throw err;
        console.log('success');
    });
});


