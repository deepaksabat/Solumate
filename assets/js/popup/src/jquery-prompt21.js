!function(n){var t={};t.unflattenObject=function(n){for(var t={},e=t,a=Object.keys(n),r=0;r<a.length;++r){for(var c=a[r],u=c.split("."),f=u.pop(),o=0;o<u.length;++o){var i=u[o];e[i]="undefined"==typeof e[i]?{}:e[i],e=e[i]}e[f]=n[c],e=t}return t};var e=n.fn.prompt21=function(a){function r(e){c[u.showFunc].call(c,function(){n(":input:first",o).focus()}),o.on("submit",function(){var a={};return n("[name]:input",o).each(function(){var t=n(this),e=t.attr("name"),r=t.val();if("json"===t.attr("data-parse"))try{r=JSON.parse(r)}catch(c){}a[e]=r}),a=t.unflattenObject(a),e(null,a),c[u.hideFunc](),!1})}var c=this,u=n.extend(a,e.defaults),f=n(u.cancel,c),o=n(u.form,c);return c.hide(),f.on("click",function(){return c[u.hideFunc](),o[0].reset(),!1}),{getData:r}};e.version="1.1.1",e.defaults={cancel:"button.cancel",showFunc:"fadeIn",hideFunc:"fadeOut",form:"form"}}($);