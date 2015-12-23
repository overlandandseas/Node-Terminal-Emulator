//javascript

var fs = require('fs');
var angular = require('angular');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;


angular.module('guake', []).controller('guakeController', function($scope){
        var options = {
            stdio: [1],
            maxBuffer: 256
        };

        $scope.message = execSync('whoami', options).toString() + '@h2~$';
        $scope.commands = [];
        $scope.enters = 10;



        $scope.addCommand = function(val){
            if(val === 'clear'){
                $scope.commands = [];
                $scope.enters = 10;
                $scope.console = "";
                return;
            }

            val = execSync(val).toString();
            $scope.commands.push($scope.message + " " + val);
            $scope.enters--;
            $scope.console = "";

            if ($scope.commands.length > 10){
                $scope.commands = $scope.commands.slice(1);
                $scope.enters = 0;
            }
        };

        $scope.makeArray = function(num) {
            return new Array(num);
        };

        $scope.ofNum = (function(val, num){
            var temp = "";

            for(var c = 0; c < num; c++)
                temp += val;
            return temp;
        });

});
