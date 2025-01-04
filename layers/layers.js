var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Communes_1 = new ol.format.GeoJSON();
var features_Communes_1 = format_Communes_1.readFeatures(json_Communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_1.addFeatures(features_Communes_1);
var lyr_Communes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_1, 
                style: style_Communes_1,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_1.png" /> Communes'
            });
var format_GR_2 = new ol.format.GeoJSON();
var features_GR_2 = format_GR_2.readFeatures(json_GR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GR_2.addFeatures(features_GR_2);
var lyr_GR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GR_2, 
                style: style_GR_2,
                popuplayertitle: 'GR',
                interactive: true,
                title: '<img src="styles/legend/GR_2.png" /> GR'
            });
var format_Sitesvollibre_3 = new ol.format.GeoJSON();
var features_Sitesvollibre_3 = format_Sitesvollibre_3.readFeatures(json_Sitesvollibre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesvollibre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesvollibre_3.addFeatures(features_Sitesvollibre_3);
var lyr_Sitesvollibre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesvollibre_3, 
                style: style_Sitesvollibre_3,
                popuplayertitle: 'Sites vol libre',
                interactive: true,
                title: '<img src="styles/legend/Sitesvollibre_3.png" /> Sites vol libre'
            });
var format_Sitesdescalade_4 = new ol.format.GeoJSON();
var features_Sitesdescalade_4 = format_Sitesdescalade_4.readFeatures(json_Sitesdescalade_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesdescalade_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesdescalade_4.addFeatures(features_Sitesdescalade_4);
var lyr_Sitesdescalade_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesdescalade_4, 
                style: style_Sitesdescalade_4,
                popuplayertitle: 'Sites d\'escalade',
                interactive: true,
                title: '<img src="styles/legend/Sitesdescalade_4.png" /> Sites d\'escalade'
            });
var format_Piscines_5 = new ol.format.GeoJSON();
var features_Piscines_5 = format_Piscines_5.readFeatures(json_Piscines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piscines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piscines_5.addFeatures(features_Piscines_5);
var lyr_Piscines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piscines_5, 
                style: style_Piscines_5,
                popuplayertitle: 'Piscines',
                interactive: true,
                title: '<img src="styles/legend/Piscines_5.png" /> Piscines'
            });
var format_Officesdutourisme_6 = new ol.format.GeoJSON();
var features_Officesdutourisme_6 = format_Officesdutourisme_6.readFeatures(json_Officesdutourisme_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Officesdutourisme_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Officesdutourisme_6.addFeatures(features_Officesdutourisme_6);
var lyr_Officesdutourisme_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Officesdutourisme_6, 
                style: style_Officesdutourisme_6,
                popuplayertitle: 'Offices du tourisme',
                interactive: true,
                title: '<img src="styles/legend/Officesdutourisme_6.png" /> Offices du tourisme'
            });
var format_MaisonduParcNationnaldesEcrins_7 = new ol.format.GeoJSON();
var features_MaisonduParcNationnaldesEcrins_7 = format_MaisonduParcNationnaldesEcrins_7.readFeatures(json_MaisonduParcNationnaldesEcrins_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaisonduParcNationnaldesEcrins_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaisonduParcNationnaldesEcrins_7.addFeatures(features_MaisonduParcNationnaldesEcrins_7);
var lyr_MaisonduParcNationnaldesEcrins_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaisonduParcNationnaldesEcrins_7, 
                style: style_MaisonduParcNationnaldesEcrins_7,
                popuplayertitle: 'Maison du Parc Nationnal des Ecrins',
                interactive: true,
                title: '<img src="styles/legend/MaisonduParcNationnaldesEcrins_7.png" /> Maison du Parc Nationnal des Ecrins'
            });
var format_Centresquestres_8 = new ol.format.GeoJSON();
var features_Centresquestres_8 = format_Centresquestres_8.readFeatures(json_Centresquestres_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centresquestres_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centresquestres_8.addFeatures(features_Centresquestres_8);
var lyr_Centresquestres_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centresquestres_8, 
                style: style_Centresquestres_8,
                popuplayertitle: 'Centres équestres',
                interactive: true,
                title: '<img src="styles/legend/Centresquestres_8.png" /> Centres équestres'
            });
