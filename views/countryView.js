define(["backbone"], function(Backbone){
    var CountryView=Backbone.View.extend({
        el:".container",
        initialize: function(){
            this.render()
        },
        render: function(){
            console.log("rendered");
            this.$el.html(this.collection[0].name);

        }
    });
    return CountryView;
});
