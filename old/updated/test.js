if(window.location.hash = 'swap') {
	
}

if(window.location.hash = 'share') {
	document.querySelector('.sticky-share').scrollIntoView(true);
}

<script type="text/javascript">
window.addEventListener('load', function() {
	if(window.location.hash = 'share') {
		document.querySelector('.sticky-share').scrollTo();
	}
});

if(window.location.hash = 'share') {
	jQuery('html, body').animate({
		scrollTop: $(".sticky-share").offset().top
	});
}
</script>



jQuery(document).ready(function() {
	if(window.location.hash = 'share') {
jQuery('html, body').animate({
	scrollTop: jQuery('.sticky-share').offset().top
});
}
});


<script>  
if(window.location.hash === '#share') {
	document.querySelector('.sticky-share').scrollIntoView(true);
}
</script>

<script>
	const checkHash = () => {
		if(window.location.hash === '#swap') {
			document.querySelector('.sticky-swap').scrollIntoView(true);
		}
		
		if(window.location.hash === '#share') {
			document.querySelector('.sticky-share').scrollIntoView(true);
		}
		
		if(window.location.hash === '#speakup') {
			document.querySelector('.sticky-speakup').scrollIntoView(true);
		}
	}
	
	document.addEventListener('DOMContentLoaded', () => {
		checkHash();
		// Add letter
	}, false);
	
	window.addEventListener('hashchange', () => {
		checkHash();
	});
</script>

window.addEventListener("load", () => {
	if(window.location.hash === '#share') {
		document.querySelector('.sticky-share').scrollIntoView(true);
	}
});





<script>
	const checkUrl = () => {
		if(window.location.href === 'https://staging2.sciencemoms.com/take-action/#swap') {
			document.querySelector('.sticky-swap').scrollIntoView(true);
		}
		
		if(window.location.href === 'https://staging2.sciencemoms.com/take-action/#share') {
			document.querySelector('.sticky-share').scrollIntoView(true);
		}
		
		if(window.location.href === 'https://staging2.sciencemoms.com/take-action/#speakup') {
			document.querySelector('.sticky-speakup').scrollIntoView(true);
		}
	}
		
	document.addEventListener('DOMContentLoaded', () => {
		checkUrl();
	}, false);
	// 
	// window.addEventListener('locationchange', () =>) {
	// 	console.log('location changed');
	// });
</script>