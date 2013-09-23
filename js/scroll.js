			var scrollSpeed = 50; 		// Speed in milliseconds
			var step = 1; 				// How many pixels to move per step
			var current = 0;			// The current pixel row
			//var imageWidth = 5503;		// Background image width
			//var headerWidth = ;		// How wide the header is.
			
			//The pixel row where to start a new loop
			var restartPosition = 0;
			
			function scrollBg(){
				//Go to next pixel row.
				current -= step;
				
				//If at the end of the image, then go to the top.
				if (current == restartPosition){
					current = 0;
				}
				
				//Set the CSS of the header.
				$('.front #kids').css("background-position",current+"px 0");
			}
			
			//Calls the scrolling function repeatedly
			var init = setInterval("scrollBg()", scrollSpeed);


      // uses http://www.catswhocode.com/blog/animated-background-image-with-jquery
      // and http://www.devirtuoso.com/2009/07/how-to-build-an-animated-header-in-jquery/
      // for reference
      
/*
http://www.smoothdivscroll.com/
<script type="text/javascript">
	$(window).load(function() {
		$("div#makeMeScrollable").smoothDivScroll({ 
			autoScroll: "onstart" , 
			autoScrollDirection: "backandforth", 
			autoScrollStep: 1, 
			autoScrollInterval: 15,	
			startAtElementId: "startAtMe", 
			visibleHotSpots: "always"
		});
	});
</script>
*/