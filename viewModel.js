var CommonMoviesViewModel = function() {
    var self = this;
    this.userName = ko.observable("knrdk");
    this.movies = ko.observableArray()
    
    this.registerClick = function() {
        getMovies(this.userName(), this.callback);
    };
    
    this.callback = function(x){
        self.movies(x);
    };
};
 
ko.applyBindings(new CommonMoviesViewModel());