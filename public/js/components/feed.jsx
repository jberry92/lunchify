var Resturant = require('./resturant.jsx');

var ResturantFeed = React.createClass({

  render:function(){
    var resturants = this.props.resturants.map(function(resturant, i){
      return(
        <Resturant key={i} name={resturant.name} address={resturant.vicinity} />
      )
    })
    return (
    <div className="resturant">
      {resturants}
    </div>
  )
  }
})

module.exports = ResturantFeed;
