var level = require('level');
var db = level('/tmp/wiki.db');
var wiki = require('wikidb')(db);

window.wsock = require('websocket-stream');
window.wiki = wiki;
