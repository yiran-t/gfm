$(function() {
  $("#head").load("head.html");
  $("#foot").load("foot.html");

  //搜索框 start
  $(".ss").click(function() {
    var oSs = document.getElementById("wd");
    var oScript = document.createElement("script");
    oScript.src = "http://list.jiuxian.com/assKeyWords.htm?wd=" + oSs.value;
    document.body.appendChild(oScript);

    $.get("../json/data.json", function(data) {
      var str = "";
      //console.log(data.list[0].word)
      var List = data.list;
      //console.log(List[0].word)
      for (var i = 0; i < List.length; i++) {
        //console.log(List[i].word);
        str += `<li class="clearfix"><a href='detail.html?key=${List[i].word}

            ">${List[i].word}</a></li>`;
      }

      $(".ssCon ul").append(str);
    });
    $(".ssCon").fadeIn();
  });

  $(".sousuo").mouseleave(function() {
    $(".ssCon").fadeOut();
  });
  //搜索框  end

  //列表显示与消失
  $(".catItem").mouseover(function() {
    $(".menuBox")
      .stop()
      .show()
      .fadeIn();
  });

  $(".menuBox").mouseover(function() {
    $(".menuBox")
      .stop()
      .show();
  });

  $(".menuBox").mouseleave(function() {
    $(".menuBox")
      .stop()
      .fadeOut();
  });

  $(".catItem").mouseleave(function() {
    $(".menuBox")
      .stop()
      .fadeOut();
  });
  //列表显示与消失

  //主轮播start
  // 中间  start
  var count = 0;
  $(".pic li")
    .eq(count)
    .fadeIn()
    .siblings()
    .fadeOut();

  setInterval(
    function() {
      count++;

      if (count == $(".lbList1 li").length) {
        count = 0;
      }

      $(".pic li")
        .eq(count)
        .fadeIn()
        .siblings()
        .fadeOut();
      $(".pointList1 span")
        .eq(count)
        .addClass("select")
        .siblings()
        .removeClass("select");
    },

    2000
  );
  // 中间  end

  // 左边 start
  $.get("http://47.104.244.134:8080/goodstypelist.do", { l: "1" }, function(
    d1
  ) {
    // console.log(d1);
    var st = "";
    for (i in d1) {
      // console.log(d1[i].name);
      st += `
    <li data-id=${d1[i].id}><a href="../productList.html">${d1[i].name}</a></li>
    `;
    }
    $(".modalList").html(st);
    for (var j = 0; j < d1.length; j++) {
      // console.log($(".modalList li").eq(j));
      $(".modalList li")
        .eq(j)
        .hover(
          function() {
            $(".modalList2").show();
            var _this = $(this);
            $.get(
              "http://47.104.244.134:8080/goodstypelist.do",
              { l: "2" },
              function(d2) {
                // console.log(d2);
                var st = "";
                for (k in d2) {
                  // console.log(d2[k].name);
                  if (_this.attr("data-id") == d2[k].parentid) {
                    st += `
                    <li data-id=${d2[k].id}><a href="../productList.html">${
                      d2[k].name
                    }</a></li>
                    `;
                  }
                  $(".modalList2").html(st);
                }
              }
            );
          },
          function() {
            $(".modalList2").hide();
          }
        );
    }
    //  判断  end
  });
  // 左边 end

  // 右边  start
  var count2 = 0;
  setInterval(function() {
    count2++;
    if (count2 == $(".lbList2 li").length) {
      count2 = 0;
    }
    $(".lbList2 li")
      .eq(count2)
      .fadeIn()
      .siblings()
      .fadeOut();
  }, 2000);
  // 右边  end
  //轮播结束end

  //疯狂购物  start
  // top start
  $.get("../json/index.json", function(d3) {
    // console.log(d3);
    let data = d3.data1;
    // console.log(data);
    let str = "";
    for (i in data) {
      str += `
        <li>
          <img src="${data[i].imgSrc}">
          <p>${data[i].price}</p>
          <p>${data[i].title}</p></li>
        `;
    }
    $(".conTopList2").html(str);
  });
  // --
  $(".conTopList li")
    .eq(0)
    .hover(function() {
      $(".conTopList li")
        .eq(0)
        .css({ background: "#fff", color: "red" })
        .siblings()
        .css({ background: "#ccc", color: "#000" });
      $.get("../json/index.json", function(d3) {
        console.log(d3);
        let data = d3.data1;
        console.log(data);
        let str = "";
        for (i in data) {
          str += `
            <li>
              <img src="${data[i].imgSrc}">
              <p>${data[i].price}</p>
              <p>${data[i].title}</p>
            </li>
            `;
        }
        $(".conTopList2").html(str);
      });
    });
  $(".conTopList li")
    .eq(1)
    .hover(function() {
      $(".conTopList li")
        .eq(1)
        .css({ background: "#fff", color: "red" })
        .siblings()
        .css({ background: "#ccc", color: "#000" });
      $.get("../json/index.json", function(d3) {
        console.log(d3);
        let data = d3.data2;
        console.log(data);
        let str = "";
        for (i in data) {
          str += `
            <li>
              <img src="${data[i].imgSrc}">
              <p>${data[i].price}</p>
              <p>${data[i].title}</p>
            </li>
            `;
        }
        $(".conTopList2").html(str);
      });
    });
  // 3  start
  $(".conTopList li")
    .eq(2)
    .hover(function() {
      $(".conTopList li")
        .eq(2)
        .css({ background: "#fff", color: "red" })
        .siblings()
        .css({ background: "#ccc", color: "#000" });
      $.get("../json/index.json", function(d3) {
        console.log(d3);
        let data = d3.data3;
        // console.log(data);
        let str = "";
        for (i in data) {
          str += `
            <li>
              <img src="${data[i].imgSrc}">
              <p>${data[i].price}</p>
              <p>${data[i].title}</p>
            </li>
            `;
        }
        $(".conTopList2").html(str);
      });
    });
  // 3  end
  $(".conTopList li")
    .eq(3)
    .hover(function() {
      $(".conTopList li")
        .eq(3)
        .css({ background: "#fff", color: "red" })
        .siblings()
        .css({ background: "#ccc", color: "#000" });
      $.get("../json/index.json", function(d3) {
        // console.log(d3);
        let data = d3.data4;
        // console.log(data);
        let str = "";
        for (i in data) {
          str += `
          <li>
            <img src="${data[i].imgSrc}">
            <p>${data[i].price}</p>
            <p>${data[i].title}</p>
          </li>
          `;
        }
        $(".conTopList2").html(str);
      });
    });
  $(".conTopList li")
    .eq(4)
    .hover(function() {
      $(".conTopList li")
        .eq(4)
        .css({ background: "#fff", color: "red" })
        .siblings()
        .css({ background: "#ccc", color: "#000" });
      $.get("../json/index.json", function(d3) {
        // console.log(d3);
        let data = d3.data5;
        // console.log(data);
        let str = "";
        for (i in data) {
          str += `
          <li>
            <img src="${data[i].imgSrc}">
            <p>${data[i].price}</p>
            <p>${data[i].title}</p>
          </li>
          `;
        }
        $(".conTopList2").html(str);
      });
    });
  // top-right  start
  $.get("../json/issue.json", function(data) {
    var data = data.data1;
    console.log(data);
    var str = "";
    for (i in data) {
      // console.log(data[i]);
      str += `
      <li>${data[i]}</li>
      `;
    }
    $(".issueList").html(str);
  });
  $(".top2List li")
    .eq(0)
    .hover(function() {
      $(".top2List li")
        .eq(0)
        .css({ background: "#fff", color: "red" })
        .siblings()
        .css({ background: "#ccc", color: "black" });
      $.get("../json/issue.json", function(data) {
        var data = data.data1;
        console.log(data);
        var str = "";
        for (i in data) {
          // console.log(data[i]);
          str += `
          <li>${data[i]}</li>
          `;
        }
        $(".issueList").html(str);
      });
    });
  $(".top2List li")
    .eq(1)
    .hover(function() {
      $(".top2List li")
        .eq(1)
        .css({ background: "#fff", color: "red" })
        .siblings()
        .css({ background: "#ccc", color: "black" });
      $.get("../json/issue.json", function(data) {
        var data = data.data2;
        console.log(data);
        var str = "";
        for (i in data) {
          // console.log(data[i]);
          str += `
          <li>${data[i]}</li>
          `;
        }
        $(".issueList").html(str);
      });
    });
  // 轮播  start
  var count3 = 0;
  setInterval(function() {
    count3++;
    if (count3 == $(".lb3 li").length) {
      count3 = 0;
    }
    $(".lb3 li")
      .eq(count3)
      .fadeIn()
      .siblings()
      .fadeOut();
  }, 2000);

  var count4 = 0;
  setInterval(function() {
    count4++;
    if (count4 == $(".lb4 li").length) {
      count4 = 0;
    }
    $(".lb4 li")
      .eq(count4)
      .fadeIn()
      .siblings()
      .fadeOut();
  }, 2000);
  var count5 = 0;
  setInterval(function() {
    count5++;
    if (count5 == $(".lb4 li").length) {
      count5 = 0;
    }
    $(".bigList li")
      .eq(count4)
      .fadeIn()
      .siblings()
      .fadeOut();
  }, 2000);
  // 轮播  end
  // top-right  end
  // top end
  // 疯狂购物  end
});
// $(function(){})  -- end

