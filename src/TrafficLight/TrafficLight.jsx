import React from 'react'

const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};

function TrafficLight() {
  const [currentColor, setCurrentColor] = React.useState('green');

  React.useEffect(() => {
    const { duration, next } = config[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 flex items-center">
          Requirements <span className="bg-green-100 text-greeen-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ml-2">Easy</span>
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a traffic light where the lights switch from green to yellow to red after 
          predetermined intervals and loop indefinitely. Each light should be lit for the following durations:
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5  ml-5">
            <li>
              Red light: appear after 3000ms (yellow → 3s → red)
            </li>
            <li>
              Yellow light: appear after 4000ms (green → 4s → yellow)
            </li>
            <li>
              Green light: appear after 5000ms (yellow → 5s → green)
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />
      <hr />
      <br />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Demo</h2>

      <div className='traffic_container'>
        <div
          className={[
            'traffic-light-container traffic-light-container--vertical',
            // layout === 'vertical' &&'traffic-light-container--vertical',
          ]
            .filter((cls) => !!cls)
            .join(' ')}>
          {Object.keys(config).map((color) => (
              <div
                key={color}
                className="traffic-light"
                style={{ 
                  backgroundColor: color === currentColor ? config[color].backgroundColor : undefined
                }}
              />
          ))}
        </div>
      </div>
      
      {/* 
      <div className='traffic_container'>
        <div className="traffic-light-container traffic-light-container--vertical">
          <div
            aria-hidden="true"
            className="traffic-light"
            style={{ backgroundColor: 'red' }}
          />
          <div aria-hidden="true" className="traffic-light"></div>
          <div aria-hidden="true" className="traffic-light"></div>
        </div>
      </div> */}
    </>
  )
}

export default TrafficLight