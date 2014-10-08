
$(document).ready(function () {
	
	/***************************************
	** the look layout carousel slider
	***************************************/
	
	$('.layoutslider').bxSlider();
	
	
	/***************************************
	** the look specifications
	***************************************/
	
	$('ul.specifications li').click(function(){
		var current_specs = $(this).attr('rel');
		$('ul.specifications li').removeClass('selected');
		$(this).addClass('selected');
		$('.specs-content').hide();
		$(current_specs).show();
	});
	
	
	/***************************************
	** the area map links
	***************************************/
	
	$('.map-links div div img').click(function(){
		if (!($(this).hasClass('active'))) {
			var current_map = $(this).attr('rel');
			$('.map-links img').removeClass('active');
			$(this).addClass('active');
			$('.map-container img').attr('src','images/'+current_map+'.png');
		}
	});
	
	
	/***************************************
	** Lightbox
	***************************************/
	
	$('.bt-leasingnow, .home-leasingnow').fancybox({
		padding: 0,
		margin: 0,
		width: 470,
		height: 470
	});
	
	$('.footer-links').fancybox({
		padding: 0,
		margin: 0,
		width: 700,
		height: 700
	});
	
	$('.bt-leasingnow, .home-leasingnow').click(function(){
		setTimeout(function(){ $('.fancybox-wrap, .fancybox-skin').addClass('leasingnow-wrapper'); }, 100);
	});
	
	$('.footer-links').click(function(){
		setTimeout(function(){ $('.fancybox-wrap, .fancybox-skin').addClass('footerlinks-wrapper'); }, 100);
	});
});