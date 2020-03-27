class ToDo extends React.Component {
  render() {
    const title = "Todo ";
    const data = "data from main passed down to child coponents ";
    const options = ["item1", "item2", "item3"];

    return (
      <div>
        <Header title={title} data={data} />
        <Action />
        <AddOption />
        <Options options={options} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title} app</h1>
        <h2>{this.props.data}</h2>
        <h2>pick a random task</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("action alert");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should i do ?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    // instead of having bind everytime this methid is called, you can bind it once in the constructor
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert("handle remove all action");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ToDo />, document.getElementById("app"));

/*
var app = {
  title: "Random ToDo",
  subtitle: "desc here",
  options: []
};
function getDesc(subtitle) {
  if (subtitle) {
    return <p>Description: {subtitle}</p>;
  } else {
    return undefined;
  }
}
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};
const onRemoveAll = () => {
  app.options = [];
  render();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const render = () => {
  var template = (
    <div>
      <h1>{app.title ? app.title : "ToDo"}</h1>
      {getDesc(app.subtitle)}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should i do?
      </button>
      <button onClick={onRemoveAll}>Clear</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  var appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};
render();
*/
