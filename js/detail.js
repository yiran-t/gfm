$(function() {
  //获取商品ID
  var aa = window.location.search;
  var c = aa.split("=");
  var ID = c[1];
  //console.log(ID);
  $.get("../json/data.json", function(data) {
    //console.log(data.con[ID-1].id);
    //放大镜
    var oCon = data.con;
    console.log(oCon.length);
    for (var i = 0; i < oCon.length; i++) {
      //console.log(oCon.length)
      if (oCon[i].id == ID) {
        var $img = `<img src=${oCon[i].src}>`;
        $("#zbox").append($img);
        //$("#dbox").append($img);

        //详情页右侧
        var $pName = `<p class="name">${oCon[i].title}</p>`;
        var $pJianjie = `<p class="jianjie">${oCon[i].title}</p>`;
        var $pJiage = `<p class="jiage">¥${oCon[i].price}</p>`;
        var $pPingfen = `<p class="pingfen">评分:${oCon[i].pingfen}</p>`;
        var $button = `<a href="cart.html"><input type="button" class="addBtn" data-id="${
          oCon[i].id
        }" value="加入购物车"/> </a>`;

        $(".xqyRight").append($pName);
        $(".xqyRight").append($pJianjie);
        $(".xqyRight").append($pJiage);
        $(".xqyRight").append($pPingfen);
        $(".xqyRight").append($button);
      }
    }
    var addBtns = document.getElementsByClassName("addBtn");
    for (let i = 0; i < addBtns.length; i++) {
      addBtns[i].onclick = function() {
        var id = this.getAttribute("data-id");
        if (getCookie("cart")) {
          var cartData = JSON.parse(getCookie("cart"));
        } else {
          var cartData = {};
        }

        if (!cartData[id]) {
          cartData[id] = 1;
        } else {
          cartData[id]++;
        }
        cartData = JSON.stringify(cartData);
        setCookie("cart", cartData, 7);
      };
    }
  });
});
