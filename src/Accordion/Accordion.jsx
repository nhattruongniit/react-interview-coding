import React from 'react'

function Accordion() {
  return (
    <>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Requirements</h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build an accordion component that a display a list of vertical stacked selections witch each container a title and content snipper.
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5">
            <li>
              User call toggle between hiding and showing large amount of content
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Demo</h2>
      <div className="accordionFluent">
        <div className="accordionItemFluent">
          <input type="checkbox" className='accordion_checkbox' />
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">CONSTRUCTION</h3>
          </div>
          <div className="accordionItemFluent-panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="accordionItemFluent">
          <input type="checkbox" className='accordion_checkbox' />
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">INTERNAL GAIN</h3>
          </div>
          <div className="accordionItemFluent-panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="accordionItemFluent">
          <input type="checkbox" className='accordion_checkbox' />
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">AIRFLOW</h3>
          </div>
          <div className="accordionItemFluent-panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="accordionItemFluent">
          <input type="checkbox" className='accordion_checkbox' />
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">HEATING & COOLING</h3>
          </div>
          <div className="accordionItemFluent-panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="accordionItemFluent">
          <input type="checkbox" className='accordion_checkbox' />
          <div className="accordionItemFluent-header">
            <h3 className="accordionItemFluent-title">
              LOCATION, CLIMATE & WEATHER
            </h3>
          </div>
          <div className="accordionItemFluent-panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion