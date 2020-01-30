// Urals
var urals = chart.series.push(new am4maps.MapPolygonSeries());

// Mountain pattern
var pattern_mountain = new am4core.Pattern();
var image = new am4core.Image();
image.href = "https://s3-us-west-1.amazonaws.com/assetsglobal/patterns/circle/8.png";
image.width = 1;
image.height = 1;
pattern_mountain.width = 2;
pattern_mountain.height = 2;
pattern_mountain.addElement(image.element);

var pattern_mountain_hover = new am4core.Pattern();
var image_hover = new am4core.Image();
image_hover.href = "https://s3-us-west-1.amazonaws.com/assetsglobal/patterns/circle/0.png";
image_hover.width = 1;
image_hover.height = 1;
pattern_mountain_hover.width = 2;
pattern_mountain_hover.height = 2;
pattern_mountain_hover.addElement(image_hover.element);


urals.data = [{
    "title": "Urals",
    "translation": "Уральские горы",
    "fill": pattern_mountain,
    "fill_hover_color": am4core.color("#367B25"),
    "fill_hover": pattern_mountain_hover,
    "geoPolygon": [
    [
        {latitude: 68.16391, longitude: 68.39906},
        {latitude: 67.60147, longitude: 67.80475},
        {latitude: 67.05966, longitude: 65.60819},
        {latitude: 66.57543, longitude: 64.11453},
        {latitude: 66.25906, longitude: 63.2359},
        {latitude: 65.75892, longitude: 62.44514},
        {latitude: 65.21208, longitude: 61.56652},
        {latitude: 64.72883, longitude: 61.03934},
        {latitude: 64.23678, longitude: 60.68789},
        {latitude: 63.69691, longitude: 60.77575},
        {latitude: 63.06707, longitude: 60.60003},
        {latitude: 62.09611, longitude: 60.51217},
        {latitude: 61.47301, longitude: 60.51217},
        {latitude: 60.49282, longitude: 59.98499},
        {latitude: 60.01327, longitude: 59.28209},
        {latitude: 59.61566, longitude: 59.89713},
        {latitude: 59.03293, longitude: 60.60003},
        {latitude: 58.62362, longitude: 61.39079},
        {latitude: 57.97726, longitude: 61.74224},
        {latitude: 57.31902, longitude: 61.74224},
        {latitude: 56.74528, longitude: 61.39079},
        {latitude: 55.67024, longitude: 60.77575},
        {latitude: 55.42169, longitude: 60.86362},
        {latitude: 54.51386, longitude: 60.16072},
        {latitude: 53.58539, longitude: 59.45782},
        {latitude: 53.00773, longitude: 59.36995},
        {latitude: 51.82888, longitude: 58.57919},
        {latitude: 51.44716, longitude: 58.49133},
        {latitude: 51.88315, longitude: 57.08553},
        {latitude: 52.63606, longitude: 55.504},
        {latitude: 53.38388, longitude: 55.62663},
        {latitude: 54.30398, longitude: 56.2856},
        {latitude: 55.32913, longitude: 56.04398},
        {latitude: 56.24307, longitude: 55.93415},
        {latitude: 57.24284, longitude: 55.7145},
        {latitude: 58.41236, longitude: 55.53877},
        {latitude: 59.61104, longitude: 55.53877},
        {latitude: 60.24938, longitude: 56.57116},
        {latitude: 61.31086, longitude: 56.74688},
        {latitude: 62.32738, longitude: 57.25209},
        {latitude: 63.46807, longitude: 57.97696},
        {latitude: 64.24235, longitude: 58.59199},
        {latitude: 65.40097, longitude: 59.00934},
        {latitude: 66.18452, longitude: 59.64634},
        {latitude: 66.84107, longitude: 61.11804},
        {latitude: 67.45524, longitude: 62.96315},
        {latitude: 68.08676, longitude: 64.28109},
        {latitude: 68.72537, longitude: 65.40134}
        ]
    ]
    }];

var mountainTemplate = urals.mapPolygons.template;
// mountainTemplate.stroke = am4core.color("#fff");
mountainTemplate.fillOpacity = 1;
mountainTemplate.strokeWidth = 0;
mountainTemplate.nonScalingStroke = true;
// mountainTemplate.tooltipText = "{title} \n{translation}";
mountainTemplate.tooltipHTML = `<center>{title}</center> \n{translation}`;

urals.tooltip.getFillFromObject = false;
urals.tooltip.background.fill = am4core.color("#3F4459");
mountainTemplate.propertyFields.fill = "fill";

// Urals: Hover
var hs = mountainTemplate .states.create("hover");
hs.propertyFields.fill = am4core.color("#367B25");
hs.propertyFields.fill = "fill_hover";


// Toggle show/hide mountains
function toggleMountains() {
    var series = urals;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}