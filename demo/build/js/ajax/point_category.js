/**
 * @file 示例代码
 */

bmap.centerAndZoom(new BMap.Point(105.403119, 38.028658), 5); // 初始化地图,设置中心点坐标和地图级别

// 第一步创建mapv示例
var mapv = new Mapv({
    drawTypeControl: true,
    map: bmap  // 百度地图的map实例
});

var data = []; // 取城市的点来做示例展示的点数据

data = data.concat(getCityCenter(cityData.municipalities));
data = data.concat(getCityCenter(cityData.provinces));
data = data.concat(getCityCenter(cityData.other));

for (var i = 0; i < cityData.provinces.length; i++) {
    var citys = cityData.provinces[i].cities;
    data = data.concat(getCityCenter(citys));
}

function getCityCenter(citys) {
    var data = [];
    for (var i = 0; i < citys.length; i++) {
        var city = citys[i];
        var center = city.g.split('|')[0];
        center = center.split(',');
        data.push({
            lng: center[0],
            lat: center[1],
            count: parseInt(Math.random() * 10)
        });
    }
    return data;
};

var layer = new Mapv.Layer({
    mapv: mapv, // 对应的mapv实例
    zIndex: 1, // 图层层级
    dataType: 'point', // 数据类型，点类型
    data: data, // 数据
    drawType: 'category', // 展示形式
    drawOptions: { // 绘制参数
        size: 5, // 大小
        splitList: { // 按对应的值按相应颜色展示
            other: randomColor(),
            1: randomColor(),
            2: randomColor(),
            3: randomColor(),
            4: randomColor(),
            5: randomColor(),
            6: randomColor()
            /*
             other: 'rgba(255, 255, 0, 0.8)',
             1: 'rgba(253, 98, 104, 0.8)',
             2: 'rgba(255, 146, 149, 0.8)',
             3: 'rgba(255, 241, 193, 0.8)',
             4: 'rgba(110, 176, 253, 0.8)',
             5: 'rgba(52, 139, 251, 0.8)',
             6: 'rgba(17, 102, 252)'
             */
        }
    }
});