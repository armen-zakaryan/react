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
            
           navigator.geolocation.getCurrentPosition(function(location) {
                //debugger
                var latitude = location.coords.latitude,
                    longitude = location.coords.longitude;

                var map = L.map('map').setView([latitude, longitude], 13);

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    maxZoom: 18,
                    id: 'armen0089.b18dbdf4',
                    accessToken: 'pk.eyJ1IjoiYXJtZW4wMDg5IiwiYSI6IjQ3NWNlOTYxZjZhY2E1MjYwYzJkNWZkZTk1YjNlYTRmIn0.ug3IyaiVWaRPXnREDOSnxA'
                }).addTo(map);

            })

            
        },
        render: function() {
            return (<div className="map" id="map"> </div>)
        }
    });

});