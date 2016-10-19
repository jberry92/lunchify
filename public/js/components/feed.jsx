var Resturant = require('./resturant.jsx');

var ResturantFeed = React.createClass({

  render: function() {
    var resturants = this.props.resturants.map(function(resturant, i) {
      return (<Resturant key={i} name={resturant.name} address={resturant.vicinity} id={i}/>)
    })
    return (
      <div className="resturant">
        <div className="row">
          {resturants}
        </div>
      </div>
    )
  }
})

module.exports = ResturantFeed;
