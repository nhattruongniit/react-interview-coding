import React from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete({ onSelectItem }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [countries, setCountries] = React.useState([]);
  const [text, setText] = React.useState("");
  const debounceText = React.useCallback(lodash.debounce(value => {
    fetchData(value)
  }, DEBOUNCE_DELAY), []);

  async function fetchData(value) {
     setIsLoading(true);
    try {
      const res = await axios(`${ITEMS_API_URL}?q=${value}`);
      const data = res.data;
      setCountries(data);
    } catch(e) {
      console.error(e);
    }
    setIsLoading(false);
  }

  const onChangeText = e => {
    const { value } = e.target;
    setText(value);
    debounceText(value);
  }

  const controlClass = classnames({
    control: true,
   'is-loading': isLoading
  })

  return (
    <div className="wrapper">
      <div className={controlClass}>
        <input type="text" value={text} className="input" onChange={onChangeText} />
      </div>
      {countries.length > 0 && (
        <div className="list is-hoverable">
          {countries.map((item, index) => (
            <a key={index} href="javascript:;" className="list-item" onClick={() => onSelectItem(item)}>{item}</a>
          ))}
        </div>
      )}
      
    </div>
  );
}
