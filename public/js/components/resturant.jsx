var Resturant = React.createClass({
  render: function() {
    return (
      <div className="tweet">
        <div className="message">
          {this.props.name}
        </div>
        <div className="author">
          {this.props.address}
        </div>
      </div>
    )
  }
});

module.exports = Resturant;
