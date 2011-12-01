;(function(window, document, undefined) {
  var $A = function(iterable) { // turns any iterable into an array
    return Array.prototype.slice.call(iterable, 0)
  }
  var DomWrapper = function() { return this.initialize.apply(this, arguments) }
  DomWrapper.prototype = {
    initialize: function(arg1, arg2) {
      // (iterable)
      if ('length' in arg1) {
        for (var e = 0, l = arg1.length; e < l; e++)
          this[e] = arg1[e]
        this.length = arg1.length

      } else {
        // single element
        this.length = 1
        this[0] = arg1
      }

      return this
    },
    splice: function() { // makes WebKit Inspector log DomWrapper objects like arrays (yay!)
      return Array.prototype.splice.apply(this, arguments)
    },

    each: function(callback) {
      if (this.length > 1) // avoid loop if only one item
        for (var i = 0, l = this.length; i < l; i++)
          callback.call(this[i], i, this[i])
      else if (this.length === 1)
        callback.call(this[0], 0, this[0])
      return this
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
