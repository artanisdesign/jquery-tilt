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
			
			var offX = e.pageX - $(base.el).offset().left;
			var offY = e.pageY - $(base.el).offset().top;
				
				var distanceFromCenterX = -(rectW/2) + offX;				
				var normalisedDistanceX = 2* distanceFromCenterX / maxDim;
				
				var distanceFromCenterY = -(rectH/2) + offY;			
				var normalisedDistanceY = 2* distanceFromCenterY / maxDim;
						
				var tiltAngleX = normalisedDistanceX * angle;
				var tiltAngleY = -normalisedDistanceY * angle;
				//alert(tiltAngleX);	
				$(base.el).css({"-webkit-transform": " perspective("+perspective+") rotateY("+tiltAngleX+"deg) rotateX("+tiltAngleY+"deg)", "-webkit-transform-origin": "50% 50%", "-webkit-transition": "none"});
			    $(base.el).css({"-moz-transform": " perspective("+perspective+"px) rotateY("+tiltAngleX+"deg) rotateX("+tiltAngleY+"deg)", "-moz-transform-style": "preserve-3d", "-moz-transform-origin": "50% 50%", "-moz-transition": "none"});
			    $(base.el).css({"transform": " perspective("+perspective+") rotateY("+tiltAngleX+"deg) rotateX("+tiltAngleY+"deg)", "transform-origin": "50% 50%", "transition": "none"});

			});
			
			$(base.el).parent(".tilt-parent").mouseout(function(e) { 
				
				$(base.el).css({"-webkit-transform": " perspective("+perspective+") rotateY(0deg) rotateX(0deg)", "-webkit-transform-origin": "50% 50%", "-webkit-transition": "all linear 0.5s"});
				$(base.el).css({"-moz-transform": " perspective("+perspective+"px) rotateY(0deg) rotateX(0deg)", "-moz-transform-origin": "50% 50%", "-moz-transition": "all linear 0.5s"});
				$(base.el).css({"transform": " perspective("+perspective+") rotateY(0deg) rotateX(0deg)", "transform-origin": "50% 50%", "transition": "all linear 0.5s"});
				
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