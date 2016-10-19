var appDispatcher = require('../dispatchers/appDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var Constants = require('../constants/constants.js');

const apiKey = "AIzaSyDEimvLlHIuCUY-TGbCnkkxNV1GaGa08pE"
const _locations = [];
var ob;


var LocationStore = merge(EventEmitter.prototype, {
  getLocation: function() {
    return _locations;
  }
})


appDispatcher.register(handleAction);

function handleAction(payload) {


  if (payload.action == Constants.SEARCH) {
    for (var i = 0; i < 4; i++){
      _locations.pop();
    }

    let postCode = payload.location
    let location = axios.post("/search", {
        postCode: postCode
      })
      .then(function(result) {
        for (var i = 0; i < 4; i++) {
          var ranNum = Math.floor(Math.random() * result.data.success.results.length);
          _locations.push(result.data.success.results[ranNum])
        }
        LocationStore.emit('update');

      })

  }

}




export default LocationStore
