$(function() {
  let info = JSON.parse(localStorage.getItem("info"));
  console.log(info);
  $(".loginBtn").attr("disabled", true);
  // 遍历匹配
  var arr = [];
  $(".loginPhone")
    .eq(0)
    .on("blur", function() {
      for (i in info) {
        var d1 = info[i].phone;
        console.log(d1);
        arr.push(d1);
        console.log(arr);
        var flag = false;
        for (var j = 0; j < arr.length; j++) {
          //console.log(arr[j]);
          // 手机号匹配开始
          console.log(
            $(".loginPhone")
              .eq(0)
              .val()
          );
          if (
            $(".loginPhone")
              .eq(0)
              .val() == arr[j]
          ) {
            flag = true;
          }
        }
        if (flag) {
          console.log("用户名已存在");
          // 密码匹配开始
          $(".loginPwd")
            .eq(0)
            .on("blur", function() {
              for (var j = 0; j < info.length; j++) {
                console.log(111);
                console.log($(".loginPwd").val());
                console.log(info[j].pwd);
                if ($(".loginPwd").val() == info[j].pwd) {
                  $(".loginBtn").prop("disabled", false);
                } else {
                  $(this)
                    .siblings("p")
                    .css({ color: "red" })
                    .html("密码输入错误");
                  $(".loginBtn").prop("disabled", true);
                }
              }
            });
          // 密码匹配结束
        }
      }
    });
  // 手机号匹配结束
}); //$(function()}
