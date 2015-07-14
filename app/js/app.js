'use strict';

define(['react', 'config', 'jsx!react-components/TimerExample', 'jsx!react-components/map'], function(React, config, TimerExample, Map) {
/*
    React.render 	( < TimerExample start = {Date.now()}/>,
        document.getElementById('example')
    );

    React.render 	( <Map/>,
        document.getElementById('theMap')
    );*/
debugger
    var map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();

});