/*字体重定义为10px*/
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '10px';
            } else {
                docEl.style.fontSize = '10px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//判断IE8-
(function (window) {
    var theUA = window.navigator.userAgent.toLowerCase();
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
        if (ieVersion < 9) {
            var str = "你的浏览器版本太低了 :(";
            var str2 = "推荐使用:<a href='https://browser.360.cn/ee/' target='_blank' style='color:#cc0'>360极速</a>,"
                + "<a href='http://www.firefox.com.cn/' target='_blank' style='color:#cc0'>火狐</a>,"
                + "<a href='https://www.liebao.cn/' target='_blank' style='color:#cc0'>猎豹</a>,其他双核急速模式";
            document.writeln("<pre style='text-align:center;color:#fff; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
                "<h2 style='padding-top:200px;margin:0'><strong>" + str + "<br/></strong></h2><p>" +
                str2 + "</p><h2 style='margin:0'><strong>如果你的使用的是双核浏览器,请切换到极速模式访问<br/></strong></h2></pre>");
            document.execCommand("Stop");
        }
        ;
    }
})(window);
//页签切换效果
function setTab(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = $("#" + name + i);
        var con = $("#con_" + name + "_" + i);
        if (i == cursel) {
            $(menu).addClass("hover");
            $(con).show();
        } else {
            $(menu).removeClass("hover");
            $(con).hide();
        }
    }
}
$(function () {
    $(".goBack").hide(); //首先将.back_top隐藏
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".goBack").fadeIn(400);
        } else {
            $(".goBack").fadeOut(400);
        }
    });
//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(".goBack").click(function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            200
        );
        return false;
    });

