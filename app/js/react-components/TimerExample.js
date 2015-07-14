'use strict';

define(['react'], function(React) {

    return React.createClass({

        getInitialState: function() {
            // This is called before our render function. The object that is 
            // returned is assigned to this.state, so we can use it later.
            //debugger;
            return {};
        },
        componentDidMount: function() {
            // componentDidMount is called by react when the component 
            // has been rendered on the page. We can set the interval here:
        },
        componentWillUnmount: function() {
            // This method is called immediately before the component is removed
            // from the page and destroyed. We can clear the interval here:
        },
        handleChange: function(event) {
            //debugger
            this.setState({message: event.target.value});
          },
          render: function() {
            var message = this.state.message;
            //debugger
            return <input type="text" value={message} onChange={this.handleChange} />;
          }
    });

});