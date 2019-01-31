// const menuItems = document.getElementsByClassName('menu');

// for (var i = 0; i < menuItems.length; i++) {
// 	menuBtn = menuItems[i].getElementsByClassName('menu_btn')[0];

// 	menuBtn.onclick = function() {
// 		menuList = this.parentNode.getElementsByClassName('menu_list')[0];

// 		const menuIsOpend = menuList.classList.contains('_is-opened');

// 		if (menuIsOpend) {
// 			menuList.classList.remove('_is-opened');
// 		} else {
// 			menuList.classList.add('_is-opened');
// 		}
// 	};
// }


document.addEventListener("click", clickHandler);

function clickHandler(event) {
	let target = event.target;

	// if (target.parentNode && target.parentNode.className == 'menu_btn') {
	// 	menuBtnHandler(target.parentNode);
	// }

	while (target.className != 'menu') {
		if (target.className == 'menu_btn') {
			menuBtnHandler(target);

			return;
		}
		target = target.parentNode;
	}
}

function menuBtnHandler(button) {
	menuList = button.parentNode.getElementsByClassName('menu_list')[0];

	const menuIsOpend = menuList.classList.contains('_is-opened');

	if (menuIsOpend) {
		menuList.classList.remove('_is-opened');
	} else {
		menuList.classList.add('_is-opened');
	}
};

