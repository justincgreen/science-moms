<script defer>
// if(location.hash) {
// 	console.log(`The hash on page load is ${location.hash}`); 
// } else if(location.hash === ''){
// 	console.log('There is no hash on page load');
// }

window.addEventListener('load', () => {
	setTimeout(() => {
		// On page load
		if(location.hash === '#swap') {
			document.querySelector('.sticky-swap').scrollIntoView(true);
		}
		
		if(location.hash === '#share') {
			document.querySelector('.sticky-share').scrollIntoView(true);
		}
		
		if(location.hash === '#speakup') {
			document.querySelector('.sticky-speakup').scrollIntoView(true);
		}
		
		if(location.hash === '#letter') {
			document.querySelector('.letter-section').scrollIntoView(true);
		}
	}, 1000);
});

window.addEventListener('hashchange', () => {
	if(location.hash === '#swap') {
		document.querySelector('.sticky-swap').scrollIntoView(true);
	}
	
	if(location.hash === '#share') {
		document.querySelector('.sticky-share').scrollIntoView(true);
	}
	
	if(location.hash === '#speakup') {
		document.querySelector('.sticky-speakup').scrollIntoView(true);
	}
	
	if(location.hash === '#letter') {
		document.querySelector('.letter-section').scrollIntoView(true);
	}
	
});
</script>



<script defer>
	window.addEventListener('load', () => {
		setTimeout(() => {
			// On page load
			if(location.hash === '#swap') {
				document.querySelector('.sticky-swap').scrollIntoView(true);
			}
			
			if(location.hash === '#share') {
				document.querySelector('.sticky-share').scrollIntoView(true);
			}
			
			if(location.hash === '#speakup') {
				document.querySelector('.sticky-speakup').scrollIntoView(true);
			}
			
			if(location.hash === '#letter') {
				document.querySelector('.letter-section').scrollIntoView(true);
			}
		}, 1000);
	});
</script>