// TURKEY: Series for Turkey map
var turkeyPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
turkeyPolygonSeries.geodata = am4geodata_turkeyLow;
// TURKEY: Configure series
var turkeyPolygonTemplate = turkeyPolygonSeries.mapPolygons.template;
turkeyPolygonTemplate.tooltipText = "[bold]Turkey:[/] {name}";
// turkeyPolygonTemplate.fill = chart.colors.getIndex(4);
turkeyPolygonTemplate.fill = am4core.color("#f3f3f3");
turkeyPolygonTemplate.stroke = am4core.color("#f3f3f3");
turkeyPolygonTemplate.nonScalingStroke = true;
// TURKEY: Hover state
var hs = turkeyPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");


function toggleTurkey() {
    var series = turkeyPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}