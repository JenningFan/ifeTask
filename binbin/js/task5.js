var input = document.getElementById('input');
var leftIn = document.getElementById('leftIn');
var leftOut = document.getElementById('leftOut');
var rightIn = document.getElementById('rightIn');
var rightOut = document.getElementById('rightOut');
var showList = document.getElementById('showList');


//右侧进
rightIn.onclick = function(){
	if(isNum() !== 0 && between() != 0 && full() != 0){
	   var div = addElement();
	   showList.appendChild(div);
	}
}
//左侧进
leftIn.onclick = function(){
	if(isNum() !== 0 && between() != 0 && full() != 0){
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
	setHight(div);
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

//限制输入的数字在10-100之间
function between(){
	if(input.value < 10 || input.value > 100){
		alert('请输入10-100之间的数字');
		input.value = '';
		return 0;
	}
}

//限制队列内元素不能超过60
function full(){
	if(showList.childNodes.length > 60){
		alert('队列元素超过60个，添加元素失败');
		return 0;
	}
}

//建立div高度和数字大小之间的映射
function setHight(div){
	div.style.height = input.value * 3 + 'px';
}






		
	

