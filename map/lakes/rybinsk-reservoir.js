// Rybinsk Reservoir
var rybinskReservoir = chart.series.push(new am4maps.MapPolygonSeries());

rybinskReservoir.data = [{
    "title": "Rybinsk Reservoir",
    "translation": "Рыбинское водохранилище",
    "geoPolygon": [
        [ 
        {latitude: 59.15392, longitude: 37.59208},
        {latitude: 59.14829, longitude: 37.65527},
        {latitude: 59.12998, longitude: 37.71022},
        {latitude: 59.12153, longitude: 37.77341},
        {latitude: 59.11589, longitude: 37.86407},
        {latitude: 59.0764, longitude: 37.76791},
        {latitude: 59.05241, longitude: 37.83935},
        {latitude: 59.01144, longitude: 37.9355},
        {latitude: 58.95059, longitude: 38.03716},
        {latitude: 58.97466, longitude: 38.08112},
        {latitude: 58.93784, longitude: 38.11409},
        {latitude: 58.88397, longitude: 38.17728},
        {latitude: 58.82716, longitude: 38.26245},
        {latitude: 58.76599, longitude: 38.3641},
        {latitude: 58.70899, longitude: 38.46301},
        {latitude: 58.67475, longitude: 38.49872},
        {latitude: 58.6719, longitude: 38.53719},
        {latitude: 58.6033, longitude: 38.58664},
        {latitude: 58.59472, longitude: 38.61686},
        {latitude: 58.54317, longitude: 38.69379},
        {latitude: 58.52024, longitude: 38.76522},
        {latitude: 58.49442, longitude: 38.84215},
        {latitude: 58.47863, longitude: 38.91083},
        {latitude: 58.48868, longitude: 39.00974},
        {latitude: 58.48868, longitude: 39.08117},
        {latitude: 58.4772, longitude: 39.00424},
        {latitude: 58.45135, longitude: 38.96853},
        {latitude: 58.42979, longitude: 38.93556},
        {latitude: 58.39239, longitude: 38.95204},
        {latitude: 58.35928, longitude: 38.99875},
        {latitude: 58.34199, longitude: 39.0482},
        {latitude: 58.34487, longitude: 38.96853},
        {latitude: 58.35064, longitude: 38.91358},
        {latitude: 58.33334, longitude: 38.86962},
        {latitude: 58.30594, longitude: 38.86413},
        {latitude: 58.25542, longitude: 38.80643},
        {latitude: 58.18601, longitude: 38.79544},
        {latitude: 58.11791, longitude: 38.84215},
        {latitude: 58.09615, longitude: 38.86138},
        {latitude: 58.08164, longitude: 38.82017},
        {latitude: 58.0918, longitude: 38.77896},
        {latitude: 58.14374, longitude: 38.78173},
        {latitude: 58.1832, longitude: 38.73708},
        {latitude: 58.2454, longitude: 38.59628},
        {latitude: 58.2407, longitude: 38.56812},
        {latitude: 58.19659, longitude: 38.60452},
        {latitude: 58.14663, longitude: 38.65466},
        {latitude: 58.10277, longitude: 38.70343},
        {latitude: 58.09479, longitude: 38.69931},
        {latitude: 58.15939, longitude: 38.6231},
        {latitude: 58.15776, longitude: 38.59734},
        {latitude: 58.08209, longitude: 38.6004},
        {latitude: 58.1296, longitude: 38.48982},
        {latitude: 58.12924, longitude: 38.44449},
        {latitude: 58.13866, longitude: 38.40946},
        {latitude: 58.08318, longitude: 38.3236},
        {latitude: 58.10857, longitude: 38.22589},
        {latitude: 58.2331, longitude: 38.24238},
        {latitude: 58.25623, longitude: 38.02808},
        {latitude: 58.31396, longitude: 37.86873},
        {latitude: 58.43778, longitude: 37.64894},
        {latitude: 58.58693, longitude: 37.69839},
        {latitude: 58.56976, longitude: 37.83576},
        {latitude: 58.49809, longitude: 38.07204},
        {latitude: 58.57835, longitude: 38.15995},
        {latitude: 58.67555, longitude: 38.05555},
        {latitude: 58.80732, longitude: 37.9984},
        {latitude: 58.81301, longitude: 38.10555},
        {latitude: 58.86258, longitude: 37.99261},
        {latitude: 58.83772, longitude: 37.93904},
        {latitude: 58.90834, longitude: 37.87104},
        {latitude: 58.92791, longitude: 37.71795},
        {latitude: 58.9619, longitude: 37.59706},
        {latitude: 58.97181, longitude: 37.6685},
        {latitude: 58.99728, longitude: 37.73718},
        {latitude: 59.04815, longitude: 37.69597},
        {latitude: 59.09164, longitude: 37.67031},
        {latitude: 59.08529, longitude: 37.68267},
        {latitude: 59.11632, longitude: 37.69916},
        {latitude: 59.11772, longitude: 37.64558},
        {latitude: 59.14942, longitude: 37.58789}
        ]
    ]
    }];

var lakeTemplate = rybinskReservoir.mapPolygons.template;
lakeTemplate.stroke = am4core.color("#fff");
lakeTemplate.fill = am4core.color("#B6C3D8");
lakeTemplate.fillOpacity = 1;
lakeTemplate.strokeWidth = 1;
lakeTemplate.nonScalingStroke = true;
// lakeTemplate.tooltipText = "{title}";
lakeTemplate.tooltipHTML = `<center>{title}</center> \n{translation}`;

rybinskReservoir.tooltip.getFillFromObject = false;
rybinskReservoir.tooltip.background.fill = am4core.color("#3F4459");

// Lake Onega: Hover
var hs = lakeTemplate .states.create("hover");
hs.properties.fill = am4core.color("#666");