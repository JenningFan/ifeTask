var input = document.getElementById('input');
var leftIn = document.getElementById('leftIn');
var leftOut = document.getElementById('leftOut');
var rightIn = document.getElementById('rightIn');
var rightOut = document.getElementById('rightOut');
var showList = document.getElementById('showList');


//右侧进
rightIn.onclick = function(){
	if(isNum() !== 0){
	   var div = addElement();
	   showList.appendChild(div);
	}
}
//左侧进
leftIn.onclick = function(){
	if(isNum() !== 0){
		var div = addElement();
		showList.insertBefore(div,showList.childNodes[0]);
	}
}
//右侧出
rightOut.onclick = function(){
	alert("删除的数字为" + showList.childNodes[showList.childNodes.length - 1].innerText);
	showList.removeChild(showList.childNodes[showList.childNodes.length - 1]);
}
//左侧出
leftOut.onclick = function(){
	alert("删除的数字为" + showList.childNodes[0].innerText);
	showList.removeChild(showList.childNodes[0]);
}



//根据输入值创建新的div，并添加点击移除事件
function addElement() {
	var div = document.createElement('div');
	div.innerHTML = input.value;
	div.setAttribute('class','listItem');
	div.onclick = function(){
		alert("删除的数字为" + this.innerText);
		showList.removeChild(this);
	}
	return div;	
}

//验证输入的是否为合法的数字,只支持输入数字(包括小数、整数)
function isNum(){
	if(/^\d+(\.\d+)?$/.test(input.value) == false){
		alert('请输入合法的数字');
		input.value = '';
		return 0;
	}
}







		
	

