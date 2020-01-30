// CHINA: Series for China map
var chinaPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
chinaPolygonSeries.geodata = am4geodata_chinaHigh;
chinaPolygonSeries.include = ["CN-NM","CN-HL"];
chinaPolygonSeries.useGeodata = true;
chinaPolygonSeries.nonScalingStroke = true;
chinaPolygonSeries.strokeWidth = 0.5;
// CHINA: Configure series
var chinaPolygonTemplate = chinaPolygonSeries.mapPolygons.template;
chinaPolygonTemplate.tooltipText = "[bold]China:[/] {name}";
// chinaPolygonTemplate.fill = chart.colors.getIndex(4);
chinaPolygonTemplate.fill = am4core.color("#f3f3f3");
chinaPolygonTemplate.stroke = am4core.color("#f3f3f3");
chinaPolygonTemplate.nonScalingStroke = true;
// CHINA: Hover state
var hs = chinaPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");

function toggleChina() {
    var series = chinaPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}