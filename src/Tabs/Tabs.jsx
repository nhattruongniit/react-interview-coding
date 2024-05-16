import { useState } from 'react';

const items =[
  {
    value: 'html',
    label: 'HTML',
    panel:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    value: 'css',
    label: 'CSS',
    panel:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  },
  {
    value: 'javascript',
    label: 'JavaScript',
    panel:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
]

export default function Tabs({ defaultValue }) {
  const [value, setValue] = useState(
    defaultValue ?? items[0].value,
  );

  return (
    <>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 flex items-center">
          Requirements <span className="bg-green-100 text-greeen-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ml-2">Easy</span>
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a tabs component that displays one panel of content at a time depending 
          on the active tab element. Some HTML is provided for you as example contents.
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5">
            <li>
              Build a tabs component that displays one panel of content at a time depending on the active 
              tab element. Some HTML is provided for you as example contents.
            </li>
            <li>
              At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Demo</h2>
      <div className="tabs">
        <div className="tabs-list">
          {items.map(({ label, value: itemValue }) => {
            const isActiveValue = itemValue === value;

            return (
              <button
                key={itemValue}
                type="button"
                className={[
                  'tabs-list-item',
                  isActiveValue && 'tabs-list-item--active',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => {
                  setValue(itemValue);
                }}>
                {label}
              </button>
            );
          })}
        </div>
        <div>
          {items.map(({ panel, value: itemValue }) => (
            <div key={itemValue} hidden={itemValue !== value}>
              {panel}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
