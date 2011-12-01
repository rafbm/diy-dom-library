;(function(window, document, undefined) {
  var $A = function(iterable) { return Array.prototype.slice.call(iterable, 0) }
  var DomWrapper = function() { return this.initialize.apply(this, arguments) }
  DomWrapper.prototype = {
    initialize: function(arg1, arg2) {
    },
    splice: function() { // makes WebKit Inspector log DomWrapper objects like arrays (yay!)
      return Array.prototype.splice.apply(this, arguments)
    },

    each: function(callback) {
    },

    // HTML
    html: function(html) {
    },
    text: function(text) {
    },

    // element manipulation
    append: function() {
    },
    prepend: function() {
    },
    before: function() {
    },
    after: function() {
    },

    remove: function() {
    },

    // className
    addClass: function(classNames) {
    },
    removeClass: function(classNames) {
    },
    hasClass: function(className) {
    },
    toggleClass: function(classNames) {
    },

    // element filtering
    is: function(selector) {
    },

    filter: function(selector) {
    },
    not: function(selector/* or element */) {
    },

    // DOM traversal
    children: function(selector) {
    },
    find: function(selector) {
    },

    prev: function(selector) {
    },
    next: function(selector) {
    },
    siblings: function(selector) {
    },

    parent: function(selector) {
    },
    closest: function(selector) {
    },

    // CSS styles
    css: function(property, value) {
    },

    // events
    on: function(eventName, handler) {
    }
  }
  window.DomWrapper = DomWrapper
  window.$ = function(arg1, arg2) { return new DomWrapper(arg1, arg2) }
})(window, document)
