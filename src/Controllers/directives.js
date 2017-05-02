"use strict";
app.directive("autoNext", function() {
    return {
        restrict: 'A',
        link: function (scope, element, attr, form) {

            var tabindex = parseInt(attr.tabindex);
            var maxLength = parseInt(attr.ngMaxlength);

            element.on('keypress', function (e) {
                if (e.keyCode != 8 && e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 39) {
                    if (isNaN(String.fromCharCode(e.charCode))) {
                        e.preventDefault();
                    }
                }
            });
            
            element.on('keyup', function (e) {
                if (e.keyCode == 8) {
                    // Handling Backspace scenario
                    if (element.val().length == 0) {
                        var next = angular.element(document.body).find('[tabindex=' + (tabindex > 1 ? tabindex - 1 : tabindex) + ']');
                        if (next.length > 0) {
                            next.focus();
                            return next.triggerHandler('keypress', { which: e.which });
                        }
                        else {
                            return false;
                        }
                    }
                }
                // Automatically shifts to next tab when specific length reaches
                if (element.val().length > maxLength - 1) {
                    var next = angular.element(document.body).find('[tabindex=' + (tabindex < 3 ? tabindex + 1 : tabindex) + ']');
                    if (next.length > 0) {
                        next.focus();
                        return next.triggerHandler('keypress', { which: e.which });
                    }
                    else {
                        return false;
                    }
                }
                return true;
            });
        }
    }
});