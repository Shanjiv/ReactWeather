var React = require('react');

//({temp, location}) = props.temp , props.location
var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
