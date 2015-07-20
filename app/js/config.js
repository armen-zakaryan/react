require.config({
    paths: {
        react: '../../bower_components/react/react',
        JSXTransformer: '../../bower_components/react/JSXTransformer',
        jsx: "../../bower_components/require-jsx/jsx",
        leaflet: "../../bower_components/leaflet/dist/leaflet-src"
        /*
        leaflet: "http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet"
        */
    },
    shim: {
        react: {
            exports: "React"
        },
        JSXTransformer: {
            exports: "JSXTransformer"
        }
    },
    priority: []
});