// turn
// options.direction = 'left','right','down','up'
jQuery.extend(jQuery.easing,{easeInOutQuart:function(e,a,c,b,k){return 1>(a/=k/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c}});
function ws_turn(e,a,c){var b=jQuery,k=b(this);b("li",c);var p=b(".ws_list",c),l=b("<div>").addClass("ws_effect ws_turn").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",perspective:500}).appendTo(c);this.go=function(m,q){var d=c.height(),f=c.width(),d={left:["0% 50%",{rotateY:90,translate:[0,0,.1]},{left:-f}],right:["100% 50%",{rotateY:-90,translate:[0,0,.1]},{left:f}],up:["50% 0%",{rotateX:-90,translate:[0,0,.1]},{top:-d}],down:["50% 100%",{rotateX:90,translate:[0,
0,.1]},{top:d}]}[e.direction||["left","right","down","up"][Math.floor(4*Math.random())]],g=b("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",transformOrigin:d[0],transformStyle:"preserve-3d",outline:"1px solid transparent",zIndex:5}).append(b(a.get(m)).clone()),h=b("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",background:"#000",zIndex:4}).append(b(a.get(q)).clone());l.css({perspectiveOrigin:d[0]});3>e.responsive&&
(g.find("img").css("width","100%"),h.find("img").css("width","100%"));h.appendTo(l);g.appendTo(l);p.stop(!0,!0).hide().css({left:-m+"00%"});var f=d[2],n={top:0,left:0};e.support.transform&&(f=d[1],n={rotateX:0,rotateY:0,translate:[0,0,0]});wowAnimate(g,f,n,e.duration,"easeInOutQuart",function(){k.trigger("effectEnd");g.remove();h.remove()});wowAnimate(h.find("img"),{opacity:1},{opacity:.2},e.duration,"easeInOutQuart")}};
