// LATVIA: Series for Latvia map
var latviaPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
latviaPolygonSeries.geodata = am4geodata_latviaLow;
// LATVIA: Configure series
var latviaPolygonTemplate = latviaPolygonSeries.mapPolygons.template;
latviaPolygonTemplate.tooltipText = "[bold]Latvia:[/] {name}";
// latviaPolygonTemplate.fill = chart.colors.getIndex(3);
latviaPolygonTemplate.fill = am4core.color("#f3f3f3");
latviaPolygonTemplate.stroke = am4core.color("#f3f3f3");
latviaPolygonTemplate.nonScalingStroke = true;
// LATVIA: Hover state
var hs = latviaPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleLatvia() {
    var series = latviaPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}