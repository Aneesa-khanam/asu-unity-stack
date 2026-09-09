// @ts-check
import React from "react";

import { getReactRoot } from "../../../../shared/utils/react-root";
import { MyComponent } from "../components/index";

/**
 * @typedef {Object} ComponentProps
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the footer should be either hydrated or rendered.
 * @property {object} props - Properties to initialize the footer with.
 * Should only be set to true if the footer has been completely rendered server-side.
 */

const RenderReact = (component, props, target) => {
  getReactRoot(target).render(React.createElement(component, props));
};

/**
 * @param {ComponentProps} props
 */
const initMyComponent = ({ targetSelector, props }) => {
  RenderReact(MyComponent, props, document.querySelector(targetSelector));
};

export { initMyComponent };
