$(function() {
  Parse.$ = jQuery;
  Parse.initialize("912DRsnOJraEno8IQqgjClyjGIr1jEyViBQB8FeP", "zPA2ujBJOuOmcJ9vSD43z7TeSJBJKiibDjtjIvy4");

  _.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
  };

  var Game = Parse.Object.extend('Game');
  var Player = Parse.Object.extend('Player');

  var PlayerView = Parse.View.extend({
    tagName:  'div',

    className: 'player',

    title: 'test',

    template: _.template($('#player-template').html()),

    render: function() {
      var that = this;

      $(this.el).html(this.template(this.model._toFullJSON([])));

      this.$el.find('.tooltip').tooltipster({ delay: 0, speed: 100 });

      if (this.model.get('captain') == true) {
        var star = '';

        if (this.model.get('team') == 'teamB') {
          star = '-red';
        }

        this.$el.find('.player').append('<img class="player-fave" src="/images/player-fave.png" alt="Fave" />');
      }

      var player = this.model.get('user');
      var playerAvatar = player.get('avatar');
      var playerAvatarThumbnail = player.get('avatarThumbnail');

      if (playerAvatarThumbnail) {
        var image = new Image();
        image.src = playerAvatarThumbnail.url();
        image.className = 'player-avatar';
        image.onload = function() {
          that.$el.find('.player-avatar').attr('src', image.src);
        }
      }
      else if (playerAvatar) {
        var image = new Image();
        image.src = playerAvatar.url();
        image.className = 'player-avatar';
        image.onload = function() {
          that.$el.find('.player-avatar').attr('src', image.src);
        }
      }

      return this;
    }
  });

  var GameView = Parse.View.extend({
    gameHeaderTemplate: _.template($('#game-header-template').html()),

    initialize: function() {
      this.loadGame();
    },

    loadGame: function() {
      var that = this;
      var query = new Parse.Query(Game);
      query.get(window.gameId, {
        success: function(game) {
          that.game = game;
          that.render();

          return false;
        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse. Error with an error code and description.
          return false;
        }
      });
    },

    renderPlayers: function() {
    var that = this;
    var game = this.game;

    var query = new Parse.Query(Player);
    query.equalTo('game', game);
    query.descending('captain');
    query.include('user');
    query.find({
      success: function(players) {
        that.players = players;

        for (var i = 0; i < players.length; i++) {
          var player = players[i];

          var view = new PlayerView({model: player});
          var html = view.render().el;

          if (player.get('team') == 'teamA') {
            $('.team-a').append(html);
          }
          else {
            $('.team-b').append(html);
          }
        }

        $('.spinner').remove();
        $('#game-header-wrapper').show();
      },
      error: function(error) {
        alert('We could not get players. Error: ' + error);
      }
    });
  },

    renderMap: function() {
      var geoPoint = new google.maps.LatLng(this.game.get('geoPoint').latitude, this.game.get('geoPoint').longitude)
      var mapOptions = {
        center: geoPoint,
        zoom: 14
      };

      var map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var marker = new google.maps.Marker({ map: map, position: geoPoint });

      return false;
    },

    render: function() {
      document.title = this.game.get('name') + ' - Haweee';

      $('#game-header').html(this.gameHeaderTemplate(this.game.toJSON()));
      this.renderPlayers();
      this.renderMap();

      return this;
    }

  });

  new GameView;
});