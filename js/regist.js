// localStorage
$(function() {
  // 随机数
  var str = "0123456789abcdefghjklmnpqrstuvwxyz";
  var res = "";
  for (var i = 0; i < 4; i++) {
    var n = parseInt(Math.random() * str.length);
    res += str[n];
  }
  $(".capt").val(res);
  //   切换效果
  $(".btn_per").on("click", function() {
    $(".reg_com").hide();
    $(".reg_person").show();
  });
  $(".btn_com").on("click", function() {
    console.log(111);
    $(".reg_person").hide();
    $(".reg_com").show();
  });
  // 判断
  // 手机号判断
  let phoneRg = /^(13|14|15|18|17)[0-9]{9}$/;
  var isPhone = false;
  $(".phone")
    .eq(0)
    .on("blur", function() {
      // 先取出storage中的每个phone对应的数据
      // 与输入框中的数据进行匹配，若相同，则提示“此手机号已注册”
      let info = JSON.parse(localStorage.getItem("info"));
      // console.log(info);
      if (
        phoneRg.test(
          $(".phone")
            .eq(0)
            .val()
        )
      ) {
        console.log(11);
        $(this)
          .siblings("p")
          .html("验证通过")
          .css({ color: "green" });
        isPhone = true;
      } else {
        console.log(22);
        $(this)
          .siblings("p")
          .html("手机号输入不合法")
          .css({ color: "red" });
        isPhone = false;
      }
      checkForm();
    });
  // 密码判断  6~12位  字母数字下划线开头都可
  let passwordRg = /^\w{6,12}$/;
  let isPwd = false;
  $(".pwd")
    .eq(0)
    .on("blur", function() {
      if (
        passwordRg.test(
          $(".pwd")
            .eq(0)
            .val()
        )
      ) {
        console.log(1);
        $(this)
          .siblings("p")
          .html("验证通过")
          .css({ color: "green" });
        isPwd = true;
      } else {
        $(this)
          .siblings("p")
          .html("密码必须是6~12位")
          .css({ color: "red" });
        isPwd = false;
      }
      checkForm();
    });

  //确认密码验证
  // let repassword = document.querySelector("#repassword");
  let isrePwd = false;
  $(".pwd2")
    .eq(0)
    .on("blur", function() {
      if (
        $(".pwd")
          .eq(0)
          .val() ==
          $(".pwd2")
            .eq(0)
            .val() &&
        $(".pwd2")
          .eq(0)
          .val() !== ""
      ) {
        $(this)
          .siblings("p")
          .html("验证通过")
          .css({ color: "green" });
        isrePwd = true;
      } else {
        $(this)
          .siblings("p")
          .html("密码不可以为空/密码输入不一致")
          .css({ color: "red" });
        isrePwd = false;
      }
      checkForm();
    });

  // 随机验证码
  let isyzm = false;
  $(".yzm")
    .eq(0)
    .on("blur", function() {
      if (
        $(".yzm")
          .eq(0)
          .val() ==
        $(".yzm2")
          .eq(0)
          .val()
      ) {
        $(this)
          .siblings("p")
          .html("验证通过")
          .css({ color: "green" });
        isyzm = true;
      } else {
        $(this)
          .siblings("p")
          .html("验证码输入错误！请重试")
          .css({ color: "red" });
        isyzm = false;
      }
      checkForm();
    });
  // checkedbox
  // checkedbox
  let ischeckbox = false;
  if (
    $(".check")
      .eq(0)
      .prop("checked")
  ) {
    ischeckbox = false;
  } else {
    ischeckbox = true;
  }

  // 验证表单
  function checkForm() {
    if (isPhone && isPwd && isrePwd && isyzm && ischeckbox) {
      $(".regBtn").attr("disabled", false);
      regist();
    } else {
      $(".regBtn").attr("disabled", true);
    }
  }
  // localStorage  存储用户名  密码
  // [{ }]  data  obj= {};
  var data = [];
  function regist() {
    var obj = {};
    obj.phone = $(".phone")
      .eq(0)
      .val();
    obj.pwd = $(".pwd")
      .eq(0)
      .val();
    if (localStorage.getItem("info")) {
      data = JSON.parse(localStorage.getItem("info"));
      data.push(obj);
      localStorage.setItem("info", JSON.stringify(data));
    } else {
      data.push(obj);
      localStorage.setItem("info", JSON.stringify(data));
    }
  }
}); //$(function(){})
