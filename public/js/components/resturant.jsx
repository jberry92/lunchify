var Resturant = React.createClass({


  render: function() {
    var rowInfo
    var colInfo
    var openRow
    var closeRow
    console.log(this.props.id)
    if (this.props.id == 0){
      colInfo = "col l12 card medium blue-grey darken-1"
    }else if(this.props.id == 1){
      colInfo = "col l4 card small blue darken-1"

    }else{
      openRow = null
      closeRow = null
      colInfo = "col l4 card small blue darken-1"
    }

    return (
      <div>
        <div className={colInfo}>
          <div className="name">
            {this.props.name}
          </div>
          <div className="address">
            {this.props.address}
          </div>
      </div>
  </div>
    )
  }
});

module.exports = Resturant;
