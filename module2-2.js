(function () {
  // Code goes here
  var PhotoAlbum = function () {
    this.pictures = [];
  }

  PhotoAlbum.prototype.showPictures = function (tagName) {
    debugger
    var text = "";
    for (var i = 0; i < this.pictures.length; i++) {
      if (this.pictures[i].tags.indexOf(tagName) != -1) {
        text += this.pictures[i].name;
        if (this.pictures[this.pictures.length - 1] != this.pictures[i]) {
          text += ", ";
        }
      }
    }
    console.log(text);
  }

  var Photo = function (name) {
    this.name = name;
    this.tags = [];
  }

  Photo.prototype.tag = function (tagName) {
    this.tags.push(tagName);
  }

  Photo.prototype.showTags = function () {
    var text = "";
    for (var i = 0; i < this.tags.length; i++) {
      text += this.tags[i];
      if (this.tags[this.tags.length - 1] != this.tags[i]) {
        text += ", ";
      }
    }
    console.log(text);
  }

  PhotoAlbum.prototype.addPicture = function (photo) {
    this.pictures.push(photo);
  }

  var album = new PhotoAlbum(),
    p;
  p = new Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");
  album.addPicture(p);
  p = new Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);
  p = new Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");
  // prints "Jimmy, Jane"
  p.showTags();
  album.addPicture(p);
  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");
  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");
}());