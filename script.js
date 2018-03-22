var myApp = /**
*  Module
*
* Description
*/
angular.module('stopwatchApp', [])

.controller('stopwatchCon', ['$scope', function($scope){
	
	$scope.h=0;
	$scope.m=0;
	$scope.s=0;
	$scope.sx=0;

	$scope.sync = function(){
		if($scope.sx==100){
			$scope.sx=0;
			$scope.s+=1;
		}
		if($scope.s==60){
			$scope.s=0;
			$scope.m+=1;
		}
		if($scope.m==60){
			$scope.m=0;
			$scope.h+=1;
		}
	}

	$scope.start = function(){
		intv = setInterval(function() {
			$scope.$apply(function(){
				$scope.sx+=1;
				$scope.sync();
			})
		}, 10);
	}

	$scope.stop = function(){
		clearInterval(intv);
	}

	$scope.reset = function(){
		$scope.h=0;
		$scope.m=0;
		$scope.s=0;
		$scope.sx=0;
	}
	
}])

.filter('leadZ',function(){
	return function(num){
		this.rm = parseFloat(num/10);
		if(this.rm<1)
			return '0'+num;
		else
			return num;
	}
})