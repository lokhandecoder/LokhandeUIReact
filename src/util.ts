import React from 'react';
import ReactDOMServer from 'react-dom/server';

function componentToJsxString(Component: React.FC<any>): string {
  const jsxElement = React.createElement(Component);
  return ReactDOMServer.renderToStaticMarkup(jsxElement);
}

export default componentToJsxString;
