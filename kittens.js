(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Kittens = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var img = "data:image/gif;base64,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";

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame || function(callback) {
    setTimeout(callback, 1000 / 60);
  };

function Kitten() {
  var posX = (Math.random() * (window.innerWidth - 200)) + 100;
  var posY = (Math.random() * (window.innerHeight - 400)) + 150;
  var increment = (Math.random() * 5) + 2;
  var node = document.createElement('img');
  node.setAttribute('src', img);
  node.setAttribute('style', 'width: 157px; height: 109px;display: block; position: fixed; top: '
    + posY + 'px; left: ' + posX + 'px;z-index: 99999');

  if (Math.random() < 0.5) {
    increment = 0 - increment;
    node.style['-moz-transform'] = 'scaleX(-1)';
    node.style['-o-transform'] = 'scaleX(-1)';
    node.style['-webkit-transform'] = 'scaleX(-1)';
    node.style['transform'] = 'scaleX(-1)';
  }
  node.style['-webkit-filter'] = 'hue-rotate(30deg)';

  function move() {
    if (posX >= (window.innerWidth - 150)) {
      increment = 0 - increment;
      node.style['-moz-transform'] = 'scaleX(-1)';
      node.style['-o-transform'] = 'scaleX(-1)';
      node.style['-webkit-transform'] = 'scaleX(-1)';
      node.style['transform'] = 'scaleX(-1)';
    } else if (posX <= 0) {
      increment = 0 - increment;
      node.style['-moz-transform'] = '';
      node.style['-o-transform'] = '';
      node.style['-webkit-transform'] = '';
      node.style['transform'] = '';
    }
    posX = posX + increment;
    node.style.left = posX + 'px';
  }

  return {
    inject: function() {
      document.body.appendChild(node);
    },
    update: move
  };
}

module.exports = {
  init: function(nbr) {
    nbr = nbr || 5;
    var kittens = [];
    for (var i = 0; i < nbr; i++) {
      var k = Kitten();
      k.inject();
      kittens.push(k);
    }

    function update() {
      kittens.forEach(function(k) {
        k.update();
      });
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
};

},{}]},{},[1])(1)
});