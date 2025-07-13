function outlink(_webUrl, _webUrlInner, _webUrlzwfw) {
	$("body").append("<a id=\"hash\" href=\"javascript:void(0)\" onclick=\"return false;\"></a><span id=\"closets\"></span><div" +
		" class=\"alert-warning\"><div class=\"alert-title\">温馨提示</div><div" +
		" class=\"alert-wzsm\"><p>您访问的链接即将离开<br><span class='fB'>“西安市人民政府”</span>网</p><p" +
		" class='color'>是否继续？</p><p" +
		" id=\"outUrl\"" +
		" style=\"display:" +
		" none\"></p></div><div class='alert-footer'><div class='confirm'><span class='visits'" +
		" onclick=\"window.open(outUrl.innerText);document.getElementById('closets').click();\">继续访问</span><span class=\"cancel\">放弃</span></div></div></div><div class=\"alert-mengban\"></div>");
	$("a").each(function () {
		var htm = $(this).html();
		$(this).click(function () {
			var a = this.host; 
			if (a != "" && a != _webUrl && a != _webUrlInner && a != _webUrlzwfw) {
				document.getElementById('outUrl').innerText = this.href;
				document.getElementById('hash').click();
				$(".alert-mengban").fadeIn(200);
				$(".alert-warning").delay(200).show().animate({top: "75px"}, 300);

				$("#closets,.cancel,.alert-mengban").click(function () {
					$(".alert-warning").animate({top: "-400px"}, 200).hide(300);
					$(".alert-mengban").delay(300).fadeOut(300);
				});

				$(".continue").click(function () {
					$(".alert-warning").hide(200);
					$(".alert-mengban").delay(200).fadeOut(200);
				});
				return false;
			}
		});
	});
}

jQuery(function ($) {
	outlink("xa.gov.cn", "www.xa.gov.cn", "zwfw.xa.gov.cn")
});