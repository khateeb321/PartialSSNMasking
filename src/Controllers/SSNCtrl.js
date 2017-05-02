"use strict";
app.controller('SSNCtrl', function($scope) {
    
    this.showSSN = false;
    this.feildType = "password";

    $scope.SSN = this.ssnOne + this.ssnTwo + this.ssnThree;
    
    this.hideShowSSN = function(){
        this.feildType = this.showSSN ? "text" : "password";
    }
});