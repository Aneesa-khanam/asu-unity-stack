// @ts-check
import { createRoot } from "react-dom/client";

/**
 * Unlike the legacy ReactDOM.render(), a React 19 root is stateful and must be
 * created only once per container. Init functions are part of the public API of
 * each package and may be called repeatedly against the same target, so roots
 * are cached and reused to turn those later calls into ordinary re-renders.
 *
 * @type {WeakMap<Element | DocumentFragment, import("react-dom/client").Root>}
 */
const roots = new WeakMap();

/**
 * @param {Element | DocumentFragment} target - The container to render into.
 * @return {import("react-dom/client").Root}
 */
const getReactRoot = target => {
  const cachedRoot = roots.get(target);
  if (cachedRoot) return cachedRoot;

  const root = createRoot(target);
  roots.set(target, root);
  return root;
};

export { getReactRoot };
