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
