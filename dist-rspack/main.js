;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define('main', [], factory)
  } else if (typeof exports === 'object') {
    exports['main'] = factory()
  } else {
    root['main'] = factory()
  }
})(self, () => {
  return (() => {
    // webpackBootstrap
    var __webpack_modules__ = {
      724: function () {
        define(function () {
          return 'from amd1'
        })
      },
      7: function () {
        define('', [], function () {
          return 'from amd2-1'
        })

        define('', [], function () {
          return 'from amd2-2'
        })
      },
    }
    /************************************************************************/
    // The module cache
    var __webpack_module_cache__ = {}

    // The require function
    function __webpack_require__(moduleId) {
      // Check if module is in cache
      var cachedModule = __webpack_module_cache__[moduleId]
      if (cachedModule !== undefined) {
        return cachedModule.exports
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
        exports: {},
      })
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

      // Return the exports of the module
      return module.exports
    }

    /************************************************************************/
    var __webpack_exports__ = {}
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    ;(() => {
      const a1 = __webpack_require__(724)
      const a2 = __webpack_require__(7)

      console.log(a1, a2)
    })()

    return __webpack_exports__
  })()
})
