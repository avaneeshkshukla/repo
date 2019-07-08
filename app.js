define(["CountryView", "Countries"], function (CountryView, Countries) {
    var initialize = function () {
        console.log("App initialized");
      
    var country = new Countries();
     country.fetch().then(function (response) {
    var someView = new CountryView({collection:response});
    });
    
}
    return { initialize: initialize }
})

