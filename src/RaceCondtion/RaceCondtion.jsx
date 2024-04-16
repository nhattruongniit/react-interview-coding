import React from 'react';

const DIRECTION = {
  DEFAULT: 'DEFAULT',
  ASC: 'ASC',
  DESC: 'DESC'
}

const HEADERS = ['title', 'brand', 'stock', 'price']

function fetchSortHeader() {
  return HEADERS.reduce((acc, curr) => {
    acc[curr] = DIRECTION.DEFAULT;
    return acc;
  }, {})
}

const useDebounce = (text, delay = 1000) => {
  const [debounced, setDebounced] = React.useState(text);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(text);
    }, delay)

    return () => {
      clearTimeout(timer);
    }
  }, [text])

  return debounced;
}



function RaceCondtion() {
  const [dataSouce, setDataSource] = React.useState([]);
  const [textSeach, setTextSearch] = React.useState('');
  const [sortDirection, setSortDirection] = React.useState(fetchSortHeader);
  const [product, setProduct] = React.useState(null);
  const [productId, setProductId] = React.useState(null);
  const debounced = useDebounce(textSeach)

  // initialize products
  React.useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5')
      .then(res => res.json())
      .then(data => setDataSource(data.products))
  }, []);

  // fetch detail product
  React.useEffect(() => {
    if(!productId) return;
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(`https://dummyjson.com/product/${productId}`, {
        signal: abortController.signal
      })
        .then(res => res.json())
        .then(data => setProduct(data))
    }, 500)

    return () => {
      if(abortController) {
        abortController.abort();
      }
    }
  }, [productId])

  const dataTable = React.useMemo(() => {
    return dataSouce.filter(data => data.title.toLowerCase().includes(debounced.toLowerCase()))
  }, [dataSouce, debounced])

  
  function handleSearch(e) {
    setTextSearch(e.target.value)
  }

  function toggleSort(header) {
    const currentDirection = sortDirection[header];
    const isAsc = currentDirection === DIRECTION.DEFAULT || currentDirection === DIRECTION.ASC;

    // sort table
    const newDataSource = dataTable.sort((a, b) => {
      const partA = a[header];
      const partB = b[header];

      if(isAsc) {
        if(partA > partB) return -1
        if(partA < partB) return 1
        return 0
      } else {
        if(partA > partB) return 1
        if(partA < partB) return -1
        return 0
      }
    })
    setDataSource(newDataSource)

    // set next direction
    const nextDirection = isAsc ? DIRECTION.DESC : DIRECTION.ASC;
    setSortDirection(prevState => ({
      ...prevState,
      [header]: nextDirection
    }))
  }

  function handleViewDetail(id) {
    setProductId(id)
  }

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Requirements</h2>
      <div>
        Implement a feature where clicking on a <b>Title</b> from the list immediately triggers a fetch 
        request for their details. However, if another Title is clicked before the previous request is abort, 
        ensure that only the details for the most recently clicked title are displayed.
      </div>
      <ul className='pl-10 list-disc mt-4'>
        <li>Show list</li>
        <li>Sort by column</li>
        <li>Search by name</li>
        <li>Just show the most recntly product</li>
      </ul>

      <div className='mt-4 flex justify-end items-center'>
        <label className='mr-2'>Search:</label>
        <input type="text" id="small-input" onChange={handleSearch} className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"/>
      </div>

      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {HEADERS.map(header => (
                <th key={header} scope="col" className="px-6 py-3 cursor-pointer" onClick={() => toggleSort(header)}>
                  <div className='flex justify-between'>
                    {header}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTable.map(data => (
              <tr key={data.id} className="bg-white border-b">
                <th 
                  scope="row" 
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-[#0060FD] cursor-pointer" 
                  onClick={() => handleViewDetail(data.id)}
                >
                  {data.title}
                </th>
                <td className="px-6 py-4">
                  {data.brand}
                </td>
                <td className="px-6 py-4">
                  {data.stock}
                </td>
                <td className="px-6 py-4">
                  {data.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-4'>
        <h3 className='font-bold'>Show detail</h3>
        Title: {product?.title || 'N/A'} <br />
        Brand: {product?.brand || 'N/A'} 
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default RaceCondtion
