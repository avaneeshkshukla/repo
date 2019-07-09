//country model
var Country = Backbone.Model.extend({
    initalize: function(){
    },
});
//countries collection
var Countries = Backbone.Collection.extend({
    initalize: function(){

    },
    model: Country,
    url: "https://restcountries.eu/rest/v2/all"
});

var countries = new Countries();
countries.fetch()           //data is fetched in collection
.then(function(response){
    var cardView=new CardView({model:response[1]});
    console.log(response)
})



//card
var CardView = Backbone.View.extend({
    el:".container",
    template: _.template($("#card-template").html()),
    initialize: function(){
        this.render();
    },
    render: function(){
        html = this.template({
            country: this.model
        });
        this.$el.html(html);
        return this;
    }
});



