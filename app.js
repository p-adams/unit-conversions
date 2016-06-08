var Temperature = React.createClass({
     getInitialState: function(){
        return ({left: 98.01, right: ((98.01 - 32) * 5/9).toFixed(2)});
    },
    handleChangeTop: function(e){
        var val = e.target.value;
        this.setState({left: e.target.value, right: ((val - 32) * 5/9).toFixed(2)});
    },
    handleChangeBottom: function(e){
        var val = e.target.value;
        this.setState({right: e.target.value, left: ((val * 9/5) + 32).toFixed(2)})
    },
     render: function(){
        return(
            <div>
                <h3>Temperature</h3><br/>
                <h5>Fahrenheit</h5>
                <input 
                type="text"
                value={this.state.left}
                onChange={this.handleChangeTop}
                className="form-control"
                
                />
                <h5>Celsius</h5>
                <input 
                type="text"
                value={this.state.right}
                onChange={this.handleChangeBottom}
                className="form-control"
                />
            </div>
        )
    }
});

var Length = React.createClass({
    getInitialState:function(){
        return({left: 1, right: 1*1.6})
    },
    handleChangeTop: function(e){
        var val = e.target.value;
        this.setState({left: e.target.value, right: (val*1.6).toFixed(2)});
    },
    handleChangeBottom: function(e){
        var val = e.target.value;
        this.setState({right: e.target.value, left: (val*0.62137).toFixed(2)});
    },
    render:function(){
        return(
            <div>
                <h3>Length</h3><br/>
                <h5>Mile</h5>
                <input 
                type="text"
                value={this.state.left}
                onChange={this.handleChangeTop}
                className="form-control"
                
                />
                <h5>Kilometer</h5>
                <input 
                type="text"
                value={this.state.right}
                onChange={this.handleChangeBottom}
                className="form-control"
                />
            </div>
        )
    }
});

var Mass = React.createClass({
    getInitialState:function(){
        return({left: 1, right: (1/2.2046).toFixed(6)})
    },
    handleChangeTop: function(e){
        var val = e.target.value;
        this.setState({left: e.target.value, right: (val/2.2046).toFixed(6)});
    },
    handleChangeBottom: function(e){
        var val = e.target.value;
        this.setState({right: e.target.value, left: (val*2.2046).toFixed(6)});
    },
    render:function(){
        return(
            <div>
                <h3>Mass</h3><br/>
                <h5>Pound</h5>
                <input 
                type="text"
                value={this.state.left}
                onChange={this.handleChangeTop}
                className="form-control"
                
                />
                <h5>Kilogram</h5>
                <input 
                type="text"
                value={this.state.right}
                onChange={this.handleChangeBottom}
                className="form-control"
                />
            </div>
        )
    }
});

var UnitConverter= React.createClass({
   
    render: function(){
        return(
            <div className="container">
            <h1>Unit Conversions</h1><hr/>
            <div className="jumbotron">
                <Temperature/>
            </div>
            <div className="jumbotron">
                <Length/>
            </div>
            <div className="jumbotron">
                <Mass/>
            </div>
            </div>
        )
    }
});


ReactDOM.render(<UnitConverter/> , document.getElementById('app'));
