var mapData = {
    'cities': [
        {"name":"Москва", "value":"743", "latitude":55.752, "longitude":37.615, "color":chart.colors.getIndex(8)},
        {"name":"Старая Ладога", "value":"799", "latitude":60.0016, "longitude":32.2926, "color":chart.colors.getIndex(1)},
        {"name":"Великий Новгород", "value":"836", "latitude":58.33, "longitude":31.16, "color":chart.colors.getIndex(1)},
        {"name":"Белозерск", "value":"841", "latitude":60.02, "longitude":37.46, "color":chart.colors.getIndex(2)},
        {"name":"Изборск", "value":"935", "latitude":57.7082, "longitude":27.8609, "color":chart.colors.getIndex(3)},
        {"name":"Birka", "value":"750", "latitude":59.2010, "longitude":17.3243, "color":chart.colors.getIndex(3)},
        {"name":"Сарское городище", "value":"700", "latitude":57.0749, "longitude":39.2896, "color":chart.colors.getIndex(3)},
        {"name":"Darband (Derbent / Дербент)", "value":"700", "latitude":42.03, "longitude":48.18, "color":chart.colors.getIndex(3)},
        {"name":"Псков", "value":"700", "latitude":57.49, "longitude":28.20, "color":chart.colors.getIndex(3)},
        {"name":"Constantinople", "value":"700", "latitude":41.0050, "longitude":28.5720, "color":chart.colors.getIndex(3)},
        {"name":"Старая Русса", "value":"700", "latitude":58.00, "longitude":31.20, "color":chart.colors.getIndex(3)}
]};
// Values in the objects above indicate the year that the city was founded or civilization was significant



/* ===================================================================
======================================================================
|||                         5th Century                            |||
======================================================================
=================================================================== */
// Filter cities based on object -> property: value
function get5cCities(names) {
    return names
        .filter(function(obj) {
            return obj.value >= 400 && obj.value < 500;
        })
        .map(function(obj) {
            return obj;
        });
}

// Console the cities that meet above criteria
var cities5c = get5cCities(mapData.cities);
console.log(cities5c);

var imageSeries5c = chart.series.push(new am4maps.MapImageSeries());
    imageSeries5c.data = cities5c;
    imageSeries5c.dataFields.value = "value";

var imageTemplate = imageSeries5c.mapImages.template;
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageTemplate.nonScaling = true

var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 1;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";

imageSeries5c.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 4,
    "max": 4,
    "dataField": "value"
})

// Toggle filtered cities on and off
function toggle5cCities() {
    var series = imageSeries5c;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}



/* ===================================================================
======================================================================
|||                         6th Century                            |||
======================================================================
=================================================================== */
// Filter cities based on object -> property: value
function get6cCities(names) {
    return names
        .filter(function(obj) {
            return obj.value >= 500 && obj.value < 600;
        })
        .map(function(obj) {
            return obj;
        });
}

// Console the cities that meet above criteria
var cities6c = get6cCities(mapData.cities);
console.log(cities6c);

var imageSeries6c = chart.series.push(new am4maps.MapImageSeries());
    imageSeries6c.data = cities6c;
    imageSeries6c.dataFields.value = "value";

var imageTemplate = imageSeries6c.mapImages.template;
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageTemplate.nonScaling = true

var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";

imageSeries6c.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 4,
    "max": 4,
    "dataField": "value"
})

// Toggle filtered cities on and off
function toggle6cCities() {
    var series = imageSeries6c;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}



/* ===================================================================
======================================================================
|||                         7th Century                            |||
======================================================================
=================================================================== */
// Filter cities based on object -> property: value
function get7cCities(names) {
    return names
        .filter(function(obj) {
            return obj.value >= 600 && obj.value < 700;
        })
        .map(function(obj) {
            return obj;
        });
}

// Console the cities that meet above criteria
var cities7c = get7cCities(mapData.cities);
console.log(cities7c);

var imageSeries7c = chart.series.push(new am4maps.MapImageSeries());
    imageSeries7c.data = cities7c;
    imageSeries7c.dataFields.value = "value";

var imageTemplate = imageSeries7c.mapImages.template;
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageTemplate.nonScaling = true

var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";

imageSeries7c.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 4,
    "max": 4,
    "dataField": "value"
})

// Toggle filtered cities on and off
function toggle7cCities() {
    var series = imageSeries8c;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}



/* ===================================================================
======================================================================
|||                         8th Century                            |||
======================================================================
=================================================================== */
// Filter cities based on object -> property: value
function get8cCities(names) {
    return names
        .filter(function(obj) {
            return obj.value >= 700 && obj.value < 800;
        })
        .map(function(obj) {
            return obj;
        });
}

// Console the cities that meet above criteria
var cities8c = get8cCities(mapData.cities);
console.log(cities8c);

var imageSeries8c = chart.series.push(new am4maps.MapImageSeries());
    imageSeries8c.data = cities8c;
    imageSeries8c.dataFields.value = "value";

var imageTemplate = imageSeries8c.mapImages.template;
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageTemplate.nonScaling = true

var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";

imageSeries8c.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 4,
    "max": 4,
    "dataField": "value"
})

// Toggle filtered cities on and off
function toggle8cCities() {
    var series = imageSeries8c;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}



/* ===================================================================
======================================================================
|||                         9th Century                            |||
======================================================================
=================================================================== */
// Filter cities based on object -> property: value
function get9cCities(names) {
    return names
        .filter(function(obj) {
            return  obj.value >= 800 && obj.value < 900;
        })
        .map(function(obj) {
            return obj;
        });
}

// Console the cities that meet above criteria
var cities9c = get9cCities(mapData.cities);
console.log(cities9c);

var imageSeries9c = chart.series.push(new am4maps.MapImageSeries());
    imageSeries9c.data = cities9c;
    imageSeries9c.dataFields.value = "value";

var imageTemplate = imageSeries9c.mapImages.template;
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageTemplate.nonScaling = true

var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";

imageSeries9c.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 4,
    "max": 4,
    "dataField": "value"
})

function toggle9cCities() {
    var series = imageSeries9c;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}



/* ===================================================================
======================================================================
|||                         10th Century                           |||
======================================================================
=================================================================== */
// Filter cities based on object -> property: value
function get10cCities(names) {
    return names
        .filter(function(obj) {
            return  obj.value >= 900 && obj.value < 1000;
        })
        .map(function(obj) {
            return obj;
        });
}

// Console the cities that meet above criteria
var cities10c = get10cCities(mapData.cities);
console.log(cities10c);

var imageSeries10c = chart.series.push(new am4maps.MapImageSeries());
    imageSeries10c.data = cities10c;
    imageSeries10c.dataFields.value = "value";

var imageTemplate = imageSeries10c.mapImages.template;
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageTemplate.nonScaling = true

var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";

imageSeries10c.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 4,
    "max": 4,
    "dataField": "value"
})

function toggle10cCities() {
    var series = imageSeries10c;
    if (series.isHiding || series.isHidden) {
        series.show();
    }
    else {
        series.hide();
    }
}

