// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/setSVG.js":[function(require,module,exports) {
document.querySelector(".home-title").innerHTML = "\n<div>\n<svg   height=\"100%\" viewBox=\"0 0 877 82\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M62.1104 10.2832H36.9736V80H26.7148V10.2832H1.63184V1.79688H62.1104V10.2832Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M90.4353 80H80.4451V17.4268H90.4353V80Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M165.972 80H156.089L123.594 32.9492V80H113.658V17.4268H123.594L156.089 64.5312V17.4268H165.972V80Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M226.202 65.0146H198.272L192.364 80H182.212L207.94 17.4268H216.856L242.207 80H232.11L226.202 65.0146ZM201.495 56.9043H223.033L212.344 29.5654L201.495 56.9043Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M305.464 49.3848V80H295.151V1.79688H323.994C332.552 1.79688 339.248 3.98112 344.082 8.34961C348.952 12.7181 351.387 18.501 351.387 25.6982C351.387 33.2894 349.006 39.1439 344.243 43.2617C339.517 47.3438 332.731 49.3848 323.887 49.3848H305.464ZM305.464 40.9521H323.994C329.508 40.9521 333.734 39.6631 336.67 37.085C339.606 34.471 341.074 30.7113 341.074 25.8057C341.074 21.1507 339.606 17.4268 336.67 14.6338C333.734 11.8408 329.705 10.3906 324.585 10.2832H305.464V40.9521Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M423.003 50.5664C423.003 59.9121 420.532 67.3063 415.591 72.749C410.649 78.1559 404.025 80.8594 395.718 80.8594C387.518 80.8594 380.893 78.1201 375.845 72.6416C370.832 67.1631 368.325 59.7152 368.325 50.2979V46.9678C368.325 37.7295 370.814 30.3532 375.791 24.8389C380.804 19.3245 387.41 16.5674 395.61 16.5674C403.953 16.5674 410.578 19.2887 415.483 24.7314C420.425 30.1742 422.931 37.4609 423.003 46.5918V50.5664ZM413.174 46.8604C413.174 39.7705 411.634 34.3457 408.555 30.5859C405.475 26.8262 401.16 24.9463 395.61 24.9463C390.239 24.9463 385.978 26.862 382.827 30.6934C379.712 34.5247 378.154 39.9674 378.154 47.0215V50.5664C378.154 57.5488 379.73 62.9736 382.881 66.8408C386.032 70.6722 390.311 72.5879 395.718 72.5879C401.304 72.5879 405.6 70.708 408.608 66.9482C411.652 63.1527 413.174 57.6921 413.174 50.5664V46.8604Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M495.693 80H485.81L453.315 32.9492V80H443.379V17.4268H453.315L485.81 64.5312V17.4268H495.693V80Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M565.751 25.6445H544.321V80H534.384V25.6445H513.061V17.4268H565.751V25.6445Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M593.754 80H583.764V17.4268H593.754V80Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M667.143 59.751C666.426 66.4469 663.812 71.639 659.301 75.3271C654.789 79.0153 648.791 80.8594 641.308 80.8594C633.287 80.8594 626.841 78.2275 621.972 72.9639C617.138 67.6644 614.721 60.3776 614.721 51.1035V46.0547C614.721 40.1823 615.813 35.026 617.997 30.5859C620.217 26.11 623.386 22.6546 627.504 20.2197C631.658 17.7848 636.456 16.5674 641.898 16.5674C649.203 16.5674 655.058 18.4652 659.462 22.2607C663.902 26.0205 666.462 31.2484 667.143 37.9443H657.206C656.562 33.2894 654.968 29.9235 652.426 27.8467C649.919 25.7699 646.41 24.7314 641.898 24.7314C636.42 24.7314 632.177 26.5576 629.169 30.21C626.197 33.8265 624.693 39.0186 624.657 45.7861V51.4795C624.657 58.2471 626.072 63.4928 628.9 67.2168C631.765 70.9049 635.901 72.749 641.308 72.749C646.142 72.749 649.812 71.7643 652.318 69.7949C654.861 67.7897 656.49 64.4417 657.206 59.751H667.143Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M724.847 51.748H696.273V71.8896H729.52V80H686.337V17.4268H729.198V25.6445H696.273V43.584H724.847V51.748Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M757.577 71.8896H788.944V80H747.64V17.4268H757.577V71.8896Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M816.195 71.8896H847.562V80H806.258V17.4268H816.195V71.8896Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M875.565 80H865.574V17.4268H875.565V80Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n</svg>\n</div>\n\n<div>\n<svg height=\"100%\" viewBox=\"0 0 459 50\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M21.6616 39.9067L34.8647 1.78906H41.5298L24.3911 48H18.9956L1.88867 1.78906H8.52197L21.6616 39.9067Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M57.6325 48H51.7292V11.0249H57.6325V48Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M92.4608 38.542C92.4608 36.8493 91.8155 35.5374 90.5248 34.6064C89.2553 33.6755 87.0653 32.8185 83.955 32.0356C80.8446 31.2528 78.3796 30.4064 76.56 29.4966C72.434 27.423 70.371 24.4925 70.371 20.7051C70.371 17.6794 71.6511 15.2249 74.2113 13.3418C76.7927 11.4587 80.1041 10.5171 84.1454 10.5171C88.2925 10.5171 91.678 11.575 94.3017 13.6909C96.9465 15.8068 98.2689 18.5151 98.2689 21.8159H92.3974C92.3974 19.7424 91.6462 18.1449 90.1439 17.0234C88.6628 15.8809 86.6422 15.3096 84.0819 15.3096C81.691 15.3096 79.7867 15.7856 78.369 16.7378C76.9514 17.6688 76.2426 18.9806 76.2426 20.6733C76.2426 22.0487 76.8879 23.2018 78.1786 24.1328C79.4905 25.0638 81.7968 25.9525 85.0976 26.7988C88.3983 27.6452 90.9797 28.6079 92.8417 29.687C94.7037 30.745 96.0896 31.9933 96.9994 33.4321C97.9092 34.8709 98.3642 36.5531 98.3642 38.4785C98.3642 41.5889 97.0735 44.0433 94.4921 45.8418C91.9319 47.6191 88.5465 48.5078 84.3358 48.5078C79.956 48.5078 76.3166 47.4393 73.4179 45.3022C70.5403 43.144 69.1015 40.3511 69.1015 36.9233H75.0048C75.0048 39.0815 75.8194 40.7637 77.4486 41.9697C79.0779 43.1758 81.3736 43.7788 84.3358 43.7788C87.0019 43.7788 89.0225 43.3027 90.3979 42.3506C91.7732 41.3773 92.4608 40.1077 92.4608 38.542Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M137.858 11.0249V35.7808C137.858 39.6317 136.536 42.7209 133.891 45.0483C131.246 47.3547 127.712 48.5078 123.29 48.5078C118.847 48.5078 115.324 47.397 112.721 45.1753C110.119 42.9325 108.786 39.8856 108.722 36.0347V11.0249H114.53V35.7808C114.53 38.341 115.282 40.3088 116.784 41.6841C118.307 43.0382 120.476 43.7153 123.29 43.7153C126.062 43.7153 128.199 43.0488 129.701 41.7158C131.225 40.3617 131.986 38.3833 131.986 35.7808V11.0249H137.858Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M172.623 39.145H156.119L152.628 48H146.629L161.832 11.0249H167.1L182.081 48H176.114L172.623 39.145ZM158.023 34.3525H170.75L164.434 18.1978L158.023 34.3525Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M197.581 43.2075H216.116V48H191.709V11.0249H197.581V43.2075Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M273.521 35.9395H254.161L249.813 48H243.529L261.175 1.78906H266.507L284.185 48H277.933L273.521 35.9395ZM256.002 30.9248H271.712L263.841 9.31104L256.002 30.9248Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M308.699 33.7495H299.844V48H293.972V11.0249H307.493C312 11.0249 315.47 12.0088 317.903 13.9766C320.357 15.9443 321.585 18.7267 321.585 22.3237C321.585 27.1479 319.098 30.5016 314.126 32.3848L323.267 47.6826V48H316.983L308.699 33.7495ZM299.844 28.957H307.651C310.127 28.957 312.084 28.3857 313.523 27.2432C314.983 26.0794 315.713 24.5137 315.713 22.5459C315.713 20.43 315.004 18.7902 313.587 17.6265C312.169 16.4627 310.127 15.8809 307.461 15.8809H299.844V28.957Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M360.951 15.8809H348.288V48H342.416V15.8809H329.816V11.0249H360.951V15.8809Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M377.499 48H371.595V11.0249H377.499V48Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M412.327 38.542C412.327 36.8493 411.681 35.5374 410.391 34.6064C409.121 33.6755 406.931 32.8185 403.821 32.0356C400.711 31.2528 398.246 30.4064 396.426 29.4966C392.3 27.423 390.237 24.4925 390.237 20.7051C390.237 17.6794 391.517 15.2249 394.077 13.3418C396.659 11.4587 399.97 10.5171 404.011 10.5171C408.159 10.5171 411.544 11.575 414.168 13.6909C416.813 15.8068 418.135 18.5151 418.135 21.8159H412.263C412.263 19.7424 411.512 18.1449 410.01 17.0234C408.529 15.8809 406.508 15.3096 403.948 15.3096C401.557 15.3096 399.653 15.7856 398.235 16.7378C396.817 17.6688 396.109 18.9806 396.109 20.6733C396.109 22.0487 396.754 23.2018 398.045 24.1328C399.356 25.0638 401.663 25.9525 404.964 26.7988C408.264 27.6452 410.846 28.6079 412.708 29.687C414.57 30.745 415.956 31.9933 416.865 33.4321C417.775 34.8709 418.23 36.5531 418.23 38.4785C418.23 41.5889 416.939 44.0433 414.358 45.8418C411.798 47.6191 408.412 48.5078 404.202 48.5078C399.822 48.5078 396.183 47.4393 393.284 45.3022C390.406 43.144 388.967 40.3511 388.967 36.9233H394.871C394.871 39.0815 395.685 40.7637 397.315 41.9697C398.944 43.1758 401.24 43.7788 404.202 43.7788C406.868 43.7788 408.889 43.3027 410.264 42.3506C411.639 41.3773 412.327 40.1077 412.327 38.542Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n<path d=\"M457.311 15.8809H444.648V48H438.776V15.8809H426.176V11.0249H457.311V15.8809Z\" stroke=\"currentColor\" stroke-width=\"1\" mask=\"url(#path-1-outside-1)\"/>\n</svg>\n</div>\n\n\n";
},{}],"node_modules/lb-scroll-nav/bundle.js":[function(require,module,exports) {
"use strict";function setScrollNav(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.querySelector("body"),o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:.5;document.addEventListener("click",function(e){var t=e.target.getAttribute("href");t&&"#"===e.target.getAttribute("href")[0]&&window.location.replace(t)});var c={threshold:o};try{var r=new IntersectionObserver(function(e){e.forEach(function(e){if(e.intersectionRatio>=c.threshold){var t=e.target.id,o=document.querySelector(".navlink-active"),r=document.querySelector('[href="#'.concat(t,'"]'));o&&o.classList.remove("navlink-active"),r.classList.add("navlink-active"),history.replaceState({},t,"/#".concat(t))}})},c);e.forEach(function(e){r.observe(e)})}catch(e){console.log("The IntersectionObserver API might not be supported by the browser")}t.style.overflowY="scroll",t.style.overflowX="hidden",t.style.scrollBehavior="smooth";var n=document.querySelector("body");n.style.height="100vh",n.style.width="100%",n.style.overflow="hidden",document.querySelector("nav").style.width="100%"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=setScrollNav;
},{}],"src/assets/moltitudine1100/line1.jpg":[function(require,module,exports) {
module.exports = "/line1.db7e1289.jpg";
},{}],"src/assets/moltitudine1100/line2.jpg":[function(require,module,exports) {
module.exports = "/line2.bc4b3d49.jpg";
},{}],"src/assets/moltitudine1100/line3.jpg":[function(require,module,exports) {
module.exports = "/line3.3e998f1c.jpg";
},{}],"src/assets/moltitudine1100/line4.jpg":[function(require,module,exports) {
module.exports = "/line4.38616ce6.jpg";
},{}],"src/assets/moltitudine1100/line5.jpg":[function(require,module,exports) {
module.exports = "/line5.68d5d6d7.jpg";
},{}],"src/assets/moltitudine1100/line6.jpg":[function(require,module,exports) {
module.exports = "/line6.b4550ac4.jpg";
},{}],"src/assets/moltitudine1100/line7.jpg":[function(require,module,exports) {
module.exports = "/line7.c64a744e.jpg";
},{}],"src/assets/moltitudine1100/line8.jpg":[function(require,module,exports) {
module.exports = "/line8.5020011e.jpg";
},{}],"src/assets/moltitudine1920/line1.jpg":[function(require,module,exports) {
module.exports = "/line1.d1607061.jpg";
},{}],"src/assets/moltitudine1920/line2.jpg":[function(require,module,exports) {
module.exports = "/line2.d4aceece.jpg";
},{}],"src/assets/moltitudine1920/line3.jpg":[function(require,module,exports) {
module.exports = "/line3.d9209551.jpg";
},{}],"src/assets/moltitudine1920/line4.jpg":[function(require,module,exports) {
module.exports = "/line4.ae0655e2.jpg";
},{}],"src/assets/moltitudine1920/line5.jpg":[function(require,module,exports) {
module.exports = "/line5.60da7cbc.jpg";
},{}],"src/assets/moltitudine1920/line6.jpg":[function(require,module,exports) {
module.exports = "/line6.d21f6b77.jpg";
},{}],"src/assets/moltitudine1920/line7.jpg":[function(require,module,exports) {
module.exports = "/line7.5427fbe0.jpg";
},{}],"src/assets/moltitudine1920/line8.jpg":[function(require,module,exports) {
module.exports = "/line8.bf7462a8.jpg";
},{}],"src/assets/moltitudine480/line1.jpg":[function(require,module,exports) {
module.exports = "/line1.f38f2976.jpg";
},{}],"src/assets/moltitudine480/line2.jpg":[function(require,module,exports) {
module.exports = "/line2.5e1d2efa.jpg";
},{}],"src/assets/moltitudine480/line3.jpg":[function(require,module,exports) {
module.exports = "/line3.79ae613a.jpg";
},{}],"src/assets/moltitudine480/line4.jpg":[function(require,module,exports) {
module.exports = "/line4.9bd1874b.jpg";
},{}],"src/assets/moltitudine480/line5.jpg":[function(require,module,exports) {
module.exports = "/line5.d054b95c.jpg";
},{}],"src/assets/moltitudine480/line6.jpg":[function(require,module,exports) {
module.exports = "/line6.fa6d5e84.jpg";
},{}],"src/assets/moltitudine480/line7.jpg":[function(require,module,exports) {
module.exports = "/line7.4a46e401.jpg";
},{}],"src/assets/moltitudine480/line8.jpg":[function(require,module,exports) {
module.exports = "/line8.91d17047.jpg";
},{}],"src/assets/moltitudine768/line1.jpg":[function(require,module,exports) {
module.exports = "/line1.9e353352.jpg";
},{}],"src/assets/moltitudine768/line2.jpg":[function(require,module,exports) {
module.exports = "/line2.8cb07ff2.jpg";
},{}],"src/assets/moltitudine768/line3.jpg":[function(require,module,exports) {
module.exports = "/line3.14588c9b.jpg";
},{}],"src/assets/moltitudine768/line4.jpg":[function(require,module,exports) {
module.exports = "/line4.9f2ce436.jpg";
},{}],"src/assets/moltitudine768/line5.jpg":[function(require,module,exports) {
module.exports = "/line5.80b13678.jpg";
},{}],"src/assets/moltitudine768/line6.jpg":[function(require,module,exports) {
module.exports = "/line6.baef8272.jpg";
},{}],"src/assets/moltitudine768/line7.jpg":[function(require,module,exports) {
module.exports = "/line7.744599b1.jpg";
},{}],"src/assets/moltitudine768/line8.jpg":[function(require,module,exports) {
module.exports = "/line8.25018fba.jpg";
},{}],"src/assets/**/*.*":[function(require,module,exports) {
module.exports = {
  "moltitudine1100": {
    "line1": {
      "jpg": require("./..\\moltitudine1100\\line1.jpg")
    },
    "line2": {
      "jpg": require("./..\\moltitudine1100\\line2.jpg")
    },
    "line3": {
      "jpg": require("./..\\moltitudine1100\\line3.jpg")
    },
    "line4": {
      "jpg": require("./..\\moltitudine1100\\line4.jpg")
    },
    "line5": {
      "jpg": require("./..\\moltitudine1100\\line5.jpg")
    },
    "line6": {
      "jpg": require("./..\\moltitudine1100\\line6.jpg")
    },
    "line7": {
      "jpg": require("./..\\moltitudine1100\\line7.jpg")
    },
    "line8": {
      "jpg": require("./..\\moltitudine1100\\line8.jpg")
    }
  },
  "moltitudine1920": {
    "line1": {
      "jpg": require("./..\\moltitudine1920\\line1.jpg")
    },
    "line2": {
      "jpg": require("./..\\moltitudine1920\\line2.jpg")
    },
    "line3": {
      "jpg": require("./..\\moltitudine1920\\line3.jpg")
    },
    "line4": {
      "jpg": require("./..\\moltitudine1920\\line4.jpg")
    },
    "line5": {
      "jpg": require("./..\\moltitudine1920\\line5.jpg")
    },
    "line6": {
      "jpg": require("./..\\moltitudine1920\\line6.jpg")
    },
    "line7": {
      "jpg": require("./..\\moltitudine1920\\line7.jpg")
    },
    "line8": {
      "jpg": require("./..\\moltitudine1920\\line8.jpg")
    }
  },
  "moltitudine480": {
    "line1": {
      "jpg": require("./..\\moltitudine480\\line1.jpg")
    },
    "line2": {
      "jpg": require("./..\\moltitudine480\\line2.jpg")
    },
    "line3": {
      "jpg": require("./..\\moltitudine480\\line3.jpg")
    },
    "line4": {
      "jpg": require("./..\\moltitudine480\\line4.jpg")
    },
    "line5": {
      "jpg": require("./..\\moltitudine480\\line5.jpg")
    },
    "line6": {
      "jpg": require("./..\\moltitudine480\\line6.jpg")
    },
    "line7": {
      "jpg": require("./..\\moltitudine480\\line7.jpg")
    },
    "line8": {
      "jpg": require("./..\\moltitudine480\\line8.jpg")
    }
  },
  "moltitudine768": {
    "line1": {
      "jpg": require("./..\\moltitudine768\\line1.jpg")
    },
    "line2": {
      "jpg": require("./..\\moltitudine768\\line2.jpg")
    },
    "line3": {
      "jpg": require("./..\\moltitudine768\\line3.jpg")
    },
    "line4": {
      "jpg": require("./..\\moltitudine768\\line4.jpg")
    },
    "line5": {
      "jpg": require("./..\\moltitudine768\\line5.jpg")
    },
    "line6": {
      "jpg": require("./..\\moltitudine768\\line6.jpg")
    },
    "line7": {
      "jpg": require("./..\\moltitudine768\\line7.jpg")
    },
    "line8": {
      "jpg": require("./..\\moltitudine768\\line8.jpg")
    }
  }
};
},{"./..\\moltitudine1100\\line1.jpg":"src/assets/moltitudine1100/line1.jpg","./..\\moltitudine1100\\line2.jpg":"src/assets/moltitudine1100/line2.jpg","./..\\moltitudine1100\\line3.jpg":"src/assets/moltitudine1100/line3.jpg","./..\\moltitudine1100\\line4.jpg":"src/assets/moltitudine1100/line4.jpg","./..\\moltitudine1100\\line5.jpg":"src/assets/moltitudine1100/line5.jpg","./..\\moltitudine1100\\line6.jpg":"src/assets/moltitudine1100/line6.jpg","./..\\moltitudine1100\\line7.jpg":"src/assets/moltitudine1100/line7.jpg","./..\\moltitudine1100\\line8.jpg":"src/assets/moltitudine1100/line8.jpg","./..\\moltitudine1920\\line1.jpg":"src/assets/moltitudine1920/line1.jpg","./..\\moltitudine1920\\line2.jpg":"src/assets/moltitudine1920/line2.jpg","./..\\moltitudine1920\\line3.jpg":"src/assets/moltitudine1920/line3.jpg","./..\\moltitudine1920\\line4.jpg":"src/assets/moltitudine1920/line4.jpg","./..\\moltitudine1920\\line5.jpg":"src/assets/moltitudine1920/line5.jpg","./..\\moltitudine1920\\line6.jpg":"src/assets/moltitudine1920/line6.jpg","./..\\moltitudine1920\\line7.jpg":"src/assets/moltitudine1920/line7.jpg","./..\\moltitudine1920\\line8.jpg":"src/assets/moltitudine1920/line8.jpg","./..\\moltitudine480\\line1.jpg":"src/assets/moltitudine480/line1.jpg","./..\\moltitudine480\\line2.jpg":"src/assets/moltitudine480/line2.jpg","./..\\moltitudine480\\line3.jpg":"src/assets/moltitudine480/line3.jpg","./..\\moltitudine480\\line4.jpg":"src/assets/moltitudine480/line4.jpg","./..\\moltitudine480\\line5.jpg":"src/assets/moltitudine480/line5.jpg","./..\\moltitudine480\\line6.jpg":"src/assets/moltitudine480/line6.jpg","./..\\moltitudine480\\line7.jpg":"src/assets/moltitudine480/line7.jpg","./..\\moltitudine480\\line8.jpg":"src/assets/moltitudine480/line8.jpg","./..\\moltitudine768\\line1.jpg":"src/assets/moltitudine768/line1.jpg","./..\\moltitudine768\\line2.jpg":"src/assets/moltitudine768/line2.jpg","./..\\moltitudine768\\line3.jpg":"src/assets/moltitudine768/line3.jpg","./..\\moltitudine768\\line4.jpg":"src/assets/moltitudine768/line4.jpg","./..\\moltitudine768\\line5.jpg":"src/assets/moltitudine768/line5.jpg","./..\\moltitudine768\\line6.jpg":"src/assets/moltitudine768/line6.jpg","./..\\moltitudine768\\line7.jpg":"src/assets/moltitudine768/line7.jpg","./..\\moltitudine768\\line8.jpg":"src/assets/moltitudine768/line8.jpg"}],"node_modules/lb-lazy-images/bundle.js":[function(require,module,exports) {
"use strict";function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],o=!0,n=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(o=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(n)throw a}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=loadImg;var images=require("./../../src/assets/**/*.*"),getAssets=function a(s,c){Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,o=new Array(r);r--;)o[r]=[t[r],e[t[r]]];return o});for(var i={},e=function(){var e=_slicedToArray(u[l],2),t=e[0],r=e[1],o="string"==typeof(f=Object.keys(s[t]).map(function(e){return s[t][e]}))[0],n="object"===_typeof(f[0]);o?i[c+t]=r:n&&(i=_objectSpread({},i,{},a(r,c+t+"/")))},l=0,u=Object.entries(s);l<u.length;l++){var f;e()}return i},pathList=getAssets(images,"");function loadImg(a){var t=[];if(a.length||(a=new Array(a)),a.length)for(var e=function(n){if("Promise"in window){var e=new Promise(function(e,t){for(var s=document.createElement("img"),r=a[n].attributes,o=0;o<r.length;o++)"src"!==r[o].name&&"data-src"!==r[o].name&&"data-srcset"!==r[o].name&&s.setAttribute(r[o].name,r[o].value);a[n].dataset.srcset.split([","]).forEach(function(e){var t=e.substring(1).indexOf(" "),r=e.substring(0,t+1);if(r){for(var o=0;r[o].toLowerCase()===r[o].toUpperCase();)o++;r=e.substring(o,t+1);var n=e.substring(t+1),a=pathList[r][Object.keys(pathList[r])[0]];s.srcset+=a+" "+n+", "}}),pathList[a[n].dataset.src]?s.src=pathList[a[n].dataset.src][Object.keys(pathList[a[n].dataset.src])[0]]:(e(a[n]),console.error('<img data-src="'.concat(a[n].dataset.src,'"/> not loaded, please check the path'))),s.onload=function(){return e(s)}});e.then(function(e){return a[n].parentNode.replaceChild(e,a[n]),""}),t.push(e)}else try{a[n].src=pathList[a[n].dataset.src][Object.keys(pathList[a[n].dataset.src])[0]]}catch(e){console.error('<img data-src="'.concat(a[n].dataset.src,'"/> not loaded, please check the path'))}},r=0;r<a.length;r++)e(r);if("Promise"in window)return Promise.all(t)}var imagesScroll=document.querySelectorAll("[loadOnScroll]");if(imagesScroll.length)try{var loadCb=function(e){e.forEach(function(e){0<e.intersectionRatio&&(loadImg(e.target),loadObs.unobserve(e.target))})},loadObs=new IntersectionObserver(loadCb,{rootMargin:"0px 0px 500px 0px"});Array.prototype.forEach.call(imagesScroll,function(e){loadObs.observe(e)})}catch(e){console.log("EagerLoaded as a fallback"),loadImg(imagesScroll)}
},{"./../../src/assets/**/*.*":"src/assets/**/*.*"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/lb-burger/dist/randOpacity.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/lb-burger/dist/bundle.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./randOpacity.css"),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{enumerable:!1,value:function(t){return 0<this.filter(function(e){return e==t}).length}});var getRandIndex=function(e){return Math.floor(Math.random()*e)},toggleOpacity=function(e,t){1===t?(e.classList.remove("toggle-popout"),setTimeout(function(){return e.classList.add("toggle-popout")},17)):0===t?(e.classList.remove("toggle-fadein"),setTimeout(function(){return e.classList.add("toggle-fadein")},17)):e.style.opacity=Math.floor(9*Math.random()+2)/10},randOpacity=function(e,n,t){var o=t.frequency,r=void 0===o?5:o,a=t.duration,i=void 0===a?2e3:a,d=t.fadeTo,u=void 0===d?null:d,s=0;e.className+=" lb-effect-rand-opacity-container",e.style.animationDuration=i+"ms";var l=[];!function e(){if(r<1||10<r)throw new Error("function randOpacity(nodeList, options) : frequency option must be between 1 and 10 included");if(++s%(55-5*r)==0){for(var t=getRandIndex(n.length);l.includes(t);)t=getRandIndex(n.length);l.push(t),l.length>=n.length/5&&l.shift(),toggleOpacity(n[t],u)}window.requestAnimationFrame(e)}()},_default=randOpacity;exports.default=_default;
},{"./randOpacity.css":"node_modules/lb-burger/dist/randOpacity.css"}],"src/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

