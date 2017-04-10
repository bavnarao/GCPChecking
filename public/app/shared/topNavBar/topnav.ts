/// <reference path="./../../../jquery.d.ts"/>
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'topnav',
    templateUrl: "./topnav.html"
})

export class TopNavComponent {

ngOnInit() {
    /*let scroll = false;
	  let launcherMaxHeight = 396;
	  let launcherMinHeight = 296;
	  $('.app-launcher').hide();
	  // Mousewheel event handler to detect whether user has scrolled over the container
	 
	 
	  
	 
	  // Scroll event to detect that scrollbar reached top of the container
	  
	  
	  
	  
	  // Click event handler to toggle dropdown
	  $(".button").click(function(event){
		event.stopPropagation();
		$(".app-launcher").toggle();
	  });
	  
	  $(document).click(function() {
		//Hide the launcher if visible
		$('.app-launcher').show();
		});
		
		// Prevent hiding on click inside app launcher
		$('.app-launcher').click(function(event){
			event.stopPropagation();
		});*/
 $('#wrapper').addClass('toggled');
	$('#menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
      $('#overlay').fadeToggle( "slow", "swing" );
    });

    $('#overlay').click(function() {
      $('#overlay').fadeOut('slow');
      $('#wrapper').addClass('toggled');
    });
}


}
// Resize event handler to maintain the max-height of the app launcher
// Resize event handler to maintain the max-height of the app launcher


