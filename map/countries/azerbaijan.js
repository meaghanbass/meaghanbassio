// AZERBAIJAN: Series for Azerbaijan map
var azerbaijanPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
azerbaijanPolygonSeries.geodata = am4geodata_azerbaijanLow;
// AZERBAIJAN: Configure series
var azerbaijanPolygonTemplate = azerbaijanPolygonSeries.mapPolygons.template;
azerbaijanPolygonTemplate.tooltipText = "[bold]Azerbaijan:[/] {name}";
// azerbaijanPolygonTemplate.fill = chart.colors.getIndex(4);
azerbaijanPolygonTemplate.fill = am4core.color("#f3f3f3");
azerbaijanPolygonTemplate.stroke = am4core.color("#f3f3f3");
azerbaijanPolygonTemplate.nonScalingStroke = true;
// AZERBAIJAN: Hover state
var hs = azerbaijanPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleAzerbaijan() {
    var series = azerbaijanPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}