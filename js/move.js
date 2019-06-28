/*move(oBox,{"width":500},function(){
	move(oBox,{"height":500})
})*/
function move(domobj, json, fn) {
  clearInterval(domobj.timer);
  domobj.timer = setInterval(function() {
    //假设都达到了目标值
    var flag = true;
    for (var attr in json) {
      if (attr == "opacity") {
        var iCur = parseInt(getStyle(domobj, "opacity") * 100);
      } else {
        var iCur = parseInt(getStyle(domobj, attr));
      }

      var iTarget = json[attr];

      var iSpeed = (iTarget - iCur) / 8;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

      if (attr == "opacity") {
        domobj.style.opacity = (iCur + iSpeed) / 100;
        domobj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
      } else {
        domobj.style[attr] = iCur + iSpeed + "px";
      }

      if (iSpeed != 0) {
        flag = false;
      }
    }

    if (flag) {
      clearInterval(domobj.timer);
      if (fn) {
        fn();
      }
    }
  }, 20);
}

function getStyle(domobj, attr) {
  if (domobj.currentStyle) {
    return domobj.currentStyle[attr];
  }
  return getComputedStyle(domobj, null)[attr];
}
