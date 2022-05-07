$(function () {

	var
		winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();

	if (winW > 800) {
		var headerH = 0;
	}
	else {
		var headerH = 70;
	}

	$(nav).on('click', function () {
		var $el = $(this),
			id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - headerH
		}, 500);
		if (winW < 890) {
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
		return false;
	});

	$('.panel').hide();
	$('#menuWrap').toggle(function () {
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
		function () {
			$(this).next().slideToggle();
			$('#menuBtn').removeClass('close');
		});
});
$(function () {
	$('.thumbnail').click(function () {
		if ($(this).children('#d2').is(':hidden')) {
			$(this).children('#d2').show();
			$(this).children('#d1').hide();
		} else {
			$(this).children('#d2').hide();
			$(this).children('#d1').show();
		}
	});
});