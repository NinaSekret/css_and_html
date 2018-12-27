menu.onclick = function menuHandler() {
	const headerItem = document.getElementsByClassName('header_list_item');
	const isResponsive = headerItem[0].classList.contains('responsive');
	
	for (var i = 0; i < headerItem.length; i++) {
		headerItem[i].classList.add('responsive');
	}

	if (isResponsive) {
			for (var i = 0; i < headerItem.length; i++) {
				 headerItem[i].classList.remove('responsive');
	}}

}