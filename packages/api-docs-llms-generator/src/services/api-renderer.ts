import parseMarkdown from "./html-to-markdown";

export interface ApiPageContent {
  name: string;
  muiName: string;
  deprecated?: boolean;
  demos?: string;
  imports?: string[];
  filename: string;
  cssComponent?: boolean;
  forwardsRefTo?: string | null;
  inheritance?: {
    component: string;
    pathname: string;
  };
  spread?: boolean;
  props?: Record<string, {
    type: {
      name: string;
      description?: string;
    };
    default?: string;
    additionalInfo?: {
      sx?: boolean;
    };
  }>;
  slots?: {
    name: string;
    description: string;
    default: string;
    class: string | null;
  }[];
  classes?: {
    key: string;
    className: string;
    description: string;
    isGlobal: boolean;
  }[];
}

export function renderApiPageHtml(data: ApiPageContent) {
  const {
    name,
    cssComponent,
    deprecated,
    forwardsRefTo,
    inheritance,
    props: componentProps,
    spread,
    slots: componentSlots = [],
    classes,
    imports,
  } = data;

  const heading = (text: string, num: number = 2) => `<h${num}>${text}</h${num}>`;
  const code = (text: string) => `<code>${text}</code>`
  const pre = (text: string) => `<pre>${code(text)}</pre>`
  const tr = (...rows: string[]) => `<tr>${rows.map(it => `<td>${it}</td>`).join('')}</tr>`
  const alert = (text: string, severity: 'info' | 'success' | 'warning' | 'error' = 'info') => `:::${severity}\n${text}\n:::`

  const getRefForwardingText = () => {
    if (forwardsRefTo === null) {
      return alert('The component cannot hold a ref.');
    }
    if (forwardsRefTo) {
      return alert(`The <code>ref</code> is forwarded to the ${forwardsRefTo} element.`);
    }
    return alert('The <code>ref</code> is forwarded to the root element.');
  };

  const sections = [
    // Title section
    `<h1>${name} API</h1>`,

    // Deprecated warning
    deprecated ? alert('This component is deprecated', 'warning') : '',

    // Description
    `The ${name} component API documentation.`,

    // Demos section
//     heading('Demos'),
//     demos ? `<div class="success">
//   <p>For examples and details on the usage of this React component, visit the component demo pages:</p>
//   ${demos}
// </div>` : '',

    // Import section
    ...(imports && imports.length > 0 ? [
      heading('Import'),
      pre(imports.join('\n// or\n')),
    ] : []),

    // Props section
    ...(componentProps && Object.keys(componentProps).length > 0 ? [
      heading('Props'),
      spread ? `<p>Any other props supplied will be provided to the root element (${inheritance ? `<a href="${inheritance.pathname}">${inheritance.component}</a>` : 'native element'}).</p>` : '',
      Object.keys(componentProps).length > 0 ? `<div class="props-section">
  <table>
    <thead>
      ${tr('Name', 'Type', 'Default', 'Description')}
    </thead>
    <tbody>
      ${Object.entries(componentProps)
        .map(([propName, prop]) =>
          tr(
            code(propName),
            code(prop.type.name) + (prop.type.description ? `<small>${prop.type.description}</small>` : ''),
            prop.default ? `${code(prop.default)}` : '-',
            prop.additionalInfo?.sx ? `The <code>sx</code> prop is also available.` : '-',
          )
        )
        .join('')}
    </tbody>
  </table>
</div>` : ''
    ] : []),

    // CSS Component info
    cssComponent ? `<p>The component is styled using the <code>${name}</code> CSS class.</p>` : '',

    // Ref forwarding info
    getRefForwardingText(),

    // Inheritance section
    inheritance ? [
      heading('Inheritance', 3),
      `<p>The props of the <a href="${inheritance.pathname}">${inheritance.component}</a> component are also available.</p>`
    ].join('\n') : '',

    // Slots section
    componentSlots.length > 0 ? [
      heading('Slots'),
      `<div class="slots-section">
  <p>The component can be customized using the following slots:</p>
  <table>
    <thead>
      ${tr('Name', 'Default', 'Description')}
    </thead>
    <tbody>
      ${componentSlots
        .map(slot => tr(
          code(slot.name),
          code(slot.default),
          slot.description,
        ))
        .join('')}
    </tbody>
  </table>
</div>`
    ].join('\n') : '',

    // CSS Classes section
    classes && classes.length > 0 ? [
      heading('CSS classes'),
      `<div class="classes-section">
  <p>The component can be styled using the following CSS classes:</p>
  <table>
    <thead>
      ${tr('Rule name', 'Global class', 'Description')}
    </thead>
    <tbody>
      ${classes
        .map(cls => tr(
          code(cls.key),
          code(cls.className),
          cls.description,
        ))
        .join('')}
    </tbody>
  </table>
</div>`
    ].join('\n') : '',
  ];

  // Filter out empty strings and join with newlines
  return sections.filter(Boolean).join('\n\n');
}

export async function renderApiPageMarkdown(data: ApiPageContent): Promise<string> {
  const html = renderApiPageHtml(data);
  return parseMarkdown(html);
}
