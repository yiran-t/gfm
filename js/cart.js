var data = {
  "1": {
    id: "1",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "239",
    src1: "img/2.jpg",
    pingfen: "4",
  },
  "2": {
    id: "2",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "439",
    src1: "img/2.jpg",
    pingfen: "5",
  },
  "3": {
    id: "3",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "239",
    src1: "img/2.jpg",
    pingfen: "4",
  },
  "4": {
    id: "4",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "439",
    src1: "img/2.jpg",
    pingfen: "5",
  },
  "5": {
    id: "5",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "239",
    src1: "img/2.jpg",
    pingfen: "4",
  },
  "6": {
    id: "6",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "439",
    " url": "img/2.jpg",
    pingfen: "3",
  },
  "7": {
    id: "7",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "239",
    " url": "img/2.jpg",
    pingfen: "5",
  },
  "8": {
    id: "8",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "439",
    " url": "img/2.jpg",
    pingfen: "3",
  },
  "9": {
    id: "9",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "239",
    " url": "img/2.jpg",
    pingfen: "5",
  },
  "10": {
    id: "10",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "439",
    " url": "img/2.jpg",
    pingfen: "4",
  },
};
$(function() {
  $("#head").load("head.html");
  $("#foot").load("foot.html");
});
function Cart() {
  if (getCookie("cart")) {
    this.cartData = JSON.parse(getCookie("cart"));
  } else {
    this.cartData = {};
  }
  console.log(this.cartData);
}
//直接点击加入购物车按钮的话，正常是+1，也可能一次加入的数量不是1
//在购物车页面的数量展示框里的那个值是一个最终的值，而不是累加的值
//tm 来表示是累加还是最终值 true
function Cart() {
  if (getCookie("cart")) {
    this.cartData = JSON.parse(getCookie("cart"));
  } else {
    this.cartData = {};
  }
}
Cart.prototype.addData = function(id, num, tm) {
  if (!this.cartData[id] || tm) {
    this.cartData[id] = num;
  } else {
    this.cartData[id] = Number(this.cartData[id]) + num;
  }
  setCookie("cart", JSON.stringify(this.cartData), 7);
};

Cart.prototype.showData = function(domID) {
  //	$(function(){
  //		$.get("../json/data.json",function(data){
  //				//console.log(data.con[ID-1].id);
  //				//放大镜
  //				var oCon=data.con;
  //				var str = '';
  var str = "";
  //var oCon=data.data;
  //console.log(oCon)
  for (var id in this.cartData) {
    str += `<li data-id = "${id}">
        <input type="checkbox" class="ch">
        <img src="${data[id].src}">
        <span class="idTitle">${data[id].title}</span>
        <div class="idBox">
        <span class="minus">-</span>
        <input type="text" class="num" value="${this.cartData[id]}">
        <span class="plus">+</span>
        <span class="perPrice">${data[id].price}</span>
        <span class="totalPrice">${this.cartData[id] * data[id].price}</span>
        </div>             
        <span class="delBtn">删除</span>
        </li>`;
  }

  this.oCartList = document.getElementById(domID);
  this.oCartList.innerHTML = str;
  var aMinus = $(".minus");
  var aPlus = $(".plus");
  var aNums = $(".num");
  var aDelBtns = $(".delBtn");
  this.aTotalPrice = $(".totalPrice");
  this.aCheckBox = $(".ch");
  var aPerPrice = $(".perPrice");
  for (let i = 0; i < aMinus.length; i++) {
    aMinus[i].onclick = () => {
      console.log(aMinus[i].parentNode);
      let id = aMinus[i].parentNode.getAttribute("data-id");
      if (aNums[i].value <= 1) {
        alert("最少购买一件商品");
        return;
      }
      aNums[i].value--;
      this.aTotalPrice[i].innerHTML = aNums[i].value * aPerPrice[i].innerHTML;
      this.addData(id, -1, false);
      this.getTotalPrice();
    };
    aPlus[i].onclick = () => {
      let id = aMinus[i].parentNode.getAttribute("data-id");
      aNums[i].value++;
      this.aTotalPrice[i].innerHTML = aNums[i].value * aPerPrice[i].innerHTML;
      this.addData(id, 1, false);
    };
    aNums[i].onchange = () => {
      let id = aMinus[i].parentNode.getAttribute("data-id");
      this.aTotalPrice[i].innerHTML = aNums[i].value * aPerPrice[i].innerHTML;
      this.addData(id, aNums[i].value, true);
    };
    aDelBtns[i].onclick = () => {
      let id = aMinus[i].parentNode.getAttribute("data-id");
      this.removeData(id, aDelBtns[i].parentNode);
    };
    this.aCheckBox[i].onclick = () => {
      this.getTotalPrice();
    };
  }
};

Cart.prototype.removeData = function(id, domObj) {
  delete this.cartData[id];
  setCookie("cart", JSON.stringify(this.cartData), 7);
  this.oCartList.removeChild(domObj);
};

Cart.prototype.getTotalPrice = function() {
  var sum = 0;
  for (let i = 0; i < this.aCheckBox.length; i++) {
    if (this.aCheckBox[i].checked == true) {
      sum += Number(this.aTotalPrice[i].innerHTML);
    }
  }

  this.totalPrice = document.getElementById("totalPrice");
  this.totalPrice.innerHTML = "总价：" + sum + "元";
};
$(function() {
  //全选
  //列表中所有的复选框的状态和全选按钮状态保持一致
  $("#checkAll").click(function() {
    console.log($("#checkOther").prop("checked"));
    $("li input").prop("checked", $(this).prop("checked"));
    $("#checkOther").prop("checked", !$("#checkAll").prop("checked"));
  });
  //点击列表中任意一个复选框时，要判断所有选中的复选框是否和总的复选框个数相等，全选按钮选中
  $("li input").click(function() {
    if ($("li input:checked").length == $("li input").length) {
      $("#checkAll").prop("checked", true);
    } else {
      $("#checkAll").prop("checked", false);
    }
  });

  //反选
  //列表中复选框的状态要变成其自身相反的状态
  $("#checkOther").click(function() {
    $("li input").each(function() {
      $(this).prop("checked", !$(this).prop("checked"));
      $("#checkAll").prop("checked", !$("#checkOther").prop("checked"));
    });
  });
});
