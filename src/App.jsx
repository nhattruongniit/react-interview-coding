import { Link, Route, Routes } from 'react-router-dom';

import ContactForm from './ContactForm/ContactForm';
import Tabs from './Tabs/Tabs';
import TrafficLight from './TrafficLight/TrafficLight';
import JobBoard from './JobBoard/JobBoard';
import Accordion from './Accordion/Accordion';
import QuestionBoard from './QuestionBoard/QuestionBoard';
import ColorBox from './ColorBox/ColorBox';

function App() {

  return (
    <div className='container'>
      <h1 className="text-center text-3xl font-bold mb-10 mt-5">React Interview Coding</h1>

      <div className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            {/* <Link to="/" className="inline-block p-4 border-b-2 text-blue-600 border-blue-600">
              Contact Form
            </Link> */}
            <Link to="/" className="inline-block p-4 border-transparent text-black">
              Contact Form
            </Link>
          </li>
          <li className="me-2">
            <Link to="/tabs" className="inline-block p-4 border-transparent text-black">
              Tabs
            </Link>
          </li>
          <li className="me-2">
            <Link to="/traffic-light" className="inline-block p-4 border-transparent text-black">
              Traffic Light
            </Link>
          </li>
          <li className="me-2">
            <Link to="/job-board" className="inline-block p-4 border-transparent text-black">
              Job Board
            </Link>
          </li>
          <li className="me-2">
            <Link to="/question-board" className="inline-block p-4 border-transparent text-black">
              Question Board
            </Link>
          </li>
          <li className="me-2">
            <Link to="/accordion" className="inline-block p-4 border-transparent text-black">
              Accordion
            </Link>
          </li>
          <li className="me-2">
            <Link to="/color-box" className="inline-block p-4 border-transparent text-black">
              Color Box
            </Link>
          </li>
        </ul>
      </div>


      <div className='mt-8'>
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/traffic-light" element={<TrafficLight />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/question-board" element={<QuestionBoard />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/color-box" element={<ColorBox />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
