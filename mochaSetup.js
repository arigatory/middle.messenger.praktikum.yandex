const { JSDOM } = require('jsdom');

const { window } = new JSDOM('<div id="app"></div>');

// @ts-ignore
global.window = window;
global.document = window.document;
