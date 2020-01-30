// UKRAINE: Series for Ukraine map
var ukrainePolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
ukrainePolygonSeries.geodata = am4geodata_ukraineLow;
// UKRAINE: Configure series
var ukrainePolygonTemplate = ukrainePolygonSeries.mapPolygons.template;
ukrainePolygonTemplate.tooltipText = "[bold]Ukraine:[/] {name}";
// ukrainePolygonTemplate.fill = chart.colors.getIndex(4);
ukrainePolygonTemplate.fill = am4core.color("#f3f3f3");
ukrainePolygonTemplate.stroke = am4core.color("#f3f3f3");
ukrainePolygonTemplate.nonScalingStroke = true;
// UKRAINE: Hover state
var hs = ukrainePolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleUkraine() {
    var series = ukrainePolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}