require("./setSVG.js");

var _lbScrollNav = _interopRequireDefault(require("lb-scroll-nav"));

var _lbLazyImages = _interopRequireDefault(require("lb-lazy-images"));

var _lbBurger = _interopRequireDefault(require("lb-burger"));

require("./main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Scroll Nav
var sections = document.querySelectorAll("section");
var sectionContainer = document.querySelector(".section-container");
(0, _lbScrollNav.default)(sections, sectionContainer); //lazy load Moltitudine

var moltitudine = document.querySelector(".moltitudine");
var sizes = [480, 768, 1100, 1920];
var lines = document.querySelectorAll(".line");
[].forEach.call(lines, function (line, index) {
  line.dataset.srcset = "";
  sizes.forEach(function (size) {
    line.dataset.srcset += "moltitudine".concat(size, "/line").concat(index + 1, " ").concat(size, "w, ");
  });
});
if ("Promise" in window) (0, _lbLazyImages.default)(lines).then(function (lines) {
  lines[0].parentElement.parentElement.className += " display";
});else {
  (0, _lbLazyImages.default)(lines);
  setTimeout(function () {
    return lines[0].parentElement.parentElement.className += " display";
  }, 1000);
} //Set white squares on top

var linesContainers = document.querySelectorAll(".line-container");
[].forEach.call(linesContainers, function (line) {
  for (var i = 0; i < 23; i++) {
    var square = document.createElement("div");
    square.className = "square";
    line.querySelector(".squares").appendChild(square);
  }
}); //Molutitudine Animation

var squares = document.querySelectorAll(".square");
var options = {
  frequency: 2,
  duration: 8000,
  fadeTo: 0
};
(0, _lbBurger.default)(moltitudine, squares, options);
},{"./setSVG.js":"src/setSVG.js","lb-scroll-nav":"node_modules/lb-scroll-nav/bundle.js","lb-lazy-images":"node_modules/lb-lazy-images/bundle.js","lb-burger":"node_modules/lb-burger/dist/bundle.js","./main.css":"src/main.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57476" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map