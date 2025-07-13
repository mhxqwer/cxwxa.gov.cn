function addInfoHits(infoId,viewId){
	var random = Math.round(Math.random() * 100000000);
    $.ajax({
        url:"/web/api/getTemplateClickCount?id="+infoId,
		headers: {
			'tjmabc': random,
			"mtjmabc": md5(random)
		},
        type:"get",
        dataType:"json",
        success:function(data){
            if(data.status==200){
                $('#'+viewId).text(data.data);
            }else{
                $('#'+viewId).text(0);
            }
        },
        error:function(data){
        }
    });
}
function insertAccessInfo(id,title,catId,siteId,url){
    var data = {infoId:id,infoTitle:title,catId:catId,siteId:siteId,accessUrl:url};
	var random = Math.round(Math.random() * 100000000);
    $.ajax({
        url:"/web/api/insertAccessInfo",
		headers: {
			'tjmabc': random,
			"mtjmabc": md5(random)
		},
        data: data,
        type:"post",
        dataType:"json",
        success:function(data){
        },
        error:function(data){
        }
    });
}