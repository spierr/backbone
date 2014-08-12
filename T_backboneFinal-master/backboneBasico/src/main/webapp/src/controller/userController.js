    App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
				
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        }, 
        save: function() { 
          
            x = document.getElementById("firstName").value;
            y = document.getElementById("lastName").value;
            z = document.getElementById("cumpleanios").value;
            w= Math.random();
                  $( ".container" ).append('\n El usuario '+ x+' '+y+ ' nació el '+z +' y el número aleatorio es '+w);
                     
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        }
    });