$(".nn")
  .eq(0)
  .stop()
  .css({ background: "#fff", color: "#900", "border-top": "2px solid #900" });
$(".indexTabCon")
  .eq(0)
  .stop()
  .css({ display: "block" });
var countl = 0;

$.get("../json/data.json", function(data) {
  var str1 = "";
  oCon = data.con;
  for (let i = 0; i < oCon.length; i++) {
    str1 += `<li>
								<div class="indexTabPic">
											<a href="detail.html?id=${oCon[i].id}" target="_blank" title="${oCon[i].title}">
											<img src="${oCon[i].src}" alt="${oCon[i].alt}">
											</a>
											<p class="Tag">
												<span>领券<br>减30</span>
											</p>
										</div>
										<div class="indexTabTit">
											<a href="#" target="_blank" title='${oCon[i].title}'>${oCon[i].txt}</a>
										</div>
										<div class="indexTabPrice">
											<strong >${oCon[i].price}</strong>
								</div>
							</li>`;
  }
  $(".indexTabCon .clearfix").append(str1);
});
$(".nn").mouseover(function() {
  $(this)
    .stop()
    .css({
      background: "#fff",
      color: "#900",
      "border-top": "2px solid #900",
    });
  $(".indexTabCon")
    .stop()
    .css({ display: "block" });
  $(".nn").mouseleave(function() {
    $(this)
      .stop()
      .css({
        background: "#f9f9f9",
        color: "#666",
        "border-top": "2px solid #ececec",
      });
  });
});
for (let j = 0; j < $(".indexTabCon .clearfix li").length; j++) {
  $(".clearfix li")
    .eq(j)
    .on("click", function() {
      var aid = $(".clearfix li")
        .eq(j)
        .attr("id");
      window.location.href = "detail.html?id=" + aid;
    });
}
$();

