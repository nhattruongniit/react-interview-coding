import { NavLink, Route, Routes } from "react-router-dom";

import ContactForm from "./ContactForm/ContactForm";
import Tabs from "./Tabs/Tabs";
import TrafficLight from "./TrafficLight/TrafficLight";
import JobBoard from "./JobBoard/JobBoard";
import Accordion from "./Accordion/Accordion";
import QuestionBoard from "./QuestionBoard/QuestionBoard";
import ColorBox from "./ColorBox/ColorBox";
import ElectronicStore from "./ElectronicStore/ElectronicStore";
import MultipleView from "./MultipleView/MultipleView";
import Autocomplete from "./AutoComplete/AutoComplete";
import DetectionTab from "./DetectionTab/DetectionTab";

function App() {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <aside className="relative shrink-0 bg-[#3d68ff] h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6 text-white text-center text-3xl font-semibold uppercase">
          React
        </div>
        <nav className="text-white text-base font-semibold pt-3 pl-6 list-none">
          <ul>
            <li className="flex items-center">
              <NavLink
                to="/"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Contact Form
              </NavLink>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">E</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/tabs"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Tabs
              </NavLink>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">E</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/traffic-light"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                 Traffic Light
              </NavLink>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">E</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/question-board"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Question Board
              </NavLink>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">E</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/accordion"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Accordion
              </NavLink>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">E</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/color-box"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Color Box
              </NavLink>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">E</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/job-board"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Job Board
              </NavLink>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">M</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/autocomplete"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Autocomplete
              </NavLink>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">M</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/detection-tab"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                DetectionTab
              </NavLink>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">M</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/electronic-store"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Electronic Store
              </NavLink>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">H</span>
            </li>
            <li className="flex items-center mt-6">
              <NavLink
                to="/multiple-view"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Multiple View
              </NavLink>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">H</span>
            </li>
          </ul>
    
           
        </nav>
      </aside>
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex h-[64px]">
          <div className="w-1/2"></div>
        </header>
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <Routes>
              <Route path="/" element={<ContactForm />} />
              <Route path="/tabs" element={<Tabs />} />
              <Route path="/traffic-light" element={<TrafficLight />} />
              <Route path="/job-board" element={<JobBoard />} />
              <Route path="/autocomplete" element={<Autocomplete />} />
              <Route path="/question-board" element={<QuestionBoard />} />
              <Route path="/accordion" element={<Accordion />} />
              <Route path="/color-box" element={<ColorBox />} />
              <Route path="/electronic-store" element={<ElectronicStore />} />
              <Route path="/multiple-view" element={<MultipleView />} />
              <Route path="/detection-tab" element={<DetectionTab />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
