/// <reference path="typings/jquery/jquery.d.ts"/>
(function($) {
    $.fn.inView = function(action) {
        var $window = $(window);
        var docViewTop = $window.scrollTop();
        var thisTop = this.offset().top;
        var thisBottom = thisTop + this.height();
        
        if (action == 'all') {
            var docViewBottom = docViewTop + $window.height();
            return ((thisBottom <= docViewBottom) && (thisTop >= docViewTop));
        }
        else { // action == 'any'
            return docViewTop < thisBottom;
        }
    };
 }(jQuery));