//移动端
    $(".goBack").on("touchend", function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            200
        );
        return false;
    });
});
// 移动端nav
$(function () {
    var right = $('.u-wap-nav');
    var bg = $('.m-mask');
    var rightNav = $('.m-wapnav-body');
    showNav(right, rightNav, "right");
    function showNav(btn, navDiv, direction) {
        btn.on('click', function () {
            bg.css({
                display: "block",
                transition: "opacity .5s"
            });
            $("body").css({
                position: "fixed",
                width: "100%",
                height: "100%"
            });
            if (direction == "right") {
                navDiv.css({
                    right: "0px",
                    transition: "right .5s"
                });
            } else if (direction == "left") {
                navDiv.css({
                    left: "0px",
                    transition: "left 1s"
                });
            } else if (direction == "up") {
                navDiv.css({
                    top: "0px",
                    transition: "top 1s"
                });
            } else if (direction == "down") {
                navDiv.css({
                    bottom: "0px",
                    transition: "bottom 1s"
                });
            }
        });
    }
    bg.on('click', function () {
        hideNav();
    });
    function hideNav() {
        rightNav.css({
            right: "-50%",
            transition: "right .5s"
        });
        bg.css({
            display: "none",
            transition: "display 1s"
        });
        $("body").css({
            position: "absolute"
        });
    }
    //计算导航高度
    var num = 2;
    if ($(window).width() < 768) {
        var num = 3;
    } else {
        var num = 2;
    }
    var wapNavTop = Number($(".g-banner").css("height").slice(0, -2)) / num - Number($(".u-wap-nav").css("height").slice(0, -2) / num);
    $(".m-wap-nav").css("margin-top", (wapNavTop + 2) + "px");
});
$(function () {//字体大中小
    $(".switchsize span").click(function () {
        //获取para的字体大小
        var thisEle = $(".m-txt-article p,.m-txt-article,.m-txt-article font,.m-txt-article span,.m-txt-article div").css("font-size");
        //parseFloat的第二个参数表示转化的进制，10就表示转为10进制
        var textFontSize = parseFloat(thisEle, 10);
        //javascript自带方法
        var unit = thisEle.slice(-2); //获取单位
        var cName = $(this).attr("class");
        if (cName == "bigger") {
            if (textFontSize <= 22) {
                textFontSize += 2;
            }
        } else if (cName == "smaller") {
            textFontSize -= 2;
        }
        $(".m-txt-article p,.m-txt-article,.m-txt-article font,.m-txt-article span,.m-txt-article div").css("font-size", textFontSize + unit);
    });
    $(".switchsize .medium").click(function () {
        $(".m-txt-article p,.m-txt-article,.m-txt-article font,.m-txt-article span,.m-txt-article div").css("font-size", "18px");
    })
    var printAreaCount = 0;
    $.fn.printArea = function () {
        var ele = $(this);
        var idPrefix = "printArea_";
        removePrintArea(idPrefix + printAreaCount);
        printAreaCount++;
        var iframeId = idPrefix + printAreaCount;
        var iframeStyle = 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;';
        iframe = document.createElement('IFRAME');
        $(iframe).attr({
            style: iframeStyle,
            id: iframeId
        });
        document.body.appendChild(iframe);
        var doc = iframe.contentWindow.document;
        $(document).find("link").filter(function () {
            return $(this).attr("rel").toLowerCase() == "stylesheet";
        }).each(
            function () {
                doc.write('<link type="text/css" rel="stylesheet" href="'
                    + $(this).attr("href") + '">');
            });
        doc.open();
        doc.write($(ele).prop('outerHTML'));
        doc.close();
        var frameWindow = iframe.contentWindow;
        frameWindow.close();
        frameWindow.focus();
        frameWindow.print();
    }
    var removePrintArea = function (id) {
        $("iframe#" + id).remove();
    };
    //打印调用
    $("#btnPrint").click(function () {
        print();
        $("#article").css("font-size", "18px");
        $("#article").css("line-height", "32px");
    });
    //回到顶部
    $(".back_top").hide(); //首先将.back_top隐藏
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".back_top").fadeIn(400);
        } else {
            $(".back_top").fadeOut(400);
        }
    }); //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(".back_top a").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    }); //当点击跳转链接后，回到页面顶部位置
    //设置左侧最小高度
    var leftHeight = $('.leftPart').height();
    var rightHeight = $('.rightPart').height();
    if (leftHeight < rightHeight) {
        $('.leftPart').height(rightHeight);
    }
});
//微信微博侧边栏
function closeDuilian() {
    $("#toTop").remove();
}
function monitorWidth() {
    var document_w = $(document).width();
    var obj = $("#toTop");
    if (document_w < 1206) {
        obj.hide();
    } else {
        obj.show();
    }
}
$(window).resize(function () {
    monitorWidth();
});
$(document).ready(function () {
    document.getElementById("goUp").style.display = "none";
    window.onscroll = function () {
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
            $("#goUp").css({"display": "block"});
        } else {
            $("#goUp").css({"display": "none"});
        }
    };
    var obj = $("div.duilian");
    /* 2023.02.14 对联判断高度 */
    if (obj.length > 0) {
        var bodyHeight = $(document).height();
        var dlHeight = $(".duilian").height();
        var topHeight = $(".duilian").css("top");
        topHeight = topHeight.substring(0, topHeight.length - 2);
        bodyHeight = parseInt(bodyHeight);
        dlHeight = parseInt(dlHeight);
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            scrollTop = parseInt(scrollTop);
            if ((scrollTop + dlHeight) < bodyHeight) {
                if ((scrollTop + 520) > (bodyHeight + dlHeight)) {
                    return false;
                } else {
                    if (scrollTop < bodyHeight-topHeight) {
                        obj.stop().animate({top: scrollTop});
                    } else {
                        obj.stop().animate({top: topHeight});
                    }
                }
            }
        });
        $("#goUp").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1200);
        });
    }
});

