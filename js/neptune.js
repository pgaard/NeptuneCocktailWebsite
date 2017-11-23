/**
 * Created by pgaard on 11/23/17.
 */
var app = angular.module("neptuneApp", ["firebase"]);

app.controller("NeptuneController", function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("gig");
    $scope.gigs = $firebaseArray(ref);

    var date = new Date();
    date.setTime(date.getTime() + (48*60*60*1000));
    $scope.tomorrow = date;

    $scope.futureGig = function(gig){
        return new Date(gig.Date) >= $scope.tomorrow;
    }
});