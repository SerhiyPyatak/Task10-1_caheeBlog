jQuery(document).ready(function() {
	jQuery('.menu-bar__toggle').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.menu-bar__menu_hero').toggleClass('active');
        jQuery('.menu-bar__menuitem_hero').toggleClass('active');

        if (jQuery(this).hasClass('active')) {
            $('.toggle__icon').removeClass('fa-bars');
            $('.toggle__icon').addClass('fa-times');
        }
        else {
            $('.toggle__icon').removeClass('fa-times');
            $('.toggle__icon').addClass('fa-bars');
        }

		e.preventDefault();
	});
});