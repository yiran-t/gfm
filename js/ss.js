//搜索框
var data= [ 
    {
       "0": {"suggestWordType": "SEARCH_HISTORY", "url": "http://list.jiuxian.com/search.htm?key=aaa", "word": "aaa"},
       "1": {"count": "208", "suggestWordType": "SEARCH_KEYWORD", "url": "http://list.jiuxian.com/search.htm?key=aoc"},
       "2": {"count": "208", "suggestWordType": "SEARCH_KEYWORD"," url": "http://list.jiuxian.com/search.htm?key=安利"},
       "3": {"count": "208", "suggestWordType": "SEARCH_KEYWORD", "url": "http://list.jiuxian.com/search.htm?key=aoc红酒"},
       "4": {"count": "208", "suggestWordType": "SEARCH_KEYWORD", "url": "http://list.jiuxian.com/search.htm?key=aoc牌"},
       "5": {"count": "208", "suggestWordType": "SEARCH_KEYWORD", "url": "http://list.jiuxian.com/search.htm?key=澳大利亚"}								
   }
]

var oTxt=document.getElementById("txt");
   var oList=document.getElementById("list");
   var aDiv=document.createElement("div");
   
   oTxt.oninput=function(){
       oList.style.display="block";
//				var oScript=document.createElement("script");
       oScript.src="https://suggest.taobao.com/sug?code=utf-8&q="+oTxt.value+"&callback=bb&k=1&area=c2c";
       document.body.appendChild(oScript);
   }
   function bb(data){				
//				console.log(data.result);
//				 one=data.result;
//				 two=one.split(",");
       part1=data.result;//大列表值
       magic=data.magic;//划过时列表	值	
       var dataMagic=magic.data;
       var str="";
       for(var i=0;i<part1.length;i++){
           str+=`<li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&q=${part1[i][0]}">${part1[i][0]}</a></li>`
       }
       oList.innerHTML=str;