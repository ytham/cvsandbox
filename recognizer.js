var cv = require('opencv');

cv.readImage('images/panda.jpg', function (err, im) {
  im.detectObject(cv.FACE_CASCADE, {}, function (err, faces) {
    console.log(faces.length);
  });
});
