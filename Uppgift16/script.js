class ListOfCountries extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
        };
    }

    componentDidMount() {
        this.getApi()
    }

    getApi() {
        fetch('http://forverkliga.se/JavaScript/api/simple.php?world=whatever')
    .then(response => response.json())
    .then(json => {
        const countries = Country.convertJsonArray(json);
        this.setState({
            countries: countries,
        });
    });
    }

    removeCountry(name) {
        const countries = this.state.countries.filter(c => c.name !== name);

        this.setState({
            countries: countries,
        });
    }

    render() {
        return (
            <div>
                <h4 className="text-center"> List of <span className="bold">{this.state.countries.length}</span> countries </h4>
                <CountryList countries = {this.state.countries} 
                onRemove = {this.removeCountry.bind(this)} />
            </div>
        )
    }
}

class Country {
    name;
    population;

    constructor(name, population) {
        this.name = name;
        this.population = population;
    }

    static convertObjFromJsonArray(json) {
        return new Country(json.name, json.population);
    }

    static convertJsonArray(jsonArray) {
        return jsonArray.map(this.convertObjFromJsonArray);
    }
}

class CountryList extends React.Component {
    constructor() {
        super();
    }

    removeCountry(name) {
        this.props.onRemove(name);
    }

    render() {
        let countries = this.props.countries.map((country, index) => {
            return <ListItem key={index}
            country={country} 
            onRemove={this.removeCountry.bind(this)}/>
        });

        return (
            <div>
                {countries}
            </div>
        )
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    onDivClick(name, event) {
        event.stopPropagation();
        if (event.target.id === 'btnRemove') {
            this.props.onRemove(name);
        } 
        else {
            this.setState({
                isSelected: !this.state.isSelected,
            });
        }
    }

    render() {
        return (
            <div onClick={this.onDivClick.bind(this, null)} className="thumbnail listObject">                    
                <div>
                    <div onClick={this.onDivClick.bind(this, this.props.country.name)}
                         className={(this.state.isSelected ? 'show' : 'hide')}>
                        <button id="btnRemove" className="btn btn-danger" >Remove</button>
                    </div>
                    <div>
                        <p><span className="bold">{this.props.country.name}</span></p>
                        <p>Population: <span className="bold">{this.props.country.population}</span></p>
                    </div>
                </div>
            </div>
        )
    }    
}

ReactDOM.render(
    <ListOfCountries />,
    document.getElementById('myDiv')
);