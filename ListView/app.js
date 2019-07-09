//country model
var Country = Backbone.Model.extend({
    initalize: function () {
    },
});
//countries collection
var Countries = Backbone.Collection.extend({
    initalize: function () {

    },
    model: Country,
    url: "https://restcountries.eu/rest/v2/all"
});

var countries = new Countries();
countries.fetch()           //data is fetched in collection
    .then(function (response) {
        var listView = new ListView({ collection: response });
        console.log(response)
    })



//card
var CardView = Backbone.View.extend({
    template: _.template($("#card-template").html()),
    initialize: function () {
        this.render();
    },
    render: function () {
        
        html = this.template({
            country: this.model
        });
        this.$el.html(html);
        console.log("Cardview is rendered");
        return this;
    }
});

var ListView = Backbone.View.extend({
    el: ".container",
    template: _.template($("#list-template").html()),
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("listview is rendered");
        var that = this;
        _.each(this.collection, function (country) {
            var cardView = new CardView({model:country})
            that.$el.append(cardView.render().$el)
        })
        return this;
    }
})