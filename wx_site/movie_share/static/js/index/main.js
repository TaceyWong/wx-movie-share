define("index/main",["weui/searchbar","utils/imageutil"],function(require,exports){function i(){var i="\u6b22\u8fce\u5149\u4e34\uff0c\u5929\u5929\u770b\u7247\u597d\u5fc3\u60c5\uff01",n=(new Date).getHours();1==n?i="\u4e00\u70b9\u591a\u5566\uff01\u5fd8\u4e86\u4f11\u606f\u5417?":2==n?i="\u5de5\u4f5c\u72c2\uff0c\u8be5\u4f11\u606f\u4e86\u54d2\uff01":3==n?i="\u5348\u591c\u4e09\u70b9\uff01\u7761\u89c9\u5427??!":4==n?i="\u51cc\u6668\u56db\u70b9\u591a\uff0c\u6ce8\u610f\u8eab\u4f53\u54d2":5==n?i="\u60a8\u662f\u521a\u8d77\u5e8a\u8fd8\u662f\u8fd8\u6ca1\u7761\u554a?":6==n?i="\u65e9\u4e0a\u597d\uff01\u65b0\u4e00\u5929\u53c8\u5f00\u59cb\u5566!":7==n?i="\u5403\u8fc7\u65e9\u996d\u4e86\u5417\uff1f\u4e48\u4e48\u54d2":8==n||9==n||10==n?i="\u65e9\uff01\u53c8\u662f\u5fd9\u788c\u7684\u4e00\u5929\uff01":11==n?i="\u5feb\u4e2d\u5348\u5566\uff0c\u51c6\u5907\u505a\u996d\u4e86\u5440\uff01":12==n?i="\u4e2d\u5348\u597d\uff01\u4f60\u5403\u996d\u4e86\u5417\uff1f":13==n||14==n?i="\u4e0b\u5348\u597d\uff0c\u51c6\u5907\u51c6\u5907\u8981\u4e0a\u73ed\u4e86\uff01":15==n||16==n||17==n?i="\u4e48\u4e48\u54d2,\u4e0b\u5348\u597d\uff01":18==n||19==n?i="\u5403\u665a\u996d\u4e86\u6ca1\uff1f\u4e48\u4e48\u54d2":20==n||21==n||22==n?i="\u522b\u5de5\u4f5c\u4e86\uff0c\u770b\u7535\u5f71\u770b\u7761\u89c9\u54d2":23==n?i="\u4e0d\u65e9\u4e86\uff0c\u5feb\u4f11\u606f\u5427!":0==n&&(i="\u5348\u591c\u65f6\u5206\uff0c\u6ce8\u610f\u8eab\u4f53\u54d2!"),$("span.say-hello-tips").text(i)}function n(){var i=$("div.movie-item").width();$("div.movie-item").height(1.4*i)}function t(){var i=$("div.movie-container");i&&i.length>0&&i.delegate("a.btn-more","click",function(){var i=$(this),n=i.data("role");n&&0!=n.trim().length&&(window.location.href="./mlist?ms="+n)})}function e(){var i=$("a.favor__me");i&&i.length>0&&i.click(function(){$("div.mask-window.closable").show()})}function a(){var i=$("div.weui-navbar__item");i&&i.length>0&&i.click(function(){var i=$(this),n=i.data("role");n&&0!=n.trim().length||(n="movie"),window.location.href="./mlist?ms="+n})}function o(){var i=$("div.movie-container");i&&i.length>0&&i.delegate("div.movie-item","click",function(){var i=$(this).data("mid");i&&parseInt(i)>0&&(window.location.href="./mplay?mid="+i)})}function c(){$("i.close__window").click(function(){$("div.mask-window.closable").hide()})}function r(){$("#search_input").keydown(function(i){if(13==i.which){var n=$.trim($(this).val());n.length>0&&setTimeout(function(){window.location.href="./mfind?mf="+n},100)}})}var u=require("../weui/searchbar"),l=require("../utils/imageutil"),s=function(){t(),e(),a(),c(),o(),$(document).ready(function(){i(),u.init("#search_bar","#search_text","#search_input","#search_clear","#search_cancel"),l.lazyLoad($("div.weui-tab__panel")),n(),r()}),$(window).resize(function(){n()}),document.body.addEventListener("touchmove",function(i){"none"!=$("div.mask-window").css("display")&&i.preventDefault()},!1)};exports.init=s}),define("weui/searchbar",[],function(require,exports){var i=function(i,n,t,e,a,o){function c(){l.hide(),d.val("")}function r(){c(),u.removeClass("weui-search-bar_focusing"),s.show()}var u=$(i),l=$(o),s=$(n),d=$(t),f=$(e),h=$(a);s.on("click",function(){u.addClass("weui-search-bar_focusing"),d.focus()}),d.on("blur",function(){this.value.length||r()}).on("input",function(){this.value.length?l.show():l.hide()}),f.on("click",function(){c(),d.focus()}),h.on("click",function(){r(),d.blur()})};exports.init=i}),define("utils/imageutil",[],function(require,exports){exports.lazyLoad=function(i){var n=i.find("img[data-src]");n.each(function(){var i=$(this),n=i.attr("src"),t=i.data("src"),e=i.parent("div[data-role=img-wrapper]");e&&0!=e.length&&(n&&0!==(n=n.trim()).length?e.css("background-image","url("+t+")"):(i.on("load",function(){e.css("background-image","url("+t+")")}),i.attr("src",t)))})}});