var appDispatcher = require('../dispatchers/appDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var Constants = require('../constants/constants.js');

const apiKey = "AIzaSyDEimvLlHIuCUY-TGbCnkkxNV1GaGa08pE"
const _locations = [];
let lat = ""
let lng = ""

var LocationStore = merge(EventEmitter.prototype, {
  getLocation: function(){
    let returnObject = {
      latitude: lat,
      longitude: lng

    }
    return returnObject;
  }
})


appDispatcher.register(handleAction);

function handleAction(payload) {


  if (payload.action == Constants.SEARCH){
    let postcode = payload.location
    let location = axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + postcode + "&key=" + apiKey)
                          .then(function(result){
                            lat = result.data.results[0].geometry.location.lat;
                            lng = result.data.results[0].geometry.location.lng;
                            // console.log(result.data.results[0].geomtery.location.lat);
                            // console.log(result.data.results[0].geomtery.location.lng);
                            // console.log(result.data.results.geomtery.location.lat)
                            LocationStore.emit('update')
                          })

  }
}


export default LocationStore
