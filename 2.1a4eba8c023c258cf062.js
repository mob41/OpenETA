(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{96:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"map",(function(){return f})),n.d(t,"init",(function(){return y})),n.d(t,"setDarkMode",(function(){return m})),n.d(t,"checkIfDarkMode",(function(){return g})),n.d(t,"setCenter",(function(){return w})),n.d(t,"setZoom",(function(){return T})),n.d(t,"addMarker",(function(){return h})),n.d(t,"setMarkerPosition",(function(){return k})),n.d(t,"getMarker",(function(){return M})),n.d(t,"lockMarker",(function(){return v})),n.d(t,"unlockMarker",(function(){return b})),n.d(t,"removeMarker",(function(){return x})),n.d(t,"removeAllMarkers",(function(){return P})),n.d(t,"addInfoWindow",(function(){return I})),n.d(t,"addPolyline",(function(){return O})),n.d(t,"lockPolyline",(function(){return W})),n.d(t,"unlockPolyline",(function(){return A})),n.d(t,"removePolyline",(function(){return B})),n.d(t,"removeAllPolylines",(function(){return C})),n.d(t,"fitBounds",(function(){return L}));var o=n(93),r=n(30),l=1,i={},a=[],s=1,c={},u=1,p={},d=[],f=!1;function y(){return new Promise((t,n)=>{e("#gtw-map").html('<div id="gmap" style="width: 100%; height: 100%;"></div>'),window.initMap=function(){var e;f=new google.maps.Map(document.getElementById("gmap"),{center:r.a(),zoom:12,disableDefaultUI:!0}),e=new google.maps.StyledMapType([{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]),f.mapTypes.set("dark_mode",e),g(),t(),delete window.initMap};var l=o.a.googleMapApiKey;(!window.location.origin||""===window.location.origin||"https://www.gotowhere.ga"!==window.location.origin||"file://"===window.location.origin||window.location.origin.startsWith("http://localhost")||window.location.origin.startsWith("https://localhost"))&&(l="",console.warn("gtw-map-googlemap: You are running the application in local/no-origin mode. The API key has been removed now."));var i=document.createElement("script");i.src="https://maps.googleapis.com/maps/api/js?callback=initMap&key="+l,document.head.appendChild(i)})}function m(e){e?f.setMapTypeId("dark_mode"):f.setMapTypeId("roadmap")}function g(){m(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function w(e){return f.setCenter(e)}function T(e){return f.setZoom(e)}function h(e,t,n){var o=new google.maps.Marker({position:e,label:t.label,title:t.title,icon:t.icon,map:f});return i[l]=o,n&&o.addListener("click",(function(){n()})),l++}function k(e,t){if(!e||!i[e])return!1;i[e].setPosition(t)}function M(e){return!(!e||!i[e])&&i[e]}function v(e){return!(!e||!i[e])&&(-1===a.indexOf(e)&&a.push(e),!0)}function b(e){var t=a.indexOf(e);return-1!==t&&(a.splice(t,1),!0)}function x(e){return!(!e||!i[e])&&(!a.includes(e)&&(i[e].setMap(null),delete i[e],!0))}function P(){for(var e in i)a.includes(parseInt(e))||i[e].setMap(null);return i={},!0}function I(e,t,n=!1){var o=egetMarker(e);if(!o)return!1;var r=new google.maps.InfoWindow({content:t});return o.addListener("click",(function(){r.open(f,o)})),n&&r.open(f,o),c[s]=r,s++}function O(e,t,n,o=1,r=!0){var l=new google.maps.Polyline({path:e,geodesic:r,strokeColor:t,strokeOpacity:o,strokeWeight:n});return l.setMap(f),p[u]=l,u++}function W(e){return!(!polyline||!p[e])&&(-1===d.indexOf(e)&&d.push(e),!0)}function A(e){var t=d.indexOf(e);return-1!==t&&(d.splice(t,1),!0)}function B(e){return!(!e||!p[e])&&(!d.includes(e)&&(p[e].setMap(null),delete p[e],!0))}function C(){for(var e in p)d.includes(e)||p[e].setMap(null);return p={},!0}function L(e){var t=new google.maps.LatLngBounds;for(var n of e)t.extend(n);f.fitBounds(t)}}.call(this,n(0))}}]);
//# sourceMappingURL=2.1a4eba8c023c258cf062.js.map