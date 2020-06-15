let newfeatures3 = json_RUASJALAN_3.features.filter(function(el, idx){
    return typeof filter!=='undefined' ? el.properties.NO_RUAS == filter : true
})
let newFeatures = json_RUASJALAN_2.features.filter(function(el, idx){
    return typeof filter!=='undefined' ? el.properties.NO_RUAS == filter : true
})
json_RUASJALAN_3.features = newfeatures3
json_RUASJALAN_2.features = newFeatures

console.log(json_RUASJALAN_3);


const base_url = 'http://localhost/gis/'
var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
        }
        var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1
        }).fitBounds([[-0.42370250323784864,102.26477926742726],[-0.28531370183137533,102.4543839808748]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        L.control.locate({locateOptions: {maxZoom: 19}}).addTo(map);
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        map.createPane('pane_GoogleSatellite_0');
        map.getPane('pane_GoogleSatellite_0').style.zIndex = 400;
        var layer_GoogleSatellite_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            pane: 'pane_GoogleSatellite_0',
            opacity: 1.0,
            attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 20
        });
        layer_GoogleSatellite_0;
        map.addLayer(layer_GoogleSatellite_0);
        function pop_BATASADMINISTRASIKECAMATAN_1(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">KARKTR</th>\
                        <td>' + (feature.properties['KARKTR'] !== null ? autolinker.link(feature.properties['KARKTR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">STSBTS</th>\
                        <td>' + (feature.properties['STSBTS'] !== null ? autolinker.link(feature.properties['STSBTS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">FCODE</th>\
                        <td>' + (feature.properties['FCODE'] !== null ? autolinker.link(feature.properties['FCODE'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">KELAS</th>\
                        <td>' + (feature.properties['KELAS'] !== null ? autolinker.link(feature.properties['KELAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">UUPP</th>\
                        <td>' + (feature.properties['UUPP'] !== null ? autolinker.link(feature.properties['UUPP'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LOKASI</th>\
                        <td>' + (feature.properties['LOKASI'] !== null ? autolinker.link(feature.properties['LOKASI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">REMARK</th>\
                        <td>' + (feature.properties['REMARK'] !== null ? autolinker.link(feature.properties['REMARK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' + (feature.properties['NAMOBJ'] !== null ? autolinker.link(feature.properties['NAMOBJ'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">ADMIN1</th>\
                        <td>' + (feature.properties['ADMIN1'] !== null ? autolinker.link(feature.properties['ADMIN1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">ADMIN2</th>\
                        <td>' + (feature.properties['ADMIN2'] !== null ? autolinker.link(feature.properties['ADMIN2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SRS_ID</th>\
                        <td>' + (feature.properties['SRS_ID'] !== null ? autolinker.link(feature.properties['SRS_ID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LCODE</th>\
                        <td>' + (feature.properties['LCODE'] !== null ? autolinker.link(feature.properties['LCODE'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">METADATA</th>\
                        <td>' + (feature.properties['METADATA'] !== null ? autolinker.link(feature.properties['METADATA'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WAKLD1</th>\
                        <td>' + (feature.properties['WAKLD1'] !== null ? autolinker.link(feature.properties['WAKLD1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WAKLD2</th>\
                        <td>' + (feature.properties['WAKLD2'] !== null ? autolinker.link(feature.properties['WAKLD2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WADKC1</th>\
                        <td>' + (feature.properties['WADKC1'] !== null ? autolinker.link(feature.properties['WADKC1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WADKC2</th>\
                        <td>' + (feature.properties['WADKC2'] !== null ? autolinker.link(feature.properties['WADKC2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WAKBK1</th>\
                        <td>' + (feature.properties['WAKBK1'] !== null ? autolinker.link(feature.properties['WAKBK1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WAKBK2</th>\
                        <td>' + (feature.properties['WAKBK2'] !== null ? autolinker.link(feature.properties['WAKBK2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WAPRO1</th>\
                        <td>' + (feature.properties['WAPRO1'] !== null ? autolinker.link(feature.properties['WAPRO1'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WAPRO2</th>\
                        <td>' + (feature.properties['WAPRO2'] !== null ? autolinker.link(feature.properties['WAPRO2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPTBT</th>\
                        <td>' + (feature.properties['TIPTBT'] !== null ? autolinker.link(feature.properties['TIPTBT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">PJGBTS</th>\
                        <td>' + (feature.properties['PJGBTS'] !== null ? autolinker.link(feature.properties['PJGBTS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">KLBADM</th>\
                        <td>' + (feature.properties['KLBADM'] !== null ? autolinker.link(feature.properties['KLBADM'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPLOK</th>\
                        <td>' + (feature.properties['TIPLOK'] !== null ? autolinker.link(feature.properties['TIPLOK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SHAPE_Leng</th>\
                        <td>' + (feature.properties['SHAPE_Leng'] !== null ? autolinker.link(feature.properties['SHAPE_Leng'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_BATASADMINISTRASIKECAMATAN_1_0() {
            return {
                pane: 'pane_BATASADMINISTRASIKECAMATAN_1',
                opacity: 1,
                color: 'rgba(190,207,80,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BATASADMINISTRASIKECAMATAN_1');
        map.getPane('pane_BATASADMINISTRASIKECAMATAN_1').style.zIndex = 401;
        map.getPane('pane_BATASADMINISTRASIKECAMATAN_1').style['mix-blend-mode'] = 'normal';
        var layer_BATASADMINISTRASIKECAMATAN_1 = new L.geoJson(json_BATASADMINISTRASIKECAMATAN_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BATASADMINISTRASIKECAMATAN_1',
            layerName: 'layer_BATASADMINISTRASIKECAMATAN_1',
            pane: 'pane_BATASADMINISTRASIKECAMATAN_1',
            onEachFeature: pop_BATASADMINISTRASIKECAMATAN_1,
            style: style_BATASADMINISTRASIKECAMATAN_1_0,
        });
        bounds_group.addLayer(layer_BATASADMINISTRASIKECAMATAN_1);
        map.addLayer(layer_BATASADMINISTRASIKECAMATAN_1);
        function pop_RUASJALAN_2(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">OBJECTID</th>\
                        <td>' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEG</th>\
                        <td>' + (feature.properties['NO_SEG'] !== null ? autolinker.link(feature.properties['NO_SEG'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JLN</th>\
                        <td>' + (feature.properties['TIPE_JLN'] !== null ? autolinker.link(feature.properties['TIPE_JLN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">PJG_JLN</th>\
                        <td>' + (feature.properties['PJG_JLN'] !== null ? autolinker.link(feature.properties['PJG_JLN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS_ALL</th>\
                        <td>' + (feature.properties['LUAS_ALL'] !== null ? autolinker.link(feature.properties['LUAS_ALL'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Shape_Leng</th>\
                        <td>' + (feature.properties['Shape_Leng'] !== null ? autolinker.link(feature.properties['Shape_Leng'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Shape_Area</th>\
                        <td>' + (feature.properties['Shape_Area'] !== null ? autolinker.link(feature.properties['Shape_Area'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">KAB</th>\
                        <td>' + (feature.properties['KAB'] !== null ? autolinker.link(feature.properties['KAB'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_RUASJALAN_2_0() {
            return {
                pane: 'pane_RUASJALAN_2',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(79,77,128,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_RUASJALAN_2');
        map.getPane('pane_RUASJALAN_2').style.zIndex = 402;
        map.getPane('pane_RUASJALAN_2').style['mix-blend-mode'] = 'normal';
        var layer_RUASJALAN_2 = new L.geoJson(json_RUASJALAN_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_RUASJALAN_2',
            layerName: 'layer_RUASJALAN_2',
            pane: 'pane_RUASJALAN_2',
            onEachFeature: pop_RUASJALAN_2,
            style: style_RUASJALAN_2_0,
        });
        bounds_group.addLayer(layer_RUASJALAN_2);
        map.addLayer(layer_RUASJALAN_2);
        function pop_RUASJALAN_3(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">MEDIAN</th>\
                        <td>' + (feature.properties['MEDIAN'] !== null ? autolinker.link(feature.properties['MEDIAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_MARKA</th>\
                        <td>' + (feature.properties['NO_MARKA'] !== null ? autolinker.link(feature.properties['NO_MARKA'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">UKR_LBR</th>\
                        <td>' + (feature.properties['UKR_LBR'] !== null ? autolinker.link(feature.properties['UKR_LBR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LEBAR</th>\
                        <td>' + (feature.properties['LEBAR'] !== null ? autolinker.link(feature.properties['LEBAR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS</th>\
                        <td>' + (feature.properties['LUAS'] !== null ? autolinker.link(feature.properties['LUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_RUASJALAN_3_0() {
            return {
                pane: 'pane_RUASJALAN_3',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(118,63,27,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_RUASJALAN_3');
        map.getPane('pane_RUASJALAN_3').style.zIndex = 403;
        map.getPane('pane_RUASJALAN_3').style['mix-blend-mode'] = 'normal';
        var layer_RUASJALAN_3 = new L.geoJson(json_RUASJALAN_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_RUASJALAN_3',
            layerName: 'layer_RUASJALAN_3',
            pane: 'pane_RUASJALAN_3',
            onEachFeature: pop_RUASJALAN_3,
            style: style_RUASJALAN_3_0,
        });
        bounds_group.addLayer(layer_RUASJALAN_3);
        map.addLayer(layer_RUASJALAN_3);
        function pop_JEMBATAN_4(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DI_SEGMEN</th>\
                        <td>' + (feature.properties['DI_SEGMEN'] !== null ? autolinker.link(feature.properties['DI_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Dist</th>\
                        <td>' + (feature.properties['Dist'] !== null ? autolinker.link(feature.properties['Dist'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">PANJANG(m)</th>\
                        <td>' + (feature.properties['PANJANG(m)'] !== null ? autolinker.link(feature.properties['PANJANG(m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LEBAR (m)</th>\
                        <td>' + (feature.properties['LEBAR (m)'] !== null ? autolinker.link(feature.properties['LEBAR (m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_JEMBATA</th>\
                        <td>' + (feature.properties['NO_JEMBATA'] !== null ? autolinker.link(feature.properties['NO_JEMBATA'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JARAK_SGMT</th>\
                        <td>' + (feature.properties['JARAK_SGMT'] !== null ? autolinker.link(feature.properties['JARAK_SGMT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LETAK</th>\
                        <td>' + (feature.properties['LETAK'] !== null ? autolinker.link(feature.properties['LETAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_JEMBATAN_4_0() {
            return {
                pane: 'pane_JEMBATAN_4',
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(0,0,0,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_JEMBATAN_4');
        map.getPane('pane_JEMBATAN_4').style.zIndex = 404;
        map.getPane('pane_JEMBATAN_4').style['mix-blend-mode'] = 'normal';
        var layer_JEMBATAN_4 = new L.geoJson(json_JEMBATAN_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_JEMBATAN_4',
            layerName: 'layer_JEMBATAN_4',
            pane: 'pane_JEMBATAN_4',
            onEachFeature: pop_JEMBATAN_4,
            style: style_JEMBATAN_4_0,
        });
        bounds_group.addLayer(layer_JEMBATAN_4);
        map.addLayer(layer_JEMBATAN_4);
        function pop_KERUSAKANTAMBALAN_5(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS (m2)</th>\
                        <td>' + (feature.properties['LUAS (m2)'] !== null ? autolinker.link(feature.properties['LUAS (m2)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANTAMBALAN_5_0() {
            return {
                pane: 'pane_KERUSAKANTAMBALAN_5',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(210,33,178,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANTAMBALAN_5');
        map.getPane('pane_KERUSAKANTAMBALAN_5').style.zIndex = 405;
        map.getPane('pane_KERUSAKANTAMBALAN_5').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANTAMBALAN_5 = new L.geoJson(json_KERUSAKANTAMBALAN_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANTAMBALAN_5',
            layerName: 'layer_KERUSAKANTAMBALAN_5',
            pane: 'pane_KERUSAKANTAMBALAN_5',
            onEachFeature: pop_KERUSAKANTAMBALAN_5,
            style: style_KERUSAKANTAMBALAN_5_0,
        });
        bounds_group.addLayer(layer_KERUSAKANTAMBALAN_5);
        map.addLayer(layer_KERUSAKANTAMBALAN_5);
        function pop_KERUSAKANSUNGKUR_6(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">MEDIAN</th>\
                        <td>' + (feature.properties['MEDIAN'] !== null ? autolinker.link(feature.properties['MEDIAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS (m2)</th>\
                        <td>' + (feature.properties['LUAS (m2)'] !== null ? autolinker.link(feature.properties['LUAS (m2)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANSUNGKUR_6_0() {
            return {
                pane: 'pane_KERUSAKANSUNGKUR_6',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(192,219,15,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANSUNGKUR_6');
        map.getPane('pane_KERUSAKANSUNGKUR_6').style.zIndex = 406;
        map.getPane('pane_KERUSAKANSUNGKUR_6').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANSUNGKUR_6 = new L.geoJson(json_KERUSAKANSUNGKUR_6, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANSUNGKUR_6',
            layerName: 'layer_KERUSAKANSUNGKUR_6',
            pane: 'pane_KERUSAKANSUNGKUR_6',
            onEachFeature: pop_KERUSAKANSUNGKUR_6,
            style: style_KERUSAKANSUNGKUR_6_0,
        });
        bounds_group.addLayer(layer_KERUSAKANSUNGKUR_6);
        map.addLayer(layer_KERUSAKANSUNGKUR_6);
        function pop_KERUSAKANRETAKPOLIGON_7(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS (m2)</th>\
                        <td>' + (feature.properties['LUAS (m2)'] !== null ? autolinker.link(feature.properties['LUAS (m2)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANRETAKPOLIGON_7_0() {
            return {
                pane: 'pane_KERUSAKANRETAKPOLIGON_7',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(243,240,26,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANRETAKPOLIGON_7');
        map.getPane('pane_KERUSAKANRETAKPOLIGON_7').style.zIndex = 407;
        map.getPane('pane_KERUSAKANRETAKPOLIGON_7').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANRETAKPOLIGON_7 = new L.geoJson(json_KERUSAKANRETAKPOLIGON_7, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANRETAKPOLIGON_7',
            layerName: 'layer_KERUSAKANRETAKPOLIGON_7',
            pane: 'pane_KERUSAKANRETAKPOLIGON_7',
            onEachFeature: pop_KERUSAKANRETAKPOLIGON_7,
            style: style_KERUSAKANRETAKPOLIGON_7_0,
        });
        bounds_group.addLayer(layer_KERUSAKANRETAKPOLIGON_7);
        map.addLayer(layer_KERUSAKANRETAKPOLIGON_7);
        function pop_KERUSAKANPENURUNANPERMUKAAN_8(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS (m2)</th>\
                        <td>' + (feature.properties['LUAS (m2)'] !== null ? autolinker.link(feature.properties['LUAS (m2)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANPENURUNANPERMUKAAN_8_0() {
            return {
                pane: 'pane_KERUSAKANPENURUNANPERMUKAAN_8',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(238,45,42,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANPENURUNANPERMUKAAN_8');
        map.getPane('pane_KERUSAKANPENURUNANPERMUKAAN_8').style.zIndex = 408;
        map.getPane('pane_KERUSAKANPENURUNANPERMUKAAN_8').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANPENURUNANPERMUKAAN_8 = new L.geoJson(json_KERUSAKANPENURUNANPERMUKAAN_8, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANPENURUNANPERMUKAAN_8',
            layerName: 'layer_KERUSAKANPENURUNANPERMUKAAN_8',
            pane: 'pane_KERUSAKANPENURUNANPERMUKAAN_8',
            onEachFeature: pop_KERUSAKANPENURUNANPERMUKAAN_8,
            style: style_KERUSAKANPENURUNANPERMUKAAN_8_0,
        });
        bounds_group.addLayer(layer_KERUSAKANPENURUNANPERMUKAAN_8);
        map.addLayer(layer_KERUSAKANPENURUNANPERMUKAAN_8);
        function pop_KERUSAKANKONDISIJALAN_9(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS (m2)</th>\
                        <td>' + (feature.properties['LUAS (m2)'] !== null ? autolinker.link(feature.properties['LUAS (m2)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANKONDISIJALAN_9_0() {
            return {
                pane: 'pane_KERUSAKANKONDISIJALAN_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(26,80,230,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANKONDISIJALAN_9');
        map.getPane('pane_KERUSAKANKONDISIJALAN_9').style.zIndex = 409;
        map.getPane('pane_KERUSAKANKONDISIJALAN_9').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANKONDISIJALAN_9 = new L.geoJson(json_KERUSAKANKONDISIJALAN_9, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANKONDISIJALAN_9',
            layerName: 'layer_KERUSAKANKONDISIJALAN_9',
            pane: 'pane_KERUSAKANKONDISIJALAN_9',
            onEachFeature: pop_KERUSAKANKONDISIJALAN_9,
            style: style_KERUSAKANKONDISIJALAN_9_0,
        });
        bounds_group.addLayer(layer_KERUSAKANKONDISIJALAN_9);
        map.addLayer(layer_KERUSAKANKONDISIJALAN_9);
        function pop_KERUSAKANALUR_10(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">MEDIAN</th>\
                        <td>' + (feature.properties['MEDIAN'] !== null ? autolinker.link(feature.properties['MEDIAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DALAM (m)</th>\
                        <td>' + (feature.properties['DALAM (m)'] !== null ? autolinker.link(feature.properties['DALAM (m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS (m2)</th>\
                        <td>' + (feature.properties['LUAS (m2)'] !== null ? autolinker.link(feature.properties['LUAS (m2)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANALUR_10_0() {
            return {
                pane: 'pane_KERUSAKANALUR_10',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(233,168,45,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANALUR_10');
        map.getPane('pane_KERUSAKANALUR_10').style.zIndex = 410;
        map.getPane('pane_KERUSAKANALUR_10').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANALUR_10 = new L.geoJson(json_KERUSAKANALUR_10, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANALUR_10',
            layerName: 'layer_KERUSAKANALUR_10',
            pane: 'pane_KERUSAKANALUR_10',
            onEachFeature: pop_KERUSAKANALUR_10,
            style: style_KERUSAKANALUR_10_0,
        });
        bounds_group.addLayer(layer_KERUSAKANALUR_10);
        map.addLayer(layer_KERUSAKANALUR_10);
        function pop_KERUSAKANLUBANG_11(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DIAMETER(m</th>\
                        <td>' + (feature.properties['DIAMETER(m'] !== null ? autolinker.link(feature.properties['DIAMETER(m'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DALAM (m)</th>\
                        <td>' + (feature.properties['DALAM (m)'] !== null ? autolinker.link(feature.properties['DALAM (m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JML_LUBANG</th>\
                        <td>' + (feature.properties['JML_LUBANG'] !== null ? autolinker.link(feature.properties['JML_LUBANG'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LUAS(m2)</th>\
                        <td>' + (feature.properties['LUAS(m2)'] !== null ? autolinker.link(feature.properties['LUAS(m2)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANLUBANG_11_0() {
            return {
                pane: 'pane_KERUSAKANLUBANG_11',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(26,235,215,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANLUBANG_11');
        map.getPane('pane_KERUSAKANLUBANG_11').style.zIndex = 411;
        map.getPane('pane_KERUSAKANLUBANG_11').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANLUBANG_11 = new L.geoJson(json_KERUSAKANLUBANG_11, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANLUBANG_11',
            layerName: 'layer_KERUSAKANLUBANG_11',
            pane: 'pane_KERUSAKANLUBANG_11',
            onEachFeature: pop_KERUSAKANLUBANG_11,
            style: style_KERUSAKANLUBANG_11_0,
        });
        bounds_group.addLayer(layer_KERUSAKANLUBANG_11);
        map.addLayer(layer_KERUSAKANLUBANG_11);
        function pop_KERUSAKANTEPIASPAL_12(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">PANJANG(m)</th>\
                        <td>' + (feature.properties['PANJANG(m)'] !== null ? autolinker.link(feature.properties['PANJANG(m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANTEPIASPAL_12_0() {
            return {
                pane: 'pane_KERUSAKANTEPIASPAL_12',
                opacity: 1,
                color: 'rgba(254,251,29,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANTEPIASPAL_12');
        map.getPane('pane_KERUSAKANTEPIASPAL_12').style.zIndex = 412;
        map.getPane('pane_KERUSAKANTEPIASPAL_12').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANTEPIASPAL_12 = new L.geoJson(json_KERUSAKANTEPIASPAL_12, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANTEPIASPAL_12',
            layerName: 'layer_KERUSAKANTEPIASPAL_12',
            pane: 'pane_KERUSAKANTEPIASPAL_12',
            onEachFeature: pop_KERUSAKANTEPIASPAL_12,
            style: style_KERUSAKANTEPIASPAL_12_0,
        });
        bounds_group.addLayer(layer_KERUSAKANTEPIASPAL_12);
        map.addLayer(layer_KERUSAKANTEPIASPAL_12);
        function pop_KERUSAKANRETAKLINE_13(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">MEDIAN</th>\
                        <td>' + (feature.properties['MEDIAN'] !== null ? autolinker.link(feature.properties['MEDIAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS</th>\
                        <td>' + (feature.properties['JENIS'] !== null ? autolinker.link(feature.properties['JENIS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TK_RUSAK</th>\
                        <td>' + (feature.properties['TK_RUSAK'] !== null ? autolinker.link(feature.properties['TK_RUSAK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">PANJANG(m)</th>\
                        <td>' + (feature.properties['PANJANG(m)'] !== null ? autolinker.link(feature.properties['PANJANG(m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_KERUSAKANRETAKLINE_13_0() {
            return {
                pane: 'pane_KERUSAKANRETAKLINE_13',
                opacity: 1,
                color: 'rgba(228,87,110,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_KERUSAKANRETAKLINE_13');
        map.getPane('pane_KERUSAKANRETAKLINE_13').style.zIndex = 413;
        map.getPane('pane_KERUSAKANRETAKLINE_13').style['mix-blend-mode'] = 'normal';
        var layer_KERUSAKANRETAKLINE_13 = new L.geoJson(json_KERUSAKANRETAKLINE_13, {
            attribution: '',
            interactive: true,
            dataVar: 'json_KERUSAKANRETAKLINE_13',
            layerName: 'layer_KERUSAKANRETAKLINE_13',
            pane: 'pane_KERUSAKANRETAKLINE_13',
            onEachFeature: pop_KERUSAKANRETAKLINE_13,
            style: style_KERUSAKANRETAKLINE_13_0,
        });
        bounds_group.addLayer(layer_KERUSAKANRETAKLINE_13);
        map.addLayer(layer_KERUSAKANRETAKLINE_13);
        function pop_MEDIANJALAN_14(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Long</th>\
                        <td>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Lat</th>\
                        <td>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Alt</th>\
                        <td>' + (feature.properties['Alt'] !== null ? autolinker.link(feature.properties['Alt'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_PROV</th>\
                        <td>' + (feature.properties['NO_PROV'] !== null ? autolinker.link(feature.properties['NO_PROV'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_RUAS</th>\
                        <td>' + (feature.properties['NO_RUAS'] !== null ? autolinker.link(feature.properties['NO_RUAS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NO_SEGMEN</th>\
                        <td>' + (feature.properties['NO_SEGMEN'] !== null ? autolinker.link(feature.properties['NO_SEGMEN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POSISI</th>\
                        <td>' + (feature.properties['POSISI'] !== null ? autolinker.link(feature.properties['POSISI'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LAJUR</th>\
                        <td>' + (feature.properties['LAJUR'] !== null ? autolinker.link(feature.properties['LAJUR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_MED</th>\
                        <td>' + (feature.properties['JENIS_MED'] !== null ? autolinker.link(feature.properties['JENIS_MED'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LEBAR_MED</th>\
                        <td>' + (feature.properties['LEBAR_MED'] !== null ? autolinker.link(feature.properties['LEBAR_MED'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN</th>\
                        <td>' + (feature.properties['TIPE_JALAN'] !== null ? autolinker.link(feature.properties['TIPE_JALAN'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_PVT</th>\
                        <td>' + (feature.properties['JENIS_PVT'] !== null ? autolinker.link(feature.properties['JENIS_PVT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_MEDIANJALAN_14_0() {
            return {
                pane: 'pane_MEDIANJALAN_14',
                opacity: 1,
                color: 'rgba(129,218,40,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_MEDIANJALAN_14');
        map.getPane('pane_MEDIANJALAN_14').style.zIndex = 414;
        map.getPane('pane_MEDIANJALAN_14').style['mix-blend-mode'] = 'normal';
        var layer_MEDIANJALAN_14 = new L.geoJson(json_MEDIANJALAN_14, {
            attribution: '',
            interactive: true,
            dataVar: 'json_MEDIANJALAN_14',
            layerName: 'layer_MEDIANJALAN_14',
            pane: 'pane_MEDIANJALAN_14',
            onEachFeature: pop_MEDIANJALAN_14,
            style: style_MEDIANJALAN_14_0,
        });
        bounds_group.addLayer(layer_MEDIANJALAN_14);
        map.addLayer(layer_MEDIANJALAN_14);
        function pop_BAHUJALAN_15(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Date</th>\
                        <td>' + (feature.properties['Date'] !== null ? autolinker.link(feature.properties['Date'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Gambar Digitasi</th>\
                        <td>' + (feature.properties['Picture'] !== null ? '<img src="'+base_url+'/public/map/images/' + String(feature.properties['Picture']).replace(/[\\\/:]/g, '_').trim() + '">' : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_BAHU</th>\
                        <td>' + (feature.properties['JENIS_BAHU'] !== null ? autolinker.link(feature.properties['JENIS_BAHU'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">PANJANG(m)</th>\
                        <td>' + (feature.properties['PANJANG(m)'] !== null ? autolinker.link(feature.properties['PANJANG(m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LEBAR (m)</th>\
                        <td>' + (feature.properties['LEBAR (m)'] !== null ? autolinker.link(feature.properties['LEBAR (m)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Comment</th>\
                        <td>' + (feature.properties['Comment'] !== null ? autolinker.link(feature.properties['Comment'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_BAHUJALAN_15_0() {
            return {
                pane: 'pane_BAHUJALAN_15',
                opacity: 1,
                color: 'rgba(1,19,0,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BAHUJALAN_15');
        map.getPane('pane_BAHUJALAN_15').style.zIndex = 415;
        map.getPane('pane_BAHUJALAN_15').style['mix-blend-mode'] = 'normal';
        var layer_BAHUJALAN_15 = new L.geoJson(json_BAHUJALAN_15, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BAHUJALAN_15',
            layerName: 'layer_BAHUJALAN_15',
            pane: 'pane_BAHUJALAN_15',
            onEachFeature: pop_BAHUJALAN_15,
            style: style_BAHUJALAN_15_0,
        });
        bounds_group.addLayer(layer_BAHUJALAN_15);
        map.addLayer(layer_BAHUJALAN_15);
        var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topleft',
            text: 'Search',
            title: 'Testing'
        }).addTo(map);
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .className += ' fa fa-search';
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .title += 'Search for a place';
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="/gis/public/map/legend/BAHUJALAN_15.png" /> BAHU JALAN': layer_BAHUJALAN_15,'<img src="/gis/public/map/legend/MEDIANJALAN_14.png" /> MEDIAN JALAN': layer_MEDIANJALAN_14,'<img src="/gis/public/map/legend/KERUSAKANRETAKLINE_13.png" /> KERUSAKAN RETAK LINE': layer_KERUSAKANRETAKLINE_13,'<img src="/gis/public/map/legend/KERUSAKANTEPIASPAL_12.png" /> KERUSAKAN TEPI ASPAL': layer_KERUSAKANTEPIASPAL_12,'<img src="/gis/public/map/legend/KERUSAKANLUBANG_11.png" /> KERUSAKAN LUBANG': layer_KERUSAKANLUBANG_11,'<img src="/gis/public/map/legend/KERUSAKANALUR_10.png" /> KERUSAKAN ALUR': layer_KERUSAKANALUR_10,'<img src="/gis/public/map/legend/KERUSAKANKONDISIJALAN_9.png" /> KERUSAKAN KONDISI JALAN': layer_KERUSAKANKONDISIJALAN_9,'<img src="/gis/public/map/legend/KERUSAKANPENURUNANPERMUKAAN_8.png" /> KERUSAKAN PENURUNAN PERMUKAAN': layer_KERUSAKANPENURUNANPERMUKAAN_8,'<img src="/gis/public/map/legend/KERUSAKANRETAKPOLIGON_7.png" /> KERUSAKAN RETAK POLIGON': layer_KERUSAKANRETAKPOLIGON_7,'<img src="/gis/public/map/legend/KERUSAKANSUNGKUR_6.png" /> KERUSAKAN SUNGKUR': layer_KERUSAKANSUNGKUR_6,'<img src="/gis/public/map/legend/KERUSAKANTAMBALAN_5.png" /> KERUSAKAN TAMBALAN': layer_KERUSAKANTAMBALAN_5,'<img src="/gis/public/map/legend/JEMBATAN_4.png" /> JEMBATAN': layer_JEMBATAN_4,'<img src="/gis/public/map/legend/RUASJALAN_3.png" /> RUAS JALAN (Penelitian)': layer_RUASJALAN_3,'<img src="/gis/public/map/legend/RUASJALAN_2.png" /> RUAS JALAN ': layer_RUASJALAN_2,'<img src="/gis/public/map/legend/BATASADMINISTRASIKECAMATAN_1.png" /> BATAS ADMINISTRASI KECAMATAN': layer_BATASADMINISTRASIKECAMATAN_1,"Google Satellite": layer_GoogleSatellite_0,}).addTo(map);
        setBounds();
        map.addControl(new L.Control.Search({
            layer: layer_RUASJALAN_3,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'NO_SEGMEN'}));
        document.getElementsByClassName('search-button')[0].className +=
         ' fa fa-binoculars';