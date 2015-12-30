import React from 'react';

export default React.createClass({
  render: function() {
    var rand = Math.floor(Math.random() * 10);

    return (<div>
      <h1>I can has {rand} cheezburgers</h1>
    </div>);
  }
});

