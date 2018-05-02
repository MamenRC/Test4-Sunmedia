import React from 'react';

class EventManager extends React.Component {
  render() {
    return (
      <div className="card">
        {this.props.second}
    	  {this.props.type}
        {this.props.message}
     </div>
    );
  }
}

export default EventManager;
