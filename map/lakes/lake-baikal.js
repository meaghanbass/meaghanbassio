// Lake Baikal
var lakeBaikal = chart.series.push(new am4maps.MapPolygonSeries());

lakeBaikal.data = [{
    "title": "Lake Baikal",
    "translation": "озеро Байкал",
    "geoPolygon": [
        [
            {longitude: 109.8733, latitude: 55.7185},
            {longitude: 109.7803, latitude: 55.0544},
            {longitude: 109.5272, latitude: 54.6329},
            {longitude: 109.4768, latitude: 54.2879},
            {longitude: 109.5613, latitude: 54.1669},
            {longitude: 109.2605, latitude: 53.8891},
            {longitude: 108.8083, latitude: 53.7899},
            {longitude: 108.6494, latitude: 53.6044},
            {longitude: 108.929, latitude: 53.5735},
            {longitude: 108.979, latitude: 53.3648},
            {longitude: 108.6079, latitude: 53.283},
            {longitude: 108.2864, latitude: 53.1049},
            {longitude: 108.2072, latitude: 52.9241},
            {longitude: 107.7928, latitude: 52.7137},
            {longitude: 107.5543, latitude: 52.7054},
            {longitude: 106.955, latitude: 52.4885},
            {longitude: 106.7398, latitude: 52.3213},
            {longitude: 106.4864, latitude: 52.3825},
            {longitude: 106.2441, latitude: 52.2483},
            {longitude: 106.2921, latitude: 52.1385},
            {longitude: 105.9324, latitude: 51.7376},
            {longitude: 104.8064, latitude: 51.4782},
            {longitude: 104.309, latitude: 51.4997},
            {longitude: 103.8536, latitude: 51.6169},
            {longitude: 103.7273, latitude: 51.7193},
            {longitude: 104.6472, latitude: 51.7882},
            {longitude: 105.2506, latitude: 51.933},
            {longitude: 105.6074, latitude: 52.1308},
            {longitude: 105.9836, latitude: 52.4947},
            {longitude: 106.4087, latitude: 52.6318},
            {longitude: 106.9094, latitude: 52.9892},
            {longitude: 106.8172, latitude: 53.0775},
            {longitude: 107.5284, latitude: 53.4322},
            {longitude: 107.6703, latitude: 53.6542},
            {longitude: 108.1819, latitude: 53.9},
            {longitude: 108.509, latitude: 54.3191},
            {longitude: 108.5867, latitude: 54.4984},
            {longitude: 108.8174, latitude: 54.7083},
            {longitude: 108.9034, latitude: 54.9611},
            {longitude: 109.1842, latitude: 55.1884},
            {longitude: 109.2013, latitude: 55.5581},
            {longitude: 109.5195, latitude: 55.7539},
            {longitude: 109.8733, latitude: 55.7185},
            {longitude: 107.7654, latitude: 53.3171}
            

        ]
    ]
    }];

var lakeTemplate = lakeBaikal.mapPolygons.template;
lakeTemplate.stroke = am4core.color("#fff");
lakeTemplate.fill = am4core.color("#B6C3D8");
lakeTemplate.fillOpacity = 1;
lakeTemplate.strokeWidth = 1;
lakeTemplate.nonScalingStroke = true;
// lakeTemplate.tooltipText = "{title} \n{translation}";
lakeTemplate.tooltipHTML = `<center>{title}</center> \n{translation}`;

lakeBaikal.tooltip.getFillFromObject = false;
lakeBaikal.tooltip.background.fill = am4core.color("#3F4459");

// Lake BaikallakeBaikal: Hover
var hs = lakeTemplate .states.create("hover");
hs.properties.fill = am4core.color("#666");