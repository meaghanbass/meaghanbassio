// Themes begin
am4core.useTheme(am4themes_animated);
am4core.options.autoSetClassName = true;
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_russiaHigh;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create a zoom control
chart.zoomControl = new am4maps.ZoomControl();

// Zoom level
chart.homeZoomLevel = 3.9;
chart.homeGeoPoint = {
  latitude: 59.071,
  longitude: 35.68
};



// Disable zoom and pan
// chart.maxZoomLevel = null;
chart.seriesContainer.draggable = true;
chart.seriesContainer.resizable = false;

// AMCharts default colors at: https://github.com/amcharts/amcharts4/blob/master/dist/es2015/.internal/themes/amcharts.js