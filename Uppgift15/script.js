class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
            value2: ""          
        };

        this.firstValue = this.firstValue.bind(this);
        this.secondValue = this.secondValue.bind(this);
        this.submit = this.submit.bind(this);
    }

    firstValue(event) {
        this.setState({ value1: event.target.value });
    }
    
    secondValue(event) {
        this.setState({ value2: event.target.value });
    }
        
    submit(event) {
        event.preventDefault(); //Gör så att sidan inte laddas om
        let result;
        
        if(!this.state.value1 || !this.state.value2) {
            result = "Wrong Input!"
            }
        else {
            result = eval( this.state.value1 + '+' + this.state.value2 );
       }
        
        this.setState({ result: result })
        return result;
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <h3>Miniräknare</h3>
                    <input className="firstValue" type="number" value={this.state.value1} onChange={this.firstValue} />
                    <span className="operator">+</span>
                    <input className="secondValue" type="number" value={this.state.value2} onChange={this.secondValue} /><br/>
                    <input className='btn btn-success' type="submit" value="Calculate" />
                    <span className="equal">= <span className="result">{this.state.result}</span></span>
                </div>
            </form>
        );
    }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('myDiv')
);