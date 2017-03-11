var input = document.getElementById('input');
var leftIn = document.getElementById('leftIn');
var leftOut = document.getElementById('leftOut');
var rightIn = document.getElementById('rightIn');
var rightOut = document.getElementById('rightOut');
var showList = document.getElementById('showList');
var sort = document.getElementById('sort');
var randomNum = document.getElementById('randomNum');


//右侧进
rightIn.onclick = function(){
	if(isNum() !== 0 && between() !== 0 && full() !== 0){
	   var div = addElement(input.value);
	   showList.appendChild(div);
	}
};
//左侧进
leftIn.onclick = function(){
	if(isNum() !== 0 && between() !== 0 && full() !== 0){
		var div = addElement(input.value);
		showList.insertBefore(div,showList.childNodes[0]);
	}
};
//右侧出
rightOut.onclick = function(){
	alert("删除的数字为" + showList.childNodes[showList.childNodes.length - 1].innerText);
	showList.removeChild(showList.childNodes[showList.childNodes.length - 1]);
};
//左侧出
leftOut.onclick = function(){
	alert("删除的数字为" + showList.childNodes[0].innerText);
	showList.removeChild(showList.childNodes[0]);
};
//生成随机数
randomNum.onclick = function(){
	for(var i = 0; i < 15; i++){
		var val = Math.floor(Math.random() * 90 + 10);
		var div = addElement(val);
		showList.appendChild(div);
	}
};
//冒泡排序
sort.onclick = function(){
	for(var i = 0; i < showList.childNodes.length - 1; i++){
		for(var j = 0; j < showList.childNodes.length - 1 - i ; j++){
			// setTimeout(swap, 500, showList.childNodes[j], showList.childNodes[j + 1])
			swap(showList.childNodes[j], showList.childNodes[j + 1]);
			
		}
	}


};



//根据输入值创建新的div，并添加点击移除事件
function addElement(val) {
	var div = document.createElement('div');
	div.innerHTML = val;
	div.setAttribute('class','listItem');
	setHight(div,val);
	div.onclick = function(){
		alert("删除的数字为" + this.innerText);
		showList.removeChild(this);
	};
	return div;	
}

//验证输入的是否为合法的数字,只支持输入数字(包括小数、整数)
function isNum(){
	if(/^\d+(\.\d+)?$/.test(input.value) === false){
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
function setHight(div,val){
	div.style.height = val * 3 + 'px';
	div.style.marginTop = 300 - val * 3 + 'px';
}

//交换位置
function swap(element1,element2){
	if(parseInt(element1.style.height) > parseInt(element2.style.height)){
		showList.insertBefore(element2,element1);
	}	
}









		
	