//疯狂购物
//
//轮播2Start（今日推荐）
$.get("../json/data.json", function(data) {
  var str2 = "";
  tuiJian = data.tuijian;
  for (let i = 0; i < tuiJian.length; i++) {
    str2 += `<li>
								<div class="indexTabPic">
											<a href="detail.html?id=${oCon[i].id}">
											<img src="${tuiJian[i].src}" >
											</a>

							</li>`;
  }
  $(".lunbo2").append(str2);

  $(".lunbo2 li")
    .eq(0)
    .stop()
    .animate(
      {
        left: "0px",
      },
      1000
    );
  var count1 = 0;
  var timer = setInterval(function() {
    count1++;
    if (count1 == $(".lunbo2 li").length) {
      count1 = 0;
    }
    $(".lunbo2 li")
      .eq(count1)
      .stop()
      .animate({ left: "-268px" }, 1000);
    $(".btnBg em")
      .eq(count1)
      .css({ background: "red" })
      .siblings()
      .css({ background: "#ececec" });
  }, 2000);
  //轮播2End（今日推荐）

  //点击轮播start（优惠推选）
  $.get("../json/data.json", function(data) {
    var str3 = "";
    oCon = data.con;
    for (let i = 0; i < 6; i++) {
      str3 += `<li>
								<div class="indexTabPic">
											<a href="detail.html?id=${oCon[i].id}" target="_blank" title="${oCon[i].title}">
											<img src="${oCon[i].src}" alt="${oCon[i].alt}">
											</a>
											<p class="Tag">
												<span><b>自饮</b>自选</span>
											</p>
										</div>
										<div class="indexTabTit">
											<a href="#" target="_blank" title='${oCon[i].title}'>${oCon[i].txt}</a>
										</div>
										<div class="indexTabPrice">
											<strong >¥${oCon[i].price}</strong>
</div>
							</li>`;
    }
    $(".youhuiList .clearfix").append(str3);
  });

  $(".title_2 span")
    .eq(0)
    .stop()
    .addClass("select");
  var count2 = 0;
  var timer = setInterval(function() {
    count2++;
    if (count2 == $(".title_2 span").length) {
      count2 = 0;
    }
  }, 1000);
  $(".sp1").click(function() {
    $(".youhuiBoxs")
      .stop()
      .animate({ "margin-left": "-=1198px" }, 1000);
  });
  $(".sp2").click(function() {
    $(".youhuiBoxs")
      .stop()
      .animate({ "margin-left": "+=1198px" }, 1000);
  });
  $(".title_2 span")
    .eq(0)
    .click(function() {
      $(this)
        .css({ background: "red" })
        .siblings()
        .css({ background: "#ececec" });
      $(".youhuiBoxs").animate({ "margin-left": "0px" }, 1000);
    });
  $(".title_2 span")
    .eq(1)
    .click(function() {
      $(this)
        .css({ background: "red" })
        .siblings()
        .css({ background: "#ececec" });
      $(".youhuiBoxs").animate({ "margin-left": "-1198px" }, 1000);
    });
  $(".title_2 span")
    .eq(2)
    .click(function() {
      $(this)
        .css({ background: "red" })
        .siblings()
        .css({ background: "#ececec" });
      $(".youhuiBoxs").animate({ "margin-left": "-2396px" }, 1000);
    });
  //点击轮播结束

  //白酒馆开始

  $.get("../json/data.json", function(data) {
    var str4 = "";
    oCon = data.con;
    for (let i = 0; i < oCon.length; i++) {
      str4 += `<li>
								<div class="indexTabPic">
											<a href="detail.html?id=${oCon[i].id}" target="_blank" title="${oCon[i].title}">
											<img src="${oCon[i].src}" alt="${oCon[i].alt}">
											</a>
											<p class="Tag">
												<span>领券<br>减30</span>
											</p>
										</div>
										<div class="indexTabTit">
											<a href="detail.html?id=${oCon[i].id}" target="_blank" title='${
        oCon[i].title
      }'>${oCon[i].txt}</a>
										</div>
										<div class="indexTabPrice">
											<strong >¥${oCon[i].price}</strong>
</div>
							</li>`;
    }
    $(".spiritList .clearfix").append(str4);
  });
  $.get("../json/data.json", function(data) {
    var str5 = "";
    oCon = data.con;
    for (let j = 0; j < oCon.length / 2; j++) {
      str5 += `<li>
								<i class="topTenOne"></i>
								<div class="topTenPic">
									<a href="detail.html?id=${oCon[j].id}" target="_blank" title="${oCon[j].title}">
										<img src="${oCon[j].src1}"  alt="53°国台·品鉴15  500ml">
									</a>
								</div>
								<div class="topTenTitBox">
									<div class="topTenTit">
										<a href="detail.html?id=${oCon[j].id}" target="_blank" title="${
        oCon[j].title
      }">${oCon[j].txt}</a>
									</div>
									<div class="topTenPrice">
									<strong class=".topTenPrice">¥${oCon[j].price}</strong>
									</div>
								</div>
</div>
							</li>`;
    }
    $(".topTenCon .clearfix").append(str5);
  });
  $(".clearfix.bigUl li")
    .eq(0)
    .stop()
    .animate(
      {
        left: "0px",
      },
      1000
    );
  var count3 = 0;
  var timer = setInterval(function() {
    count3++;
    if (count3 == $(".clearfix.bigUl li").length) {
      count3 = 0;
    }
    $(".clearfix.bigUl li")
      .eq(count3)
      .fadeIn()
      .siblings()
      .fadeOut();
    //
    $(".btnBg.smallUl em")
      .eq(count3)
      .css({ background: "red" })
      .siblings()
      .css({ background: "#ececec" });
  }, 2000);
  //白酒馆结束

  //电梯Start
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 1500) {
      $(".fixDiv").fadeIn();
    } else {
      $(".fixDiv").fadeOut();
    }

    //滑动时列表跟着变为点击事件
    $(".bjg").each(function() {
      if (
        $(this).scrollTop() >=
        $(this).offset().top - $(this).outerHeight() / 2
      ) {
        var index = $(this).index();
        $(".fixDiv li")
          .eq(index)
          .addClass("hover")
          .siblings()
          .removeClass("hover");
      }
    });
  });
  $(".fixDiv li:not(:last-child)").click(function() {
    flag = false;
    var index = $(this).index();
    $(".fixDiv li")
      .eq(index)
      .addClass("select")
      .siblings()
      .removeClass("select");
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(".loadFirst .bjg")
            .eq(index)
            .offset().top,
        },
        500,
        function() {
          flag = true;
        }
      );
  });

  $(".fixDiv li:last-child").click(function() {
    $("html,body")
      .stop()
      .animate({ scrollTop: 0 }, 500);
  });
  //电梯End
});
var data = {
  "1": {
    id: "1",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "￥239",
    src1: "img/2.jpg",
  },
  "2": {
    id: "2",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "￥439",
    src1: "img/2.jpg",
  },
  "3": {
    id: "3",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "￥239",
    src1: "img/2.jpg",
  },
  "4": {
    id: "4",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "￥439",
    src1: "img/2.jpg",
  },
  "5": {
    id: "5",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "￥239",
    src1: "img/2.jpg",
  },
  "6": {
    id: "6",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "￥439",
    " url": "img/2.jpg",
  },
  "7": {
    id: "7",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "￥239",
    " url": "img/2.jpg",
  },
  "8": {
    id: "8",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "￥439",
    " url": "img/2.jpg",
  },
  "9": {
    id: "9",
    src: "img/fk1.jpg",
    title: "52°酒鬼原浆酒500ml",
    alt: "52°酒鬼原浆酒500ml",
    txt: "52°酒鬼原浆酒500ml",
    price: "￥239",
    " url": "img/2.jpg",
  },
  "10": {
    id: "10",
    src: "img/fk2.jpg",
    title: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    alt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    txt: "42°洋河特曲（珠光蓝）500ml（双瓶装）",
    price: "￥439",
    " url": "img/2.jpg",
  },
};
var data = JSON.stringify(data);
localStorage.setItem(data);
