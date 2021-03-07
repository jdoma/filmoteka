var myApp = angular
    .module("filmModul", [])
    .controller("kontroler", function ($scope) {
        var arrMovies = [{
            title: "Bad Boys I", movieImg: "https://m.media-amazon.com/images/M/MV5BMGE1ZTQ0ZTEtZTEwZS00NWE0LTlmMDUtMTE1ZWJiZTYzZTQ2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
            actor: "Wil Smit ", desc: "Bad Boys is a 1995 American action comedy film directed by Michael Bay, in his feature directorial debut, produced by Don Simpson and Jerry Bruckheimer and starring Martin Lawrence and Will Smith as two Miami narcotics detectives, Marcus Burnett and Mike Lowrey. Despite mixed reviews, Bad Boys was commercially successful and gained a cult following. It spawned the Bad Boys trilogy, which includes two sequels, Bad Boys II (2003) and Bad Boys for Life (2020)."}
        ]; 
      
        $scope.movies = arrMovies;

        $scope.saveMovie=function () {
            $scope.movies.push({
                title: $scope.newMovie.title,
                movieImg:$scope.newMovie.movieImg,
                actor: $scope.newMovie.actor,
                desc: $scope.newMovie.desc
            })
            $scope.newMovie.title="";
            $scope.newMovie.movieImg="";
            $scope.newMovie.actor="";
            $scope.newMovie.desc="";
        }

        $scope.removeMovie= function (movie) {
            var delMovie=  $scope.movies.indexOf(movie);
            $scope.movies.splice(delMovie, 1);
        }
    });