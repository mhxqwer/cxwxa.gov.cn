if(top==self&&typeof(EsdToolbarInit)=="undefined"){
	var EsdToolbarInit={};
	
	EsdToolbarInit.path = "https://www.mangren.com/commonToolbarV6_7/";
	EsdToolbarInit.toolbarOpenStatus = null;
	EsdToolbarInit.cookieDoamin = "";
	
	try{
		var esdtemp = document.createElement("style");
		esdtemp.setAttribute("type", "text/css");
		esdtemp.id="esdToolsStyle";
		esdtemp.textContent=".esd-tools {background: transparent;font-size:16px;color: #000000;left: 0;padding: 10px;position: absolute;top: -104.2rem;-webkit-transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;z-index: 7001;}.esd-tools:focus {background: white;left: 0;outline: 0;position: absolute;top: 0;-webkit-transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;}"
		document.getElementsByTagName("head")[0].appendChild(esdtemp);
		
		var esdTipLink1 = document.createElement("a");
		esdTipLink1.setAttribute("href","javascript:void(0);");
		esdTipLink1.setAttribute("aria-label","按回车键在新窗口打开无障碍说明页面,按Ctrl加波浪键打开导盲模式。");
		esdTipLink1.appendChild(document.createTextNode("按回车键在新窗口打开无障碍说明页面,按Ctrl+~键打开导盲模式。"));
		esdTipLink1.tabIndex="7";
		esdTipLink1.id="esdTipLink1";
		esdTipLink1.className = "esd-tools";
		document.getElementsByTagName("BODY")[0].appendChild(esdTipLink1);
		esdTipLink1.onclick = function(){
			window.open(EsdToolbarInit.path+"help.html","_blank");
		}
	}catch(e){
		//console.log(e);
	}
	
	EsdToolbarInit.loadScript = function(func){
		var esd_jquery_js = document.createElement('script'); 
		esd_jquery_js.setAttribute('type', 'text/javascript'); 
		esd_jquery_js.setAttribute('src', EsdToolbarInit.path+'jquery.js'); 
		esd_jquery_js.setAttribute('charset', 'utf-8'); 
		esd_jquery_js.onload = function(){
			var esd_base64_js = document.createElement('script'); 
			esd_base64_js.setAttribute('type', 'text/javascript'); 
			esd_base64_js.setAttribute('src', EsdToolbarInit.path+'base64.js'); 
			esd_base64_js.setAttribute('charset', 'utf-8'); 
			esd_base64_js.onload = function(){
				var esd_soundmanager2_js = document.createElement('script'); 
				esd_soundmanager2_js.setAttribute('type', 'text/javascript'); 
				esd_soundmanager2_js.setAttribute('src', EsdToolbarInit.path+'soundmanager2.js'); 
				esd_soundmanager2_js.setAttribute('charset', 'utf-8'); 
				esd_soundmanager2_js.onload = function(){
					var esd_pinyin_js = document.createElement('script'); 
					esd_pinyin_js.setAttribute('type', 'text/javascript'); 
					esd_pinyin_js.setAttribute('src', EsdToolbarInit.path+'pinyin.js'); 
					esd_pinyin_js.setAttribute('charset', 'utf-8'); 
					esd_pinyin_js.onload = function(){
						var esd_handleInnerIframe_js = document.createElement('script'); 
						esd_handleInnerIframe_js.setAttribute('type', 'text/javascript'); 
						esd_handleInnerIframe_js.setAttribute('src', EsdToolbarInit.path+'handleInnerIframe.js'); 
						esd_handleInnerIframe_js.setAttribute('charset', 'utf-8'); 
						esd_handleInnerIframe_js.onload = function(){
							var esd_toolbar_js = document.createElement('script'); 
							esd_toolbar_js.setAttribute('type', 'text/javascript'); 
							esd_toolbar_js.setAttribute('src', EsdToolbarInit.path+'toolbar.js'); 
							esd_toolbar_js.setAttribute('charset', 'utf-8'); 
							esd_toolbar_js.setAttribute('id', 'ESDWebAppToolbar'); 
							document.head.appendChild(esd_toolbar_js);
							esd_toolbar_js.onload = function(){
								if(func!=null){
									func();
								}
							};
						};	
						document.head.appendChild(esd_handleInnerIframe_js);	
					};
					document.head.appendChild(esd_pinyin_js);	
				};
				document.head.appendChild(esd_soundmanager2_js);	
			};	
			document.head.appendChild(esd_base64_js);
		};	
		document.head.appendChild(esd_jquery_js);
	};
	
	EsdToolbarInit.getCookie = function(name){
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') 
				c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) 
				return c.substring(nameEQ.length, c.length);
		}
		return null;
	};
	EsdToolbarInit.setCookie = function(name, value, days){
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		}
		else {
			var expires = "";
		}
		document.cookie = name + "=" + value + "; path=/"+EsdToolbarInit.cookieDoamin;
	};
	EsdToolbarInit.esdTabIndex = 0;
	EsdToolbarInit.init = function(){
		EsdToolbarInit.insertDoms();
		EsdToolbarInit.toolbarOpenStatus = EsdToolbarInit.getCookie("wzaIsOn");
		var readScreenStatus = EsdToolbarInit.getCookie("readScreen");
		if(EsdToolbarInit.toolbarOpenStatus=="true"||EsdToolbarInit.toolbarOpenStatus==true||window.location.search.indexOf("ewt=1")>-1){
			if(EsdToolbarInit.checkUsePC()){
				if(typeof(jQuery)=='function'){
					if(readScreenStatus=="true"||readScreenStatus==true){
						jQuery("#toolbar").hide();
						jQuery("#toolbarPage2").show();
						jQuery("#toolbarHtml").show("fast",function(){
							jQuery("body").css("padding-top", "98px");
						});
					}else{
						jQuery("#toolbar").show();
						jQuery("#toolbarPage2").hide();
						jQuery("#toolbarHtml").show("fast",function(){
							jQuery("body").css("padding-top", "98px");
						});
					}
				}else{
					if(readScreenStatus=="true"||readScreenStatus==true){
						document.getElementById("toolbar").style.display = "none";
						document.getElementById("toolbarPage2").style.display = "block";
						document.body.style.paddingTop = "98px";
						document.getElementById("toolbarHtml").style.display = "block";
					}else{
						document.getElementById("toolbar").style.display = "block";
						document.getElementById("toolbarPage2").style.display = "none";
						document.body.style.paddingTop = "98px";
						document.getElementById("toolbarHtml").style.display = "block";
					}
				}
			}
			EsdToolbarInit.loadScript(null);
		}else{
			if(EsdToolbarInit.checkUsePC()){
				EsdToolbarInit.openFunc_pc(readScreenStatus);
			}else{
				EsdToolbarInit.openFunc_mobile();
			}
			document.onkeydown = function(e){
				if (e.ctrlKey) {
					if(typeof(EsdToolbar)=="undefined"){
						if (e.keyCode == 192) {  //ctrl+~
							if(navigator.userAgent.toLowerCase().indexOf("msie 8.0")>-1||navigator.userAgent.toLowerCase().indexOf("msie 7.0")>-1){
								alert("当前浏览器版本过低,辅助工具无法正常使用!\r\n请使用更高版本的浏览器!");
								return false;
							}
							if(document.getElementById("toolbarSwitch")!=null){
								document.getElementById("toolbarSwitch").onclick=null;
								document.getElementById("toolbarSwitch").onkeydown=null
							}
							EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
							EsdToolbarInit.setCookie("readScreen", true, 10);
							EsdToolbarInit.setCookie("speakVolume", 0, 10);
							if(typeof(jQuery)=='function'){
								jQuery("#toolbar").hide();
								jQuery("#toolbarPage2").show();
								jQuery("#toolbarHtml").show("fast",function(){
									jQuery("body").css("padding-top", "98px");
								});
							}else{
								document.getElementById("toolbar").style.display = "none";
								document.getElementById("toolbarPage2").style.display = "block";
								document.body.style.paddingTop = "98px";
								document.getElementById("toolbarHtml").style.display = "block";
							}
							EsdToolbarInit.loadScript(function(){
								jq_t("#toolbar").hide();
								jq_t("#toolbarHtml").show("fast",function(){
									jq_t("#toolbarPage2").show();
								});
								jq_t("body").css("padding-top", "98px");
								EsdToolbar.rebuild();
								EsdToolbar.isOpen = true;
							});
						}
					}else if(EsdToolbar.isOpen==false){
						if (e.keyCode == 192) {  //ctrl+~
							EsdToolbar.openKeydown();
						}
					}
				}
			}
		}
	}
	
	
	EsdToolbarInit.imgs={}; 
	EsdToolbarInit.imgs.closed1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M28.44,31.62,16.13,20a1.8,1.8,0,0,1,0-2.63l.21-.2a2,2,0,0,1,2.77,0L31.41,28.8a1.77,1.77,0,0,1,0,2.62l-.21.2A2,2,0,0,1,28.44,31.62Z"/><path class="cls-1" d="M31.22,19.66,19.42,31.8a2,2,0,0,1-2.76.1l-.22-.19a1.78,1.78,0,0,1-.11-2.62L28.12,17a2,2,0,0,1,2.77-.11l.22.2A1.79,1.79,0,0,1,31.22,19.66Z"/></svg>';
	EsdToolbarInit.imgs.color1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M35.83,23.79C34.59,26.29,32,28.85,29.69,29c-2.63.21-1.8-2.71-1.92-3.63s2.08-5,2.58-6.21c.27-.63.8-2.29,1.21-3.67a16.76,16.76,0,0,0-8.08-3.24c-3.5-.54-7.3-.41-10.59,2.29a15.54,15.54,0,0,0-5.2,13.91,17.2,17.2,0,0,0,.91,4.26c1,3,3,4.62,5.92,6,3.12,1.42,6.38-.54,9.17-3.24,1.73-1.67,2.45-2.67,4.7-3.17,1.73-.39,3.64-.43,5-1.64A7.9,7.9,0,0,0,35.83,23.79ZM14.31,19.41a2.84,2.84,0,1,1-2.83,2.83A2.83,2.83,0,0,1,14.31,19.41ZM13,32a2.83,2.83,0,1,1,2.83-2.83A2.83,2.83,0,0,1,13,32Zm5,5.42a2.84,2.84,0,1,1,2.83-2.83A2.83,2.83,0,0,1,18,37.37Zm1.87-16.5a2.67,2.67,0,1,1,2.67-2.67A2.66,2.66,0,0,1,19.89,20.87Z"/><path class="cls-1" d="M31.27,20.07l-2.58,6.09s.41,2.08,2.2,1,3.92-4.84,3.92-4.84S31.64,21.32,31.27,20.07Z"/><path class="cls-1" d="M32.44,16.12s-.71,2.12.45,2.95,3.67,1.71,4.92.67c-.46-.46-1-.17-2.17-.75S32.6,17.78,32.44,16.12Z"/><path class="cls-1" d="M33.27,14.87a5.3,5.3,0,0,1,2.87-3.71c2.42-1,2.42-1.59,2.42-1.59s.5.84.75,1.34,1.38,4,0,5.66a3.36,3.36,0,0,1-4.37.59C34,16.53,33.23,15.87,33.27,14.87Z"/></svg>';
	EsdToolbarInit.imgs.continuous_stop1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M37.46,10.94a.28.28,0,0,1,.28.28V37.53a.29.29,0,0,1-.28.28H10.08a.29.29,0,0,1-.28-.28V11.22a.28.28,0,0,1,.28-.28H37.46m0-2H10.08A2.28,2.28,0,0,0,7.8,11.22V37.53a2.28,2.28,0,0,0,2.28,2.28H37.46a2.28,2.28,0,0,0,2.28-2.28V11.22a2.28,2.28,0,0,0-2.28-2.28Z"/><path class="cls-1" d="M20.83,34.12a.49.49,0,0,1-.48-.36.51.51,0,0,1,.35-.62c1.68-.46,4.29-1.71,4.32-2.42,0-.27-1.33-.73-1.88-.93-1.26-.45-2.57-.92-2.29-1.93.21-.75,1.2-1.19,2.34-1.69.66-.29,1.89-.84,1.89-1.17s-1.6-1.23-2.28-1.59c-1.29-.67-2.14-1.11-2-1.81s.8-.89,2.15-1.45c.69-.29,2.13-.89,2.22-1.22-.1-.46-2.21-1.77-4.52-2.79a.49.49,0,0,1-.25-.66.5.5,0,0,1,.66-.25c1.9.84,5.11,2.44,5.11,3.71,0,1-1.38,1.53-2.84,2.13a15.32,15.32,0,0,0-1.43.66,11.22,11.22,0,0,0,1.39.8c1.44.76,2.81,1.47,2.81,2.47s-1.2,1.52-2.48,2.08c-.64.28-1.7.75-1.78,1.05a7.49,7.49,0,0,0,1.66.72c1.27.45,2.59.92,2.54,1.92-.09,1.91-5,3.32-5.05,3.33A.34.34,0,0,1,20.83,34.12Z"/></svg>';
	EsdToolbarInit.imgs.cursor1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M23.61,39.59a15,15,0,1,1,15-15A15,15,0,0,1,23.61,39.59Zm0-28a13,13,0,1,0,13,13A13,13,0,0,0,23.61,11.59Z"/><rect class="cls-1" x="4.77" y="23.37" width="11" height="2"/><rect class="cls-1" x="31.77" y="23.37" width="11" height="2"/><rect class="cls-1" x="18.27" y="36.87" width="11" height="2" transform="translate(-14.1 61.64) rotate(-90)"/><rect class="cls-1" x="18.27" y="9.87" width="11" height="2" transform="translate(12.9 34.64) rotate(-90)"/></svg>';
	EsdToolbarInit.imgs.enlarge1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M20.68,34.25A12.82,12.82,0,1,1,33.49,21.43,12.83,12.83,0,0,1,20.68,34.25Zm0-23.63A10.82,10.82,0,1,0,31.49,21.43,10.83,10.83,0,0,0,20.68,10.62Z"/><rect class="cls-1" x="26.73" y="31.45" width="13.75" height="5.21" rx="1.52" ry="1.52" transform="translate(33.92 -13.79) rotate(45)"/><rect class="cls-1" x="15.8" y="20.68" width="10.75" height="1.88"/><rect class="cls-1" x="15.8" y="20.68" width="10.75" height="1.88" transform="translate(-0.45 42.8) rotate(-90)"/></svg>';
	EsdToolbarInit.imgs.exit1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><polygon class="cls-1" points="24.64 22.38 19.48 16.82 19.48 27.93 24.64 22.38"/><rect class="cls-1" x="9.3" y="20.75" width="10.78" height="3.09"/><path class="cls-1" d="M15.24,8.75v9.81h2V10.75h19v21h-19V26.06h-2v7.73h23v-25Z"/><polygon class="cls-1" points="36 9.37 26.58 14.45 26.58 39.99 38.12 33.79 37.62 9.45 36 9.37"/></svg>';
	EsdToolbarInit.imgs.help1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M19,18.83s.13-6,5-6,5.63,4.75,3.67,7-6.92,5.42-6.92,8.67v2.58h5.13V28.71s-.38-1.5,3.08-4.09,5.46-5,5.46-7.66S33.46,8.87,24,8.87s-10.91,8-10.91,10Z"/><rect class="cls-1" x="20.96" y="33.91" width="5" height="5.96"/></svg>';
	EsdToolbarInit.imgs.left_img2 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><rect class="cls-1" x="12" y="37.31" width="23.13" height="3.07" rx="1.2" ry="1.2"/><path class="cls-1" d="M19.52,19.93a3.74,3.74,0,1,1-3.73-3.73A3.72,3.72,0,0,1,19.52,19.93Z"/><path class="cls-1" d="M37.45,8.43H9.66A4.38,4.38,0,0,0,5.29,12.8V29a4.39,4.39,0,0,0,4.37,4.38H37.45A4.4,4.4,0,0,0,41.83,29V12.8A4.39,4.39,0,0,0,37.45,8.43ZM26.12,14.8h5.43a1.06,1.06,0,0,1,0,2.12H26.12a1.06,1.06,0,1,1,0-2.12ZM23.3,27.11a1.53,1.53,0,0,1-1.08.46,1.56,1.56,0,0,1-1.09-.46l-2.37-2.37a5.6,5.6,0,0,1-3,.85,5.66,5.66,0,1,1,5.66-5.66,5.46,5.46,0,0,1-.62,2.55L23.3,25A1.52,1.52,0,0,1,23.3,27.11Zm12.63-.63H26.12a1.07,1.07,0,0,1,0-2.13h9.81a1.07,1.07,0,1,1,0,2.13Zm0-4.74H26.12a1.06,1.06,0,0,1,0-2.12h9.81a1.06,1.06,0,1,1,0,2.12Z"/></svg>';
	EsdToolbarInit.imgs.left_img5 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M37.46,10.09a.26.26,0,0,1,.28.22V31.24a.26.26,0,0,1-.28.23H10.08a.26.26,0,0,1-.28-.23V10.31a.26.26,0,0,1,.28-.22H37.46m0-1.62H10.08A2.09,2.09,0,0,0,7.8,10.31V31.62a2.1,2.1,0,0,0,2.28,1.85H37.46a2.1,2.1,0,0,0,2.28-1.85V10.31a2.09,2.09,0,0,0-2.28-1.84Z"/><polygon class="cls-1" points="34.69 13.35 34.69 28.41 12.75 28.41 12.75 13.35 21.67 13.35 21.67 19.14 18.71 19.14 24.17 24.47 29.42 19.22 26.59 19.22 26.59 13.35 34.69 13.35"/><rect class="cls-1" x="16.67" y="37.59" width="15.06" height="2.69"/></svg>';
	EsdToolbarInit.imgs.point3 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M37.46,10.94a.28.28,0,0,1,.28.28V37.53a.29.29,0,0,1-.28.28H10.08a.29.29,0,0,1-.28-.28V11.22a.28.28,0,0,1,.28-.28H37.46m0-2H10.08A2.28,2.28,0,0,0,7.8,11.22V37.53a2.28,2.28,0,0,0,2.28,2.28H37.46a2.28,2.28,0,0,0,2.28-2.28V11.22a2.28,2.28,0,0,0-2.28-2.28Z"/><polygon class="cls-1" points="23.15 19.84 18.05 24.22 18.05 26.81 22.24 23.5 22.24 33.84 24.33 33.84 24.33 23.4 28.18 26.97 28.18 23.87 23.15 19.84"/><rect class="cls-1" x="9.58" y="14.75" width="28.56" height="1.06"/></svg>';
	EsdToolbarInit.imgs.reflash1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M23.4,18.34,26,8.22l-14.31.43,3.75,3.94S7,17.65,7.15,25.53s6,13.06,11.12,15c-4.12-4.88-13.12-16.13,0-25.25A22.85,22.85,0,0,0,23.4,18.34Z"/><path class="cls-1" d="M24.15,30.4,21.58,40.53l14.32-.44L31.83,36s8.55-7.21,8.57-12.81c0-7.88-6-13.07-11.13-15C33.4,13.09,41,20.84,28.17,33,25.9,31.42,24.15,30.4,24.15,30.4Z"/></svg>';
	EsdToolbarInit.imgs.reflash2 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M13.66,12.93l4.27,21a1.15,1.15,0,0,0,2.07.44L23.12,30,28,36.68a1.14,1.14,0,0,0,1.73.14l2.32-2.26a1.16,1.16,0,0,0,.1-1.53l-4.95-6.36,5.46-1.55A1.15,1.15,0,0,0,33,23L15.42,11.73A1.16,1.16,0,0,0,13.66,12.93Z"/></svg>';
	EsdToolbarInit.imgs.screen1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M37.46,10.39a.28.28,0,0,1,.28.28V32.11a.29.29,0,0,1-.28.28H10.08a.29.29,0,0,1-.28-.28V10.67a.28.28,0,0,1,.28-.28H37.46m0-2H10.08A2.28,2.28,0,0,0,7.8,10.67V32.11a2.28,2.28,0,0,0,2.28,2.28H37.46a2.28,2.28,0,0,0,2.28-2.28V10.67a2.28,2.28,0,0,0-2.28-2.28Z"/><polygon class="cls-1" points="11.76 23.37 11.76 30.28 18.82 30.28 18.82 29.31 14.71 28.67 19.16 24.83 16.88 22.68 13.02 27.09 12.66 23.28 11.76 23.37"/><rect class="cls-1" x="16.8" y="37.33" width="14.97" height="3.03"/></svg>';
	EsdToolbarInit.imgs.small1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><rect class="cls-1" x="15.8" y="20.68" width="10.75" height="1.88"/><path class="cls-1" d="M20.68,34.25A12.82,12.82,0,1,1,33.49,21.43,12.83,12.83,0,0,1,20.68,34.25Zm0-23.63A10.82,10.82,0,1,0,31.49,21.43,10.83,10.83,0,0,0,20.68,10.62Z"/><rect class="cls-1" x="26.73" y="31.45" width="13.75" height="5.21" rx="1.52" ry="1.52" transform="translate(33.92 -13.79) rotate(45)"/></svg>';
	EsdToolbarInit.imgs.sound_big = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;"><style type="text/css">.st0{fill:none;stroke:#FFFFFF;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:5;}</style><path class="st0" d="M16.2,6.2v17.5l-6.2-5H3.8v-7.5H10L16.2,6.2z"/><path class="st0" d="M16.2,17.5c1.9-1.2,1.9-3.8,0-5"/><path class="st0" d="M20,20c2.6-2.6,2.6-7.4,0-10 M22.5,23.8c5-5,5-12.5,0-17.5"/></svg>';
	EsdToolbarInit.imgs.sound3 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;"><style type="text/css">.st0{fill:none;stroke:#FFFFFF;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:5;}</style><path class="st0" d="M21.5,12.5l5,5 M21.5,17.5l5-5"/><path class="st0" d="M16.2,6.2v17.5l-6.2-5H3.8v-7.5H10L16.2,6.2z"/><path class="st0" d="M16.2,17.5c1.9-1.2,1.9-3.8,0-5"/></svg>';
	EsdToolbarInit.imgs.toOriginal = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M32.87,8.9H14.52a5.67,5.67,0,0,0-5.67,5.67v19.6a5.68,5.68,0,0,0,5.67,5.67H25.7v-2H14.52a3.68,3.68,0,0,1-3.67-3.67V14.57a3.68,3.68,0,0,1,3.67-3.67H32.87a3.68,3.68,0,0,1,3.67,3.67V29h2V14.57A5.68,5.68,0,0,0,32.87,8.9Z"/><path class="cls-1" d="M35.75,30.07l-2.93,2.86-2.61,2.41V30.07h5.54m2.94-1.2H29v9.22l4.62-4.28,5.06-4.94Z"/><rect class="cls-1" x="14.6" y="17.78" width="18" height="2"/><rect class="cls-1" x="14.6" y="23.75" width="18" height="2"/><rect class="cls-1" x="14.6" y="29.78" width="8.06" height="2"/></svg>';
	EsdToolbarInit.imgs.vol_normal = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M39.54,29.83a16,16,0,0,0,1-5.46A16.64,16.64,0,0,0,23.72,7.87,16.64,16.64,0,0,0,7,24.37a16.64,16.64,0,0,0,16.77,16.5c6.49,0,14.08-3.63,16.87-8.94H37.65c-2.58,3.86-9,6.4-14,6.4a14.21,14.21,0,1,1,0-28.42A14.33,14.33,0,0,1,38.07,24.12a13.83,13.83,0,0,1-1.22,5.71Z"/><polygon class="cls-1" points="8.61 22.89 16.77 22.89 17.8 25.77 22.86 16.14 26.24 27.49 29.33 18.24 33.24 22.83 38.46 22.83 38.46 24.89 32.52 24.89 29.55 20.74 26.21 32.46 22.71 19.96 17.89 29.24 15.52 24.83 8.27 24.83 8.61 22.89"/></svg>';
	EsdToolbarInit.imgs.vol_quick = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M39.54,29.83a16,16,0,0,0,1-5.46A16.64,16.64,0,0,0,23.72,7.87,16.64,16.64,0,0,0,7,24.37a16.64,16.64,0,0,0,16.77,16.5c6.49,0,14.08-3.63,16.87-8.94H37.65c-2.58,3.86-9,6.4-14,6.4a14.21,14.21,0,1,1,0-28.42A14.33,14.33,0,0,1,38.07,24.12a13.83,13.83,0,0,1-1.22,5.71Z"/><rect class="cls-1" x="22.96" y="13.78" width="1.97" height="19.94"/><rect class="cls-1" x="18.96" y="16.72" width="1.97" height="14.06"/><rect class="cls-1" x="14.99" y="20.72" width="1.97" height="7.03"/><rect class="cls-1" x="27.02" y="16.72" width="1.97" height="14.06"/><rect class="cls-1" x="30.99" y="20.72" width="1.97" height="7.03"/></svg>';
	EsdToolbarInit.imgs.vol_slow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.54 48.75"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M39.54,29.83a16,16,0,0,0,1-5.46A16.64,16.64,0,0,0,23.72,7.87,16.64,16.64,0,0,0,7,24.37a16.64,16.64,0,0,0,16.77,16.5c6.49,0,14.08-3.63,16.87-8.94H37.65c-2.58,3.86-9,6.4-14,6.4a14.21,14.21,0,1,1,0-28.42A14.33,14.33,0,0,1,38.07,24.12a13.83,13.83,0,0,1-1.22,5.71Z"/><rect class="cls-1" x="15.83" y="20.89" width="1.94" height="6.97"/><rect class="cls-1" x="31.83" y="20.89" width="1.94" height="6.97"/><polygon class="cls-1" points="17.46 20.99 21.89 25.33 26.64 20.74 32.58 24.55 32.4 26.8 26.74 23.14 22.11 28.02 16.93 23.18 16.68 21.61 17.46 20.99"/></svg>'
	EsdToolbarInit.imgs.pinned = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;"><style type="text/css">.st0{fill:none;stroke:#FFFFFF;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:5;}</style><path class="st0" d="M7.7,24.7h14.5H7.7z M19.1,14.9v5.4h-8.3v-5.4H5.6l9.3-9.8l9.3,9.8H19.1z"/></svg>';
	// EsdToolbarInit.imgs.newIcon = '<svg style="padding:5px;position:relative;width: 35px !important;box-sizing: border-box !important;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#2329D6"><path d="M15 17C15 19.7614 12.7614 22 10 22C7.23858 22 5 19.7614 5 17C5 14.9497 6.2341 13.1876 8 12.416"/> <circle cx="11" cy="3" r="1"/> <path d="M19 21.5L17.3959 15.4847C17.1624 14.6092 16.3695 14 15.4634 14H11V7L17 10"/> </svg>';
	// EsdToolbarInit.imgs.elderlyIcon = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve"><style type="text/css">.st123{fill:none;stroke:#ffffff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8;}.st124{fill:#ffffff;}</style><circle class="st123" cx="26" cy="10" r="2"></circle><path class="st123" d="M30,40l-2-6l-6-6 M22,28l2-10 M22,28l-6,12 M24,18l6,6l4,2 M24,18l-6,4l-2,6"></path><g><path class="st124" d="M32.9,39.9l0.6-12c0-0.6,0.5-1,1.1-0.9c0.5,0,1,0.5,0.9,1l-0.4,12C35,41.5,32.9,41.4,32.9,39.9L32.9,39.9z"></path></g></svg>';

	
	EsdToolbarInit.toolbarHtmlStr = "";
	EsdToolbarInit.toolbarHtmlStr+='<div id="toolbarHtml" style="display: none; z-index: 99999">';
	EsdToolbarInit.toolbarHtmlStr+='	<div id="toolbar" class="clearfix">';
	EsdToolbarInit.toolbarHtmlStr+='		<div id="canyou_toolbar_div">';
	EsdToolbarInit.toolbarHtmlStr+='			<div class="cy_toolbar_bg_table">';
	EsdToolbarInit.toolbarHtmlStr+='				<ul>';
	// EsdToolbarInit.toolbarHtmlStr+='					<li id="pc_elderlyIcon" class="li_1"><a href="javascript:EsdToolbarInit.elderly.open();" class="ul_li_a_1" title="开启长辈版">';
	// EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.elderlyIcon;
	// EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="长辈版">长辈版</span></li>';
	
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_refrash" class="li_1"><a href="javascript:void(0);" id="toolbar_refresh"  class="ul_li_a_1" title="重新设置Shift+1">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.reflash1;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="重新设置Shift+1">重置</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_playSpeech" class="li_2"><a href="javascript:void(0);" id="toolbar_speakVolume"  class="ul_li_a_1" title="声音">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.sound_big;
	EsdToolbarInit.toolbarHtmlStr+='					</a><span class="a_p_3 ul_li_a_1" href="javascript:void(0);" title="声音">声音</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_pointerRead" class="li_1"><a href="javascript:void(0);" id="toolbar_speakSpeed"  class="ul_li_a_1" title="语速">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.vol_normal;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="语速">语速</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_pointerRead" class="li_1"><a href="javascript:void(0);" id="toolbar_readChange"  class="ul_li_a_1" title="阅读方式">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.point3;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="阅读方式">阅读方式</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_color" class="li_2"><a href="javascript:void(0);" class="ul_li_a_1" title="切换配色Shift+5"  id="toolbar_colorChange">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.color1;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="调整配色">配色</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_bigword" class="li_1"><a href="javascript:void(0);" id="toolbar_pageZoomIc"  class="ul_li_a_1" title="网页放大Shift+6">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.enlarge1;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="网页放大Shift+6">放大</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_smallword" class="li_1"><a href="javascript:void(0);" id="toolbar_pageZoomDc"  class="ul_li_a_1" title="网页缩小Shift+7">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.small1;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="网页缩小Shift+7">缩小</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_arrow" class="li_2">';
	EsdToolbarInit.toolbarHtmlStr+='						<a href="javascript:void(0);" id="toolbar_refresh1" class="ul_li_a_1"  title="切换鼠标样式Shift+8" >';
	EsdToolbarInit.toolbarHtmlStr+=							EsdToolbarInit.imgs.reflash2;
	EsdToolbarInit.toolbarHtmlStr+='						</a>';
	EsdToolbarInit.toolbarHtmlStr+='						<span class="exap ul_li_a_1" href="javascript:void(0);" title="大鼠标">大鼠标</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_ruler" class="li_1"><a href="javascript:void(0);" id="toolbar_guides"  class="ul_li_a_1" title="十字光标">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.cursor1;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="十字光标">光标</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_displayScreen" class="li_2"><a href="javascript:void(0);" id="toolbar_magnifier"  class="ul_li_a_1" title="切换显示屏Shift+0">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.screen1;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="a_p_2 ul_li_a_1" href="javascript:void(0);" title="显示屏">显示屏</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_help" class="li_1"><a href="'+EsdToolbarInit.path+'help.html" target="_blank" id="toolbar_help" class="ul_li_a_1" title="开启帮助Shift+问号键">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.help1
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="开启帮助Shift+问号键">帮助</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_pinned" class="li_1"><a href="javascript:void(0);" id="toolbar_pinned" class="ul_li_a_1" title="固定或者隐藏工具栏，请按 Shift+L">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.pinned;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="固定或者隐藏工具栏，请按 Shift+D">固定</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_more" class="li_1"><a href="javascript:void(0);" id="toolbar_more" class="ul_li_a_1" title="下载快捷方式 Shift+D">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.left_img5;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="下载快捷方式 Shift+D">快捷通道</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_move" class="li_1"><a href="javascript:void(0);" id="toNav" class="ul_li_a_1"  title="读屏专用：快捷键Shift+N，适用于使用读屏软件的用户，若无读屏软件可通过Shift+2开启声音获取语音提示">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.toOriginal;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="读屏专用：快捷键Shift+N，适用于使用读屏软件的用户，若无读屏软件可通过Shift+2开启声音获取语音提示">读屏专用</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="cy_close" class="li_1"><a href="javascript:void(0);" id="toolbar_exit" class="ul_li_a_1"  title="关闭辅助工具Shift+Q">';
	EsdToolbarInit.toolbarHtmlStr+=						EsdToolbarInit.imgs.exit1;
	EsdToolbarInit.toolbarHtmlStr+='					</a> <span class="exap ul_li_a_1" href="javascript:void(0);" title="关闭辅助工具Shift+Q">退出</span></li>';
	EsdToolbarInit.toolbarHtmlStr+='					<li id="botn" style="clear:both;"></li>';
	EsdToolbarInit.toolbarHtmlStr+='				</ul>';
	EsdToolbarInit.toolbarHtmlStr+='			</div>';
	EsdToolbarInit.toolbarHtmlStr+='		</div>';
	EsdToolbarInit.toolbarHtmlStr+='	</div>';
	EsdToolbarInit.toolbarHtmlStr+='	<div id="toolbarPage2" class="btn-hide" style="height: 98px;">';
	EsdToolbarInit.toolbarHtmlStr+='		<div id="toolbarPage2content">';
	EsdToolbarInit.toolbarHtmlStr+='		<!--  -->';
	EsdToolbarInit.toolbarHtmlStr+='			<div id="transform_dp">';
	
	EsdToolbarInit.toolbarHtmlStr+='				<div id="navNumDiv" class="toolbarTexts">';
	EsdToolbarInit.toolbarHtmlStr+='					<span class="textSpan textShow">';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textShow"> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textStr textShow">导航区</span> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textNum">(<span id="navNum" class="textNum">0</span>)</span>';
	EsdToolbarInit.toolbarHtmlStr+='						</p>';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textKey textShow">ALT+1</p>';
	EsdToolbarInit.toolbarHtmlStr+='					</span>';
	EsdToolbarInit.toolbarHtmlStr+='				</div>';
	EsdToolbarInit.toolbarHtmlStr+='				<div id="infoWinDiv" class="toolbarTexts">';
	EsdToolbarInit.toolbarHtmlStr+='					<span class="textSpan textShow">';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textShow"> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textStr textShow">视窗区</span> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textNum">(<span id="infoWinNum" class="textNum">0</span>)</span>';
	EsdToolbarInit.toolbarHtmlStr+='						</p>';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textKey textShow">ALT+2</p>';
	EsdToolbarInit.toolbarHtmlStr+='					</span>';
	EsdToolbarInit.toolbarHtmlStr+='				</div>';
	EsdToolbarInit.toolbarHtmlStr+='				<div id="interactionWinDiv" class="toolbarTexts">';
	EsdToolbarInit.toolbarHtmlStr+='					<span class="textSpan textShow">';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textShow"> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textStr textShow">交互区</span> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textNum">(<span id="interactionWinNum" class="textNum">0</span>)</span>';
	EsdToolbarInit.toolbarHtmlStr+='						</p>';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textKey textShow">ALT+3</p>';
	EsdToolbarInit.toolbarHtmlStr+='					</span>';
	EsdToolbarInit.toolbarHtmlStr+='				</div>';
	
	EsdToolbarInit.toolbarHtmlStr+='				<div id="serviceWinDiv" class="toolbarTexts">';
	EsdToolbarInit.toolbarHtmlStr+='					<span class="textSpan textShow">';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textShow"> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textStr textShow">服务区</span> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textNum">(<span id="serviceWinNum" class="textNum">0</span>)</span>';
	EsdToolbarInit.toolbarHtmlStr+='						</p>';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textKey textShow">ALT+4</p>';
	EsdToolbarInit.toolbarHtmlStr+='					</span>';
	EsdToolbarInit.toolbarHtmlStr+='				</div>';
	EsdToolbarInit.toolbarHtmlStr+='				<div id="listAreaWinDiv" class="toolbarTexts">';
	EsdToolbarInit.toolbarHtmlStr+='					<span class="textSpan textShow">';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textShow"> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textStr textShow">列表区</span> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textNum">(<span id="listAreaWinNum" class="textNum">0</span>)</span>';
	EsdToolbarInit.toolbarHtmlStr+='						</p>';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textKey textShow">ALT+5</p>';
	EsdToolbarInit.toolbarHtmlStr+='					</span>';
	EsdToolbarInit.toolbarHtmlStr+='				</div>';
	EsdToolbarInit.toolbarHtmlStr+='				<div id="articleAreaWinDiv" class="toolbarTexts">';
	EsdToolbarInit.toolbarHtmlStr+='					<span class="textSpan textShow">';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textShow"> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textStr textShow">正文区</span> ';
	EsdToolbarInit.toolbarHtmlStr+='							<span class="textNum">(<span id="articleAreaWinNum" class="textNum">0</span>)</span>';
	EsdToolbarInit.toolbarHtmlStr+='						</p>';
	EsdToolbarInit.toolbarHtmlStr+='						<p class="textKey textShow">ALT+6</p>';
	EsdToolbarInit.toolbarHtmlStr+='					</span>';
	EsdToolbarInit.toolbarHtmlStr+='				</div>';
	
	
	
	EsdToolbarInit.toolbarHtmlStr+='			</div>';
	EsdToolbarInit.toolbarHtmlStr+='			<!--  --> ';
	EsdToolbarInit.toolbarHtmlStr+='		<div id="otherBtns">';
	EsdToolbarInit.toolbarHtmlStr+='			<div class="readDiv" id="cy_playSpeech_2">';
	EsdToolbarInit.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toolbar_speakOnOff" title="声音开关"  >';
	EsdToolbarInit.toolbarHtmlStr+=					EsdToolbarInit.imgs.sound_big;
	EsdToolbarInit.toolbarHtmlStr+='				</a> ';
	EsdToolbarInit.toolbarHtmlStr+='				<span class="read-span" title="语音">语音</span>';
	EsdToolbarInit.toolbarHtmlStr+='			</div>';
	EsdToolbarInit.toolbarHtmlStr+='			';
	EsdToolbarInit.toolbarHtmlStr+='			<div class="readDiv">';
	EsdToolbarInit.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toolbar_help_move" title="开启帮助Shift+问号键">';
	EsdToolbarInit.toolbarHtmlStr+=					EsdToolbarInit.imgs.help1;
	EsdToolbarInit.toolbarHtmlStr+='				</a> ';
	EsdToolbarInit.toolbarHtmlStr+='				<span class="read-span" title="开启帮助Shift+问号键">帮助</span>';
	EsdToolbarInit.toolbarHtmlStr+='			</div>';
	EsdToolbarInit.toolbarHtmlStr+='			<div class="readDiv">';
	EsdToolbarInit.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toolbar_magnifier_2" title="显示屏"  >';
	EsdToolbarInit.toolbarHtmlStr+=					EsdToolbarInit.imgs.screen1;
	EsdToolbarInit.toolbarHtmlStr+='				</a> ';
	EsdToolbarInit.toolbarHtmlStr+='				<span class="read-span" title="显示屏">显示屏</span>	';
	EsdToolbarInit.toolbarHtmlStr+='			</div>';
	EsdToolbarInit.toolbarHtmlStr+='			<div class="readDiv">';
	EsdToolbarInit.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toFirstPage" title="老人服务：快捷键Shift+N，适用于视力和文化认知低下的人群"  >';
	EsdToolbarInit.toolbarHtmlStr+=					EsdToolbarInit.imgs.left_img2;
	EsdToolbarInit.toolbarHtmlStr+='				</a> ';
	EsdToolbarInit.toolbarHtmlStr+='				<span class="read-span" title="老人服务：快捷键Shift+N，适用于视力和文化认知低下的人群">老人服务</span>';
	EsdToolbarInit.toolbarHtmlStr+='			</div>';
	EsdToolbarInit.toolbarHtmlStr+='			<div class="readDiv">';
	EsdToolbarInit.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toolbar_exit2" title="关闭辅助工具Shift+Q"  >';
	EsdToolbarInit.toolbarHtmlStr+=					EsdToolbarInit.imgs.exit1;
	EsdToolbarInit.toolbarHtmlStr+='				</a> ';
	EsdToolbarInit.toolbarHtmlStr+='				<span class="read-span" title="关闭辅助工具Shift+Q">退出</span>';
	EsdToolbarInit.toolbarHtmlStr+='			</div>';
	EsdToolbarInit.toolbarHtmlStr+='		</div>';
	EsdToolbarInit.toolbarHtmlStr+='		</div>';
	EsdToolbarInit.toolbarHtmlStr+='	</div>';
	EsdToolbarInit.toolbarHtmlStr+='	<div id="toolbar_prompt" style="display: none;">';
	EsdToolbarInit.toolbarHtmlStr+='		<span>请按F11切换全屏模式</span>';
	EsdToolbarInit.toolbarHtmlStr+='	</div>';
	EsdToolbarInit.toolbarHtmlStr+='	<div id="zwlj_prompt" tabindex="-1" class="ESDAssetsTextCon" style="display: none;" role="alertdialog" aria-label="提示：该链接属站外链接，将无法使用辅助浏览工具！是否继续访问？按tab键进行选择">';
	EsdToolbarInit.toolbarHtmlStr+='		<br/>';
	EsdToolbarInit.toolbarHtmlStr+='		<span class="ESDAssetsTextCon" data-has-text="1">提示：该链接属站外链接，将无法使用辅助浏览工具！</span>';
	EsdToolbarInit.toolbarHtmlStr+='		<br/>';
	EsdToolbarInit.toolbarHtmlStr+='		<span class="ESDAssetsTextCon" data-has-text="1">是否继续访问？</span><br/>';
	EsdToolbarInit.toolbarHtmlStr+='		<div style="margin-top:15px">';
	EsdToolbarInit.toolbarHtmlStr+='		    <input id="zwlj_bt1" type="button" class="ESDAssetsTextCon" aria-label="是,按回车键在新窗口打开链接" value="是" />';
	EsdToolbarInit.toolbarHtmlStr+='		    <input id="zwlj_bt2" type="button" class="ESDAssetsTextCon" aria-label="否,按回车键关闭提示框" value="否" />';
	EsdToolbarInit.toolbarHtmlStr+='		    <input id="zwlj_href" type="hidden" value=""/>';
	EsdToolbarInit.toolbarHtmlStr+='	    </div>';
	EsdToolbarInit.toolbarHtmlStr+='	</div>';
	EsdToolbarInit.toolbarHtmlStr+='	<div id="zwbdtj_prompt" style="display: none;">';
	EsdToolbarInit.toolbarHtmlStr+='		<span id="zwbdtj_span1">请注意，该操作链接到其他网站</span><br/>';
	EsdToolbarInit.toolbarHtmlStr+='		<span id="zwbdtj_span12">该网站无法启动无障碍工具条！</span>';
	EsdToolbarInit.toolbarHtmlStr+='	</div>';
	EsdToolbarInit.toolbarHtmlStr+='	<div id="no_authorization_prompt" style="display: none;">';
	EsdToolbarInit.toolbarHtmlStr+='		<span>当前访问页面超出辅助工具操作范围</span>';
	EsdToolbarInit.toolbarHtmlStr+='		<br/>';
	EsdToolbarInit.toolbarHtmlStr+='		<span>无障碍辅助工具无法正常工作！</span>';
	EsdToolbarInit.toolbarHtmlStr+='		<br/>';
	EsdToolbarInit.toolbarHtmlStr+='		<br/>';
	EsdToolbarInit.toolbarHtmlStr+='		<input id="na_bt1" type="button" title="点击返回" value="点击返回" />';
	EsdToolbarInit.toolbarHtmlStr+='	</div>';
	EsdToolbarInit.toolbarHtmlStr+='</div>';
	
		
	EsdToolbarInit.imgs.mPlay = '<path d="M4.3,31.2c1.1,0.2,2.4,0,3.8-0.6c0.8-0.3,1.9-0.9,3.3-1.9c0.6-0.4,1.1-0.7,1.3-0.9c1.3-0.7,3.1-1.7,5.4-3c3.1-1.7,5.6-3.1,7.6-4.2c0.3-0.2,0.9-0.5,1.6-0.8c0.9-0.5,1.6-0.8,2-1.1c0.7-0.4,1.2-0.9,1.5-1.4c0.3-0.6,0.5-1.2,0.4-2c-0.1-0.8-0.6-1.5-1.5-2.3c-0.6-0.5-1.6-1.1-2.9-1.9l-0.9-0.5C24.1,10,21.8,8.8,19,7.3s-5.1-2.6-6.7-3.6c-0.3-0.2-0.8-0.5-1.4-0.9C9.8,2.2,9,1.7,8.4,1.4c-1-0.5-1.9-0.8-2.7-0.8c-1-0.1-2,0.2-2.9,0.7C2.2,1.6,1.7,2.4,1.4,3.5C1.2,4.4,1,5.7,1,7.2c0,0.9,0,2.3,0.1,4.2c0.1,1.5,0.1,2.6,0.1,3.2V22l0,1.7c-0.1,1.5-0.1,2.7,0,3.4c0.1,1.2,0.4,2.1,0.8,2.8C2.5,30.6,3.3,31.1,4.3,31.2M0.8,28.2c0,0.1,0,0.1,0,0.2H1V3.8c-0.1,0-0.2,0-0.2,0.2V28.2 M0.8,4c-0.2,3.8-0.3,7.8-0.3,12.1s0.1,8.3,0.3,12.1V4 M4.8,31.8C5.9,32,7,31.8,8.3,31.3c0.8-0.3,1.9-0.8,3.3-1.7c0.6-0.4,1.1-0.7,1.5-0.8l4.4-2.4c3.8-2.1,6.9-3.8,9.4-5.1l0.1-0.1c1.1-0.6,1.8-1.1,2.3-1.4c0.9-0.6,1.5-1.1,1.9-1.7c0.5-0.7,0.8-1.4,0.8-2.1s-0.2-1.4-0.7-2.1c-0.4-0.6-1-1.1-1.7-1.6c-0.5-0.3-1.2-0.7-2.1-1.2l-0.6-0.3c-2.1-1.2-5.2-2.9-9.4-5.1L13,3.2c-0.3-0.2-0.8-0.4-1.4-0.8c-1.3-0.8-2.3-1.3-3-1.7C7.4,0.2,6.3-0.1,5.3-0.1C4.1-0.1,3,0.3,2,1.1C1.2,1.6,0.7,2.9,0.4,4.8C0.1,6.4,0,8.5,0,11.1c0,1.5,0.1,3.8,0.2,6.7c0.1,2.2,0.1,3.7,0.1,4.5v1.5c0,1.8,0,3,0.1,3.8c0.2,1.2,0.6,2.1,1.1,2.8C2.3,31.2,3.3,31.7,4.8,31.8 M4.5,31.5c-0.6,0.1-1.1-0.1-1.7-0.3c-0.6-0.3-1-0.6-1.4-1.2s-0.6-1-0.7-1.6v-0.2c-0.2-3.8-0.3-7.8-0.3-12.1S0.6,7.8,0.8,4c0-0.2,0.1-0.2,0.2-0.2v-1c0.6-1.4,1.8-2.3,3.5-2.5c0.5,0,1,0,1.5,0c0.3,0,0.7,0.1,1.3,0.2l0.1,0c3.8,1.7,7.3,3.7,10.5,5.8c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.1,0.1,0.2,0.2s0.2,0,0.4,0c0.5,0.5,1.2,1,2.2,1.5c0.6,0.3,1.6,0.8,2.9,1.4c2,0.9,3.5,1.6,4.3,2.1c1.5,0.9,2.4,1.8,2.9,2.7c0.6,1.1,0.4,2.3-0.4,3.7v0.2c-1,0.8-2.2,1.6-3.5,2.4c-0.9,0.5-2.2,1.2-3.9,2.1c-2.1,1.1-3.6,1.9-4.5,2.5c-0.2-0.1-0.3-0.1-0.4,0s-0.1,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.4,0.2c-3.3,2.1-6.8,4.1-10.5,5.8H4.5 M0.8,28.4c0.1,0.6,0.3,1.1,0.7,1.6s0.8,0.9,1.4,1.2c0.6,0.3,1.1,0.4,1.7,0.3H4.3c-0.9-0.3-1.6-0.6-2.2-1.1c-0.6-0.5-1-1.1-1.1-1.9v-0.2H0.8M1,28.6c0.2,0.8,0.6,1.4,1.1,1.9c0.5,0.5,1.2,0.8,2.2,1.1C2.7,30.8,1.6,29.8,1,28.6 M1,28.6c0.6,1.2,1.7,2.2,3.3,2.9h2.3c1.3-0.6,2.6-1.3,4.1-2c0.9-0.5,2.2-1.2,3.9-2.2c2-1.2,3.6-2,4.7-2.6h0.2c0.6-0.5,1.4-1,2.4-1.6c0.6-0.3,1.4-0.8,2.6-1.4c1.7-0.9,2.9-1.5,3.7-2c1.3-0.8,2.3-1.7,3-2.6v-0.2c-0.1-1.2-0.4-2.3-1.1-3.2c-0.6-0.8-1.4-1.4-2.5-2c-0.6-0.4-1.7-0.9-3.2-1.5c-1.2-0.5-2.1-1-2.8-1.3c-0.9-0.5-1.7-1-2.2-1.6h-0.2c-0.9-0.4-1.7-0.8-2.7-1.3c-0.6-0.3-1.4-0.8-2.4-1.5c-1.2-0.8-2.1-1.3-2.8-1.7c-1.1-0.6-2.2-1.1-3.2-1.4C7.2,0.9,5.9,0.6,4.5,0.5H4.3C2.7,1.2,1.6,2.1,1,3.4V28.6 M1.3,22c0-2.5,0-4.9,0-7.4c0-0.7,0-1.7-0.1-3.2C1.1,9.5,1,8.1,1,7.2c0-1.5,0.2-2.7,0.4-3.7c0.3-1.1,0.8-1.9,1.5-2.3c0.9-0.5,1.9-0.8,2.9-0.7c0.8,0.1,1.7,0.4,2.7,0.8C9,1.7,9.8,2.2,10.9,2.9c0.6,0.4,1.1,0.7,1.4,0.9c1.6,0.9,3.9,2.1,6.7,3.6s5.1,2.7,6.7,3.6l0.9,0.5c1.4,0.8,2.4,1.4,2.9,1.9c0.9,0.8,1.5,1.5,1.5,2.3c0.1,0.8-0.1,1.4-0.4,2c-0.3,0.5-0.8,0.9-1.5,1.4c-0.4,0.3-1.1,0.6-2,1.1c-0.7,0.3-1.2,0.6-1.6,0.8c-2,1.1-4.5,2.5-7.6,4.2c-2.2,1.2-4,2.2-5.4,3c-0.3,0.2-0.7,0.5-1.3,0.9c-1.4,0.9-2.5,1.5-3.3,1.9c-1.4,0.6-2.7,0.8-3.8,0.6c-1-0.2-1.8-0.7-2.3-1.5c-0.4-0.7-0.7-1.6-0.8-2.8c-0.1-0.7-0.1-1.8,0-3.4L1.3,22 M19.4,24.7c-1.1,0.6-2.6,1.4-4.7,2.6c-1.7,1-3,1.7-3.9,2.2c-1.5,0.8-2.9,1.5-4.1,2h0.7l10.5-5.8c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.2,0.2-0.2s0.2,0,0.4,0c0-0.1,0.1-0.2,0.2-0.3S19.3,24.8,19.4,24.7 M17.9,25.6c-1.1,0.6-2.8,1.6-5,2.8l-5.5,3C11.1,29.7,14.7,27.8,17.9,25.6 M19.4,24.7c0,0.1-0.1,0.2-0.3,0.3s-0.2,0.2-0.2,0.3c0.9-0.6,2.5-1.4,4.5-2.5c1.7-0.9,3-1.6,3.9-2.1c1.4-0.8,2.6-1.6,3.5-2.3c-1,0.7-2.2,1.3-3.5,2.1c-0.8,0.5-2,1.1-3.6,2c-1.9,1-3.3,1.8-4.2,2.3H19.4 M19.6,24.7c0.9-0.5,2.3-1.3,4.2-2.3c1.6-0.9,2.8-1.5,3.6-2c1.3-0.7,2.5-1.4,3.5-2.1v-0.2c0-0.1,0.1-0.2,0.2-0.3c0.2-0.2,0.2-0.4,0.2-0.6c-0.7,0.9-1.7,1.8-3,2.6c-0.8,0.5-2,1.2-3.7,2c-1.2,0.6-2.1,1.1-2.7,1.4C21,23.6,20.2,24.2,19.6,24.7 M31.3,17.1c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.1-0.2,0.2-0.2,0.3c0.8-1.4,0.9-2.6,0.4-3.7c-0.5-0.9-1.4-1.8-2.9-2.7c-0.9-0.5-2.3-1.2-4.3-2.1c-1.4-0.6-2.4-1.1-2.9-1.4c-1-0.5-1.7-1-2.2-1.5c0,0.1,0.1,0.2,0.2,0.3s0.2,0.2,0.3,0.3h0.2c0.6,0.5,1.3,1,2.2,1.4c0.6,0.3,1.4,0.7,2.7,1.2c1.6,0.7,2.7,1.2,3.4,1.6c1.1,0.7,2,1.4,2.6,2.1c0.6,0.9,0.9,2,0.9,3.3V17.1 M31.3,16.9c0.1-1.2-0.2-2.3-0.9-3.3c-0.6-0.8-1.4-1.5-2.6-2.1c-0.7-0.4-1.8-0.9-3.4-1.6c-1.2-0.5-2.1-0.9-2.7-1.2c-0.9-0.5-1.7-1-2.2-1.4c0.6,0.6,1.3,1.1,2.3,1.7c0.6,0.3,1.5,0.8,2.8,1.3c1.4,0.6,2.5,1.1,3.1,1.5c1.1,0.6,1.9,1.3,2.4,2C30.9,14.6,31.3,15.7,31.3,16.9 M4.5,0.5c1.3,0.2,2.6,0.4,3.8,0.8c1,0.4,2.1,0.8,3.2,1.4c0.6,0.4,1.6,0.9,2.8,1.7c1.1,0.7,1.9,1.2,2.4,1.5c0.9,0.5,1.8,1,2.7,1.3c0-0.1-0.1-0.2-0.3-0.3s-0.2-0.2-0.2-0.3c-0.2,0.1-0.3,0.1-0.4,0s-0.1-0.1-0.2-0.2c-0.1-0.2-0.2-0.2-0.4-0.2L7.4,0.5l-0.1,0C6.7,0.4,6.3,0.3,6,0.3c-0.5-0.1-1-0.1-1.5,0V0.5 M7.4,0.5c1.2,0.7,3.1,1.7,5.5,3.1l5,2.7C14.7,4.2,11.1,2.2,7.4,0.5 M1,3.4c0.6-1.2,1.7-2.2,3.3-2.9C3.6,0.6,3,0.9,2.5,1.3C2.1,1.5,1.7,2,1.2,2.6L1,2.8V3.4 M1,2.8c0.1-0.1,0.1-0.1,0.2-0.2C1.7,2,2.1,1.5,2.5,1.3C3,0.9,3.6,0.6,4.3,0.5h0.2V0.3C2.8,0.5,1.6,1.4,1,2.8z"/>';
	EsdToolbarInit.imgs.mPause = '<path d="M16,32c-2.9,0-5.6-0.7-8.1-2.2c-2.4-1.4-4.3-3.3-5.7-5.7C0.7,21.6,0,18.9,0,16s0.7-5.6,2.2-8.1c1.4-2.4,3.3-4.3,5.7-5.7C10.4,0.7,13.1,0,16,0s5.6,0.7,8.1,2.2c2.4,1.4,4.3,3.3,5.7,5.7c1.5,2.5,2.2,5.2,2.2,8.1s-0.7,5.6-2.2,8.1c-1.4,2.4-3.3,4.3-5.7,5.7C21.6,31.3,18.9,32,16,32 M19.7,8.7c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v13.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V9.4c0-0.2-0.1-0.4-0.2-0.5C20,8.8,19.9,8.7,19.7,8.7 M12.3,8.7c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v13.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V9.4c0-0.2-0.1-0.4-0.2-0.5C12.7,8.8,12.6,8.7,12.3,8.7z"/>';
	EsdToolbarInit.toolbarHtmlStr_m = ""
	+'<div id="toolbarHtml" class="toolbarMobile toolbarFooter" style="display: none; z-index: 9999999">'
	+'	<div id="toolbar">'
	+'		<ul>'
	+'			<li style="line-height:1!important">'
	+'				<a href="javascript:void(0);" style="line-height:1!important" class="" title="切换配色，当前为默认下一配色为深蓝白" aria-label="切换配色，当前为默认下一配色为深蓝白" id="toolbar_colorChange">'
	+'					<svg tabindex="-1" class="esdUnCount" x="0px" y="0px" viewBox="0 0 32 32"><path d="M0.3,11.4c-0.2,2.1-0.3,4.5-0.3,7c0,2.5,0.1,4.9,0.3,7V11.4 M0.3,11.4c0,4.7,0,9.4,0,14.1h0.2V11.1C0.4,11.1,0.3,11.2,0.3,11.4L0.3,11.4 M0.5,25.5c0,0.2,0,0.3,0.2,0.4v-15c-0.1,0-0.2,0-0.2,0.2V25.5 M0.6,10.9c0,5,0,10,0,15c0,0,0.1,0.1,0.1,0.2s0.1,0.1,0.2,0.2c0.1,0.1,0.1,0,0.2,0c0.5,0,0.7,0.1,0.8,0.4c0.2,0,0.5,0.1,0.8,0.3c0.2,0.1,0.4,0.2,0.5,0.3c0.4,0,0.7,0.1,0.7,0.4c2,0.8,4,1.8,6,2.9c0.5,0,0.7,0.1,0.8,0.4c0.2,0,0.5,0.1,0.8,0.3c0.2,0.1,0.3,0.2,0.5,0.2s0.3,0,0.5,0.1c0.1,0,0.1,0.1,0.2,0.1h1.5c0.1,0,0.1-0.1,0.1-0.3v-0.1V16c0-0.2-0.1-0.3-0.2-0.4c-0.1,0-0.2-0.1-0.4-0.2c-0.2-0.1-0.4-0.1-0.5-0.2c-0.3,0-0.5-0.1-0.5-0.4c-0.2,0-0.3,0-0.4,0s-0.2-0.1-0.3-0.2c-0.2-0.1-0.4-0.2-0.6-0.2c-0.3,0-0.5-0.1-0.5-0.4c-0.2,0-0.3,0-0.5-0.1c-0.1,0-0.1-0.1-0.2-0.1c-0.3,0-0.5-0.1-0.5-0.4c-0.2,0-0.3,0-0.4,0S9.1,13.3,9,13.2C8.8,13.1,8.6,13,8.4,13c-0.3,0-0.5-0.1-0.5-0.4c-0.4,0-0.8-0.2-1.4-0.5c-0.5-0.2-0.9-0.4-1.2-0.4c-0.3,0-0.5-0.1-0.5-0.4c-0.2,0-0.4,0-0.6-0.1c-0.1,0-0.2-0.1-0.4-0.3s-0.3-0.2-0.5-0.2c-0.5,0-0.7-0.1-0.8-0.4H1C0.8,10.6,0.7,10.7,0.6,10.9 M2.5,10.5c0-0.1-0.1-0.3-0.4-0.4s-0.5-0.1-0.8,0S0.9,10.3,1,10.5h0.2c0-0.1,0-0.2,0.2-0.2s0.3,0,0.5,0s0.2,0.1,0.2,0.2H2.5 M2.1,10.5c0-0.1,0-0.2-0.2-0.2s-0.3,0-0.5,0s-0.2,0.1-0.2,0.2H2.1 M1.9,26.6c0-0.3-0.3-0.4-0.8-0.4C1.3,26.5,1.5,26.6,1.9,26.6 M2.3,6.5c0,0.2,0,0.5,0,0.7h0.2V6.5H2.3 M2.3,6.5c0.1,0,0.1,0,0.2,0h0.2C2.6,6.2,2.7,6,2.8,5.9S3,5.8,3.3,5.7c0.1,0,0.3-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.2C2.8,5.3,2.3,5.6,2.3,6.5 M2.5,7.2c0,0-0.1,0-0.2,0c0,0.9,0.5,1.2,1.5,1.2c0-0.1-0.1-0.2-0.2-0.2S3.4,8.1,3.3,8.1C3.1,8,2.9,8,2.8,7.9S2.6,7.6,2.7,7.3L2.5,7.2 M2.5,6.5c0,0.2,0,0.5,0,0.7h0.2V6.5H2.5 M3.7,5.4c0,0.1-0.1,0.2-0.2,0.2S3.3,5.7,3.2,5.7C3,5.8,2.8,5.8,2.7,5.9S2.5,6.2,2.6,6.5v0.7c-0.1,0.3,0,0.5,0.1,0.6c0.1,0,0.2,0.1,0.5,0.2c0.3,0.1,0.4,0.2,0.5,0.3c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.3,0.1,0.4,0.1c0.3,0,0.5,0.1,0.6,0.4c0.2,0,0.5,0.1,0.9,0.3c0.3,0.1,0.5,0.2,0.7,0.3c0.3,0,0.5,0.1,0.5,0.4h0.2c0.5,0,0.7,0.1,0.8,0.4c0.2,0,0.4,0,0.5,0.1c0.1,0,0.3,0.1,0.4,0.2c0.3,0.2,0.5,0.3,0.8,0.3s0.5,0.1,0.5,0.4c0.3,0,0.7,0.1,1.1,0.4c0.4,0.2,0.7,0.3,0.9,0.4c0.3,0,0.5,0.1,0.5,0.4c0.2,0,0.5,0.1,0.9,0.3c0.3,0.1,0.5,0.2,0.7,0.3c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.2,0.1,0.2,0.1h2l0.6-0.3c0.7-0.3,1.2-0.5,1.6-0.6c0.1-0.2,0.3-0.4,0.5-0.4c0.2,0,0.6-0.2,1-0.4c0.4-0.2,0.8-0.3,1.1-0.4c0.1-0.3,0.3-0.4,0.5-0.4c0.2,0,0.5-0.1,0.8-0.3c0.1-0.1,0.3-0.2,0.4-0.2c0.1-0.1,0.3-0.1,0.5-0.1c0-0.3,0.3-0.4,0.8-0.4c0.9-0.5,1.7-0.8,2.4-1c0.1-0.2,0.3-0.4,0.6-0.4c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.3-0.1,0.4-0.1c0.1-0.1,0.3-0.3,0.6-0.4c0.3-0.1,0.5-0.3,0.6-0.4V6.3c0-0.2-0.1-0.4-0.2-0.5S29.2,5.6,29,5.5c-0.3-0.1-0.5-0.2-0.5-0.4c-0.1,0-0.2,0-0.3-0.1s-0.3-0.1-0.4-0.1c-0.3,0-0.5-0.1-0.6-0.4c-0.7-0.2-1.5-0.5-2.4-1c-0.5,0-0.7-0.1-0.8-0.4c-0.2,0-0.4,0-0.5-0.1c-0.1,0-0.2-0.1-0.4-0.2c-0.3-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.5-0.1-0.5-0.4c-0.3,0-0.7-0.1-1.1-0.4c-0.4-0.2-0.7-0.3-0.9-0.4c-0.3,0-0.5-0.1-0.5-0.4c-0.4-0.1-1-0.3-1.7-0.6l-0.3-0.1h-2c-0.2,0.1-0.4,0.2-0.6,0.2S14.3,0.5,14,0.7C13.6,0.9,13.3,1,13.1,1v0.2c-0.2,0.1-0.4,0.2-0.5,0.2c-0.2,0-0.5,0.2-0.9,0.4c-0.4,0.2-0.8,0.3-1.1,0.4v0.2c-0.2,0.1-0.4,0.2-0.6,0.2S9.6,2.7,9.3,2.9C9.2,3,9,3.1,8.9,3.1C8.7,3.2,8.6,3.2,8.4,3.2v0.2C8.2,3.5,8,3.6,7.6,3.6H7.4V4C7.2,4.1,7,4.2,6.8,4.2S6.4,4.3,6.1,4.4C5.7,4.6,5.4,4.7,5.2,4.7V5C5,5.1,4.8,5.2,4.6,5.2c-0.1,0-0.2,0-0.3,0.1C4,5.4,3.9,5.4,3.7,5.4 M2.5,10.5c0,0.3,0.3,0.5,0.8,0.4C3.1,10.6,2.8,10.5,2.5,10.5 M3.9,27.6c0-0.3-0.3-0.4-0.7-0.4C3.3,27.4,3.5,27.6,3.9,27.6 M4.5,5.2c0.2,0,0.4-0.1,0.6-0.2V4.8C4.8,4.8,4.6,4.9,4.5,5.2 M5,9C4.9,8.8,4.7,8.6,4.4,8.6C4.6,8.9,4.8,9,5,9 M5.2,11.8c-0.1-0.2-0.3-0.4-0.5-0.4C4.8,11.7,4.9,11.8,5.2,11.8 M6.7,4.2c0.2,0,0.3,0,0.5-0.2V3.8C6.9,3.8,6.8,4,6.7,4.2 M7.2,9.9C7.1,9.6,6.9,9.5,6.7,9.5C6.8,9.8,7,9.9,7.2,9.9 M7.4,3.8c0.3,0,0.6,0,0.8-0.2V3.4C7.8,3.5,7.5,3.6,7.4,3.8 M8.2,10.3c0-0.3-0.3-0.4-0.8-0.4C7.5,10.1,7.8,10.3,8.2,10.3 M8.3,13.2c-0.1-0.3-0.3-0.4-0.5-0.4C7.9,13,8,13.2,8.3,13.2 M10.2,13.9c-0.1-0.2-0.3-0.4-0.5-0.4C9.7,13.8,9.9,13.9,10.2,13.9 M9.8,2.9c0.2,0,0.3,0,0.5-0.2V2.5C10,2.5,9.9,2.6,9.8,2.9 M10.3,11.3c-0.1-0.3-0.3-0.4-0.5-0.4C9.9,11.1,10.1,11.3,10.3,11.3 M10.7,30.8c0-0.3-0.3-0.4-0.8-0.4C10.1,30.7,10.3,30.8,10.7,30.8 M11.4,14.5c-0.1-0.3-0.3-0.4-0.5-0.4C11,14.4,11.2,14.5,11.4,14.5 M12.7,31.6c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.1-0.4-0.1-0.5-0.1c0.2,0.2,0.5,0.4,0.9,0.6s0.9,0,1.1-0.2c-0.1,0-0.3,0-0.5,0c-0.3,0-0.4,0-0.5,0C12.8,31.8,12.8,31.7,12.7,31.6 M12.4,1.8c0.2,0,0.3-0.1,0.5-0.2V1.4C12.6,1.4,12.4,1.5,12.4,1.8 M12.9,12.4c-0.1-0.2-0.3-0.4-0.5-0.4C12.4,12.3,12.6,12.4,12.9,12.4 M13.3,15.2c-0.1-0.2-0.3-0.4-0.5-0.4C12.8,15.1,13,15.3,13.3,15.2M14.2,31.6c-0.5,0-1,0-1.5,0c0,0.1,0.1,0.2,0.3,0.2c0.1,0,0.3,0,0.5,0c0.3,0,0.4,0,0.5,0S14.2,31.7,14.2,31.6 M14.4,16c0,2.3,0,4.7,0,7v8.2h0.2v-15C14.6,16.1,14.5,16,14.4,16 M14.6,16.2c0,5,0,10,0,15c0.1,0,0.2,0,0.2-0.2V16.6C14.8,16.4,14.7,16.2,14.6,16.2 M14.6,0.8c0.2,0,0.3-0.1,0.5-0.2V0.4C14.8,0.4,14.6,0.5,14.6,0.8 M15.1,13.2c0,0-0.1,0-0.2-0.1S14.7,13,14.6,13c0.1,0.2,0.3,0.4,0.5,0.4V13.2 M14.7,16.6c0,2.3,0,4.5,0,6.8V31c0.2-2.2,0.3-4.6,0.3-7.2S14.9,18.7,14.7,16.6M15.1,13.2c0,0.1,0,0.1,0,0.2h1.5c0.2,0,0.3,0,0.4,0c0.1,0,0.1-0.1,0.2-0.2H15.1 M15.1,0.4L15.1,0.4v0.2h2c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.1,0-0.3,0h-1.6 M15.5,13.3c0,0.1,0,0.2,0.2,0.2h0.7c0.1,0,0.2,0,0.2-0.2H15.5 M15.5,0.4c0.4,0,0.7,0,1.1,0c0-0.1,0-0.2-0.2-0.2h-0.7C15.5,0.2,15.5,0.3,15.5,0.4 M16.4,0.2c0-0.1,0-0.2-0.1-0.2S16,0,15.9,0s-0.2,0.1-0.1,0.2H16.4 M15.7,13.5c0,0.1,0,0.2,0.1,0.2s0.3,0,0.4,0c0.1,0,0.2-0.1,0.1-0.2H15.7 M17.3,16.6c-0.2,2.2-0.3,4.6-0.3,7.2s0.1,5,0.3,7.2V16.6 M17.3,31c0,0.1,0,0.2,0.2,0.2v-15c-0.1,0-0.2,0.1-0.2,0.3v0.1V31 M17.5,16.2c0,2.7,0,5.4,0,8.2v6.8h0.2l0-15.2C17.6,16,17.5,16,17.5,16.2M17.7,31.2c0,0.2,0,0.4,0.2,0.4h1.5c0.2-0.1,0.4-0.2,0.8-0.2c0.1,0,0.3-0.1,0.5-0.2c0.3-0.2,0.6-0.3,0.8-0.3c0-0.3,0.3-0.4,0.8-0.4c0.3-0.3,1.1-0.7,2.1-1.2c1.6-0.8,2.9-1.4,3.7-1.7c0-0.3,0.3-0.4,0.7-0.4c0.2,0,0.3-0.1,0.5-0.2c0.4-0.2,0.6-0.3,0.8-0.4c0-0.3,0.3-0.4,0.8-0.4c0.1,0,0.2,0,0.2,0s0.1,0,0.1-0.2c0-0.2,0.1-0.1,0.2-0.1v-15c-0.1-0.2-0.2-0.3-0.4-0.4h-1.5v0.2c-0.2,0.1-0.4,0.2-0.8,0.2c-0.1,0-0.3,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.4,0.3c-0.2,0-0.4,0.1-0.6,0.1v0.2c-0.2,0.1-0.4,0.2-0.5,0.2c-0.3,0-0.7,0.2-1.2,0.4c-0.5,0.3-1,0.5-1.4,0.5V13c-0.2,0.1-0.4,0.2-0.5,0.2c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.2-0.3,0.2s-0.3,0-0.5,0v0.2c-0.2,0.1-0.4,0.2-0.5,0.2c-0.2,0.1-0.4,0.2-0.8,0.2v0.2c-0.2,0.1-0.4,0.2-0.5,0.2s-0.4,0.1-0.6,0.2c-0.1,0.1-0.2,0.2-0.3,0.2s-0.2,0-0.4,0v0c-0.2,0.1-0.4,0.2-0.5,0.2s-0.3,0.1-0.5,0.2c-0.2,0.1-0.4,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4L17.7,31.2 M17.9,31.6c0,0.1,0,0.2,0.2,0.2c0.1,0,0.3,0,0.5,0c0.3,0,0.4,0,0.5,0s0.2-0.1,0.3-0.2H17.9M19.3,31.6c0,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.3,0-0.5,0c-0.3,0-0.4,0-0.5,0c0.3,0.2,0.6,0.3,1.1,0.1c0.5-0.2,0.8-0.3,0.9-0.6C19.7,31.4,19.5,31.5,19.3,31.6 M18.8,15.2c0.2,0,0.3-0.1,0.5-0.2v-0.2C19,14.9,18.9,15,18.8,15.2 M19.7,1.8c-0.1-0.3-0.3-0.4-0.5-0.4C19.2,1.6,19.4,1.8,19.7,1.8 M19.1,12.4c0.1,0,0.2,0,0.3-0.1s0.2-0.1,0.2-0.1V12C19.4,12,19.2,12.1,19.1,12.4 M20.6,14.5c0.2,0,0.3-0.1,0.5-0.2v-0.2C20.9,14.1,20.7,14.2,20.6,14.5 M22.3,2.9c-0.1-0.2-0.3-0.4-0.5-0.4C21.8,2.8,22,2.9,22.3,2.9 M21.7,11.3c0.1,0,0.2,0,0.3-0.1s0.2-0.1,0.3-0.1v-0.2C22,10.9,21.8,11,21.7,11.3 M22.1,30.4c-0.5,0-0.7,0.1-0.8,0.4C21.7,30.8,22,30.7,22.1,30.4 M21.9,13.9c0.2,0,0.3,0,0.5-0.2v-0.2C22.1,13.5,22,13.6,21.9,13.9 M23.7,13.2c0.2,0,0.3-0.1,0.5-0.2v-0.2C24,12.8,23.8,12.9,23.7,13.2 M23.9,3.5c0,0.3,0.3,0.4,0.8,0.4C24.5,3.6,24.3,3.5,23.9,3.5 M24.7,9.9c-0.5,0-0.7,0.1-0.8,0.4C24.3,10.3,24.5,10.1,24.7,9.9 M26.8,11.8c0.2,0,0.3-0.1,0.5-0.2v-0.2C27.1,11.4,26.9,11.6,26.8,11.8 M27.6,5.2c-0.1-0.3-0.3-0.4-0.6-0.4C27.1,5,27.3,5.2,27.6,5.2 M27,9c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.1,0.3-0.1V8.6C27.3,8.6,27.1,8.7,27,9 M28.3,8.4c0.9,0.1,1.3-0.2,1.5-1c0,0-0.1,0.1-0.2,0.1s-0.1,0.1-0.2,0.1c-0.1,0.1-0.3,0.2-0.6,0.4C28.6,8.1,28.4,8.3,28.3,8.4 M29.8,7.2c0.1-0.3,0.2-0.6,0.1-0.9s-0.3-0.6-0.5-0.8c-0.2-0.2-0.6-0.3-1-0.2c0.1,0.1,0.2,0.2,0.5,0.4c0.3,0.2,0.3,0.2,0.3,0.3c0.1,0.1,0.2,0.3,0.2,0.5h0.2c0.1,0,0.1,0.1,0.1,0.1c0,0.1,0,0.2,0,0.3L29.8,7.2M28.8,27.2c-0.4,0-0.7,0.1-0.7,0.4C28.5,27.6,28.7,27.4,28.8,27.2 M28.8,10.9c0.3,0,0.6-0.1,0.8-0.2v-0.2C29.2,10.5,29,10.6,28.8,10.9 M29.4,7.2c0,0.1,0,0.2,0,0.4c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1V7c0-0.1,0-0.3,0-0.3c0-0.1-0.1-0.1-0.1-0.1v0.2c0,0.2,0,0.3,0,0.4S29.5,7.2,29.4,7.2 M29.4,6.5c0,0.2,0,0.5,0,0.7c0.1,0,0.1,0,0.2-0.1s0-0.2,0-0.4V6.5H29.4 M31.1,10.5c0-0.2-0.1-0.3-0.3-0.4c-0.3-0.1-0.5,0-0.8,0s-0.4,0.2-0.4,0.4h0.5c0-0.1,0-0.2,0.2-0.2c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0.1,0.2,0.2H31.1 M30.9,10.5c0-0.1,0-0.2-0.2-0.2c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0.1-0.2,0.2H30.9 M30.9,26.3c-0.5,0-0.7,0.1-0.8,0.4C30.5,26.6,30.8,26.5,30.9,26.3 M31.4,10.9c0,5,0,10,0,15c0.1,0,0.2-0.1,0.2-0.3v-0.1V11.1C31.6,10.9,31.6,10.9,31.4,10.9 M31.6,11.1c0,2,0,4,0,6v8.4h0.2V11.4C31.8,11.2,31.7,11.1,31.6,11.1 M31.8,11.4c0,2.1,0,4.2,0,6.3v7.8c0.1-2.1,0.2-4.5,0.2-7S31.9,13.6,31.8,11.4z"/></svg>'
	+'					<p>配色</p>'
	+'				</a>'
	+'			</li>'
	+'			<li style="line-height:1!important">'
	+'				<a href="javascript:void(0);" style="line-height:1!important" class="" title="声音已经关闭" aria-label="声音已经关闭" id="toolbar_speakVolume">'
	+'					<svg tabindex="-1" class="esdUnCount" x="0px" y="0px" viewBox="0 0 32 32"></svg>'
	+'					<p>阅读</p>'
	+'				</a>'
	+'			</li>'
	+'			<li style="line-height:1!important" >'
	+'				<a href="javascript:void(0);" style="line-height:1!important" class="" id="toolbar_config" title="点击打开设置" aria-label="点击打开设置">'
	+'					<svg tabindex="-1" class="esdUnCount" x="0px" y="0px" viewBox="0 0 32 32"><path d="M31.2,12.3l-2.7,2.6c0.1,0.4,0.1,0.8,0.1,1.2c0,0.4,0,0.8-0.1,1.2l2.7,2.6c0.4,0.2,0.6,0.6,0.8,1c0.1,0.4,0.1,0.8-0.1,1.2l-2.5,4.2c-0.2,0.4-0.6,0.6-1,0.7c-0.5,0.1-0.9,0.1-1.3-0.2l-3.7-0.9c-0.7,0.4-1.4,0.8-2.1,1.2l-1,3.4c0,0.5-0.2,0.8-0.5,1.1C19.4,31.8,19,32,18.5,32h-5c-0.5,0-0.9-0.2-1.2-0.5c-0.3-0.3-0.5-0.7-0.5-1.1l-1-3.5c-0.7-0.3-1.4-0.7-2.1-1.2L5,26.7c-0.4,0.2-0.8,0.3-1.3,0.2c-0.4-0.1-0.8-0.4-1-0.7l-2.5-4.2c-0.2-0.4-0.3-0.8-0.1-1.2s0.4-0.7,0.8-1l2.7-2.6c0-0.4,0-0.8,0-1.2c0-0.4,0-0.8,0-1.2l-2.7-2.6c-0.4-0.2-0.6-0.6-0.8-1c-0.1-0.4-0.1-0.8,0.1-1.2l2.5-4.1c0.2-0.4,0.6-0.7,1-0.8C4.2,5,4.6,5.1,5,5.3l3.7,0.9c0.7-0.5,1.4-0.8,2.1-1.2l1-3.5c0-0.4,0.2-0.8,0.5-1.1S13,0,13.5,0h5c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.1l1,3.5c0.7,0.3,1.4,0.7,2.1,1.2L27,5.3c0.4-0.2,0.8-0.3,1.3-0.2c0.5,0.1,0.8,0.4,1,0.8l2.5,4.1c0.2,0.4,0.3,0.8,0.1,1.2C31.8,11.7,31.6,12.1,31.2,12.3 M16,10.4c-1.1,0-2.1,0.3-3,0.8s-1.6,1.2-2.1,2S10.1,15,10.1,16s0.3,2,0.8,2.8c0.5,0.9,1.2,1.5,2.1,2s1.9,0.8,3,0.8s2.1-0.3,3-0.8s1.6-1.2,2.1-2c0.5-0.9,0.8-1.8,0.8-2.8s-0.3-2-0.8-2.8c-0.5-0.9-1.2-1.5-2.1-2S17.1,10.4,16,10.4L16,10.4z"/></svg>'
	+'					<p>设置</p>'
	+'				</a>'
	+'			</li>'
	+'			<li style="line-height:1!important">'
	+'				<a href="javascript:void(0);" style="line-height:1!important" class="" id="toolbar_exit" title="退出服务" aria-label="退出服务">'
	+'					<svg tabindex="-1" class="esdUnCount" x="0px" y="0px" viewBox="0 0 32 32"><path d="M8.2,19.9c0.3,0.8,0.9,1.7,1.8,2.7c0.8,0.8,1.7,1.4,2.7,1.8c1.2,0.5,2.3,0.7,3.3,0.7c1.3,0,2.4-0.2,3.3-0.7c1-0.5,1.9-1.1,2.7-1.8c0.8-0.8,1.4-1.7,1.8-2.7c0.5-1.2,0.7-2.3,0.7-3.3c0-0.5-0.1-1.2-0.2-2c-0.2-0.8-0.5-1.4-0.7-1.9c-0.1-0.3-0.4-0.7-0.8-1.2L22.5,11c-0.4-0.5-0.9-1-1.5-1.4c-0.3-0.2-0.6-0.3-0.9-0.2l0,0c-0.2,0.1-0.4,0.1-0.4,0.2c-0.1,0.1-0.3,0.2-0.3,0.3c-0.2,0.3-0.3,0.6-0.2,0.9l0,0c0.1,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.3,0.3,0.3c0.9,0.7,1.6,1.4,1.9,2.2c0.5,1,0.7,2,0.7,2.8c0,0.7-0.2,1.5-0.5,2.4c-0.2,0.6-0.7,1.3-1.3,1.9c-0.5,0.6-1.2,1-1.9,1.3c-0.8,0.3-1.6,0.5-2.4,0.5c-0.7,0-1.5-0.2-2.4-0.5c-0.6-0.2-1.2-0.7-1.9-1.3c-0.6-0.5-1-1.2-1.3-1.9c-0.3-0.8-0.5-1.6-0.5-2.4c0-1,0.2-1.9,0.6-2.7c0.5-1,1.1-1.7,1.8-2.1c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.1,0.1-0.2,0.2-0.4c0.1-0.3,0-0.6-0.2-0.9c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.2-0.1-0.4-0.2l0,0c-0.3-0.1-0.6,0-0.9,0.2c-0.5,0.4-1,0.9-1.4,1.4c-0.4,0.5-0.7,1-1.1,1.6c-0.2,0.4-0.4,1-0.7,1.8v0c-0.1,0.3-0.2,0.6-0.2,1c0,0.2,0,0.6,0,1C7.5,17.8,7.7,18.9,8.2,19.9L8.2,19.9 M17.2,8.3c0-0.3-0.1-0.6-0.4-0.9S16.3,7,15.9,7c-0.4,0-0.6,0.1-0.8,0.4c-0.2,0.2-0.4,0.6-0.4,0.9v7.2c0,0.4,0.1,0.6,0.4,0.8c0.3,0.2,0.5,0.4,0.8,0.4c0.3,0,0.6-0.1,0.9-0.4c0.3-0.3,0.4-0.5,0.4-0.8V8.3 M16,0c2.2,0,4.2,0.4,6.2,1.2c1.9,0.8,3.6,2,5.1,3.4s2.6,3.2,3.4,5.1c0.8,2,1.2,4.1,1.2,6.2s-0.4,4.2-1.2,6.2c-0.8,1.9-2,3.6-3.4,5.1s-3.2,2.6-5.1,3.4c-2,0.8-4.1,1.2-6.2,1.2s-4.2-0.4-6.2-1.2c-1.9-0.8-3.6-2-5.1-3.4s-2.6-3.2-3.4-5.1C0.4,20.2,0,18.2,0,16s0.4-4.2,1.2-6.2c0.8-1.9,2-3.6,3.4-5.1s3.2-2.6,5.1-3.4C11.8,0.4,13.8,0,16,0z"/></svg>'
	+'					<p>退出</p>'
	+'				</a>'
	+'			</li>'
	+'		</ul>'
	+'	</div>'
	+'<div id="toolbarConfig" >'
	+'	<div>'
	+'		<div>'
	+'			<div class="">'
	+'				<div id="toolbarConfig-title">'
	+'					<div id="titleText">设置</div>'
	+'					<div id="titleClose" aria-label="关闭设置">'
	+'						<svg style="width: 20px; height: 20px;fill: #fff;" x="0px" y="0px" viewBox="0 0 20 20" ><path d="M11.6,10l8.1,8.1c0.2,0.2,0.3,0.5,0.3,0.8c0,0.3-0.1,0.5-0.3,0.7l0,0.1c-0.2,0.2-0.5,0.3-0.8,0.3s-0.5-0.1-0.8-0.3L10,11.5l-8.2,8.2C1.6,19.9,1.4,20,1.1,20s-0.5-0.1-0.7-0.3l-0.1-0.1C0.1,19.4,0,19.2,0,18.9c0-0.3,0.1-0.5,0.3-0.7L8.5,10L0.3,1.9C0.1,1.6,0,1.4,0,1.1s0.1-0.5,0.3-0.7l0.1-0.1C0.6,0.1,0.8,0,1.1,0s0.5,0.1,0.7,0.3L10,8.5l8.1-8.2C18.4,0.1,18.6,0,18.9,0s0.5,0.1,0.8,0.3l0,0.1C19.9,0.6,20,0.8,20,1.1s-0.1,0.5-0.3,0.8L11.6,10z"/></svg>'
	+'					</div>'
	+'				</div>'
	+'				<div id="toolbarConfig_body">'
	+'					<ul id="toolbarConfig_nav">'
	+'						<li class="tabAcitve" data-toolbarTab="toolbarTab1">配色</li>'
	+'						<li data-toolbarTab="toolbarTab2">字体</li>'
	+'						<li data-toolbarTab="toolbarTab3">语速</li>'
	+'						<li data-toolbarTab="toolbarTab4">模式</li>'
	+'					</ul>'
	+'					<div id="toolbarConfig_tabs">'
	+'						<div id="toolbarTab1" class="config_tab toolbarTabShow">'
	+'							<ul class="">'
	+'								<li style="background:white;color:black" class="toolbar_cur" id="toolbar_defalt">默认<i></i></li>'
	+'								<li style="background:#00335c;color:#ffffff" id="toolbar_c1">深蓝白<i></i></li>'
	+'								<li style="background:#622b2b;color:#ffffff" id="toolbar_c2">巧克力色<i></i></li>'
	+'								<li style="background:#000000;color:#ffffff" id="toolbar_c3">黑底白字<i></i></li>'
	+'								<li style="background:#228b22;color:#ffffff" id="toolbar_c4">森林绿<i></i></li>'
	+'							</ul>'
	+'						</div>'
	+'						<div id="toolbarTab2" class="config_tab">'
	+'							<ul>'
	+'								<li>'
	+'									<span>字体预览</span> '
	+'									<label aria-label="设置字体为特大"  id="toolbar_fxl">特大<i></i></label>'
	+'								</li>'
	+'								<li>'
	+'									<span>字体预览</span> '
	+'									<label aria-label="设置字体为特大" id="toolbar_fx">较大<i></i></label>'
	+'								</li>'
	+'								<li><span>字体预览</span> '
	+'									<label aria-label="设置字体为适中" id="toolbar_fm">适中<i></i></label>'
	+'								</li>'
	+'								<li class="toolbar_cur"><span>字体预览</span> '
	+'									<label aria-label="还原为原始字体" id="toolbar_font_def">原始字体<i></i></label>'
	+'								</li>'
	+'							</ul>'
	+'						</div>'
	+'						<div id="toolbarTab3" class="config_tab">'
	+'							<ul class="Set-speech-speed">'
	+'								<li aria-label="当前语速缓慢" id="toolbar_mSlow">缓慢<i></i></li>'
	+'								<li aria-label="当前语速适度" id="toolbar_mnormal">适度<i></i></li>'
	+'								<li aria-label="当前语速快速" id="toolbar_mfast">快速<i></i></li>'
	+'							</ul>'
	+'						</div>'
	+'						<div id="toolbarTab4" class="config_tab">'
	+'							<ul class="">'
	+'								<li aria-label="当前朗读模式指读" id="toolbar_rMode1" class="toolbar_cur">指读模式<i></i></li>'
	+'								<li aria-label="当前朗读模式连读" id="toolbar_rMode2">连读模式 <i></i></li>'
	+'							</ul>'	
	+'						</div>'
	+'					</div>'
	+'				</div>'
	+'			</div>'
	+'		</div>'
	+'	</div>'
	+'</div>'
	+'</div>';


	EsdToolbarInit.toolbarCssStr = '#toolbarHtml  {'
	+'	top:0;'
	+'	left:0;'
	+'	position:fixed;'
	+'	min-width: 100%;'
	+'	color: #666666;'
	+'	font-family: Microsoft YaHei;'
	+'	font-size: 12px;'
	+'	text-align: center;'
	+'}'
	+'#toolbarHtml *{'
	+'	font-family:Microsoft YaHei !important;'
	+'}'
	+'#ymd_magnifier_right span{'
	+'   font-family : Microsoft YaHei !important  '   
	+'}'
	+'#toolbarHtml h1, #toolbarHtml h2, #toolbarHtml h3, #toolbarHtml h4, #toolbarHtml h5, #toolbarHtml h6 {'
	+'	font-size: 12px;'
	+'	font-weight: normal;'
	+'}'
	+'#toolbarHtml li {'
	+'	list-style-type: none;'
	+'}'
	+'#toolbarHtml img {'
	+'	border: 0 none;'
	+'	display:inline-block;'
	+'}'
	+'#toolbarHtml a {'
	+'	color: #666666;'
	+'	text-decoration: none;'
	+'}'
	+'#toolbarHtml a:not(#cy_playSpeech_dl a) {'
	+'	display: block;'
	+'}'
	+'#toolbarHtml span {'
	+'	color: #666666;'
	+'}'
	+'#toolbarHtml #canyou_toolbar_div {'
	+'	background-color:#184f87;'
	+'	color:#fff;'
	+'	min-width: 103px;'
	+'}'
	+'#toolbarHtml div.cy_toolbar_bg_table {'
	+'	height:98px;'
	+'	margin: 0px auto;'
	+'	align:centent;'
	+'}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul {'
	+'	font-size: 18px;'
	+'	line-height: 30px;'
	+'	text-align: center;'
	+'	display:inline-block;'
	+'	margin: 0 auto;'
	+'}'
	+'#toolbarHtml #arrow_1 img, #toolbarHtml #arrow_2 img, '
	+'#toolbarHtml #arrow_3 img, #toolbarHtml #arrow_4 img,'
	+'#toolbarHtml #arrow_5 img {display: none;}'
	+'div.cy_toolbar_bg_table ul li{position:relative;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li span.ul_li_a_1{color: #FFF; display:block;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li.li_1 {float:left;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li.li_2 {float:left;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li.li_3 {float:left;}'
	+'#toolbarHtml img, #toolbar_more img, #toolbarPage2 img{'
	+'	width: 50px;'
	+'	height: 50px;'
	+'}'
	+'#toolbarHtml svg, #toolbar_more svg, #toolbarPage2 svg{'
	+'	width: 50px;'
	+'	height: 50px;'
	+'}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li span.ul_li_a_1 {'
	+'	font-weight: bold;'
	+'	float:left;'
	+'}'
	+'#toolbarHtml li#cy_back, #toolbarHtml li#cy_color, '
	+'#toolbarHtml li#cy_arrow, #toolbarHtml li#cy_help {'
	+'	margin-left:7px;'
	+'	padding-left:10px;'
	+'}'
	+'/*                       下拉框的隐藏                          */'
	+'#toolbarHtml li#cy_color dl.yin_1{display:none;}'
	+'#toolbarHtml li#cy_color dl.xian_1{display: block;}'
	+'#toolbarHtml li#cy_playSpeech dl.yin_1{display:none;}'
	+'#toolbarHtml li#cy_playSpeech dl.xian_1{display:block;}'
	+'#toolbarHtml li#cy_arrow dl.yin_1 {display: none;}'
	+'#toolbarHtml li#cy_arrow dl.xian_1 {display: block;}'
	+'#toolbarHtml li#cy_options dl.yin_1{display:none;}'
	+'#toolbarHtml li#cy_options dl.xian_1{display: block;}'
	+'/*                 配色下拉框                     */'
	+'#toolbarHtml li#cy_color dl{'
	+'	width:168px;'
	+'	height:210px;'
	+'	position:absolute; '
	+'	left:0;'
	+'	top:62px;'
	+'	background-color:#fff;'
	+'	z-index: 10000;'
	+'	border:1px solid #666;'
	+'	margin:1px;'
	+'	font-size:14px;'
	+'}'
	+'#toolbarHtml li#cy_color dl dt,li#cy_color dl dd{'
	+'	float:left;margin:1px 0;'
	+'}'
	+'#toolbarHtml li#cy_color dl dt{height:40px;}'
	+'#toolbarHtml li#cy_color dl dd{height:40px;}'
	+'#toolbarHtml li#cy_color dl dt a,li#cy_color dl dd a{'
	+'	display:block;'
	+'	float:left;'
	+'	 cursor: pointer;'
	+'}'
	+'#toolbarHtml li#cy_color dl dt a{'
	+'	height:40px;'
	+'	width:40px;'
	+'	background-color:#474747;'
	+'	border-bottom:1px solid #fff;'
	+'	border-top:1px solid #fff;'
	+'}'
	+'#toolbarHtml li#cy_color dl dt a img{'
	+'	margin-left:5px;'
	+'	margin-top:7px;'
	+'}'
	+'#toolbarHtml li#cy_color dl dd a{'
	+'	line-height:40px;'
	+'	width:128px;'
	+'	height:40px;'
	+'	border-bottom:1px solid #fff;'
	+'	border-top:1px solid #fff;'
	+'}'
	+'/*                语音下拉框                     */'
	+'#toolbarHtml li#cy_playSpeech dl{'
	+'	width:100px;'
	+'	height:42px;'
	+'	position:absolute; '
	+'	left:0;'
	+'	top:62px;'
	+'	z-index: 2;'
	+'	'
	+'	margin:1px;'
	+'	font-size:14px;'
	+'}'
	+'#toolbarHtml li#cy_playSpeech dl dd{'
	+'	border:1px solid #fff;'
	+'	margin-bottom:1px;'
	+'	}'
	+'/*                  底部文字显示框                           */'
	+'#ymd_magnifier{text-align:center;width:100%}'
	+'#ymd_magnifier{zoom:1!important; position:fixed;bottom:0;left:0;background:#484a4a;height:160px;overflow:hidden;}'
	+'#ymd_magnifier ul{list-style:none;margin:0;padding:0;overflow:hidden;height:160px}'
	+'#ymd_magnifier #ymd_magnifier_left{float:left;padding:12px 10px 0 10px;color:#fff;overflow:hidden;height:160px;width:100px;box-sizing:border-box;font-family: "微软雅黑";}'
	+'#ymd_magnifier #ymd_magnifierClose,#ymd_magnifier a{color:white;text-decoration:none;display:block;line-height:30px;font-size:18px;letter-spacing:5px;width:auto;border:1px solid rgba(255,255,255,.3);border-radius:5px;text-align:center;clear:left;margin:0 0 15px 0;cursor:pointer;font-style:normal;background:#184f87}#ymd_magnifier #ymd_magnifierClose{margin:0}'
	+'#ymd_magnifier #ymd_magnifierClose:hover,#ymd_magnifier a:hover{color:#000000;background:#fff;}#ymd_magnifier #ymd_magnifier_right{font-family:"Microsoft YaHei";text-align:center;font-size:32pt!important;letter-spacing:5px;color:#000;overflow-y:auto;overflow-x:hidden;height:150px;background:#ffffff;border-radius:5px;margin:5px 5px 0 0}#ymd_magnifier #ymd_magnifier_right::-webkit-scrollbar{width:10px;height:1px}#ymd_magnifier #ymd_magnifier_right::-webkit-scrollbar-thumb{border-radius:10px;background-color:rgba(0,0,0,.2)!important;background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)!important}#ymd_magnifier #ymd_magnifier_right::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:#ededed!important;border-radius:10px}'
	+'.pinyin{font-size: inherit !important;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:0!important;float:left;line-height:50%;color:#000;font-weight:600!important;margin-left:5px!important}'
	+'.pinyin b{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;flex-flow:column;font-weight:400;font-style:normal;padding:0 5px 0 0;position:relative;z-index:2}'
	+'.pinyin b::before{content:"";position:absolute;width:37px;height:1px;z-index:1;left:0;bottom:17.5px;border-top:dashed 1px #a9a9a9}'
	+'.pinyin b::after{content:"";position:absolute;width:1px;height:37px;z-index:1;left:19px;bottom:0;border-left:dashed 1px #a9a9a9}'
	+'.pinyin i{text-align:center;font-style:normal}'
	+'.pinyin b>i:first-child{letter-spacing:.5px;color:#000!important;font-size:14pt!important;font-weight:400;margin:10px 0 2px 0;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}'
	+'.pinyin b>i:last-child{width:37px;height:37px;line-height:37px;font-size:28pt!important;position:relative;z-index:2;border:solid 1px #a9a9a9!important;color:#000!important;font-family:"楷体",KT,"LiHei Pro Medium";font-weight:600}'
	+'.pinyin b>i:last-child::before{content:"";position:absolute;width:49..5px;height:49..5px;z-index:-1;left:0;bottom:0;transform-origin:left bottom;transform:rotate(45deg);border-left:dashed 1px #a9a9a9!important}'
	+'.pinyin b>i:last-child::after{content:"";position:absolute;width:49.5px;height:49..5px;z-index:-1;right:0;bottom:0;transform-origin:right bottom;transform:rotate(-45deg);border-right:dashed 1px #a9a9a9!important}'
	+'/*                语音下拉框                     */'
	+'#toolbarHtml li#cy_playSpeech dl{'
	+'	width:120px;'
	+'	'
	+'	position:absolute; '
	+'	left:0;'
	+'	top:62px;'
	+'	z-index: 2;'
	+'	'
	+'	margin:1px;'
	+'	font-size:14px;'
	+'	background-color:#fff;'
	+'	 border: 1px solid #666;'
	+'}'
	+'#toolbarHtml li#cy_playSpeech dl dd{'
	+'	border:1px solid #fff;'
	+'	margin-bottom:1px;'
	+'	height:40px;'
	+'	line-height:40px;'
	+'	background-color:#474747;'
	+'	}'
	+'	'
	+'#toolbarHtml li#cy_playSpeech dl dd a{'
	+'	color:#fff;'
	+'    font-weight: bolder ;'
	+'	'
	+'	}'
	+'/*---------------页面加载效果---------------*/'
	+'#toolbarHtml .overlay{position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 998; width: 100%; height: 100%; _padding: 0 20px 0 0; background: #f6f4f5; display: none;}'
	+'#toolbarHtml .showbox{position: fixed; top: 0; left: 50%; z-index: 9999; opacity: 0; filter: alpha(opacity=0); margin-left: -80px;}'
	+'#toolbarHtml *html, *html body{background-image: url(about:blank); background-attachment: fixed;}'
	+'/*-------------------全屏弹窗---------------------*/'
	+'#toolbarHtml #toolbar_prompt {'
	+'	width: 720px;'
	+'	height: 150px;'
	+'	z-index: 9999;'
	+'	position:absolute;'
	+'	top:50%;'
	+'	left:50%;'
	+'	margin-top: -75px;/*注意这里必须是DIV高度的一半*/    '
	+'	margin-left: -360px;/*这里是DIV宽度的一半*/'
	+'	opacity: 1;'
	+'	background-color: #184f87;'
	+'}'
	+'#toolbarHtml #toolbar_prompt span {'
	+'	font-size: 70px;'
	+'	line-height: 140px;'
	+'	color: #FFFFFF;'
	+'}'
	+'/*-------------------外链接弹窗---------------------*/'
	+'#toolbarHtml #zwlj_prompt {'
	+'	width: 720px;'
	+'	height: 240px;'
	+'	z-index: 9999;'
	+'	position:fixed;'
	+'	top:50%;'
	+'	left:50%;'
	+'	margin-top: -75px;/*注意这里必须是DIV高度的一半*/    '
	+'	margin-left: -360px;/*这里是DIV宽度的一半*/'
	+'	opacity: 1;'
	+'	background-color: #184f87;'
	+'}'
	+'#toolbarHtml #zwlj_prompt span {'
	+'	font-size: 28px;'
	+'	line-height: 56px;'
	+'	color: #FFFFFF;'
	+'}'
	+'#toolbarHtml #zwlj_prompt input{'
	+'	font-size: 28px;'
	+'	color:#FFFFFF;'
	+'	background: #184f87;'
	+'	width:50px;'
	+'	height:56px;'
	+'	line-height:56px;'
	+'	border:0;'
	+'}'
	+'/*-------------------无权限页面弹窗---------------------*/'
	+'#toolbarHtml #no_authorization_prompt {'
	+'	width: 800px;'
	+'	height: 210px;'
	+'	z-index: 9999;'
	+'	position:absolute;'
	+'	top:50%;'
	+'	left:50%;'
	+'	margin-top: -75px;/*注意这里必须是DIV高度的一半*/    '
	+'	margin-left: -360px;/*这里是DIV宽度的一半*/'
	+'	opacity: 1;'
	+'	background-color: #184f87;'
	+'}'
	+'#toolbarHtml #no_authorization_prompt span {'
	+'	font-size: 30px;'
	+'	line-height: 70px;'
	+'	color: #FFFFFF;'
	+'}'
	+'#toolbarHtml #no_authorization_prompt input{'
	+'	font-size: 25px;'
	+'	color:#FFFFFF;'
	+'	background: #184f87;'
	+'	width:100px;'
	+'	height:30px;'
	+'	line-height:18px;'
	+'	border:0;'
	+'}'
	+'/*-------------------表单站外提交弹窗---------------------*/'
	+'#toolbarHtml #zwbdtj_prompt{'
	+'	width: 600px;'
	+'	height: 150px;'
	+'	z-index: 9999;'
	+'	position:absolute;'
	+'	top:50%;'
	+'	left:55%;'
	+'	margin-top: -75px;/*注意这里必须是DIV高度的一半*/    '
	+'	margin-left: -360px;/*这里是DIV宽度的一半*/'
	+'	opacity: 1;'
	+'	background-color: #184f87;'
	+'}'
	+'#toolbarHtml #zwbdtj_prompt span {'
	+'	font-size: 30px;'
	+'	line-height: 70px;'
	+'	color: #FFFFFF;'
	+'}'
	+''
	+'#toolbarHtml #botn{'
	+'	width:0px;'
	+'	height:0px;'
	+'	line-height:0px;'
	+'	font-size:0px;'
	+'	overflow:hidden;'
	+'	}'
	+'#toolbarHtml #iframe .ymd_split_span{'
	+'	text-decoration:none;	'
	+'}'
	+'/*           设置下拉框        */             '
	+'#toolbarHtml li#cy_options dl{'
	+'	width:168px;'
	+'	position:absolute; '
	+'	left:0;'
	+'	top:62px;'
	+'	background-color:#fff;'
	+'	z-index: 10000;'
	+'	border:1px solid #666;'
	+'	margin:1px;'
	+'	font-size:14px;'
	+'}'
	+'#toolbarHtml li#cy_options dl dt,li#cy_options dl dd{'
	+'	float:left;margin:1px 0;'
	+'}'
	+'#toolbarHtml li#cy_options dl dt{height:40px;}'
	+'#toolbarHtml li#cy_options dl dd{height:40px;}'
	+'#toolbarHtml li#cy_options dl dt a,li#cy_options dl dd a{'
	+'	display:block;'
	+'	float:left;'
	+'	cursor: pointer;'
	+'}'
	+'#toolbarHtml li#cy_options dl dt a{'
	+'	height:40px;'
	+'	width:40px;'
	+'	background-color:#474747;'
	+'	border-bottom:1px solid #fff;'
	+'	border-top:1px solid #fff;'
	+'}'
	+'#toolbarHtml li#cy_options dl dt a img{'
	+'	margin-left:5px;'
	+'	margin-top:7px;'
	+'}'
	+'#toolbarHtml li#cy_options dl dd a{'
	+'	line-height:40px;'
	+'	width:128px;'
	+'	height:40px;'
	+'	border-bottom:1px solid #fff;'
	+'	border-top:1px solid #fff;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl dt,li#cy_arrow dl dd {'
	+'	float: left;'
	+'	margin: 1px 0;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl dd {'
	+'	height: 40px;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl dt {'
	+'	height: 40px;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl dt a {'
	+'	height: 40px;'
	+'	width: 40px;'
	+'	background-color: #474747;'
	+'	border-bottom: 1px solid #fff;'
	+'	border-top: 1px solid #fff;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl {'
	+'	width: 80px;'
	+'	height: 210px;'
	+'	position: absolute;'
	+'	left: 0;'
	+'	top: 62px;'
	+'	background-color: #fff;'
	+'	z-index: 10000;'
	+'	border: 1px solid #666;'
	+'	margin: 1px;'
	+'	font-size: 14px;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl dt a img {'
	+'	margin-left: 5px;'
	+'	margin-top: 7px;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl dt a,li#cy_arrow dl dd a {'
	+'	display: block;'
	+'	float: left;'
	+'	cursor: pointer;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl dd a img {'
	+'	widows: 40px;'
	+'	height: 40px;'
	+'}'
	+'#toolbarHtml li#cy_arrow dl dd a {'
	+'	line-height: 40px;'
	+'	width: 40px;'
	+'	height: 40px;'
	+'	border-bottom: 1px solid #fff;'
	+'	border-top: 1px solid #fff;'
	+'}'
	+'#slideLateral {'
	+'	width: 100%;'
	+'	height: 5px;'
	+'}'
	+'#slideLongitudinal {'
	+'	width: 5px;'
	+'	height: 100%;'
	+'}'
	+'#slideLateral, #slideLongitudinal {'
	+'	position: absolute;'
	+'	background-color: #ff0000 !important;'
	+'	overflow: hidden;'
	+'	z-index: 9999;'
	+'	left: 0;'
	+'	top: 0;'
	+'}'
	+'/*-------------------------区域导航-----------------------------*/'
	+'#toolbarHtml #toolbarPage2 {'
	+'    background-color: #184f87;'
	+'    display: none;'
	+'}'
	+'#toolbarPage2 p{'
	+'	margin: 0;'
	+'	padding: 0;'
	+'	text-indent: unset;'
	+'}'
	+'#toolbarHtml #toolbarPage2 .toolbarTexts {'
	+'    width: 110px;'
	+'    overflow: hidden;'
	+'    cursor: pointer;'
	+'   /* height: 77px;*/'
	+'    float: left;'
	+'    margin-left: 5px;'
	+'}'
	+'#toolbarHtml #toolbarPage2 .toolbarTexts .textSpan {'
	+'    float: left;'
	+'    margin-left: 6px;'
	+'    cursor: pointer;'
	+'}'
	+'#toolbarHtml #toolbarPage2 .textStr {'
	+'    letter-spacing: 1px;'
	+'/*    display: block;*/'
	+'    cursor: pointer;'
	+'    line-height: 45px;'
	+'    overflow: hidden;'
	+'    height: 35px;'
	+'    font-weight: bold;'
	+'    font-size: 18px !important;'
	+'    clear: both;'
	+'    color: gray;'
	+'}'
	+'#toolbarHtml #toolbarPage2 .textKey {'
	+'    cursor: pointer;'
	+'    display: block;'
	+'    font-size: 18px !important;'
	+'    line-height: 10px;'
	+'    height: 35px;'
	+'    clear: both;'
	+'    color: gray;'
	+'    padding-top: 10px;'
	+'	font-family: Consolas;'
	+'}'
	+'#toolbarHtml .textSpan.textShow{'
	+'    display: block !important;'
	+'}'
	+'#toolbarHtml #toolbarPage2 .textSpan span{'
	+'    margin: 0px;'
	+'    float: none;'
	+'	vertical-align: middle;'
	+'}'
	+'#toolbarHtml #toolbarPage2 .textShow {'
	+'    color: #fff;'
	+'}'
	+'#toolbarHtml #toolbarPage2 .textNum {'
	+'    color: #ff9027;'
	+'    font-size: 15px;'
	+'	font-family: Consolas;'
	+'}'
	+'#toolbarHtml #toolbarPage2content .toolbarTexts{ float:left;}'
	+'#toolbarHtml .displayNone{ display:none;}'
	+'#toolbarHtml #toolbarPage2content {'
	+'    height: 100%;'
	+'    width: 1200px;'
	+'    margin: 0 auto;'
	+'    position: relative;'
	+'}'
	+'#toolbarHtml .navText{'
	+'	padding-top: 9px; '
	+'	width: 120px;'
	+'    overflow: hidden;'
	+'    float: left;'
	+'    margin-left: 5px;'
	+'}'
	+''
	+'#toolbarHtml .textStr2{'
	+'	letter-spacing: 1px;'
	+'	cursor: default;'
	+'    line-height: 45px;'
	+'    overflow: hidden;'
	+'    height: 35px;'
	+'    font-weight: bold;'
	+'    font-size: 22px !important;'
	+'    clear: both;'
	+'    color: gray;'
	+'}'
	+'#toolbarHtml .readDiv{'
	+'	float: left;'
	+'	margin-left: 10px;'
	+'}'
	+'#toolbarHtml .read-span{'
	+'    color: #FFF;'
	+'    display: block;'
	+'    font-size: 18px;'
	+'    font-weight: bold;'
	+'}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul{ padding-top:8px; padding-bottom:8px; padding-left:0px;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li{'
	+'	margin:0px 3px;'
	+'	text-align:center;'
	+'}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li>a{ display:block; /*height:44px; width:100%;*/ text-align:center; border-radius:3px; line-height:0px; font-size:0px;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li>a:active{ background-size:100% 100%;}'
	+'#toolbarHtml li#cy_back, li#cy_refrash, li#cy_color, li#cy_playSpeech, li#cy_displayScreen, li#cy_translation{ margin-left:10px;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li>a{'
	+'	background-size:100% 100%;'
	+'    background-color: rgba(0,0,0,0.2);'
	+'    background-repeat: no-repeat;'
	+'    background-position: center;'
	+'}'
	+'#toolbarHtml #cy_zoomAdd a{ float:left; width:50%;}'
	+'#toolbarHtml #cy_playSpeech #toolbar_speakVolume{float:left;}'
	+'#toolbarHtml #cy_playSpeech #toolbar_playSpeech{ float:left; width:19px;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li span.a_p_2,div.cy_toolbar_bg_table ul li span.a_p_3{ clear:both;}'
	+'#toolbarHtml li#cy_playSpeech dl dd a{width:22px; float:left;}'
	+'#toolbarHtml li#cy_playSpeech dl dd a.toolbar_speakSpeed{ width:74px;}'
	+'#toolbarHtml div#canyou_toolbar_div div.cy_toolbar_bg_table ul li:hover span{background:#888888;}'
	+'#toolbarHtml div.cy_toolbar_bg_table ul li span.exap,div.cy_toolbar_bg_table ul li span.a_p_1,div.cy_toolbar_bg_table ul li span.a_p_2,div.cy_toolbar_bg_table ul li span.a_p_3{ font-size:18px; width:100%; padding-top:5px; /*padding-bottom:5px;*/}'
	+'#toolbarHtml div#canyou_toolbar_div div.cy_toolbar_bg_table ul>li>a:hover{background:#982426; border-radius:3px; background-size:100% 100%;}'
	+'#toolbarHtml div#canyou_toolbar_div div.cy_toolbar_bg_table ul>li>a:active{background:#982426; border-radius:3px; background-size:100% 100%;}'
	+'#toolbarHtml #otherBtns a{ display:block; width:100%; line-height:0px; background-size:100% 100%;background-color: rgba(0,0,0,0.2);background-repeat: no-repeat;background-position: center;}'
	+'#toolbarHtml #otherBtns a:hover{background:#982426; background-size:100% 100%;}'
	+'#toolbarHtml #otherBtns a:active{ background-size:100% 100%;}'
	+'#toolbarHtml #otherBtns span{ padding:5px 0px; display:block;}'
	+'#toolbarHtml #otherBtns>div:hover span{ background:#888888;}'
	+'#toolbarHtml #transform_dp{ float:left;}'
	+'#toolbarHtml #otherBtns {float:right;}'
	+'#toolbarHtml #toolbarPage2content{ overflow:hidden; padding-top:8px;}'
	+'/* -----------------更多 -----------------*/'
	+'#toolbarHtml #toolbarMore{'
	+'	display:none;'
	+'	position: fixed;'
	+'    top: 0;'
	+'    bottom: 0;'
	+'    width: 80px;'
	+'    background-color: #184f87;'
	+'    z-index: 99999;'
	+'}'
	+'#toolbarHtml #toolbarMore .toolbarMark{'
	+'	background-image: url(../img/left_img1.png);'
	+'    background-repeat: no-repeat;'
	+'    background-position: center;'
	+'    margin-left: 10px;'
	+'    margin-top: 10px;'
	+'    width: 70px;'
	+'    height: 65px;'
	+'    display: block'
	+'}'
	+'#toolbarHtml #toolbarMore .toolbarLeft{'
	+'	width: 100%;'
	+'    padding-top: 5px;'
	+'    padding-bottom: 5px;'
	+'    float: left;'
	+'    color: #FFF;'
	+'    display: block;'
	+'    font-size: 16px;'
	+'    margin-top: -20px;'
	+'}'
	+'#toolbarHtml #toolbarMore li{'
	+'	margin-top: 50px;'
	+'}'
	+'#toolbarHtml #toolbarMore .leftLi1{'
	+'	margin-top: 30px;'
	+'}'
	+'#toolbarHtml #toolbarMore .leftClose{'
	+'	bottom: 0;'
	+'    position: fixed;'
	+'    margin-left: -68px;'
	+'    width: 60px;'
	+'}'
	+'#toolbarHtml #toolbarMore .leftLi3{'
	+'	padding: 5px;'
	+'}'
	+'#toolbarHtml #zwlj_prompt > br:nth-child(1){line-height:30px;}';
	EsdToolbarInit.toolbarCssStr_m = ''
	+'body {margin-bottom: 85px;}'
	+'#toolbarHtml * {margin:0; padding:0;}'
	+'#toolbarHtml a, #toolbarHtml p, #toolbarHtml ul, #toolbarHtml li{font-family: "微软雅黑";color: #000;}'
	+'#toolbarHtml a {text-decoration:none;}'
	+'#toolbarHtml #toolbar {'
	+'    position: fixed;'
	+'    bottom: 0;'
	+'    left: 0;'
	+'    margin: 0;'
	+'    padding: 0 5px;'
	+'    right: 0;'
	+'    box-shadow: 0 -5px 14px 0 rgb(0 18 36 / 6%);'
	+'    background: #ecf6fc;'
	+'}'
	+'#toolbarHtml li {list-style-type: none!important;}'
	+'#toolbarHtml #toolbar {z-index: 99999;}'
	+'#toolbarHtml #toolbar ul{display: flex; height: 85px;}'
	+'#toolbarHtml #toolbar .toolbarBtnActive {background: #0073ff;}'
	+'#toolbarHtml #toolbar .toolbarBtnActive p{color: #fff!important;}'
	+'#toolbarHtml #toolbar .toolbarBtnActive svg{fill: #fff!important;}'
	+'#toolbarHtml #toolbar li{width: 25%;float: left;text-align: center;margin: 3px;padding-top: 5px;font-size: 21px;}'
	+'#toolbarHtml #toolbar li p{font-size: 21px!important;font-family: "微软雅黑";color: #000;margin-top:5px;}'
	+'#toolbarHtml #toolbar li svg{width:30px!important;height:30px!important;fill:#0073ff!important}'
	+'#toolbarHtml #toolbarConfig{border-top-left-radius: 8px;border-top-right-radius: 8px;display: block;background: #ecf6fc;width: 100%;position: fixed;bottom: 0;right: 0;z-index: 99998;-webkit-transform: translateY(100%);-ms-transform: translateY(100%);transform: translateY(100%);-webkit-transition: -webkit-transform .3s;transition: transform .3s;}'
	+'#toolbarHtml #toolbarConfig.toolbarConfig_show{transform: translateY(0);bottom: 85px;}'
	+'#toolbarConfig>div{height:400px;padding-left: 5px !important;padding-right: 5px !important;}' 
	+'#toolbarConfig #toolbarConfig-title{display: flex;height: 60px;padding-left: 5px;padding-right: 5px;justify-content: space-between;align-items: center;line-height: 60px;background: #ecf6fc;border-top-left-radius: 8px;border-top-right-radius: 8px;box-shadow:2px 1px 9px 0 rgb(27 114 178 / 18%)}'
	+'#toolbarConfig #toolbarConfig-title #titleText{color: #0073ff; position: relative; padding-left: 10px; font-size: 18.00px !important;}'
	+'#toolbarConfig #toolbarConfig-title #titleText:before {content:"";width: 5px;height: 21px;border-radius: 8px;background: #0073ff;position: absolute;left: 0;top: 50%;transform: translateY(-50%);}'
	+'#toolbarConfig #toolbarConfig-title #titleClose {padding-top: 4px!important;width: 32px;height: 32px;line-height: 28px!important;display: block;position: relative;font-size: 21px!important;border-radius: 18px;background-color: red!important;color: #fff!important;right: 5px;cursor: pointer;left: 2px;}'
	+'#toolbarConfig #toolbarConfig_nav:after {clear: both;content: ".";display: block;font-size: 0;height: 0;line-height: 0;visibility: hidden;}'
	+'#toolbarConfig #toolbarConfig_nav li {width: 25%;float: left;font-size: 24px;font-weight: 400;padding: 0;color: #323232;text-align: center; line-height: 2 !important;}'
	+'#toolbarConfig #toolbarConfig_nav .tabAcitve{background: #0073ff;border-radius: 10px;color: #fff700;font-weight: 700;}'
	+'#toolbarConfig #toolbarConfig_tabs {margin-top:5px;}'
	+'#toolbarConfig #toolbarConfig_tabs .config_tab{display:none;}'
	+'#toolbarConfig #toolbarConfig_tabs .toolbarTabShow{display:block;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab1 li{border-radius: 10px;border: 1px solid #fff;display: block;color: #fff;background: #fff;text-align: center;font-size: 24px;padding: 0;position: relative;margin-bottom: 5px; line-height:2 !important}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab1 li i {background: url(https://www.mangren.com/select_blue.png) no-repeat;width: 36px;height: 36px;position: absolute;right: 4px;top: 4px;display: none;background-size: 100%;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab1 li.toolbar_cur i {display: block;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab1 li:nth-child(1) {border: 1px solid #0075ff;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab4 li i, #toolbarConfig #toolbarConfig_tabs #toolbarTab2 li label i, #toolbarConfig #toolbarConfig_tabs #toolbarTab3 li i {background: url(https://www.mangren.com/select_white.png) no-repeat;width: 32px;height: 32px;position: absolute;right: 5px;top: 10px;display: none;background-size: 100%;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab4 li.toolbar_cur i, #toolbarConfig #toolbarConfig_tabs #toolbarTab2 li.toolbar_cur label i, #toolbarConfig #toolbarConfig_tabs #toolbarTab3 li.toolbar_cur i {display:block;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li{margin-bottom: 10px;overflow: hidden;display: flex;justify-content: space-between;align-items: center;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li label {float: right;font-size: 18px;font-weight: 400;color: #001726;background: #fff;width: 180px;border-radius: 10px;border: 1px solid #0073ff;text-align: center;position: relative;line-height: 50px;height: 50px;margin: 3px;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li.toolbar_cur label {background: #0073ff;border: 1px solid transparent;color: #fff !important;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab3 li.toolbar_cur, #toolbarConfig #toolbarConfig_tabs #toolbarTab4 li.toolbar_cur {background: #0073ff;border: 1px solid transparent;color: #fff;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li:nth-child(1) span,#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li:nth-child(1) label{font-size: 24px!important;font-weight: 600;letter-spacing: 1px;color: #000;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li:nth-child(2) span,#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li:nth-child(2) label{font-size: 21px!important;font-weight: 600;letter-spacing: 1px;color: #000;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li:nth-child(3) span,#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li:nth-child(3) label{font-size: 18px!important;font-weight: 600;letter-spacing: 1px;color: #000;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li:nth-child(4) span,#toolbarConfig #toolbarConfig_tabs #toolbarTab2 li:nth-child(4) label{font-size: 16px!important;font-weight: 600;letter-spacing: 1px;color: #000;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab3 li {border-radius: 10px;border: 1px solid #0073ff;display: block;color: #001726;background: #fff;text-align: center;font-size: 21px;padding: 0;position: relative;margin-bottom: 5px;height: 50px!important;line-height: 50px!important;}'
	+'#toolbarConfig #toolbarConfig_tabs #toolbarTab4 li {border-radius: 10px;border: 1px solid #0073ff;display: inline-block;width: 43%;color: #001726;background: #fff;text-align: center;position: relative;margin-bottom: 5px;height: 50px!important;line-height: 50px!important;margin: 2%!important;box-sizing: border-box;font-size: 21px;}'
	+''
	+''
	+''
	+''
	+'';
	
	
	
	
	EsdToolbarInit.insertDoms = function(){
		var tempDiv = document.createElement("div");
		tempDiv.id = "EsdToolbarTempDiv";
		document.body.appendChild(tempDiv);
		if(EsdToolbarInit.checkUsePC()){
			tempDiv.innerHTML = EsdToolbarInit.toolbarHtmlStr;
		}else{
			tempDiv.innerHTML = EsdToolbarInit.toolbarHtmlStr_m;
		}
		document.body.appendChild(document.getElementById("toolbarHtml"));
		document.body.removeChild(tempDiv);
		
		var tempStyle = document.createElement("style");
		if(EsdToolbarInit.checkUsePC()){
			tempStyle.textContent = EsdToolbarInit.toolbarCssStr;
		}else{
 			tempStyle.textContent += EsdToolbarInit.toolbarCssStr_m;
		}
		document.head.appendChild(tempStyle);
		
	};
	
	EsdToolbarInit.checkUsePC = function (){
		var userAgentInfo = navigator.userAgent.toLowerCase();
		var agents = new Array("android", "iphone", "symbianOS", "windows phone", "ipad", "ipod");
		var flag = true;
		for (var i = 0; i < agents.length; i++) {
			if (userAgentInfo.indexOf(agents[i]) > 0) {
				flag = false; 
				break; 
			}
		}
		return flag;
	};
	
	EsdToolbarInit.openFunc_pc = function(readScreenStatus){
		if(document.getElementById("toolbarSwitch")==null){
			return false;
		}
		document.getElementById("toolbarSwitch").onclick=function(){
			if(typeof(jQuery)=='function'){
				if(readScreenStatus=="true"||readScreenStatus==true){
					jQuery("#toolbar").hide();
					jQuery("#toolbarPage2").show();
					jQuery("#toolbarHtml").show("fast",function(){
						jQuery("body").css("padding-top", "98px");
					});
				}else{
					jQuery("#toolbar").show();
					jQuery("#toolbarPage2").hide();
					jQuery("#toolbarHtml").show("fast",function(){
						jQuery("body").css("padding-top", "98px");
					});
				}
			}else{
				if(readScreenStatus=="true"||readScreenStatus==true){
					document.getElementById("toolbar").style.display = "none";
					document.getElementById("toolbarPage2").style.display = "block";
					document.body.style.paddingTop = "98px";
					document.getElementById("toolbarHtml").style.display = "block";
				}else{
					document.getElementById("toolbar").style.display = "block";
					document.getElementById("toolbarPage2").style.display = "none";
					document.body.style.paddingTop = "98px";
					document.getElementById("toolbarHtml").style.display = "block";
				}
			}
			EsdToolbarInit.loadScript(null);
			EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
			document.getElementById("toolbarSwitch").onclick=null;
			document.getElementById("toolbarSwitch").onkeydown=null
		}
		document.getElementById("toolbarSwitch").onkeydown=function(e){
			if (e.keyCode == 13) {
				EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
				EsdToolbarInit.setCookie("readScreen", true, 10);
				EsdToolbarInit.setCookie("speakVolume", 0, 10);
				if(typeof(jQuery)=='function'){
					jQuery("#toolbar").hide();
					jQuery("#toolbarPage2").show();
					jQuery("#toolbarHtml").show("fast",function(){
						jQuery("body").css("padding-top", "98px");
					})
				}else{
					document.getElementById("toolbar").style.display = "none";
					document.getElementById("toolbarPage2").style.display = "block";
					document.body.style.paddingTop = "98px";
					document.getElementById("toolbarHtml").style.display = "block";
				}
				EsdToolbarInit.loadScript(function(){
					//EsdToolbar.readScreen.init();
					jq_t("#toolbar").hide();
					jq_t("#toolbarHtml").show("fast",function(){
						jq_t("#toolbarPage2").show();
						if(EsdToolbar.statusmagnifier == "on"){
							EsdToolbar.magnifier.toolbarMagnifier();
						}
					});
					jq_t("body").css("padding-top", "98px");
					EsdToolbar.rebuild();
					EsdToolbar.isOpen = true;
				});
				document.getElementById("toolbarSwitch").onclick=null;
				document.getElementById("toolbarSwitch").onkeydown=null
				return false;
			}
		}
	};
	EsdToolbarInit.openFunc_mobile = function(){
		if(document.getElementById("toolbarSwitch")!=null){
			document.getElementById("toolbarSwitch").onclick=function(){
				//console.log(123);
				EsdToolbarInit.loadScript(function(){
					//TODO 展示新版移动端样式
					jq_t("#toolbar").show();
					jq_t("#toolbarPage2").hide();
					jq_t("#toolbarHtml").show("fast");
				});
				EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
				EsdToolbarInit.setCookie("speakVolume", 0, 10);
				document.getElementById("toolbarSwitch").onclick=null;
				document.getElementById("toolbarSwitch").onkeydown=null
				// document.getElementsByClassName("toolbarSwitch_m")[0].onclick=null;
			}
		}
	};
	
	EsdToolbarInit.init();
}

