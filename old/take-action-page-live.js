<div class="scroll-indicator">
<span class="indicator-bar"></span>
</div>

<script>
var win = jQuery(window),
startBreakpoint = jQuery('.sticky-swap').offset().top,
swapSectionThree = jQuery('.swap-section-three').offset().top,
shareBreakpoint = jQuery('.share-section-one').offset().top,
shareSectionTwo = jQuery('.share-section-two').offset().top,
speakupBreakpoint = jQuery('.speakup-section-one').offset().top,
endBreakpoint = jQuery('.speakup-section-three').offset().top;

if(window.location.hash !== '') {
	// do nothing
}else {
	jQuery(window).scroll(function() {
		var winTop = win.scrollTop();
		
		if (winTop >= startBreakpoint && endBreakpoint >= winTop) {
			var o = winTop - startBreakpoint,
					a = endBreakpoint - startBreakpoint,
					n = Math.floor(o / a * 101) + '%';
	
			jQuery('.indicator-bar').css('width', n);
		} else startBreakpoint > winTop ? jQuery('.progress-bar').css('width', 0) : winTop > endBreakpoint && jQuery('.progress-bar').css('width', a);
	
		// Progress bar container behavior
		if(winTop >= startBreakpoint) {
			jQuery('.scroll-indicator').addClass('active');
		}else if(winTop <= startBreakpoint) {
			jQuery('.scroll-indicator').removeClass('active');
		}
		// hide progress bar container when scrolled passed desired element
		if(winTop >= endBreakpoint) {
			jQuery('.scroll-indicator').removeClass('active');
		}
		
		// sticky swap title
		if(winTop >= swapSectionThree) {
			jQuery('#sticky-swap-title').addClass('hidden');
		}else if(winTop <= swapSectionThree) {
			jQuery('#sticky-swap-title').removeClass('hidden');
		}
		
		// sticky share title
		if(winTop >= shareSectionTwo) {
			jQuery('#sticky-share-title').addClass('hidden');
		}else if(winTop <= shareSectionTwo) {
			jQuery('#sticky-share-title').removeClass('hidden');
		}
		
		// sticky speakup title
		if(winTop >= endBreakpoint) {
			jQuery('#sticky-speakup-title').addClass('hidden');
		}else if(winTop <= endBreakpoint) {
			jQuery('#sticky-speakup-title').removeClass('hidden');
		}
	});
}

</script>


<div class="scroll-indicator">
<span class="indicator-bar"></span>
</div>

<script>
var win = jQuery(window),
startBreakpoint = jQuery('.sticky-swap').offset().top,
swapSectionThree = jQuery('.swap-section-three').offset().top,
shareBreakpoint = jQuery('.share-section-one').offset().top,
shareSectionTwo = jQuery('.share-section-two').offset().top,
speakupBreakpoint = jQuery('.speakup-section-one').offset().top,
endBreakpoint = jQuery('.speakup-section-three').offset().top;

if(window.location.hash !== '') {
	// do nothing
}else {
	jQuery(window).scroll(function() {
		var winTop = win.scrollTop();
		
		if (winTop >= startBreakpoint && endBreakpoint >= winTop) {
			var o = winTop - startBreakpoint,
					a = endBreakpoint - startBreakpoint,
					n = Math.floor(o / a * 101) + '%';
	
			jQuery('.indicator-bar').css('width', n);
		} else startBreakpoint > winTop ? jQuery('.progress-bar').css('width', 0) : winTop > endBreakpoint && jQuery('.progress-bar').css('width', a);
	
		// Progress bar container behavior
		if(winTop >= startBreakpoint) {
			jQuery('.scroll-indicator').addClass('active');
		}else if(winTop <= startBreakpoint) {
			jQuery('.scroll-indicator').removeClass('active');
		}
		// hide progress bar container when scrolled passed desired element
		if(winTop >= endBreakpoint) {
			jQuery('.scroll-indicator').removeClass('active');
		}
		
		// sticky swap title
		if(winTop >= swapSectionThree) {
			jQuery('#sticky-swap-title').addClass('hidden');
		}else if(winTop <= swapSectionThree) {
			jQuery('#sticky-swap-title').removeClass('hidden');
		}
		
		// sticky share title
		if(winTop >= shareSectionTwo) {
			jQuery('#sticky-share-title').addClass('hidden');
		}else if(winTop <= shareSectionTwo) {
			jQuery('#sticky-share-title').removeClass('hidden');
		}
		
		// sticky speakup title
		if(winTop >= endBreakpoint) {
			jQuery('#sticky-speakup-title').addClass('hidden');
		}else if(winTop <= endBreakpoint) {
			jQuery('#sticky-speakup-title').removeClass('hidden');
		}
	});
}

</script>