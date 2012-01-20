(function($){
/* 
  	Tilt jQuery plugin 
  	Version: 0.1
  	Author: Artanis
*/
	
    $.tilt = function(el,perspective, angle){
       
        var base = this;

        base.$el = $(el);
        base.el = el;
	   	base.$el.data("tilt", base);
		
        base.init = function(){		
     
			var rectW = $(base.el).width(); 
			var rectH = $(base.el).height();	
			var maxDim = Math.max(rectW, rectH);
			
			
			
			if( typeof(perspective) === "undefined" || perspective === null ) perspective = 500;
			if( typeof(angle) === "undefined" || angle === null ) angle = 12;
			
							
			$(base.el).parent(".tilt-parent").mousemove(function(e) {
			
			
				var distanceFromCenterX = -(rectW/2) + e.offsetX;			
				var normalisedDistanceX = 2* distanceFromCenterX / maxDim;
						
				var distanceFromCenterY = -(rectH/2) + e.offsetY;			
				var normalisedDistanceY = 2* distanceFromCenterY / maxDim;
						
				var tiltAngleX = normalisedDistanceX * angle;
				var tiltAngleY = -normalisedDistanceY * angle;
			
				$(base.el).css({"-webkit-transform": " perspective("+perspective+") rotateY("+tiltAngleX+"deg) rotateX("+tiltAngleY+"deg)", "-webkit-transform-origin": "50% 50%", "-webkit-transition": "none"});
			
			});
			
			$(base.el).parent(".tilt-parent").mouseout(function(e) { 
				
				$(base.el).css({"-webkit-transform": " perspective("+perspective+") rotateY(0deg) rotateX(0deg)", "-webkit-transform-origin": "50% 50%", "-webkit-transition": "all linear 0.5s"});
				
			});
			
		
        };
        
        base.init();
    };

  

    $.fn.tilt = function(persp,angle){
		
        return this.each(function(){
		
            (new $.tilt(this, persp, angle));
           
        });
    };

})(jQuery);