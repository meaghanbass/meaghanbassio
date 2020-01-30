// ESTONIA: Series for Estonia map
var estoniaPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
estoniaPolygonSeries.geodata = am4geodata_estoniaLow;
// ESTONIA: Configure series
var estoniaPolygonTemplate = estoniaPolygonSeries.mapPolygons.template;
estoniaPolygonTemplate.tooltipText = "[bold]Estonia:[/] {name}";
// estoniaPolygonTemplate.fill = chart.colors.getIndex(2);
estoniaPolygonTemplate.fill = am4core.color("#f3f3f3");
estoniaPolygonTemplate.stroke = am4core.color("#f3f3f3");
estoniaPolygonTemplate.nonScalingStroke = true;
// ESTONIA: Hover state
var hs = estoniaPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleEstonia() {
    var series = estoniaPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}