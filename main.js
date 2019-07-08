require.config({
    paths: {
        app: "app",
        jquery: "lib/jquery",
        underscore: "lib/underscore",
        backbone: "lib/backbone",
        CountryView: "views/countryView",
        Countries:"collection/countries"
    }
})
define(["app"], function (App) {
    App.initialize();
})
