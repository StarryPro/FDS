/*! photo.showcase.js @ 2017, */

;(function(global, $){
    'user strict'; 

var photolist = [];
var photo_info = { 
    total : 10,
    width : 900,
    height : 420};

for(i=0; l<photo_info.total; i++){

    var path = 'https://unsplash.it/' + photo_info.width +'/'+ photo_info.height +'/?random='+ i;
    photolist.push(path);
}

console.log('photolist:', photolist);

}(window, window.FDS));