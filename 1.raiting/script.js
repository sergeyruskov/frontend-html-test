(function () {
	$(document).ready(function() {
		//Все звезды
		var stars = $('.raiting').children();
		//Каждой звезде по классу, затем убираем классы у тех которым не надо.
		orangeStars = function(el, className) {
			stars.addClass(className);
			el.nextAll().removeClass(className);
		};

		stars.on({
			click: function() {
				orangeStars($(this), 'orange');
			}, mouseenter: function() {
				//Временные классы
				orangeStars($(this), "orange-temporary");
			}, mouseleave: function() {
				//Удаляем временные классы
				stars.removeClass('orange-temporary');
			}
		});
	});
})();