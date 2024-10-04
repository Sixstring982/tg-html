/// <reference path="./jsx/element-types.d.ts" />
/// <reference path="./jsx/intrinsic-elements.d.ts" />

type FunctionComponent = (props: unknown) => JSX.Element;

export function createElement<K extends keyof JSX.IntrinsicElements>(
  elementConstructor: K,
  props: JSX.IntrinsicElements[K] | null,
  ...children: readonly JSX.Element[]
): JSX.Element;
export function createElement(
  elementConstructor:
    | keyof JSX.IntrinsicElements
    | FunctionComponent
    | undefined,
  props: unknown,
  ...children: readonly JSX.Element[]
): JSX.Element {
  if (elementConstructor === undefined) {
    // Fragment...
    return children.join("");
  }
  if (typeof elementConstructor === "string") {
    return createIntrinsicElement(
      elementConstructor,
      props as JSX.IntrinsicElements[keyof JSX.IntrinsicElements],
      ...children,
    );
  }
  return createFunctionElement(elementConstructor, props, ...children);
}

function createIntrinsicElement<K extends keyof JSX.IntrinsicElements>(
  tag: K,
  props: JSX.IntrinsicElements[K] | null,
  ...children: readonly JSX.Element[]
): JSX.Element {
  let formattedProps = formatIntrinsicProps(props);
  if (formattedProps === undefined) {
    formattedProps = "";
  } else {
    formattedProps = " " + formattedProps;
  }

  if (children.length === 0) {
    return `<${tag}${formattedProps}></${tag}>`;
  }
  return `<${tag}${formattedProps}>${children.join("")}</${tag}>`;
}

function formatIntrinsicProps(
  props: JSX.IntrinsicElements[keyof JSX.IntrinsicElements] | null,
): JSX.Element | undefined {
  if (props === null) return undefined;
  const results: string[] = [];

  for (const p in props) {
    const value: unknown = props[p as keyof typeof props];
    if (typeof value === "boolean" && value === true) {
      results.push(`${p}`);
      continue;
    }

    results.push(`${p}="${value}"`);
  }

  if (results.length === 0) return undefined;

  return results.join(" ");
}

function createFunctionElement(
  elementConstructor: FunctionComponent,
  props: unknown,
  ...children: readonly JSX.Element[]
): JSX.Element {
  const rendered = elementConstructor(
    children.length === 0 ? props : { children, ...(props ?? {}) },
  );

  return rendered;
}
