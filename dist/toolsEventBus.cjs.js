"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Map"===(e="Object"===e&&r.constructor?r.constructor.name:e)||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function injection(r,t,e,n){"function"==typeof e&&"string"==typeof t&&(r.dp[t]||(r.dp[t]=[])).push({func:e,type:n})}function EventBus(r){this.dp={},this.name=r}EventBus.prototype.on=function(r,t){return injection(this,r,t,"on"),this},EventBus.prototype.once=function(r,t){return injection(this,r,t,"once"),this},EventBus.prototype.emit=function(r){for(var e=this,t=arguments.length,n=new Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var a=this.dp[r];return a&&(this.dp[r]=_toConsumableArray(a).filter(function(r){var t;return(t=r.func).call.apply(t,[e].concat(n)),"on"===r.type})),this},EventBus.prototype.off=function(r,t){var e=this.dp[r];return e&&(t?this.dp[r]=e.filter(function(r){return r.func!==t}):delete this.dp[r]),this},module.exports=EventBus;
