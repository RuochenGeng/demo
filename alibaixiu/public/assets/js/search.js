// 获取到浏览器地址栏中的搜索关键字
var key = getUrlParams('key');
// 根据搜索关键字调用搜索接口 获取搜索结果
$.get("/posts/search/" + key,
    function(response) {
        console.log(response);

        var html = template('searchTpl', { data: response });
        $('#listBox').html(html);
    }
);