var format_Campings_9 = new ol.format.GeoJSON();
var features_Campings_9 = format_Campings_9.readFeatures(json_Campings_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campings_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campings_9.addFeatures(features_Campings_9);
var lyr_Campings_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campings_9, 
                style: style_Campings_9,
                popuplayertitle: 'Campings',
                interactive: true,
                title: '<img src="styles/legend/Campings_9.png" /> Campings'
            });
var format_Sommet_10 = new ol.format.GeoJSON();
var features_Sommet_10 = format_Sommet_10.readFeatures(json_Sommet_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sommet_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sommet_10.addFeatures(features_Sommet_10);
var lyr_Sommet_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sommet_10, 
                style: style_Sommet_10,
                popuplayertitle: 'Sommet',
                interactive: true,
                title: '<img src="styles/legend/Sommet_10.png" /> Sommet'
            });
var format_Communautdecommunes_11 = new ol.format.GeoJSON();
var features_Communautdecommunes_11 = format_Communautdecommunes_11.readFeatures(json_Communautdecommunes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communautdecommunes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communautdecommunes_11.addFeatures(features_Communautdecommunes_11);
var lyr_Communautdecommunes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communautdecommunes_11, 
                style: style_Communautdecommunes_11,
                popuplayertitle: 'Communauté de communes',
                interactive: true,
                title: '<img src="styles/legend/Communautdecommunes_11.png" /> Communauté de communes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Communes_1.setVisible(true);lyr_GR_2.setVisible(true);lyr_Sitesvollibre_3.setVisible(true);lyr_Sitesdescalade_4.setVisible(true);lyr_Piscines_5.setVisible(true);lyr_Officesdutourisme_6.setVisible(true);lyr_MaisonduParcNationnaldesEcrins_7.setVisible(true);lyr_Centresquestres_8.setVisible(true);lyr_Campings_9.setVisible(true);lyr_Sommet_10.setVisible(true);lyr_Communautdecommunes_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Communes_1,lyr_GR_2,lyr_Sitesvollibre_3,lyr_Sitesdescalade_4,lyr_Piscines_5,lyr_Officesdutourisme_6,lyr_MaisonduParcNationnaldesEcrins_7,lyr_Centresquestres_8,lyr_Campings_9,lyr_Sommet_10,lyr_Communautdecommunes_11];
lyr_Communes_1.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'rapport DN': 'rapport DN', 'Surfacekm�': 'Surfacekm�', 'densitepop': 'densitepop', });
lyr_GR_2.set('fieldAliases', {'name': 'Nom :', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sitesvollibre_3.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'Nom : ', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_Sitesdescalade_4.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'Nom :', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_Piscines_5.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'Nom :', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_Officesdutourisme_6.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'Nom :', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_MaisonduParcNationnaldesEcrins_7.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'Nom :', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_Centresquestres_8.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'Nom : ', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_Campings_9.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'Nom :', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_Sommet_10.set('fieldAliases', {'fid': 'fid', 'MNTcomplet': 'MNTcomplet', 'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'Nom :', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ID_BAN': 'ID_BAN', 'layer': 'layer', 'path': 'path', 'Altidudes': 'Altitudes :', });
lyr_Communautdecommunes_11.set('fieldAliases', {'FID': 'FID', });
lyr_Communes_1.set('fieldImages', {'ID': 'Hidden', 'INSEE_COM': 'Hidden', 'INSEE_ARR': 'Hidden', 'INSEE_COL': 'Hidden', 'INSEE_DEP': 'Hidden', 'INSEE_REG': 'Hidden', 'POPULATION': 'Hidden', 'SURFACE_HA': 'Hidden', 'DATE_CREAT': 'Hidden', 'DATE_MAJ': 'Hidden', 'DATE_APP': 'Hidden', 'DATE_CONF': 'Hidden', 'CODE_POST': 'Hidden', 'NOM': 'Hidden', 'CL_ARROND': 'Hidden', 'CL_COLLTER': 'Hidden', 'CL_DEPART': 'Hidden', 'CL_REGION': 'Hidden', 'CAPITALE': 'Hidden', 'DATE_RCT': 'Hidden', 'RECENSEUR': 'Hidden', 'SIREN_EPCI': 'Hidden', 'ID_CH_LIEU': 'Hidden', 'ID_AUT_ADM': 'Hidden', 'CODE_SIREN': 'Hidden', 'rapport DN': 'Hidden', 'Surfacekm�': 'Hidden', 'densitepop': 'Hidden', });
lyr_GR_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', });
lyr_Sitesvollibre_3.set('fieldImages', {'ID': 'Hidden', 'CLASSE': 'Hidden', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'Hidden', 'STATUT_TOP': 'Hidden', 'DATE_TOP': 'Hidden', 'LANGUE': 'Hidden', });
lyr_Sitesdescalade_4.set('fieldImages', {'ID': 'Hidden', 'CLASSE': 'Hidden', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'Hidden', 'STATUT_TOP': 'Hidden', 'DATE_TOP': 'Hidden', 'LANGUE': 'Hidden', });
lyr_Piscines_5.set('fieldImages', {'ID': 'Hidden', 'CLASSE': 'Hidden', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'Hidden', 'STATUT_TOP': 'Hidden', 'DATE_TOP': 'Hidden', 'LANGUE': 'Hidden', });
lyr_Officesdutourisme_6.set('fieldImages', {'ID': 'Hidden', 'CLASSE': 'Hidden', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'Hidden', 'STATUT_TOP': 'Hidden', 'DATE_TOP': 'Hidden', 'LANGUE': 'Hidden', });
lyr_MaisonduParcNationnaldesEcrins_7.set('fieldImages', {'ID': 'Hidden', 'CLASSE': 'Hidden', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'Hidden', 'STATUT_TOP': 'Hidden', 'DATE_TOP': 'Hidden', 'LANGUE': 'Hidden', });
lyr_Centresquestres_8.set('fieldImages', {'ID': 'Hidden', 'CLASSE': 'Hidden', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'Hidden', 'STATUT_TOP': 'Hidden', 'DATE_TOP': 'Hidden', 'LANGUE': 'Hidden', });
lyr_Campings_9.set('fieldImages', {'ID': 'Hidden', 'CLASSE': 'Hidden', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'Hidden', 'STATUT_TOP': 'Hidden', 'DATE_TOP': 'Hidden', 'LANGUE': 'Hidden', });
lyr_Sommet_10.set('fieldImages', {'fid': 'Hidden', 'MNTcomplet': 'Hidden', 'ID': 'Hidden', 'NATURE': 'Hidden', 'NAT_DETAIL': 'Hidden', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'Hidden', 'IMPORTANCE': 'Hidden', 'DATE_CREAT': 'Hidden', 'DATE_MAJ': 'Hidden', 'DATE_APP': 'Hidden', 'DATE_CONF': 'Hidden', 'SOURCE': 'Hidden', 'ID_SOURCE': 'Hidden', 'ACQU_PLANI': 'Hidden', 'PREC_PLANI': 'Hidden', 'ID_BAN': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', 'Altidudes': 'TextEdit', });
lyr_Communautdecommunes_11.set('fieldImages', {'FID': 'Hidden', });
lyr_Communes_1.set('fieldLabels', {});
lyr_GR_2.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_Sitesvollibre_3.set('fieldLabels', {'NATURE': 'inline label - always visible', 'GRAPHIE': 'inline label - always visible', });
lyr_Sitesdescalade_4.set('fieldLabels', {'NATURE': 'inline label - always visible', 'GRAPHIE': 'inline label - always visible', });
lyr_Piscines_5.set('fieldLabels', {'NATURE': 'inline label - always visible', 'GRAPHIE': 'inline label - always visible', });
lyr_Officesdutourisme_6.set('fieldLabels', {'NATURE': 'inline label - always visible', 'GRAPHIE': 'inline label - always visible', });
lyr_MaisonduParcNationnaldesEcrins_7.set('fieldLabels', {'NATURE': 'inline label - always visible', 'GRAPHIE': 'inline label - always visible', });
lyr_Centresquestres_8.set('fieldLabels', {'NATURE': 'inline label - always visible', 'GRAPHIE': 'inline label - always visible', });
lyr_Campings_9.set('fieldLabels', {'NATURE': 'inline label - always visible', 'GRAPHIE': 'inline label - always visible', });
lyr_Sommet_10.set('fieldLabels', {'TOPONYME': 'inline label - always visible', 'Altidudes': 'inline label - always visible', });
lyr_Communautdecommunes_11.set('fieldLabels', {});
lyr_Communautdecommunes_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});