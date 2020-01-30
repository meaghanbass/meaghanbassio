// RUSSIA: Create map polygon series
var rusPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
rusPolygonSeries.geodata = am4geodata_russiaHigh;
rusPolygonSeries.exclude = ["RU-CHU"];
rusPolygonSeries.useGeodata = true;
rusPolygonSeries.nonScalingStroke = true;
rusPolygonSeries.strokeWidth = 0.5;
// RUSSIA: Configure series
var rusPolygonTemplate = rusPolygonSeries.mapPolygons.template;
rusPolygonTemplate.tooltipText = "{name}";
//rusPolygonTemplate.fill = chart.colors.getIndex(0);
// rusPolygonTemplate.fill = am4core.color("#ccc");
rusPolygonTemplate.fillOpacity = 1;
rusPolygonTemplate.nonScalingStroke = true;
// RUSSIA: Hover state
var hs = rusPolygonTemplate .states.create("hover");
hs.properties.fill = am4core.color("#3F4459");