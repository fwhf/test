import './index.css';
import Icon from './icon.png';
import btnFunc from './btn.js';

function component() {
  var element = document.createElement('div');
  element.innerHTML = 'Hello webpack';
  
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  
  var btnDom = document.createElement('button');
  btnDom.innerHTML = '点我呀'
  btnDom.onclick = btnFunc;
  element.appendChild(btnDom);

  return element;
}

let element = component(); // 当 btn.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept('./btn.js', function() {
		document.body.innerHTML = '';
		element = component();
		document.body.appendChild(element);
	})
}