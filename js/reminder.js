var reminder=angular.module('reminder',[]);
reminder.controller('rdctrl', ['$scope', function($scope){
	// console.log(1);
	// $scope.shijianliebiao = [
 //         {
 //         	name:'春节',
 //         	color:'red',
 //         	items:[
 //                 {name:'tanya',isDone:false,pt:0},
 //                 {name:'tan',isDone:false,pt:0},
 //                 {name:'tany',isDone:false,pt:0},
 //         	]
 //         },
 //         {
 //         	name:'春节kuaile',
 //         	color:'blue',
 //         	items:[
 //                 {name:'ta',isDone:false,pt:0},
 //                 {name:'t',isDone:false,pt:0},
 //                 {name:'tanyaa',isDone:false,pt:0},
 //         	]
 //         }
	// ];
	var d=localStorage.data;
	
	$scope.shijianliebiao=[];
	$scope.colors = ['purple','green','blue','yellow','brown','pink','orange'];
	$scope.cindex=0;
	$scope.setitem=function(index){
        $scope.cindex=index;
	}
	$scope.additem=function(){
		var data = {
			name:'新列表'+($scope.shijianliebiao.length+1),
			color:$scope.colors[$scope.shijianliebiao.length%7],
			items:[]
		};
		$scope.shijianliebiao.push(data);
		localStorage.data=JSON.stringify($scope.shijianliebiao);
	}
    $scope.shijianliebiao=d?JSON.parse(d):[];
    $scope.clear=function(){
    	localStorage.clear();
    	location.reload();
    }
    $scope.deleteitem=function(){
    	var r=[];
    	for (var i = 0; i < $scope.shijianliebiao.length; i++) {
    		if(i!=$scope.cindex){
    			r.push($scope.shijianliebiao[i]);
    		}	
    	}
    	$scope.shijianliebiao=r;
    	$scope.cindex=0;
    	localStorage.data=JSON.stringify($scope.shijianliebiao);
    }
	$scope.addtodo=function(){
		var cu=$scope.shijianliebiao[$scope.cindex];
		var data={title:'新条目'+(cu.items.length+1),isDone:false};
		cu.items.push(data);
		localStorage.data=JSON.stringify($scope.shijianliebiao);
	}
	$scope.deletetodo=function(index){
		var r=[];
		var cu=$scope.shijianliebiao[$scope.cindex];
		for (var i = 0; i < cu.items.length; i++) {
			if(i!=index){
				r.push(cu.items[i]);
			}
		}
		$scope.shijianliebiao[$scope.cindex].items=r;
		localStorage.data=JSON.stringify($scope.shijianliebiao);
	}
	$scope.save=function(){
		localStorage.data=JSON.stringify($scope.shijianliebiao);
	}
	$scope.cutdone=function(){
 		var lis=$scope.shijianliebiao[$scope.cindex].items;
 		var r=0;
 		for(var i=0;i<lis.length;i++){
 			if(lis[i].isDone){
 				r+=1;
 			}
 		}
 		return r;
 	}

}])