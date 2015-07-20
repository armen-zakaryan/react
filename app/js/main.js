'use strict';

require(['config'], function () {
    require(['react', 'JSXTransformer', 'jsx!app'], function () {
        console.log("App started");
    });
});