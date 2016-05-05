// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    this.remove(song);
  },

  ended: function() {
    this.dequeue();
  }

});