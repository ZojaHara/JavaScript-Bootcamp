!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=119)}({115:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(85);t.Database=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.url=e,n}return i(t,e),c(t,[{key:"connect",value:function(){this.emit("connect",this.url)}},{key:"disconnect",value:function(){this.emit("disconnect",this.url)}}]),t}(u.EventEmitter)},119:function(e,t,n){"use strict";var o=n(115),r=n(85),i=new r.EventEmitter;i.on("hello",function(e){console.log("Witaj "+e+" !")}),i.on("hello",function(e){console.log("Siema "+e+" .")}),i.on("goodbye",function(){console.log("Do widzenia!")}),i.emit("hello","Marek"),i.emit("goodbye"),i.emit("custom");var c=new o.Database("db://localhost:3000");c.on("connect",function(e){console.log('Połączenie z bazą pod adresem " + '+e+' + " zostało ustanowione.')}),c.on("disconnect",function(e){console.log('Połączenie z bazą pod adresem " + '+e+' + " zostało zakończone.')}),c.connect(),setTimeout(function(){c.disconnect()},5e3)},85:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.EventEmitter=function(){function e(){o(this,e),this.events={}}return r(e,[{key:"on",value:function(e,t){e&&t&&(this.events[e]=this.events[e]||[],this.events[e].push(t))}},{key:"emit",value:function(e,t){var n=this.events[e];if(n&&n.length)for(var o=0;o<n.length;o++)n[o](t)}}]),e}()}});