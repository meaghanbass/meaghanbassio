// MONGOLIA: Series for Mongolia map
var mongoliaPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
mongoliaPolygonSeries.geodata = am4geodata_mongoliaLow;
// MONGOLIA: Configure series
var mongoliaPolygonTemplate = mongoliaPolygonSeries.mapPolygons.template;
mongoliaPolygonTemplate.tooltipText = "[bold]Mongolia:[/] {name}";
// mongoliaPolygonTemplate.fill = chart.colors.getIndex(4);
mongoliaPolygonTemplate.fill = am4core.color("#f3f3f3");
mongoliaPolygonTemplate.stroke = am4core.color("#f3f3f3");
mongoliaPolygonTemplate.nonScalingStroke = true;
// MONGOLIA: Hover state
var hs = mongoliaPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleMongolia() {
    var series = mongoliaPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}