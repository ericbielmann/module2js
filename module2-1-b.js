(function() {
  // Write your code here
  var MusicBox = function() {
      this.albums = new Array();
  }
  MusicBox.prototype.addAlbum = function(albumOne, albumTwo, albumThree) {
      if (arguments.length == 1) {    
          return this.addOneAlbum(arguments[0]);    
      } else if (arguments.length==3){    
          return this.addThreeAlbums(arguments[0], arguments[1], arguments[2]);    
      }
  }
  MusicBox.prototype.addOneAlbum = function(album) {
      this.albums.push(album);
  }
  MusicBox.prototype.addThreeAlbums = function(albumOne, albumTwo, albumThree) {
      this.albums.push(albumOne);
      this.albums.push(albumTwo);
      this.albums.push(albumThree);
  }
  MusicBox.prototype.favoriteAlbum = function() {
      var mostPlayed = this.albums[0];
      this.albums.map(function(item) {
          if (item.reproductions > mostPlayed.reproductions) {
            mostPlayed = item;
          }
        });
      return mostPlayed.albumName + " - " + mostPlayed.artist + " (the most played album)";
  }
  
  var Album = function(albumName, artist) {
      this.albumName = albumName;
      this.artist = artist;
      this.reproductions = 0;
  }
  Album.prototype = Object.create(MusicBox.prototype);
  // Album.prototype.constructor = Album;
  
  
  
  Album.prototype.play = function() {
      this.reproductions += 1;
      console.log("Playing " + this.albumName + " - " + this.artist);
  }
  
  var box = new MusicBox(),
  a1 = new Album("The Who", "Tommy"),
  a2 = new Album("Tom Waits", "Closing Time"),
  a3 = new Album("John Cale", "Paris 1919"),
  favorite;
  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);
  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"
  a1.play(); // prints "Playing The Who - Tommy"
  favorite = box.favoriteAlbum();
  // prints "favorite album is The Who - Tommy (the most played album)"
  console.log("favorite album is " + favorite);
  }());