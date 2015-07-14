'use strict';

define(['react', 'leaflet'], function(React) {

    return React.createClass({
        uid: function() {
            var uid = 0;
            return function() {
                return uid++;
            };
        },
        getInitialState: function() {
            /*return {
                uid: this.uid()
            }*/
            return {};
        },
        componentDidMount: function() {
            var map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        },
        render: function() {
            return (<div className="map" id="map"> </div>)
        }
    });

});