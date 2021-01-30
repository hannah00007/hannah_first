function link(content) {
    var obj = {};
    var getContent = content.split("?")[1];
    console.log(getContent);
    if (getContent) {
        var item = getContent.split("&");
        console.log(item);
        for (var i = 0; i < item.length; i++) {
            var value = item[i].split("=");
            obj[value[0]] = value[1];
            console.log(value);
        }
    }

    return obj;
}

console.log(link("https://www.baidu.com?name=zhufeng&age=10&id=14"));
