class InputField extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("input", {
      disabled: this.props.disabled,
      type: "text",
      name: this.props.cellData.type,
      id: this.props.cellData.id,
      value: this.props.cellData.value,
      onChange: this.props.onItemUpdate
    });
  }

}

var _ref = /*#__PURE__*/React.createElement("option", {
  value: "1"
}, "+");

var _ref2 = /*#__PURE__*/React.createElement("option", {
  value: "2"
}, "-");

class SelectField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("select", {
      disabled: this.props.disabled,
      name: this.props.cellData.type,
      id: this.props.cellData.id,
      value: this.props.cellData.operator,
      onChange: this.props.onItemUpdate
    }, _ref, _ref2);
  }

}

class ItemRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.item);
  }

  onDisableEvent() {
    this.props.onDisableEvent(this.props.item);
  }

  onEnableEvent() {
    this.props.onEnableEvent(this.props.item);
  }

  render() {
    var disabled = this.props.disabled;
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(SelectField, {
      disabled: disabled,
      onItemUpdate: this.props.onItemUpdate,
      cellData: {
        type: "operator",
        value: this.props.item.price,
        operator: this.props.item.operator,
        id: this.props.item.id
      }
    }), /*#__PURE__*/React.createElement(InputField, {
      disabled: disabled,
      onItemUpdate: this.props.onItemUpdate,
      cellData: {
        type: "price",
        value: this.props.item.price,
        id: this.props.item.id
      }
    }), /*#__PURE__*/React.createElement("input", {
      className: "btn btn-danger",
      type: "button",
      onClick: this.onDelEvent.bind(this),
      value: "Delete"
    }), (() => {
      if (disabled) {
        return /*#__PURE__*/React.createElement("input", {
          className: "btn btn-success",
          type: "button",
          onClick: this.onEnableEvent.bind(this),
          value: "Enable"
        });
      } else {
        return /*#__PURE__*/React.createElement("input", {
          className: "btn btn-dark",
          type: "button",
          onClick: this.onDisableEvent.bind(this),
          value: "Disable"
        });
      }
    })());
  }

}

class Body extends React.Component {
  render() {
    var onItemUpdate = this.props.onItemUpdate;
    var rowDel = this.props.onRowDel;
    var rowDisable = this.props.onRowDisable;
    var rowEnable = this.props.onRowEnable;
    var result = 0;
    var disabled = false;
    var item = this.props.items.map(function (item) {
      if (item.ignore == 0 && item.operator == 1) {
        result = parseInt(result) + parseInt(item.price);
      } else if (item.ignore == 0 && item.operator == 2) {
        result = parseInt(result) - parseInt(item.price);
      }

      if (item.ignore == 1) {
        disabled = true;
      } else if (item.ignore == 0) {
        disabled = false;
      }

      return /*#__PURE__*/React.createElement(ItemRow, {
        disabled: disabled,
        onItemUpdate: onItemUpdate,
        item: item,
        onEnableEvent: rowEnable.bind(this),
        onDisableEvent: rowDisable.bind(this),
        onDelEvent: rowDel.bind(this),
        key: item.id
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: this.props.onRowAdd,
      className: "btn btn-success"
    }, "Add row"), /*#__PURE__*/React.createElement("ul", {
      className: "calculator-ul"
    }, item), /*#__PURE__*/React.createElement("h1", {
      className: "card-title pricing-card-title"
    }, "Result: ", parseInt(result)))));
  }

}

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.items = [{
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
    }];
  }

  handleRowDel(item) {
    var index = this.state.items.indexOf(item);
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
  }

  handleRowDisable(item) {
    var index = this.state.items.indexOf(item);
    this.state.items[index].ignore = 1;
    this.setState(this.state.items);
  }

  handleRowEnable(item) {
    var index = this.state.items.indexOf(item);
    this.state.items[index].ignore = 0;
    this.setState(this.state.items);
  }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var item = {
      id: id,
      operator: 1,
      price: 0,
      ignore: 0
    };
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
    this.setState({
      items: newitems
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Body, {
      onItemUpdate: this.handleitemTable.bind(this),
      onRowAdd: this.handleAddEvent.bind(this),
      onRowDel: this.handleRowDel.bind(this),
      onRowEnable: this.handleRowEnable.bind(this),
      onRowDisable: this.handleRowDisable.bind(this),
      items: this.state.items
    }));
  }

}

var _ref$1 = /*#__PURE__*/React.createElement("div", {
  className: "page-wrap"
}, /*#__PURE__*/React.createElement(Items, null));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: React.version
    };
  }

  render() {
    return _ref$1;
  }

}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
