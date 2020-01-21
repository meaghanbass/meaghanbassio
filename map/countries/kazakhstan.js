// KAZAKHSTAN: Series for Kazakhstan map
var kazakhstanPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
kazakhstanPolygonSeries.geodata = am4geodata_kazakhstanLow;
// KAZAKHSTAN: Configure series
var kazakhstanPolygonTemplate = kazakhstanPolygonSeries.mapPolygons.template;
kazakhstanPolygonTemplate.tooltipText = "[bold]Kazakhstan:[/] {name}";
// kazakhstanPolygonTemplate.fill = chart.colors.getIndex(4);
kazakhstanPolygonTemplate.fill = am4core.color("#f3f3f3");
kazakhstanPolygonTemplate.stroke = am4core.color("#f3f3f3");
kazakhstanPolygonTemplate.nonScalingStroke = true;
// KAZAKHSTAN: Hover state
var hs = kazakhstanPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleKazakhstan() {
    var series = kazakhstanPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}