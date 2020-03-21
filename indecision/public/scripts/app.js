"use strict";

var app = {
  title: "Random ToDo",
  subtitle: "desc here",
  options: []
};

function getDesc(subtitle) {
  if (subtitle) {
    return React.createElement(
      "p",
      null,
      "Description: ",
      subtitle
    );
  } else {
    return undefined;
  }
}

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];

  alert(option);
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title ? app.title : "ToDo"
    ),
    getDesc(app.subtitle),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should i do?"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Clear"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  var appRoot = document.getElementById("app");

  ReactDOM.render(template, appRoot);
};

render();
