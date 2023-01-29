import { h } from "snabbdom/h";

// initial template value
const initialState = {
  template: "",
  on: {}
}

// reducer function
const createReducer = args => (acc, currentString, index) => {
  const currentArg = args[index];
  
  if (currentArg && currentArg.type === "event"){
    return { ...acc, on: { click: currentArg.click } };
  }
  
  return {
  ...acc,
  template: acc.template + currentString + (args[index] || "")
  }
};

const createElement = tagName => ( strings, ...args) => {
  const { template, on } = strings.reduce(createReducer(args), initialState);

  return {
    type: "element",
    template: h(tagName, { on } , template)
  };
};

export const div = createElement("div");
export const p = createElement("p");
