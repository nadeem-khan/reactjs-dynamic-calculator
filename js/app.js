import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {version: React.version};
  }

  
  render() {
    return (
         <div className="page-wrap">
      <Items />
    </div>
    )
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);