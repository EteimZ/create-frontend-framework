import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

// initial stagte of the component
const initialState = { firstName: "Eteimorde", lastName: "Youdiowei" };

// state mutating actions
const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
};

// component template
const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("Jacob")
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template, methods, initialState });
