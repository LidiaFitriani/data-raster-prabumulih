var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_koperasimerahputihdesapangkul_1 = new ol.format.GeoJSON();
var features_koperasimerahputihdesapangkul_1 = format_koperasimerahputihdesapangkul_1.readFeatures(json_koperasimerahputihdesapangkul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koperasimerahputihdesapangkul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koperasimerahputihdesapangkul_1.addFeatures(features_koperasimerahputihdesapangkul_1);
var lyr_koperasimerahputihdesapangkul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koperasimerahputihdesapangkul_1, 
                style: style_koperasimerahputihdesapangkul_1,
                popuplayertitle: 'koperasi merah putih desa pangkul',
                interactive: true,
                title: '<img src="styles/legend/koperasimerahputihdesapangkul_1.png" /> koperasi merah putih desa pangkul'
            });
var format_koperasidesapangkul_2 = new ol.format.GeoJSON();
var features_koperasidesapangkul_2 = format_koperasidesapangkul_2.readFeatures(json_koperasidesapangkul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koperasidesapangkul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koperasidesapangkul_2.addFeatures(features_koperasidesapangkul_2);
var lyr_koperasidesapangkul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koperasidesapangkul_2, 
                style: style_koperasidesapangkul_2,
                popuplayertitle: 'koperasi desa pangkul',
                interactive: true,
                title: '<img src="styles/legend/koperasidesapangkul_2.png" /> koperasi desa pangkul'
            });
var format_kopersimerahputihsindur_3 = new ol.format.GeoJSON();
var features_kopersimerahputihsindur_3 = format_kopersimerahputihsindur_3.readFeatures(json_kopersimerahputihsindur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kopersimerahputihsindur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kopersimerahputihsindur_3.addFeatures(features_kopersimerahputihsindur_3);
var lyr_kopersimerahputihsindur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kopersimerahputihsindur_3, 
                style: style_kopersimerahputihsindur_3,
                popuplayertitle: 'kopersi merah putih sindur',
                interactive: true,
                title: '<img src="styles/legend/kopersimerahputihsindur_3.png" /> kopersi merah putih sindur'
            });
var format_koperasimerahputihsungaimedang_4 = new ol.format.GeoJSON();
var features_koperasimerahputihsungaimedang_4 = format_koperasimerahputihsungaimedang_4.readFeatures(json_koperasimerahputihsungaimedang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koperasimerahputihsungaimedang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koperasimerahputihsungaimedang_4.addFeatures(features_koperasimerahputihsungaimedang_4);
cluster_koperasimerahputihsungaimedang_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_koperasimerahputihsungaimedang_4
});
var lyr_koperasimerahputihsungaimedang_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_koperasimerahputihsungaimedang_4, 
                style: style_koperasimerahputihsungaimedang_4,
                popuplayertitle: 'koperasi merah putih sungai medang',
                interactive: true,
                title: '<img src="styles/legend/koperasimerahputihsungaimedang_4.png" /> koperasi merah putih sungai medang'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_koperasimerahputihdesapangkul_1.setVisible(true);lyr_koperasidesapangkul_2.setVisible(true);lyr_kopersimerahputihsindur_3.setVisible(true);lyr_koperasimerahputihsungaimedang_4.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_koperasimerahputihdesapangkul_1,lyr_koperasidesapangkul_2,lyr_kopersimerahputihsindur_3,lyr_koperasimerahputihsungaimedang_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_koperasimerahputihdesapangkul_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_koperasidesapangkul_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_kopersimerahputihsindur_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_koperasimerahputihsungaimedang_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', 'kelurahan': 'kelurahan', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_koperasimerahputihdesapangkul_1.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_koperasidesapangkul_2.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_kopersimerahputihsindur_3.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_koperasimerahputihsungaimedang_4.set('fieldImages', {'id': '', 'nama': '', 'jenis': '', 'kelurahan': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_koperasimerahputihdesapangkul_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_koperasidesapangkul_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_kopersimerahputihsindur_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_koperasimerahputihsungaimedang_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'jenis': 'no label', 'kelurahan': 'no label', });
lyr_koperasimerahputihsungaimedang_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});