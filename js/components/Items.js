import Body from './Body';

class Items extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.items = [
      {
        id: 1,
        operator: 1,
        price: '100',
        ignore: 0
      }, {
        id: 2,
        operator: 1,
        price: '30',
        ignore: 0
      }, {
        id: 3,
        operator: 2,
        price: '7',
        ignore: 0
      }
    ];
  }

  handleRowDel(item) {
    var index = this.state.items.indexOf(item);
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
  };

  handleRowDisable(item) {
    var index = this.state.items.indexOf(item);
    this.state.items[index].ignore = 1;
    this.setState(this.state.items);
  };

  handleRowEnable(item) {
    var index = this.state.items.indexOf(item);
    this.state.items[index].ignore = 0;
    this.setState(this.state.items);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var item = {
      id: id,
      operator: 1,
      price: 0,
      ignore: 0
    }
    this.state.items.push(item);
    this.setState(this.state.items);

  }

  handleitemTable(evt) {
    var updatedItem = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var items = this.state.items.slice();
    var newitems = items.map(function (item) {
      for (var key in item) {
        if (key == updatedItem.name && item.id == updatedItem.id) {
          item[key] = updatedItem.value;
        }

      }
      return item;
    });
    this.setState({ items: newitems });
  };
  render() {

    return (
      <div>
        <Body onItemUpdate={this.handleitemTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} onRowEnable={this.handleRowEnable.bind(this)} onRowDisable={this.handleRowDisable.bind(this)} items={this.state.items} />
      </div>
    );

  }

}
export default Items;