//一号登录
$(document).ready(function () {
	$("#btntc").hide();
    // url参数
    var token= ''
	if(getUrlParam('token')){
        token = getUrlParam('token')
    }else {
        token = getCookie('token')
    }
    if(getCookie('userInfo')){
        var obj = getCookie('userInfo')
        setUser(JSON.parse(obj))
    }else if(token){
        setCookie("token", token);
		var random = Math.random();
		var mtjmabc = md5(random);
        // 获取用户信息
        $.post("/web/api/getUserInfo?siteId=10039&tjmabc="+random + "&mtjmabc="+ mtjmabc, {"token" : token}, function (res) {
            if(res.status == 200){
                var data = res.data
                // 没有值 或 token 过期
                if (!data['userName'] || data['C-Response-Code'] === "999999999999" || data['C-Response-Desc'] === "No match found") {
                    clearCookie();
                    let url = window.location.href;
                    let i = url.indexOf("?");
                    if (i != -1 && url.indexOf("token") != -1) {
                        window.location.href = url.substring(0, i);
                    }
                    $("#btntc").hide();
                    // 姓名
                    $("#btndl").hide();
                } else {
                    setCookie("userInfo", JSON.stringify(res.data));
                    setUser(res.data)
                }
            }else {
                removeCookie("token");
                removeCookie('userInfo');
            }
        });
    }else {
        $("#btndl").show();
        $("#btntc").hide();
    }
	// 登录
    $("#ysqsfrz,#btndl").click(function () {
		var random = Math.random();
		var mtjmabc = md5(random);
        window.location.href = "/web/api/new/authorize?siteId=10039&tjmabc="+random + "&mtjmabc="+mtjmabc;
    });
    // 退出
    $("#btntc").click(function(){
        clearCookie();
		var random = Math.random();
		var mtjmabc = md5(random);
        window.location.href = "/web/api/logout?siteId=10039&token=" + token + "&tjmabc="+random + "&mtjmabc="+mtjmabc;
    });
    function setUser(res) {
        $(".login-box").hide();
        $("#btntc").show();
		$("#btndl").text("个人中心");
		$("#btndl").attr("href","/qrqw.html");
        //依申请姓名
        $("#name,#userName").attr('value',res.userName);
        //手机号
        $("#phone").attr('value',res.mobile_telephone);
        //身份证号 
        if(res.credentials_number){
            $("#cardCode,#cardId").attr("value", res.credentials_number);
        }else {
            $("#cardCode,#cardId").attr("value", res.operatore_credentials_number);
        }
    }
    function getUrlParam (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    };
    //Cookie添加
    function setCookie(name, value, iDay) {
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie=name+'='+encodeURIComponent(value)+';expires='+oDate+';path=/';
    }

    //Cookie获取
    function getCookie(name) {
        var arr=document.cookie.split('; ');
        var i=0;
        for(i=0;i<arr.length;i++) {
            var arr2=arr[i].split('=');

            if(arr2[0]==name) {
                var getC = decodeURIComponent(arr2[1]);
                return getC;
            }
        }
        return '';
    }

    //Cookie删除
    function removeCookie(name) {
        setCookie(name, '', -1);
    };

    //清空cookie
    function clearCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
            }
        };
    };
	
	// 长者专版
	
	let slhCookie = getCookie('slhCookie');
	let currentUrl = window.location.pathname;
	if (currentUrl == '/zzzb/1.html') {
		setCookie('slhCookie', '1', 30); // 设置cookie有效期为30天
	}
	if (slhCookie === '1') {
		if (currentUrl.includes('/zzzb/') && currentUrl.includes('1.html')) {
			return false;
		}
		zoomPage(956, 1.6);
		addExitButton();
	}
	
	// 页面放大函数
	function zoomPage(scale, zoom) {
		$('head').append(loadCSS('/template/styles/zzzb/common.css'));
	    $(".container").css("width", scale + 'px');
	    $("body").css("zoom", zoom);
	}
	// 引用样式方法
	function loadCSS(url) {
	  return $('<link>')
	    .attr({
	      rel: 'stylesheet',
	      href: url
	    });
	}
	// 添加退出按钮的函数
	function addExitButton() {
	    const exitButton = $('<button id="exitButton" style="position: fixed;right: 10px;bottom: 3vw;padding: 3px 8px;border-radius: 5px;border: none;background: #1b51a8;color: #fff;z-index: 99999999;">退出长者专版</button>');
	    $('body').append(exitButton);
	    $('body').on('click', '#exitButton', function() {
	        window.location.href = 'https://www.xa.gov.cn/';
	        clearCookie(); // 删除cookie
	        zoomPage(1320, 0);
	    });
	}
	// 长者专版---end
})

// 遍历去除相关文章/相关文件折行问题
$(function(){
	$('.m-jd-link a').each(function() {
		var text = $(this).text();
		var a = $(this).find('img').length;
		if(a < 1){
			$(this).text(text);
		}
	});
})
//搜索验证
// $(function(){
// 	$('#sub').click(function(){
// 		var qt_vue = $.trim($("#qt").val());
// 		if (qt_vue == "") {
// 			$("#qt").val("&#42;");
// 			$('#searchform').submit();
// 			$("#qt").val("");
// 		}
// 	});
// })


