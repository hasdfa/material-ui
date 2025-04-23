import * as ReactDOM from 'react-dom/server';

export default async function reactRenderComponentToHtml(filePath: string) {
  let module = await import(filePath);
  if (module.default) {
    module = module.default;
  }

  return ReactDOM.renderToString(module.default);
}
