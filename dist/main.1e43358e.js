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
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=setScrollNav;function setScrollNav(sections){var sectionsContainer=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document.querySelector("body");var threshold=arguments.length>2&&arguments[2]!==undefined?arguments[2]:.5;document.addEventListener("click",function(e){var href=e.target.getAttribute("href");if(href&&e.target.getAttribute("href")[0]==="#"){window.location.replace(href)}});var options={threshold:threshold};function callback(entries){entries.forEach(function(entry){if(entry.intersectionRatio>=options.threshold){var id=entry.target.id;var prevActive=document.querySelector(".navlink-active");var newActive=document.querySelector('[href="#'.concat(id,'"]'));prevActive&&prevActive.classList.remove("navlink-active");newActive.classList.add("navlink-active");history.replaceState({},id,"/#".concat(id))}})}try{var observer=new IntersectionObserver(callback,options);sections.forEach(function(section){observer.observe(section)})}catch(error){console.log("The IntersectionObserver API might not be supported by the browser")}sectionsContainer.style.overflowY="scroll";sectionsContainer.style.overflowX="hidden";sectionsContainer.style.scrollBehavior="smooth";var body=document.querySelector("body");body.style.height="100vh";body.style.width="100%";body.style.overflow="hidden";document.querySelector("nav").style.width="100%"}
},{}],"src/assets/subtitle.svg":[function(require,module,exports) {
module.exports = "/subtitle.aea07815.svg";
},{}],"src/assets/moltitudine/0.png":[function(require,module,exports) {
module.exports = "/0.c8d078a0.png";
},{}],"src/assets/moltitudine/1.png":[function(require,module,exports) {
module.exports = "/1.f2a88bf9.png";
},{}],"src/assets/moltitudine/10.png":[function(require,module,exports) {
module.exports = "/10.78e9f45f.png";
},{}],"src/assets/moltitudine/100.png":[function(require,module,exports) {
module.exports = "/100.802b155e.png";
},{}],"src/assets/moltitudine/101.png":[function(require,module,exports) {
module.exports = "/101.8fe23626.png";
},{}],"src/assets/moltitudine/102.png":[function(require,module,exports) {
module.exports = "/102.281dbd44.png";
},{}],"src/assets/moltitudine/103.png":[function(require,module,exports) {
module.exports = "/103.3bbfd006.png";
},{}],"src/assets/moltitudine/104.png":[function(require,module,exports) {
module.exports = "/104.38097b70.png";
},{}],"src/assets/moltitudine/105.png":[function(require,module,exports) {
module.exports = "/105.c50f072c.png";
},{}],"src/assets/moltitudine/106.png":[function(require,module,exports) {
module.exports = "/106.a6b28bea.png";
},{}],"src/assets/moltitudine/107.png":[function(require,module,exports) {
module.exports = "/107.58114ec2.png";
},{}],"src/assets/moltitudine/108.png":[function(require,module,exports) {
module.exports = "/108.d75de401.png";
},{}],"src/assets/moltitudine/109.png":[function(require,module,exports) {
module.exports = "/109.bc415a38.png";
},{}],"src/assets/moltitudine/11.png":[function(require,module,exports) {
module.exports = "/11.86fa8603.png";
},{}],"src/assets/moltitudine/110.png":[function(require,module,exports) {
module.exports = "/110.da4fb010.png";
},{}],"src/assets/moltitudine/111.png":[function(require,module,exports) {
module.exports = "/111.6f9f7584.png";
},{}],"src/assets/moltitudine/112.png":[function(require,module,exports) {
module.exports = "/112.41efb141.png";
},{}],"src/assets/moltitudine/113.png":[function(require,module,exports) {
module.exports = "/113.e600c47e.png";
},{}],"src/assets/moltitudine/114.png":[function(require,module,exports) {
module.exports = "/114.76e347c7.png";
},{}],"src/assets/moltitudine/115.png":[function(require,module,exports) {
module.exports = "/115.1df1da72.png";
},{}],"src/assets/moltitudine/116.png":[function(require,module,exports) {
module.exports = "/116.a7edf21a.png";
},{}],"src/assets/moltitudine/117.png":[function(require,module,exports) {
module.exports = "/117.09408863.png";
},{}],"src/assets/moltitudine/118.png":[function(require,module,exports) {
module.exports = "/118.dc019bb1.png";
},{}],"src/assets/moltitudine/119.png":[function(require,module,exports) {
module.exports = "/119.c966865e.png";
},{}],"src/assets/moltitudine/12.png":[function(require,module,exports) {
module.exports = "/12.9adc6286.png";
},{}],"src/assets/moltitudine/120.png":[function(require,module,exports) {
module.exports = "/120.c4ae3b6a.png";
},{}],"src/assets/moltitudine/121.png":[function(require,module,exports) {
module.exports = "/121.09277027.png";
},{}],"src/assets/moltitudine/122.png":[function(require,module,exports) {
module.exports = "/122.d7635a7d.png";
},{}],"src/assets/moltitudine/124.png":[function(require,module,exports) {
module.exports = "/124.c2933928.png";
},{}],"src/assets/moltitudine/125.png":[function(require,module,exports) {
module.exports = "/125.4e1d648e.png";
},{}],"src/assets/moltitudine/126.png":[function(require,module,exports) {
module.exports = "/126.8ba957a1.png";
},{}],"src/assets/moltitudine/127.png":[function(require,module,exports) {
module.exports = "/127.d4604f7c.png";
},{}],"src/assets/moltitudine/128.png":[function(require,module,exports) {
module.exports = "/128.dc1bab48.png";
},{}],"src/assets/moltitudine/129.png":[function(require,module,exports) {
module.exports = "/129.ba892e3a.png";
},{}],"src/assets/moltitudine/123.png":[function(require,module,exports) {
module.exports = "/123.67035202.png";
},{}],"src/assets/moltitudine/13.png":[function(require,module,exports) {
module.exports = "/13.83375a49.png";
},{}],"src/assets/moltitudine/130.png":[function(require,module,exports) {
module.exports = "/130.f7587682.png";
},{}],"src/assets/moltitudine/131.png":[function(require,module,exports) {
module.exports = "/131.c75e74cb.png";
},{}],"src/assets/moltitudine/132.png":[function(require,module,exports) {
module.exports = "/132.37f6e3a9.png";
},{}],"src/assets/moltitudine/133.png":[function(require,module,exports) {
module.exports = "/133.b8982ada.png";
},{}],"src/assets/moltitudine/134.png":[function(require,module,exports) {
module.exports = "/134.f16f7bf9.png";
},{}],"src/assets/moltitudine/135.png":[function(require,module,exports) {
module.exports = "/135.bbbf250b.png";
},{}],"src/assets/moltitudine/136.png":[function(require,module,exports) {
module.exports = "/136.04659561.png";
},{}],"src/assets/moltitudine/137.png":[function(require,module,exports) {
module.exports = "/137.321278e7.png";
},{}],"src/assets/moltitudine/138.png":[function(require,module,exports) {
module.exports = "/138.e895588f.png";
},{}],"src/assets/moltitudine/139.png":[function(require,module,exports) {
module.exports = "/139.bd51f79f.png";
},{}],"src/assets/moltitudine/14.png":[function(require,module,exports) {
module.exports = "/14.0f0b0b21.png";
},{}],"src/assets/moltitudine/140.png":[function(require,module,exports) {
module.exports = "/140.90d32587.png";
},{}],"src/assets/moltitudine/141.png":[function(require,module,exports) {
module.exports = "/141.bb1f6401.png";
},{}],"src/assets/moltitudine/142.png":[function(require,module,exports) {
module.exports = "/142.631fafe0.png";
},{}],"src/assets/moltitudine/143.png":[function(require,module,exports) {
module.exports = "/143.542ff7bf.png";
},{}],"src/assets/moltitudine/144.png":[function(require,module,exports) {
module.exports = "/144.5d5aeede.png";
},{}],"src/assets/moltitudine/145.png":[function(require,module,exports) {
module.exports = "/145.6946bfe4.png";
},{}],"src/assets/moltitudine/146.png":[function(require,module,exports) {
module.exports = "/146.93965f20.png";
},{}],"src/assets/moltitudine/147.png":[function(require,module,exports) {
module.exports = "/147.ac2cd10b.png";
},{}],"src/assets/moltitudine/148.png":[function(require,module,exports) {
module.exports = "/148.340e87e0.png";
},{}],"src/assets/moltitudine/15.png":[function(require,module,exports) {
module.exports = "/15.d67b73b4.png";
},{}],"src/assets/moltitudine/149.png":[function(require,module,exports) {
module.exports = "/149.5ad8f099.png";
},{}],"src/assets/moltitudine/150.png":[function(require,module,exports) {
module.exports = "/150.a3a61bd4.png";
},{}],"src/assets/moltitudine/151.png":[function(require,module,exports) {
module.exports = "/151.90a3d984.png";
},{}],"src/assets/moltitudine/153.png":[function(require,module,exports) {
module.exports = "/153.4bfd780a.png";
},{}],"src/assets/moltitudine/154.png":[function(require,module,exports) {
module.exports = "/154.79ef3a9a.png";
},{}],"src/assets/moltitudine/155.png":[function(require,module,exports) {
module.exports = "/155.20bf8ae7.png";
},{}],"src/assets/moltitudine/156.png":[function(require,module,exports) {
module.exports = "/156.48fade86.png";
},{}],"src/assets/moltitudine/157.png":[function(require,module,exports) {
module.exports = "/157.1236d6ef.png";
},{}],"src/assets/moltitudine/158.png":[function(require,module,exports) {
module.exports = "/158.9d528a98.png";
},{}],"src/assets/moltitudine/159.png":[function(require,module,exports) {
module.exports = "/159.6f2ab9a3.png";
},{}],"src/assets/moltitudine/16.png":[function(require,module,exports) {
module.exports = "/16.224f87aa.png";
},{}],"src/assets/moltitudine/160.png":[function(require,module,exports) {
module.exports = "/160.8cce402e.png";
},{}],"src/assets/moltitudine/161.png":[function(require,module,exports) {
module.exports = "/161.964ab2a2.png";
},{}],"src/assets/moltitudine/162.png":[function(require,module,exports) {
module.exports = "/162.ee6537f0.png";
},{}],"src/assets/moltitudine/163.png":[function(require,module,exports) {
module.exports = "/163.9e57e13f.png";
},{}],"src/assets/moltitudine/164.png":[function(require,module,exports) {
module.exports = "/164.2567ab29.png";
},{}],"src/assets/moltitudine/165.png":[function(require,module,exports) {
module.exports = "/165.c4cf31b3.png";
},{}],"src/assets/moltitudine/166.png":[function(require,module,exports) {
module.exports = "/166.7fbac27b.png";
},{}],"src/assets/moltitudine/167.png":[function(require,module,exports) {
module.exports = "/167.afd42a49.png";
},{}],"src/assets/moltitudine/168.png":[function(require,module,exports) {
module.exports = "/168.72d75992.png";
},{}],"src/assets/moltitudine/17.png":[function(require,module,exports) {
module.exports = "/17.d2710290.png";
},{}],"src/assets/moltitudine/169.png":[function(require,module,exports) {
module.exports = "/169.28f95ee9.png";
},{}],"src/assets/moltitudine/171.png":[function(require,module,exports) {
module.exports = "/171.c463f223.png";
},{}],"src/assets/moltitudine/170.png":[function(require,module,exports) {
module.exports = "/170.89bfd7ec.png";
},{}],"src/assets/moltitudine/172.png":[function(require,module,exports) {
module.exports = "/172.3e15c08d.png";
},{}],"src/assets/moltitudine/173.png":[function(require,module,exports) {
module.exports = "/173.0b026450.png";
},{}],"src/assets/moltitudine/174.png":[function(require,module,exports) {
module.exports = "/174.fbb55eed.png";
},{}],"src/assets/moltitudine/175.png":[function(require,module,exports) {
module.exports = "/175.62e845e1.png";
},{}],"src/assets/moltitudine/176.png":[function(require,module,exports) {
module.exports = "/176.4812d2da.png";
},{}],"src/assets/moltitudine/177.png":[function(require,module,exports) {
module.exports = "/177.01da4f8b.png";
},{}],"src/assets/moltitudine/178.png":[function(require,module,exports) {
module.exports = "/178.6fb48963.png";
},{}],"src/assets/moltitudine/179.png":[function(require,module,exports) {
module.exports = "/179.bf8587f5.png";
},{}],"src/assets/moltitudine/180.png":[function(require,module,exports) {
module.exports = "/180.48307b89.png";
},{}],"src/assets/moltitudine/181.png":[function(require,module,exports) {
module.exports = "/181.dbdc7508.png";
},{}],"src/assets/moltitudine/182.png":[function(require,module,exports) {
module.exports = "/182.cb4a7dad.png";
},{}],"src/assets/moltitudine/183.png":[function(require,module,exports) {
module.exports = "/183.06cee00b.png";
},{}],"src/assets/moltitudine/19.png":[function(require,module,exports) {
module.exports = "/19.3f9fbc01.png";
},{}],"src/assets/moltitudine/2.png":[function(require,module,exports) {
module.exports = "/2.201e5fb8.png";
},{}],"src/assets/moltitudine/20.png":[function(require,module,exports) {
module.exports = "/20.8bb50c10.png";
},{}],"src/assets/moltitudine/21.png":[function(require,module,exports) {
module.exports = "/21.5d43cffa.png";
},{}],"src/assets/moltitudine/22.png":[function(require,module,exports) {
module.exports = "/22.e106ab48.png";
},{}],"src/assets/moltitudine/23.png":[function(require,module,exports) {
module.exports = "/23.9504d49b.png";
},{}],"src/assets/moltitudine/24.png":[function(require,module,exports) {
module.exports = "/24.115e1a9b.png";
},{}],"src/assets/moltitudine/25.png":[function(require,module,exports) {
module.exports = "/25.ebfe1f9c.png";
},{}],"src/assets/moltitudine/26.png":[function(require,module,exports) {
module.exports = "/26.ee55b748.png";
},{}],"src/assets/moltitudine/27.png":[function(require,module,exports) {
module.exports = "/27.04989b9d.png";
},{}],"src/assets/moltitudine/28.png":[function(require,module,exports) {
module.exports = "/28.744c9bbe.png";
},{}],"src/assets/moltitudine/29.png":[function(require,module,exports) {
module.exports = "/29.a0b9abb0.png";
},{}],"src/assets/moltitudine/3.png":[function(require,module,exports) {
module.exports = "/3.6073dcf4.png";
},{}],"src/assets/moltitudine/30.png":[function(require,module,exports) {
module.exports = "/30.1777f5ac.png";
},{}],"src/assets/moltitudine/31.png":[function(require,module,exports) {
module.exports = "/31.042341f4.png";
},{}],"src/assets/moltitudine/32.png":[function(require,module,exports) {
module.exports = "/32.23640f74.png";
},{}],"src/assets/moltitudine/33.png":[function(require,module,exports) {
module.exports = "/33.575efc8b.png";
},{}],"src/assets/moltitudine/34.png":[function(require,module,exports) {
module.exports = "/34.6b84dac9.png";
},{}],"src/assets/moltitudine/35.png":[function(require,module,exports) {
module.exports = "/35.4a1ed9ab.png";
},{}],"src/assets/moltitudine/36.png":[function(require,module,exports) {
module.exports = "/36.a6ae0f81.png";
},{}],"src/assets/moltitudine/37.png":[function(require,module,exports) {
module.exports = "/37.4ca23aa8.png";
},{}],"src/assets/moltitudine/38.png":[function(require,module,exports) {
module.exports = "/38.342fb87b.png";
},{}],"src/assets/moltitudine/152.png":[function(require,module,exports) {
module.exports = "/152.7865c7da.png";
},{}],"src/assets/moltitudine/4.png":[function(require,module,exports) {
module.exports = "/4.f9e95525.png";
},{}],"src/assets/moltitudine/39.png":[function(require,module,exports) {
module.exports = "/39.404e0f39.png";
},{}],"src/assets/moltitudine/41.png":[function(require,module,exports) {
module.exports = "/41.0804b3ee.png";
},{}],"src/assets/moltitudine/42.png":[function(require,module,exports) {
module.exports = "/42.40a94d13.png";
},{}],"src/assets/moltitudine/40.png":[function(require,module,exports) {
module.exports = "/40.ec4eeb49.png";
},{}],"src/assets/moltitudine/43.png":[function(require,module,exports) {
module.exports = "/43.e2e696e8.png";
},{}],"src/assets/moltitudine/44.png":[function(require,module,exports) {
module.exports = "/44.57cffb61.png";
},{}],"src/assets/moltitudine/45.png":[function(require,module,exports) {
module.exports = "/45.bba39a6f.png";
},{}],"src/assets/moltitudine/46.png":[function(require,module,exports) {
module.exports = "/46.604d339d.png";
},{}],"src/assets/moltitudine/48.png":[function(require,module,exports) {
module.exports = "/48.acfd6f4e.png";
},{}],"src/assets/moltitudine/49.png":[function(require,module,exports) {
module.exports = "/49.d3aa9c09.png";
},{}],"src/assets/moltitudine/18.png":[function(require,module,exports) {
module.exports = "/18.2829e3a1.png";
},{}],"src/assets/moltitudine/5.png":[function(require,module,exports) {
module.exports = "/5.662e9511.png";
},{}],"src/assets/moltitudine/50.png":[function(require,module,exports) {
module.exports = "/50.705c6859.png";
},{}],"src/assets/moltitudine/51.png":[function(require,module,exports) {
module.exports = "/51.46392e07.png";
},{}],"src/assets/moltitudine/52.png":[function(require,module,exports) {
module.exports = "/52.463ea370.png";
},{}],"src/assets/moltitudine/54.png":[function(require,module,exports) {
module.exports = "/54.45c992fa.png";
},{}],"src/assets/moltitudine/53.png":[function(require,module,exports) {
module.exports = "/53.5b829421.png";
},{}],"src/assets/moltitudine/55.png":[function(require,module,exports) {
module.exports = "/55.f92817fc.png";
},{}],"src/assets/moltitudine/57.png":[function(require,module,exports) {
module.exports = "/57.8f110af6.png";
},{}],"src/assets/moltitudine/56.png":[function(require,module,exports) {
module.exports = "/56.fc2ed08c.png";
},{}],"src/assets/moltitudine/58.png":[function(require,module,exports) {
module.exports = "/58.8012f7da.png";
},{}],"src/assets/moltitudine/59.png":[function(require,module,exports) {
module.exports = "/59.eefc466f.png";
},{}],"src/assets/moltitudine/6.png":[function(require,module,exports) {
module.exports = "/6.010ec918.png";
},{}],"src/assets/moltitudine/60.png":[function(require,module,exports) {
module.exports = "/60.fc7f6c48.png";
},{}],"src/assets/moltitudine/61.png":[function(require,module,exports) {
module.exports = "/61.3900211f.png";
},{}],"src/assets/moltitudine/62.png":[function(require,module,exports) {
module.exports = "/62.eff76f7e.png";
},{}],"src/assets/moltitudine/63.png":[function(require,module,exports) {
module.exports = "/63.34593b17.png";
},{}],"src/assets/moltitudine/64.png":[function(require,module,exports) {
module.exports = "/64.d508b346.png";
},{}],"src/assets/moltitudine/65.png":[function(require,module,exports) {
module.exports = "/65.628fad12.png";
},{}],"src/assets/moltitudine/66.png":[function(require,module,exports) {
module.exports = "/66.51f1e84e.png";
},{}],"src/assets/moltitudine/67.png":[function(require,module,exports) {
module.exports = "/67.77917fcf.png";
},{}],"src/assets/moltitudine/68.png":[function(require,module,exports) {
module.exports = "/68.e6336b5a.png";
},{}],"src/assets/moltitudine/69.png":[function(require,module,exports) {
module.exports = "/69.2d8f6392.png";
},{}],"src/assets/moltitudine/7.png":[function(require,module,exports) {
module.exports = "/7.c993faa3.png";
},{}],"src/assets/moltitudine/70.png":[function(require,module,exports) {
module.exports = "/70.05c462e8.png";
},{}],"src/assets/moltitudine/47.png":[function(require,module,exports) {
module.exports = "/47.aabbeadd.png";
},{}],"src/assets/moltitudine/71.png":[function(require,module,exports) {
module.exports = "/71.336bfcb0.png";
},{}],"src/assets/moltitudine/72.png":[function(require,module,exports) {
module.exports = "/72.7ec9b8e8.png";
},{}],"src/assets/moltitudine/73.png":[function(require,module,exports) {
module.exports = "/73.d3e3b996.png";
},{}],"src/assets/moltitudine/74.png":[function(require,module,exports) {
module.exports = "/74.56ae4df9.png";
},{}],"src/assets/moltitudine/75.png":[function(require,module,exports) {
module.exports = "/75.c8621954.png";
},{}],"src/assets/moltitudine/76.png":[function(require,module,exports) {
module.exports = "/76.805678f0.png";
},{}],"src/assets/moltitudine/77.png":[function(require,module,exports) {
module.exports = "/77.ce210893.png";
},{}],"src/assets/moltitudine/78.png":[function(require,module,exports) {
module.exports = "/78.30497048.png";
},{}],"src/assets/moltitudine/79.png":[function(require,module,exports) {
module.exports = "/79.5124c9c6.png";
},{}],"src/assets/moltitudine/8.png":[function(require,module,exports) {
module.exports = "/8.9323afc1.png";
},{}],"src/assets/moltitudine/80.png":[function(require,module,exports) {
module.exports = "/80.20e3eeed.png";
},{}],"src/assets/moltitudine/81.png":[function(require,module,exports) {
module.exports = "/81.0c1e8fe4.png";
},{}],"src/assets/moltitudine/82.png":[function(require,module,exports) {
module.exports = "/82.3a637b56.png";
},{}],"src/assets/moltitudine/83.png":[function(require,module,exports) {
module.exports = "/83.59e31e6d.png";
},{}],"src/assets/moltitudine/84.png":[function(require,module,exports) {
module.exports = "/84.bbb3cb64.png";
},{}],"src/assets/moltitudine/85.png":[function(require,module,exports) {
module.exports = "/85.c263e2d9.png";
},{}],"src/assets/moltitudine/86.png":[function(require,module,exports) {
module.exports = "/86.4a50032e.png";
},{}],"src/assets/moltitudine/87.png":[function(require,module,exports) {
module.exports = "/87.19127ab0.png";
},{}],"src/assets/moltitudine/88.png":[function(require,module,exports) {
module.exports = "/88.a8de5e9a.png";
},{}],"src/assets/moltitudine/89.png":[function(require,module,exports) {
module.exports = "/89.3eed91cf.png";
},{}],"src/assets/moltitudine/9.png":[function(require,module,exports) {
module.exports = "/9.ec029439.png";
},{}],"src/assets/moltitudine/90.png":[function(require,module,exports) {
module.exports = "/90.91c80c3b.png";
},{}],"src/assets/moltitudine/91.png":[function(require,module,exports) {
module.exports = "/91.da6a1f5a.png";
},{}],"src/assets/moltitudine/92.png":[function(require,module,exports) {
module.exports = "/92.2f6f462b.png";
},{}],"src/assets/moltitudine/93.png":[function(require,module,exports) {
module.exports = "/93.9abef63b.png";
},{}],"src/assets/moltitudine/94.png":[function(require,module,exports) {
module.exports = "/94.bc0c74c4.png";
},{}],"src/assets/moltitudine/95.png":[function(require,module,exports) {
module.exports = "/95.8cfb45b3.png";
},{}],"src/assets/moltitudine/96.png":[function(require,module,exports) {
module.exports = "/96.5457b231.png";
},{}],"src/assets/moltitudine/97.png":[function(require,module,exports) {
module.exports = "/97.fba84f0d.png";
},{}],"src/assets/moltitudine/98.png":[function(require,module,exports) {
module.exports = "/98.255aeb43.png";
},{}],"src/assets/moltitudine/99.png":[function(require,module,exports) {
module.exports = "/99.e0d7b20b.png";
},{}],"src/assets/**/*.*":[function(require,module,exports) {
module.exports = {
  "subtitle": {
    "svg": require("./..\\subtitle.svg")
  },
  "moltitudine": {
    "0": {
      "png": require("./..\\moltitudine\\0.png")
    },
    "1": {
      "png": require("./..\\moltitudine\\1.png")
    },
    "2": {
      "png": require("./..\\moltitudine\\2.png")
    },
    "3": {
      "png": require("./..\\moltitudine\\3.png")
    },
    "4": {
      "png": require("./..\\moltitudine\\4.png")
    },
    "5": {
      "png": require("./..\\moltitudine\\5.png")
    },
    "6": {
      "png": require("./..\\moltitudine\\6.png")
    },
    "7": {
      "png": require("./..\\moltitudine\\7.png")
    },
    "8": {
      "png": require("./..\\moltitudine\\8.png")
    },
    "9": {
      "png": require("./..\\moltitudine\\9.png")
    },
    "10": {
      "png": require("./..\\moltitudine\\10.png")
    },
    "11": {
      "png": require("./..\\moltitudine\\11.png")
    },
    "12": {
      "png": require("./..\\moltitudine\\12.png")
    },
    "13": {
      "png": require("./..\\moltitudine\\13.png")
    },
    "14": {
      "png": require("./..\\moltitudine\\14.png")
    },
    "15": {
      "png": require("./..\\moltitudine\\15.png")
    },
    "16": {
      "png": require("./..\\moltitudine\\16.png")
    },
    "17": {
      "png": require("./..\\moltitudine\\17.png")
    },
    "18": {
      "png": require("./..\\moltitudine\\18.png")
    },
    "19": {
      "png": require("./..\\moltitudine\\19.png")
    },
    "20": {
      "png": require("./..\\moltitudine\\20.png")
    },
    "21": {
      "png": require("./..\\moltitudine\\21.png")
    },
    "22": {
      "png": require("./..\\moltitudine\\22.png")
    },
    "23": {
      "png": require("./..\\moltitudine\\23.png")
    },
    "24": {
      "png": require("./..\\moltitudine\\24.png")
    },
    "25": {
      "png": require("./..\\moltitudine\\25.png")
    },
    "26": {
      "png": require("./..\\moltitudine\\26.png")
    },
    "27": {
      "png": require("./..\\moltitudine\\27.png")
    },
    "28": {
      "png": require("./..\\moltitudine\\28.png")
    },
    "29": {
      "png": require("./..\\moltitudine\\29.png")
    },
    "30": {
      "png": require("./..\\moltitudine\\30.png")
    },
    "31": {
      "png": require("./..\\moltitudine\\31.png")
    },
    "32": {
      "png": require("./..\\moltitudine\\32.png")
    },
    "33": {
      "png": require("./..\\moltitudine\\33.png")
    },
    "34": {
      "png": require("./..\\moltitudine\\34.png")
    },
    "35": {
      "png": require("./..\\moltitudine\\35.png")
    },
    "36": {
      "png": require("./..\\moltitudine\\36.png")
    },
    "37": {
      "png": require("./..\\moltitudine\\37.png")
    },
    "38": {
      "png": require("./..\\moltitudine\\38.png")
    },
    "39": {
      "png": require("./..\\moltitudine\\39.png")
    },
    "40": {
      "png": require("./..\\moltitudine\\40.png")
    },
    "41": {
      "png": require("./..\\moltitudine\\41.png")
    },
    "42": {
      "png": require("./..\\moltitudine\\42.png")
    },
    "43": {
      "png": require("./..\\moltitudine\\43.png")
    },
    "44": {
      "png": require("./..\\moltitudine\\44.png")
    },
    "45": {
      "png": require("./..\\moltitudine\\45.png")
    },
    "46": {
      "png": require("./..\\moltitudine\\46.png")
    },
    "47": {
      "png": require("./..\\moltitudine\\47.png")
    },
    "48": {
      "png": require("./..\\moltitudine\\48.png")
    },
    "49": {
      "png": require("./..\\moltitudine\\49.png")
    },
    "50": {
      "png": require("./..\\moltitudine\\50.png")
    },
    "51": {
      "png": require("./..\\moltitudine\\51.png")
    },
    "52": {
      "png": require("./..\\moltitudine\\52.png")
    },
    "53": {
      "png": require("./..\\moltitudine\\53.png")
    },
    "54": {
      "png": require("./..\\moltitudine\\54.png")
    },
    "55": {
      "png": require("./..\\moltitudine\\55.png")
    },
    "56": {
      "png": require("./..\\moltitudine\\56.png")
    },
    "57": {
      "png": require("./..\\moltitudine\\57.png")
    },
    "58": {
      "png": require("./..\\moltitudine\\58.png")
    },
    "59": {
      "png": require("./..\\moltitudine\\59.png")
    },
    "60": {
      "png": require("./..\\moltitudine\\60.png")
    },
    "61": {
      "png": require("./..\\moltitudine\\61.png")
    },
    "62": {
      "png": require("./..\\moltitudine\\62.png")
    },
    "63": {
      "png": require("./..\\moltitudine\\63.png")
    },
    "64": {
      "png": require("./..\\moltitudine\\64.png")
    },
    "65": {
      "png": require("./..\\moltitudine\\65.png")
    },
    "66": {
      "png": require("./..\\moltitudine\\66.png")
    },
    "67": {
      "png": require("./..\\moltitudine\\67.png")
    },
    "68": {
      "png": require("./..\\moltitudine\\68.png")
    },
    "69": {
      "png": require("./..\\moltitudine\\69.png")
    },
    "70": {
      "png": require("./..\\moltitudine\\70.png")
    },
    "71": {
      "png": require("./..\\moltitudine\\71.png")
    },
    "72": {
      "png": require("./..\\moltitudine\\72.png")
    },
    "73": {
      "png": require("./..\\moltitudine\\73.png")
    },
    "74": {
      "png": require("./..\\moltitudine\\74.png")
    },
    "75": {
      "png": require("./..\\moltitudine\\75.png")
    },
    "76": {
      "png": require("./..\\moltitudine\\76.png")
    },
    "77": {
      "png": require("./..\\moltitudine\\77.png")
    },
    "78": {
      "png": require("./..\\moltitudine\\78.png")
    },
    "79": {
      "png": require("./..\\moltitudine\\79.png")
    },
    "80": {
      "png": require("./..\\moltitudine\\80.png")
    },
    "81": {
      "png": require("./..\\moltitudine\\81.png")
    },
    "82": {
      "png": require("./..\\moltitudine\\82.png")
    },
    "83": {
      "png": require("./..\\moltitudine\\83.png")
    },
    "84": {
      "png": require("./..\\moltitudine\\84.png")
    },
    "85": {
      "png": require("./..\\moltitudine\\85.png")
    },
    "86": {
      "png": require("./..\\moltitudine\\86.png")
    },
    "87": {
      "png": require("./..\\moltitudine\\87.png")
    },
    "88": {
      "png": require("./..\\moltitudine\\88.png")
    },
    "89": {
      "png": require("./..\\moltitudine\\89.png")
    },
    "90": {
      "png": require("./..\\moltitudine\\90.png")
    },
    "91": {
      "png": require("./..\\moltitudine\\91.png")
    },
    "92": {
      "png": require("./..\\moltitudine\\92.png")
    },
    "93": {
      "png": require("./..\\moltitudine\\93.png")
    },
    "94": {
      "png": require("./..\\moltitudine\\94.png")
    },
    "95": {
      "png": require("./..\\moltitudine\\95.png")
    },
    "96": {
      "png": require("./..\\moltitudine\\96.png")
    },
    "97": {
      "png": require("./..\\moltitudine\\97.png")
    },
    "98": {
      "png": require("./..\\moltitudine\\98.png")
    },
    "99": {
      "png": require("./..\\moltitudine\\99.png")
    },
    "100": {
      "png": require("./..\\moltitudine\\100.png")
    },
    "101": {
      "png": require("./..\\moltitudine\\101.png")
    },
    "102": {
      "png": require("./..\\moltitudine\\102.png")
    },
    "103": {
      "png": require("./..\\moltitudine\\103.png")
    },
    "104": {
      "png": require("./..\\moltitudine\\104.png")
    },
    "105": {
      "png": require("./..\\moltitudine\\105.png")
    },
    "106": {
      "png": require("./..\\moltitudine\\106.png")
    },
    "107": {
      "png": require("./..\\moltitudine\\107.png")
    },
    "108": {
      "png": require("./..\\moltitudine\\108.png")
    },
    "109": {
      "png": require("./..\\moltitudine\\109.png")
    },
    "110": {
      "png": require("./..\\moltitudine\\110.png")
    },
    "111": {
      "png": require("./..\\moltitudine\\111.png")
    },
    "112": {
      "png": require("./..\\moltitudine\\112.png")
    },
    "113": {
      "png": require("./..\\moltitudine\\113.png")
    },
    "114": {
      "png": require("./..\\moltitudine\\114.png")
    },
    "115": {
      "png": require("./..\\moltitudine\\115.png")
    },
    "116": {
      "png": require("./..\\moltitudine\\116.png")
    },
    "117": {
      "png": require("./..\\moltitudine\\117.png")
    },
    "118": {
      "png": require("./..\\moltitudine\\118.png")
    },
    "119": {
      "png": require("./..\\moltitudine\\119.png")
    },
    "120": {
      "png": require("./..\\moltitudine\\120.png")
    },
    "121": {
      "png": require("./..\\moltitudine\\121.png")
    },
    "122": {
      "png": require("./..\\moltitudine\\122.png")
    },
    "123": {
      "png": require("./..\\moltitudine\\123.png")
    },
    "124": {
      "png": require("./..\\moltitudine\\124.png")
    },
    "125": {
      "png": require("./..\\moltitudine\\125.png")
    },
    "126": {
      "png": require("./..\\moltitudine\\126.png")
    },
    "127": {
      "png": require("./..\\moltitudine\\127.png")
    },
    "128": {
      "png": require("./..\\moltitudine\\128.png")
    },
    "129": {
      "png": require("./..\\moltitudine\\129.png")
    },
    "130": {
      "png": require("./..\\moltitudine\\130.png")
    },
    "131": {
      "png": require("./..\\moltitudine\\131.png")
    },
    "132": {
      "png": require("./..\\moltitudine\\132.png")
    },
    "133": {
      "png": require("./..\\moltitudine\\133.png")
    },
    "134": {
      "png": require("./..\\moltitudine\\134.png")
    },
    "135": {
      "png": require("./..\\moltitudine\\135.png")
    },
    "136": {
      "png": require("./..\\moltitudine\\136.png")
    },
    "137": {
      "png": require("./..\\moltitudine\\137.png")
    },
    "138": {
      "png": require("./..\\moltitudine\\138.png")
    },
    "139": {
      "png": require("./..\\moltitudine\\139.png")
    },
    "140": {
      "png": require("./..\\moltitudine\\140.png")
    },
    "141": {
      "png": require("./..\\moltitudine\\141.png")
    },
    "142": {
      "png": require("./..\\moltitudine\\142.png")
    },
    "143": {
      "png": require("./..\\moltitudine\\143.png")
    },
    "144": {
      "png": require("./..\\moltitudine\\144.png")
    },
    "145": {
      "png": require("./..\\moltitudine\\145.png")
    },
    "146": {
      "png": require("./..\\moltitudine\\146.png")
    },
    "147": {
      "png": require("./..\\moltitudine\\147.png")
    },
    "148": {
      "png": require("./..\\moltitudine\\148.png")
    },
    "149": {
      "png": require("./..\\moltitudine\\149.png")
    },
    "150": {
      "png": require("./..\\moltitudine\\150.png")
    },
    "151": {
      "png": require("./..\\moltitudine\\151.png")
    },
    "152": {
      "png": require("./..\\moltitudine\\152.png")
    },
    "153": {
      "png": require("./..\\moltitudine\\153.png")
    },
    "154": {
      "png": require("./..\\moltitudine\\154.png")
    },
    "155": {
      "png": require("./..\\moltitudine\\155.png")
    },
    "156": {
      "png": require("./..\\moltitudine\\156.png")
    },
    "157": {
      "png": require("./..\\moltitudine\\157.png")
    },
    "158": {
      "png": require("./..\\moltitudine\\158.png")
    },
    "159": {
      "png": require("./..\\moltitudine\\159.png")
    },
    "160": {
      "png": require("./..\\moltitudine\\160.png")
    },
    "161": {
      "png": require("./..\\moltitudine\\161.png")
    },
    "162": {
      "png": require("./..\\moltitudine\\162.png")
    },
    "163": {
      "png": require("./..\\moltitudine\\163.png")
    },
    "164": {
      "png": require("./..\\moltitudine\\164.png")
    },
    "165": {
      "png": require("./..\\moltitudine\\165.png")
    },
    "166": {
      "png": require("./..\\moltitudine\\166.png")
    },
    "167": {
      "png": require("./..\\moltitudine\\167.png")
    },
    "168": {
      "png": require("./..\\moltitudine\\168.png")
    },
    "169": {
      "png": require("./..\\moltitudine\\169.png")
    },
    "170": {
      "png": require("./..\\moltitudine\\170.png")
    },
    "171": {
      "png": require("./..\\moltitudine\\171.png")
    },
    "172": {
      "png": require("./..\\moltitudine\\172.png")
    },
    "173": {
      "png": require("./..\\moltitudine\\173.png")
    },
    "174": {
      "png": require("./..\\moltitudine\\174.png")
    },
    "175": {
      "png": require("./..\\moltitudine\\175.png")
    },
    "176": {
      "png": require("./..\\moltitudine\\176.png")
    },
    "177": {
      "png": require("./..\\moltitudine\\177.png")
    },
    "178": {
      "png": require("./..\\moltitudine\\178.png")
    },
    "179": {
      "png": require("./..\\moltitudine\\179.png")
    },
    "180": {
      "png": require("./..\\moltitudine\\180.png")
    },
    "181": {
      "png": require("./..\\moltitudine\\181.png")
    },
    "182": {
      "png": require("./..\\moltitudine\\182.png")
    },
    "183": {
      "png": require("./..\\moltitudine\\183.png")
    }
  }
};
},{"./..\\subtitle.svg":"src/assets/subtitle.svg","./..\\moltitudine\\0.png":"src/assets/moltitudine/0.png","./..\\moltitudine\\1.png":"src/assets/moltitudine/1.png","./..\\moltitudine\\10.png":"src/assets/moltitudine/10.png","./..\\moltitudine\\100.png":"src/assets/moltitudine/100.png","./..\\moltitudine\\101.png":"src/assets/moltitudine/101.png","./..\\moltitudine\\102.png":"src/assets/moltitudine/102.png","./..\\moltitudine\\103.png":"src/assets/moltitudine/103.png","./..\\moltitudine\\104.png":"src/assets/moltitudine/104.png","./..\\moltitudine\\105.png":"src/assets/moltitudine/105.png","./..\\moltitudine\\106.png":"src/assets/moltitudine/106.png","./..\\moltitudine\\107.png":"src/assets/moltitudine/107.png","./..\\moltitudine\\108.png":"src/assets/moltitudine/108.png","./..\\moltitudine\\109.png":"src/assets/moltitudine/109.png","./..\\moltitudine\\11.png":"src/assets/moltitudine/11.png","./..\\moltitudine\\110.png":"src/assets/moltitudine/110.png","./..\\moltitudine\\111.png":"src/assets/moltitudine/111.png","./..\\moltitudine\\112.png":"src/assets/moltitudine/112.png","./..\\moltitudine\\113.png":"src/assets/moltitudine/113.png","./..\\moltitudine\\114.png":"src/assets/moltitudine/114.png","./..\\moltitudine\\115.png":"src/assets/moltitudine/115.png","./..\\moltitudine\\116.png":"src/assets/moltitudine/116.png","./..\\moltitudine\\117.png":"src/assets/moltitudine/117.png","./..\\moltitudine\\118.png":"src/assets/moltitudine/118.png","./..\\moltitudine\\119.png":"src/assets/moltitudine/119.png","./..\\moltitudine\\12.png":"src/assets/moltitudine/12.png","./..\\moltitudine\\120.png":"src/assets/moltitudine/120.png","./..\\moltitudine\\121.png":"src/assets/moltitudine/121.png","./..\\moltitudine\\122.png":"src/assets/moltitudine/122.png","./..\\moltitudine\\124.png":"src/assets/moltitudine/124.png","./..\\moltitudine\\125.png":"src/assets/moltitudine/125.png","./..\\moltitudine\\126.png":"src/assets/moltitudine/126.png","./..\\moltitudine\\127.png":"src/assets/moltitudine/127.png","./..\\moltitudine\\128.png":"src/assets/moltitudine/128.png","./..\\moltitudine\\129.png":"src/assets/moltitudine/129.png","./..\\moltitudine\\123.png":"src/assets/moltitudine/123.png","./..\\moltitudine\\13.png":"src/assets/moltitudine/13.png","./..\\moltitudine\\130.png":"src/assets/moltitudine/130.png","./..\\moltitudine\\131.png":"src/assets/moltitudine/131.png","./..\\moltitudine\\132.png":"src/assets/moltitudine/132.png","./..\\moltitudine\\133.png":"src/assets/moltitudine/133.png","./..\\moltitudine\\134.png":"src/assets/moltitudine/134.png","./..\\moltitudine\\135.png":"src/assets/moltitudine/135.png","./..\\moltitudine\\136.png":"src/assets/moltitudine/136.png","./..\\moltitudine\\137.png":"src/assets/moltitudine/137.png","./..\\moltitudine\\138.png":"src/assets/moltitudine/138.png","./..\\moltitudine\\139.png":"src/assets/moltitudine/139.png","./..\\moltitudine\\14.png":"src/assets/moltitudine/14.png","./..\\moltitudine\\140.png":"src/assets/moltitudine/140.png","./..\\moltitudine\\141.png":"src/assets/moltitudine/141.png","./..\\moltitudine\\142.png":"src/assets/moltitudine/142.png","./..\\moltitudine\\143.png":"src/assets/moltitudine/143.png","./..\\moltitudine\\144.png":"src/assets/moltitudine/144.png","./..\\moltitudine\\145.png":"src/assets/moltitudine/145.png","./..\\moltitudine\\146.png":"src/assets/moltitudine/146.png","./..\\moltitudine\\147.png":"src/assets/moltitudine/147.png","./..\\moltitudine\\148.png":"src/assets/moltitudine/148.png","./..\\moltitudine\\15.png":"src/assets/moltitudine/15.png","./..\\moltitudine\\149.png":"src/assets/moltitudine/149.png","./..\\moltitudine\\150.png":"src/assets/moltitudine/150.png","./..\\moltitudine\\151.png":"src/assets/moltitudine/151.png","./..\\moltitudine\\153.png":"src/assets/moltitudine/153.png","./..\\moltitudine\\154.png":"src/assets/moltitudine/154.png","./..\\moltitudine\\155.png":"src/assets/moltitudine/155.png","./..\\moltitudine\\156.png":"src/assets/moltitudine/156.png","./..\\moltitudine\\157.png":"src/assets/moltitudine/157.png","./..\\moltitudine\\158.png":"src/assets/moltitudine/158.png","./..\\moltitudine\\159.png":"src/assets/moltitudine/159.png","./..\\moltitudine\\16.png":"src/assets/moltitudine/16.png","./..\\moltitudine\\160.png":"src/assets/moltitudine/160.png","./..\\moltitudine\\161.png":"src/assets/moltitudine/161.png","./..\\moltitudine\\162.png":"src/assets/moltitudine/162.png","./..\\moltitudine\\163.png":"src/assets/moltitudine/163.png","./..\\moltitudine\\164.png":"src/assets/moltitudine/164.png","./..\\moltitudine\\165.png":"src/assets/moltitudine/165.png","./..\\moltitudine\\166.png":"src/assets/moltitudine/166.png","./..\\moltitudine\\167.png":"src/assets/moltitudine/167.png","./..\\moltitudine\\168.png":"src/assets/moltitudine/168.png","./..\\moltitudine\\17.png":"src/assets/moltitudine/17.png","./..\\moltitudine\\169.png":"src/assets/moltitudine/169.png","./..\\moltitudine\\171.png":"src/assets/moltitudine/171.png","./..\\moltitudine\\170.png":"src/assets/moltitudine/170.png","./..\\moltitudine\\172.png":"src/assets/moltitudine/172.png","./..\\moltitudine\\173.png":"src/assets/moltitudine/173.png","./..\\moltitudine\\174.png":"src/assets/moltitudine/174.png","./..\\moltitudine\\175.png":"src/assets/moltitudine/175.png","./..\\moltitudine\\176.png":"src/assets/moltitudine/176.png","./..\\moltitudine\\177.png":"src/assets/moltitudine/177.png","./..\\moltitudine\\178.png":"src/assets/moltitudine/178.png","./..\\moltitudine\\179.png":"src/assets/moltitudine/179.png","./..\\moltitudine\\180.png":"src/assets/moltitudine/180.png","./..\\moltitudine\\181.png":"src/assets/moltitudine/181.png","./..\\moltitudine\\182.png":"src/assets/moltitudine/182.png","./..\\moltitudine\\183.png":"src/assets/moltitudine/183.png","./..\\moltitudine\\19.png":"src/assets/moltitudine/19.png","./..\\moltitudine\\2.png":"src/assets/moltitudine/2.png","./..\\moltitudine\\20.png":"src/assets/moltitudine/20.png","./..\\moltitudine\\21.png":"src/assets/moltitudine/21.png","./..\\moltitudine\\22.png":"src/assets/moltitudine/22.png","./..\\moltitudine\\23.png":"src/assets/moltitudine/23.png","./..\\moltitudine\\24.png":"src/assets/moltitudine/24.png","./..\\moltitudine\\25.png":"src/assets/moltitudine/25.png","./..\\moltitudine\\26.png":"src/assets/moltitudine/26.png","./..\\moltitudine\\27.png":"src/assets/moltitudine/27.png","./..\\moltitudine\\28.png":"src/assets/moltitudine/28.png","./..\\moltitudine\\29.png":"src/assets/moltitudine/29.png","./..\\moltitudine\\3.png":"src/assets/moltitudine/3.png","./..\\moltitudine\\30.png":"src/assets/moltitudine/30.png","./..\\moltitudine\\31.png":"src/assets/moltitudine/31.png","./..\\moltitudine\\32.png":"src/assets/moltitudine/32.png","./..\\moltitudine\\33.png":"src/assets/moltitudine/33.png","./..\\moltitudine\\34.png":"src/assets/moltitudine/34.png","./..\\moltitudine\\35.png":"src/assets/moltitudine/35.png","./..\\moltitudine\\36.png":"src/assets/moltitudine/36.png","./..\\moltitudine\\37.png":"src/assets/moltitudine/37.png","./..\\moltitudine\\38.png":"src/assets/moltitudine/38.png","./..\\moltitudine\\152.png":"src/assets/moltitudine/152.png","./..\\moltitudine\\4.png":"src/assets/moltitudine/4.png","./..\\moltitudine\\39.png":"src/assets/moltitudine/39.png","./..\\moltitudine\\41.png":"src/assets/moltitudine/41.png","./..\\moltitudine\\42.png":"src/assets/moltitudine/42.png","./..\\moltitudine\\40.png":"src/assets/moltitudine/40.png","./..\\moltitudine\\43.png":"src/assets/moltitudine/43.png","./..\\moltitudine\\44.png":"src/assets/moltitudine/44.png","./..\\moltitudine\\45.png":"src/assets/moltitudine/45.png","./..\\moltitudine\\46.png":"src/assets/moltitudine/46.png","./..\\moltitudine\\48.png":"src/assets/moltitudine/48.png","./..\\moltitudine\\49.png":"src/assets/moltitudine/49.png","./..\\moltitudine\\18.png":"src/assets/moltitudine/18.png","./..\\moltitudine\\5.png":"src/assets/moltitudine/5.png","./..\\moltitudine\\50.png":"src/assets/moltitudine/50.png","./..\\moltitudine\\51.png":"src/assets/moltitudine/51.png","./..\\moltitudine\\52.png":"src/assets/moltitudine/52.png","./..\\moltitudine\\54.png":"src/assets/moltitudine/54.png","./..\\moltitudine\\53.png":"src/assets/moltitudine/53.png","./..\\moltitudine\\55.png":"src/assets/moltitudine/55.png","./..\\moltitudine\\57.png":"src/assets/moltitudine/57.png","./..\\moltitudine\\56.png":"src/assets/moltitudine/56.png","./..\\moltitudine\\58.png":"src/assets/moltitudine/58.png","./..\\moltitudine\\59.png":"src/assets/moltitudine/59.png","./..\\moltitudine\\6.png":"src/assets/moltitudine/6.png","./..\\moltitudine\\60.png":"src/assets/moltitudine/60.png","./..\\moltitudine\\61.png":"src/assets/moltitudine/61.png","./..\\moltitudine\\62.png":"src/assets/moltitudine/62.png","./..\\moltitudine\\63.png":"src/assets/moltitudine/63.png","./..\\moltitudine\\64.png":"src/assets/moltitudine/64.png","./..\\moltitudine\\65.png":"src/assets/moltitudine/65.png","./..\\moltitudine\\66.png":"src/assets/moltitudine/66.png","./..\\moltitudine\\67.png":"src/assets/moltitudine/67.png","./..\\moltitudine\\68.png":"src/assets/moltitudine/68.png","./..\\moltitudine\\69.png":"src/assets/moltitudine/69.png","./..\\moltitudine\\7.png":"src/assets/moltitudine/7.png","./..\\moltitudine\\70.png":"src/assets/moltitudine/70.png","./..\\moltitudine\\47.png":"src/assets/moltitudine/47.png","./..\\moltitudine\\71.png":"src/assets/moltitudine/71.png","./..\\moltitudine\\72.png":"src/assets/moltitudine/72.png","./..\\moltitudine\\73.png":"src/assets/moltitudine/73.png","./..\\moltitudine\\74.png":"src/assets/moltitudine/74.png","./..\\moltitudine\\75.png":"src/assets/moltitudine/75.png","./..\\moltitudine\\76.png":"src/assets/moltitudine/76.png","./..\\moltitudine\\77.png":"src/assets/moltitudine/77.png","./..\\moltitudine\\78.png":"src/assets/moltitudine/78.png","./..\\moltitudine\\79.png":"src/assets/moltitudine/79.png","./..\\moltitudine\\8.png":"src/assets/moltitudine/8.png","./..\\moltitudine\\80.png":"src/assets/moltitudine/80.png","./..\\moltitudine\\81.png":"src/assets/moltitudine/81.png","./..\\moltitudine\\82.png":"src/assets/moltitudine/82.png","./..\\moltitudine\\83.png":"src/assets/moltitudine/83.png","./..\\moltitudine\\84.png":"src/assets/moltitudine/84.png","./..\\moltitudine\\85.png":"src/assets/moltitudine/85.png","./..\\moltitudine\\86.png":"src/assets/moltitudine/86.png","./..\\moltitudine\\87.png":"src/assets/moltitudine/87.png","./..\\moltitudine\\88.png":"src/assets/moltitudine/88.png","./..\\moltitudine\\89.png":"src/assets/moltitudine/89.png","./..\\moltitudine\\9.png":"src/assets/moltitudine/9.png","./..\\moltitudine\\90.png":"src/assets/moltitudine/90.png","./..\\moltitudine\\91.png":"src/assets/moltitudine/91.png","./..\\moltitudine\\92.png":"src/assets/moltitudine/92.png","./..\\moltitudine\\93.png":"src/assets/moltitudine/93.png","./..\\moltitudine\\94.png":"src/assets/moltitudine/94.png","./..\\moltitudine\\95.png":"src/assets/moltitudine/95.png","./..\\moltitudine\\96.png":"src/assets/moltitudine/96.png","./..\\moltitudine\\97.png":"src/assets/moltitudine/97.png","./..\\moltitudine\\98.png":"src/assets/moltitudine/98.png","./..\\moltitudine\\99.png":"src/assets/moltitudine/99.png"}],"node_modules/lb-lazy-images/bundle.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=loadImg;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var images=require("./../../src/assets/**/*.*");var getAssets=function getAssets(images,relPath){if(!Object.entries){Object.entries=function(obj){var ownProps=Object.keys(obj),i=ownProps.length,resArray=new Array(i);while(i--){resArray[i]=[ownProps[i],obj[ownProps[i]]]}return resArray}}var pathList={};var _loop=function _loop(){var _Object$entries$_i=_slicedToArray(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1];values=Object.keys(images[key]).map(function(e){return images[key][e]});var isImage=typeof values[0]==="string";var isFolder=_typeof(values[0])==="object";if(isImage){pathList[relPath+key]=value}else if(isFolder){pathList=_objectSpread({},pathList,{},getAssets(value,relPath+key+"/"))}};for(var _i=0,_Object$entries=Object.entries(images);_i<_Object$entries.length;_i++){var values;_loop()}return pathList};var pathList=getAssets(images,"");function loadImg(elements){var promises=[];if(!elements.length){elements=new Array(elements)}if(elements.length){var _loop2=function _loop2(i){if("Promise"in window){var promise=new Promise(function(resolve,reject){var cacheImg=document.createElement("img");var attributes=elements[i].attributes;for(var _i2=0;_i2<attributes.length;_i2++){if(attributes[_i2].name!=="src"&&attributes[_i2].name!=="data-asset")cacheImg.setAttribute(attributes[_i2].name,attributes[_i2].value)}if(!pathList[elements[i].dataset.asset]){resolve(elements[i]);console.error('<img data-asset="'.concat(elements[i].dataset.asset,'"/> not loaded, please check the path'))}else cacheImg.src=pathList[elements[i].dataset.asset][Object.keys(pathList[elements[i].dataset.asset])[0]];cacheImg.onload=function(){return resolve(cacheImg)}});promise.then(function(cacheImg){elements[i].parentNode.replaceChild(cacheImg,elements[i]);return""});promises.push(promise)}else{try{elements[i].src=pathList[elements[i].dataset.asset][Object.keys(pathList[elements[i].dataset.asset])[0]]}catch(error){console.error('<img data-asset="'.concat(elements[i].dataset.asset,'"/> not loaded, please check the path'))}}};for(var i=0;i<elements.length;i++){_loop2(i)}}}var imagesScroll=document.querySelectorAll("[loadOnScroll]");if(imagesScroll.length){try{var loadCb=function loadCb(entries){entries.forEach(function(entry){if(entry.intersectionRatio>0){loadImg(entry.target);loadObs.unobserve(entry.target)}})};var loadObs=new IntersectionObserver(loadCb,{rootMargin:"0px 0px 500px 0px"});Array.prototype.forEach.call(imagesScroll,function(image){loadObs.observe(image)})}catch(error){console.log(imagesScroll);console.log("EagerLoaded as a fallback");loadImg(imagesScroll)}}
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
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;require("./randOpacity.css");if(!Array.prototype.includes){Object.defineProperty(Array.prototype,"includes",{enumerable:false,value:function value(obj){var newArr=this.filter(function(el){return el==obj});return newArr.length>0}})}var getRandIndex=function getRandIndex(max){return Math.floor(Math.random()*max)};var toggleOpacity=function toggleOpacity(elem,fadeTo){if(fadeTo===1){elem.classList.remove("toggle-popout");setTimeout(function(){return elem.classList.add("toggle-popout")},17)}else if(fadeTo===0){elem.classList.remove("toggle-fadein");setTimeout(function(){return elem.classList.add("toggle-fadein")},17)}else{elem.style.opacity=Math.floor(Math.random()*9+2)/10}};var randOpacity=function randOpacity(container,_ref){var _ref$frequency=_ref.frequency,frequency=_ref$frequency===void 0?5:_ref$frequency,_ref$duration=_ref.duration,duration=_ref$duration===void 0?2e3:_ref$duration,_ref$fadeTo=_ref.fadeTo,fadeTo=_ref$fadeTo===void 0?null:_ref$fadeTo;var count=0;container.style.animationDuration=duration+"ms";var forbiddenIndex=[];var randOpacity_wrapped=function randOpacity_wrapped(){if(frequency<1||frequency>10)throw new Error("function randOpacity(nodeList, options) : frequency option must be between 1 and 10 included");else if(++count%(33-frequency*3)===0){var nextIndex=getRandIndex(container.children.length);while(forbiddenIndex.includes(nextIndex)){nextIndex=getRandIndex(container.children.length)}forbiddenIndex.push(nextIndex);if(forbiddenIndex.length>=container.children.length/5)forbiddenIndex.shift();toggleOpacity(container.children[nextIndex],fadeTo)}window.requestAnimationFrame(randOpacity_wrapped)};randOpacity_wrapped()};var _default=randOpacity;exports["default"]=_default;
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

var sections = document.querySelectorAll("section");
var sectionContainer = document.querySelector(".section-container");
(0, _lbScrollNav.default)(sections, sectionContainer);
var moltitudine = document.querySelector(".moltitudine");
var moltitudineItems = new Array(184);

for (var i = 0; i < moltitudineItems.length; i++) {
  var img = document.createElement("img");
  img.className = "moltitudine-item";
  img.dataset.asset = "moltitudine/" + i;
  moltitudineItems[i] = img;
  moltitudine.appendChild(img);
}

(0, _lbLazyImages.default)(moltitudineItems);
var options = {
  frequency: 1,
  duration: 8000,
  fadeTo: 1
}; // randOpacity( moltitudine, options )
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55786" + '/');

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