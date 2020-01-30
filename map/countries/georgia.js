// GEORGIA: Series for Georgia map
var georgiaPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
georgiaPolygonSeries.geodata = am4geodata_georgiaLow;
// GEORGIA: Configure series
var georgiaPolygonTemplate = georgiaPolygonSeries.mapPolygons.template;
georgiaPolygonTemplate.tooltipText = "[bold]Georgia:[/] {name}";
// georgiaPolygonTemplate.fill = chart.colors.getIndex(4);
georgiaPolygonTemplate.fill = am4core.color("#f3f3f3");
georgiaPolygonTemplate.stroke = am4core.color("#f3f3f3");
georgiaPolygonTemplate.nonScalingStroke = true;
// GEORGIA: Hover state
var hs = georgiaPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleGeorgia() {
    var series = georgiaPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}