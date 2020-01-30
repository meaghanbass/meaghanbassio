// BELARUS: Series for Belarus map
var belarusPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
belarusPolygonSeries.geodata = am4geodata_belarusLow;
// BELARUS: Configure series
var belarusPolygonTemplate = belarusPolygonSeries.mapPolygons.template;
belarusPolygonTemplate.tooltipText = "[bold]Belarus:[/] {name}";
// belarusPolygonTemplate.fill = chart.colors.getIndex(4);
belarusPolygonTemplate.fill = am4core.color("#f3f3f3");
belarusPolygonTemplate.stroke = am4core.color("#f3f3f3");
belarusPolygonTemplate.nonScalingStroke = true;
// BELARUS: Hover state
var hs = belarusPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleBelarus() {
    var series = belarusPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}