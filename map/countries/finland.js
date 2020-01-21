// FINLAND: Series for Finland map
var finlandPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
finlandPolygonSeries.geodata = am4geodata_finlandLow;
// FINLAND: Configure series
var finlandPolygonTemplate = finlandPolygonSeries.mapPolygons.template;
finlandPolygonTemplate.tooltipText = "[bold]Finland:[/] {name}";
// finlandPolygonTemplate.fill = chart.colors.getIndex(1);
finlandPolygonTemplate.fill = am4core.color("#f3f3f3");
finlandPolygonTemplate.stroke = am4core.color("#f3f3f3");
finlandPolygonTemplate.nonScalingStroke = true;
// FINLAND: Hover state
var hs = finlandPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");

$(document).ready(function(){
    $("#cities")
    .hover(function() {
        $(finlandPolygonTemplate)
            .show();
    }, function(){
        $(finlandPolygonTemplate)
            .hide();
    });
});



function toggleFinland() {
    var series = finlandPolygonSeries;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}