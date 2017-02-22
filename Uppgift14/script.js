const lista = [
    {namn: 'Katt' },
    {namn: 'Hav' },
    {namn: 'Gredelin' },
    {namn: 'Infrastruktur' }
];

class ListWithStuff extends React.Component {
  render() {
    const nyLista = this.props.lista.map(
      obj => (<li>{obj.namn}</li>)
    );
    return (<ul>{nyLista}</ul>);
  }
}

ReactDOM.render(
  <ListWithStuff lista={lista} />,
  document.getElementById('listDiv')
);