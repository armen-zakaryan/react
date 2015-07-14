'use strict';

require.config({
    paths: {
        react: '../../bower_components/react/react',
        JSXTransformer: '../../bower_components/react/JSXTransformer',
        jsx: "../../bower_components/require-jsx/jsx",
        leaflet: "http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"
    },
    shim: {
        react: {
            exports: "React"
        },
        JSXTransformer: "JSXTransformer ",
        JSXTransformer: {
            exports: "JSXTransformer"
        }
    },
    priority: []
});


require(['react', 'JSXTransformer', 'jsx!app'], function() {
    console.log("App started");
});