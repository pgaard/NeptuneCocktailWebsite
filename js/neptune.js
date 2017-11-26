/**
 * Created by pgaard on 11/23/17.
 */
var app = angular.module("neptuneApp", ["firebase"]);

app.controller("NeptuneController", function($scope, $firebaseArray, $sce) {
    var ref = firebase.database().ref().child("gig");
    $scope.gigs = $firebaseArray(ref);

    var date = new Date();
    date.setTime(date.getTime() + (48*60*60*1000));
    $scope.tomorrow = date;

    $scope.futureGig = function(gig){
        return new Date(gig.Date) >= $scope.tomorrow;
    }

    $scope.videos =
        [
            {
                title: "Dead or Alive",
                subtitle: "Bon Jovi",
                image: "wanted.png",
                link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/Ut0CEX_Sgdg")
            },
            {
                title: "Sampler",
                subtitle: "A bunch of songs",
                image: "sampler.png",
                link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/yxfmBpjqknc")
            },
            {
                title: "Rock of Ages",
                subtitle: "Def Leppard",
                image: "rockofages.png",
                link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/zjtklQuag9Q")
            },
            {
                title: "Purple Rain",
                subtitle: "Prince",
                image: "purplerain.png",
                link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/IVQ0-y9DGJE")
            },
            {
                title: "Sweet Child O Mine",
                subtitle: "Guns n Roses",
                image: "sweetchild.png",
                link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/Fd99gNDSBxE")
            },
            {
                title: "Everlong",
                subtitle: "Foo Fighters",
                image: "everlong.png",
                link: $sce.trustAsResourceUrl("https://www.youtube.com/embed/plDiKnmEzso")
            }];
});

