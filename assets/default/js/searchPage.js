//点击切换搜索引擎->展开列表
$$(".search-change-btn").addEvent('click',function(){
	$$(".search-dropdown").removeClass("off");
});
//点击切换搜索引擎->切换图标和显示
$$(".search-dropdown ul li").each(function(e){
	e.addEvent('click',function(){
		$("search-logo").set("data-engine",this.get("engine"));
		$$(".search-change-btn").set('html',this.getChildren("span[class=engine-title]").get("html"));
		$$(".search-dropdown").addClass("off");
	});
});
//关闭搜索引擎列表->这个鼠标点击一次会触发多次，暂未找到更好的方式，之后可以优化下
/* $$(":not(.search-dropdown)").addEvent('click',function(){
	console.log('yes');
}); */
