(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
// Copyright 2018 Zachary Mayhew <mayhew.zachary2003@gmail.com>
// Licenced under the MIT Licence
exports.__esModule = true;
/// <reference path="../../node_modules/@types/jquery/jquery.d.ts" />
var constants = require("./constants");
function reanimate(element) {
    var e = $(element);
    if (e.hasClass(constants.easeActive.name)) {
        var copy = e.clone(true);
        e.before(copy);
        e.remove();
        return copy;
    }
    else {
        e.addClass(constants.easeActive.name);
        return e;
    }
}
exports.reanimate = reanimate;
function animate(element) {
    var e = $(element);
    e.addClass(constants.easeActive.name);
    return e;
}
exports.animate = animate;

},{"./constants":2}],2:[function(require,module,exports){
"use strict";
// Copyright 2018 Zachary Mayhew <mayhew.zachary2003@gmail.com>
// Licenced under the MIT Licence
exports.__esModule = true;
var ClassSelector = /** @class */ (function () {
    function ClassSelector(name) {
        this.name = name;
        this.sel = '.' + name;
    }
    return ClassSelector;
}());
var Attribute = /** @class */ (function () {
    function Attribute(name) {
        this.name = name;
    }
    return Attribute;
}());
// Selectors
exports.easeActive = new ClassSelector('ease-active');
exports.animateOnClick = new ClassSelector('animate-onclick');
exports.animateOnVisible = new ClassSelector('animate-onvisible');
exports.animateOnEnter = new ClassSelector('animate-onenter');
// Attributes
exports.dataVisible = new Attribute('data-visible');

},{}],3:[function(require,module,exports){
"use strict";
// Copyright 2018 Zachary Mayhew <mayhew.zachary2003@gmail.com>
// Licenced under the MIT Licence
exports.__esModule = true;
/// <reference path="../../node_modules/@types/jquery/jquery.d.ts" />
var animations_1 = require("./animations");
var constants = require("./constants");
$(function () {
    $(constants.animateOnClick.sel).click(function () {
        animations_1.reanimate(this);
    });
    $(constants.animateOnVisible.sel).each(function (i, obj) {
        var jObj = $(obj);
        var top_of_element = jObj.offset().top;
        var bottom_of_element = jObj.offset().top + jObj.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            animations_1.animate(obj);
        }
    });
    $(constants.animateOnEnter.sel).each(function (i, obj) {
        var jObj = $(obj);
        var top_of_element = jObj.offset().top;
        var bottom_of_element = jObj.offset().top + jObj.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            jObj.attr(constants.dataVisible.name, 'true');
        }
        else {
            jObj.attr(constants.dataVisible.name, 'false');
        }
    });
    $(window).scroll(function () {
        $(constants.animateOnVisible.sel).each(function (i, obj) {
            var jObj = $(obj);
            var top_of_element = jObj.offset().top;
            var bottom_of_element = jObj.offset().top + jObj.outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                animations_1.animate(obj);
            }
        });
        $(constants.animateOnEnter.sel).each(function (i, obj) {
            var jObj = $(obj);
            var top_of_element = jObj.offset().top;
            var bottom_of_element = jObj.offset().top + jObj.outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                if (jObj.attr(constants.dataVisible.name) === 'false')
                    jObj = animations_1.reanimate(obj);
                jObj.attr(constants.dataVisible.name, "true");
            }
            else {
                jObj.attr(constants.dataVisible.name, "false");
            }
        });
    });
});

},{"./animations":1,"./constants":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hbmltYXRpb25zLnRzIiwic3JjL3NjcmlwdHMvY29uc3RhbnRzLnRzIiwic3JjL3NjcmlwdHMvZWFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQSwrREFBK0Q7QUFDL0QsaUNBQWlDOztBQUVqQyxxRUFBcUU7QUFDckUsdUNBQXdDO0FBRXhDLFNBQWdCLFNBQVMsQ0FBQyxPQUFnQjtJQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkIsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkMsSUFBSSxJQUFJLEdBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7U0FDSTtRQUNELENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsQ0FBQztLQUNaO0FBQ0wsQ0FBQztBQWJELDhCQWFDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLE9BQWdCO0lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBSkQsMEJBSUM7Ozs7QUN6QkQsK0RBQStEO0FBQy9ELGlDQUFpQzs7QUFPakM7SUFHSSx1QkFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElB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SUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqRSxJQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekUsSUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRTVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxFQUFDO2dCQUMzRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPO29CQUNqRCxJQUFJLEdBQUcsc0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNqRDtpQkFDSTtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2xEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gQ29weXJpZ2h0IDIwMTggWmFjaGFyeSBNYXloZXcgPG1heWhldy56YWNoYXJ5MjAwM0BnbWFpbC5jb20+XG4vLyBMaWNlbmNlZCB1bmRlciB0aGUgTUlUIExpY2VuY2VcblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYW5pbWF0ZShlbGVtZW50OiBFbGVtZW50KTogSlF1ZXJ5PEVsZW1lbnQ+IHtcbiAgICBsZXQgZSA9ICQoZWxlbWVudCk7XG5cbiAgICBpZiAoZS5oYXNDbGFzcyhjb25zdGFudHMuZWFzZUFjdGl2ZS5uYW1lKSkge1xuICAgICAgICBsZXQgY29weTogSlF1ZXJ5PEVsZW1lbnQ+ID0gZS5jbG9uZSh0cnVlKTtcbiAgICAgICAgZS5iZWZvcmUoY29weSk7XG4gICAgICAgIGUucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZS5hZGRDbGFzcyhjb25zdGFudHMuZWFzZUFjdGl2ZS5uYW1lKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZShlbGVtZW50OiBFbGVtZW50KTogSlF1ZXJ5PEVsZW1lbnQ+IHtcbiAgICBsZXQgZSA9ICQoZWxlbWVudCk7XG4gICAgZS5hZGRDbGFzcyhjb25zdGFudHMuZWFzZUFjdGl2ZS5uYW1lKTtcbiAgICByZXR1cm4gZTtcbn1cbiIsIi8vIENvcHlyaWdodCAyMDE4IFphY2hhcnkgTWF5aGV3IDxtYXloZXcuemFjaGFyeTIwMDNAZ21haWwuY29tPlxuLy8gTGljZW5jZWQgdW5kZXIgdGhlIE1JVCBMaWNlbmNlXG5cbmludGVyZmFjZSBTZWxlY3RvciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNlbDogc3RyaW5nO1xufVxuXG5jbGFzcyBDbGFzc1NlbGVjdG9yIGltcGxlbWVudHMgU2VsZWN0b3Ige1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzZWw6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zZWwgPSAnLicgKyBuYW1lO1xuICAgIH1cbn1cblxuY2xhc3MgQXR0cmlidXRlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuXG4vLyBTZWxlY3RvcnNcbmV4cG9ydCBjb25zdCBlYXNlQWN0aXZlOiBTZWxlY3RvciA9IG5ldyBDbGFzc1NlbGVjdG9yKCdlYXNlLWFjdGl2ZScpO1xuZXhwb3J0IGNvbnN0IGFuaW1hdGVPbkNsaWNrOiBTZWxlY3RvciA9IG5ldyBDbGFzc1NlbGVjdG9yKCdhbmltYXRlLW9uY2xpY2snKTtcbmV4cG9ydCBjb25zdCBhbmltYXRlT25WaXNpYmxlOiBTZWxlY3RvciA9IG5ldyBDbGFzc1NlbGVjdG9yKCdhbmltYXRlLW9udmlzaWJsZScpO1xuZXhwb3J0IGNvbnN0IGFuaW1hdGVPbkVudGVyOiBTZWxlY3RvciA9IG5ldyBDbGFzc1NlbGVjdG9yKCdhbmltYXRlLW9uZW50ZXInKTtcblxuLy8gQXR0cmlidXRlc1xuZXhwb3J0IGNvbnN0IGRhdGFWaXNpYmxlOiBBdHRyaWJ1dGUgPSBuZXcgQXR0cmlidXRlKCdkYXRhLXZpc2libGUnKTtcbiIsIi8vIENvcHlyaWdodCAyMDE4IFphY2hhcnkgTWF5aGV3IDxtYXloZXcuemFjaGFyeTIwMDNAZ21haWwuY29tPlxuLy8gTGljZW5jZWQgdW5kZXIgdGhlIE1JVCBMaWNlbmNlXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+XG5pbXBvcnQge2FuaW1hdGUsIHJlYW5pbWF0ZX0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbiQoKCkgPT4ge1xuXG4gICAgJChjb25zdGFudHMuYW5pbWF0ZU9uQ2xpY2suc2VsKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlYW5pbWF0ZSh0aGlzKTtcbiAgICB9KTtcblxuICAgICQoY29uc3RhbnRzLmFuaW1hdGVPblZpc2libGUuc2VsKS5lYWNoKGZ1bmN0aW9uIChpLCBvYmopIHtcbiAgICAgICAgY29uc3Qgak9iaiA9ICQob2JqKTtcbiAgICAgICAgY29uc3QgdG9wX29mX2VsZW1lbnQgPSBqT2JqLm9mZnNldCgpLnRvcDtcbiAgICAgICAgY29uc3QgYm90dG9tX29mX2VsZW1lbnQgPSBqT2JqLm9mZnNldCgpLnRvcCArIGpPYmoub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xuICAgICAgICBjb25zdCB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIGlmICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSl7XG4gICAgICAgICAgICBhbmltYXRlKG9iaik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoY29uc3RhbnRzLmFuaW1hdGVPbkVudGVyLnNlbCkuZWFjaChmdW5jdGlvbiAoaSwgb2JqKSB7XG4gICAgICAgIGNvbnN0IGpPYmogPSAkKG9iaik7XG4gICAgICAgIGNvbnN0IHRvcF9vZl9lbGVtZW50ID0gak9iai5vZmZzZXQoKS50b3A7XG4gICAgICAgIGNvbnN0IGJvdHRvbV9vZl9lbGVtZW50ID0gak9iai5vZmZzZXQoKS50b3AgKyBqT2JqLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICBpZiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpe1xuICAgICAgICAgICAgak9iai5hdHRyKGNvbnN0YW50cy5kYXRhVmlzaWJsZS5uYW1lLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgak9iai5hdHRyKGNvbnN0YW50cy5kYXRhVmlzaWJsZS5uYW1lLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgJChjb25zdGFudHMuYW5pbWF0ZU9uVmlzaWJsZS5zZWwpLmVhY2goZnVuY3Rpb24gKGksIG9iaikge1xuICAgICAgICAgICAgY29uc3Qgak9iaiA9ICQob2JqKTtcbiAgICAgICAgICAgIGNvbnN0IHRvcF9vZl9lbGVtZW50ID0gak9iai5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBjb25zdCBib3R0b21fb2ZfZWxlbWVudCA9IGpPYmoub2Zmc2V0KCkudG9wICsgak9iai5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICAgY29uc3QgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKXtcbiAgICAgICAgICAgICAgICBhbmltYXRlKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoY29uc3RhbnRzLmFuaW1hdGVPbkVudGVyLnNlbCkuZWFjaChmdW5jdGlvbiAoaSwgb2JqKSB7XG4gICAgICAgICAgICBsZXQgak9iajogSlF1ZXJ5PEVsZW1lbnQ+ID0gJChvYmopO1xuICAgICAgICAgICAgY29uc3QgdG9wX29mX2VsZW1lbnQgPSBqT2JqLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbV9vZl9lbGVtZW50ID0gak9iai5vZmZzZXQoKS50b3AgKyBqT2JqLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICBjb25zdCBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgICBjb25zdCB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpe1xuICAgICAgICAgICAgICAgIGlmIChqT2JqLmF0dHIoY29uc3RhbnRzLmRhdGFWaXNpYmxlLm5hbWUpID09PSAnZmFsc2UnKVxuICAgICAgICAgICAgICAgICAgICBqT2JqID0gcmVhbmltYXRlKG9iaik7XG4gICAgICAgICAgICAgICAgak9iai5hdHRyKGNvbnN0YW50cy5kYXRhVmlzaWJsZS5uYW1lLCBcInRydWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBqT2JqLmF0dHIoY29uc3RhbnRzLmRhdGFWaXNpYmxlLm5hbWUsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19
