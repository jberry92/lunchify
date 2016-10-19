var axios = require('axios');
var apiKey = "AIzaSyDEimvLlHIuCUY-TGbCnkkxNV1GaGa08pE"

function getCoordinates(postcode, callback){
  // var coordinates = ""
  // console.log("Coords at point 1" + coordinates)
  // var postcode = "LS12 1DD"
  axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + postcode + "&key=" + apiKey)
    .then(function(result) {
      var obj = {
        lat: result.data.results[0].geometry.location.lat,
        lng: result.data.results[0].geometry.location.lng
      };
      callback(null, obj);
      // var lat = result.data.results[0].geometry.location.lat;
      // var lng = result.data.results[0].geometry.location.lng;
      // coordinates = lat + ',' + lng;
      // console.log("Coords at point 2 " + coordinates)
      // return coordinates;
    })
    .catch(function (err){
      callback(err);
    })
}

function getNearbyResturants(coOrds, callback){
  var locations = axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coOrds.lat +','+coOrds.lng + "&radius=1250&type=meal_takeaway&key=" + apiKey)
    .then(function(result) {
      callback(null, result.data);
    })
    .catch(function(err){
      callback(err);
    });
}


exports.newSearch = function(req,res) {
  console.log("newSearch called")
  var postCode = req.body.postCode
  // coords = getCoordinates();
  // var coords = "53.7951531,-1.561329"
  // console.log(getNearbyResturants(coords))
  // return getNearbyResturants(coords);
  getCoordinates(postCode, function (err, result){
    if (err){
      return res.status(400).send({error: err.message});
    } else {
      getNearbyResturants(result, function (err, result){
        if (err){
          return res.status(400).send({error: err.message});
        } else {
          return res.status(200).send({success:result});
        }
      });
    }
  });

}
