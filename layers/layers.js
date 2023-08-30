ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32643").setExtent([393314.954054, 1691330.946474, 394410.211786, 1691882.978045]);
var wms_layers = [];

var lyr_lowcurtorim_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lowcurtorim",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lowcurtorim_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8237451.772635, 1722800.875058, 8239997.505636, 1724669.051085]
                            })
                        });
var format_FieldsCurtorimHandiKuris_1 = new ol.format.GeoJSON();
var features_FieldsCurtorimHandiKuris_1 = format_FieldsCurtorimHandiKuris_1.readFeatures(json_FieldsCurtorimHandiKuris_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_FieldsCurtorimHandiKuris_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FieldsCurtorimHandiKuris_1.addFeatures(features_FieldsCurtorimHandiKuris_1);
var lyr_FieldsCurtorimHandiKuris_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FieldsCurtorimHandiKuris_1, 
                style: style_FieldsCurtorimHandiKuris_1,
                interactive: true,
                title: '<img src="styles/legend/FieldsCurtorimHandiKuris_1.png" /> Fields Curtorim Handi Kuris'
            });

lyr_lowcurtorim_0.setVisible(true);lyr_FieldsCurtorimHandiKuris_1.setVisible(true);
var layersList = [lyr_lowcurtorim_0,lyr_FieldsCurtorimHandiKuris_1];
lyr_FieldsCurtorimHandiKuris_1.set('fieldAliases', {'fid': 'fid', 'S_No': 'S_No', 'Survey_No': 'Survey_No', 'Sub_Division_No': 'Sub_Division_No', 'Name_of_the_Occupant': 'Name_of_the_Occupant', 'Paid_or_NotPaid': 'Paid_or_NotPaid', 'Yield_Ha': 'Yield_Ha', 'Area_ha': 'Area_ha', 'Harvest_kg': 'Harvest_kg', 'Area': 'Area', 'Amount_Paid': 'Amount_Paid', 'Drone_Sprayed': 'Drone_Sprayed', 'Yield_Kg_/_Ha': 'Yield_Kg_/_Ha', 'Tractors_Used': 'Tractors_Used', });
lyr_FieldsCurtorimHandiKuris_1.set('fieldImages', {'fid': 'TextEdit', 'S_No': 'TextEdit', 'Survey_No': 'TextEdit', 'Sub_Division_No': 'TextEdit', 'Name_of_the_Occupant': 'TextEdit', 'Paid_or_NotPaid': 'CheckBox', 'Yield_Ha': 'TextEdit', 'Area_ha': 'TextEdit', 'Harvest_kg': 'TextEdit', 'Area': 'TextEdit', 'Amount_Paid': 'TextEdit', 'Drone_Sprayed': 'CheckBox', 'Yield_Kg_/_Ha': 'TextEdit', 'Tractors_Used': 'CheckBox', });
lyr_FieldsCurtorimHandiKuris_1.set('fieldLabels', {'fid': 'no label', 'S_No': 'inline label', 'Survey_No': 'inline label', 'Sub_Division_No': 'inline label', 'Name_of_the_Occupant': 'no label', 'Paid_or_NotPaid': 'no label', 'Yield_Ha': 'no label', 'Area_ha': 'no label', 'Harvest_kg': 'no label', 'Area': 'no label', 'Amount_Paid': 'no label', 'Drone_Sprayed': 'no label', 'Yield_Kg_/_Ha': 'no label', 'Tractors_Used': 'no label', });
lyr_FieldsCurtorimHandiKuris_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});