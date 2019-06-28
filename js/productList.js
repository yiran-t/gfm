$(function() {
    $("#head").load("head.html");
$("#foot").load("foot.html");
  //   ajax  list.json 取数据
  $.get("../json/list.json", function(data) {
    // console.log(data);
    var arrA = data.A;
    var arrB = data.B;
    var arrC = data.C;
    var arr = [];
    var arrSum = arr.concat(arrA, arrB, arrC);
    // console.log(arrSum);
    // think  给数组添加索引
    for (var i = 0; i < arrSum.length; i++) {
      var value = arrSum[i];
      //   console.log(value);
    }
    // 放数据
    var str = "";
    for (var j = 0; j < arrSum.length; j++) {
      //   console.log(arrSum[j]);
      str += `
            <li><a href="../index.html">${arrSum[j]}</a></li>
        `;
      $(".brandList")
        .eq(0)
        .html(str);
      $(".brandList").hide();
    }
    // hoverA  显示对应数据
    $(".letter li")
      .eq(1)
      .hover(function() {
        $(".brandList").show();
        var str2 = "";
        for (let j = 0; j < arrA.length; j++) {
          str2 += `
            <li><a href="../index.html">${arrA[j]}</a></li>
        `;
          $(".brandList")
            .eq(0)
            .html(str2);
        }
      });

    // hoverB  显示对应数据
    $(".letter li")
      .eq(2)
      .hover(function() {
        $(".brandList").show();
        var str3 = "";
        for (let j = 0; j < arrB.length; j++) {
          str3 += `
            <li><a href="../index.html">${arrB[j]}</a></li>
        `;
          $(".brandList")
            .eq(0)
            .html(str3);
        }
      });

    // hoverC  显示对应数据
    $(".letter li")
      .eq(3)
      .hover(function() {
        $(".brandList").show();
        var str4 = "";
        for (let j = 0; j < arrC.length; j++) {
          str4 += `
            <li><a href="../index.html">${arrC[j]}</a></li>
        `;
          $(".brandList")
            .eq(0)
            .html(str4);
        }
      });
  });
  //   $.get()   -- end

  //   下方商品数据  ajax  开始
  $.get("../json/productList.json", function(data) {
    // console.log(data);
    var str5 = "";
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i]);
      str5 += `
            <li>
            <a href="../index.html"><img src="${data[i].imgSrc}"></a>
            <p class="price">${data[i].price}</p>
            <p class="title">${data[i].title}</p>
            <div class="box">
                <span class="minus" data-id = ${data[i].id}>&nbsp;-&nbsp;</span>
                <input type="text" value="1" class="numIpt">
                <span class="add" data-id = ${data[i].id}>&nbsp;+&nbsp;</span>
                <button class="addCart" data-id = ${data[i].id}>加入购物车</button>
            </div>           
            </li>
        `;
      $(".pListUl")
        .eq(0)
        .html(str5);
    } //for()

      // 循环遍历所有的  加减 按钮和  加入购物车按钮
    // 事件委托
    var num = 1;
    // + 事件  开始
    $(".box").on("click", ".add", function() {
      console.log($(this));
      num++;
      let id = $(this).attr("data-id");
      $(this)
        .siblings("input")
        .val(num);
    });
    // + 事件  结束

    // - 事件  开始
    $(".box").on("click", ".minus", function() {
      console.log($(this));
      num--;
      let id = $(this).attr("data-id");
      if($(this)
      .siblings("input")
      .val() <= 1){
        $(this)
        .siblings("input")
        .val()=1;
      }
      $(this)
        .siblings("input")
        .val(num);
    });
    // - 事件  结束
    // 修改 input中的值   开始
    // 修改 input中的值   结束
    // 点击加入购物车开始
    $(".box").on("click",".addCart",function(){
      // 存数据 到cookie中
      // if(getCookie("cart")){

      // }     
    })
    // 点击加入购物车结束
    
  });
  //   下方商品数据  ajax  结束

  // 酒精度  净含量 开始
  // console.log($(".r4_top li").eq(0))
  $(".r4_top li").eq(0).hover(function(){
    $(".liang").hide();
    $("#price").hide();
    // $(".jiu").hide();
    $(".jiu").show();
  })
  $(".r4_top li").eq(1).hover(function(){
    $("#price").hide();
    $(".jiu").hide();
    $(".liang").show();
  })
  $(".r4_top li").eq(2).hover(function(){
    $(".liang").hide();
    $(".jiu").hide();
    $("#price").show();
  })
  // 酒精度  净含量  结束

});
// $(function(){})  -- end
