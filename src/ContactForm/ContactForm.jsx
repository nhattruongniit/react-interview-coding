function ContactForm() {
  return (
    <>
      <input className="standard-input" disabled value="http://localhost:5173/en-th/promotion?promoId=55&amp;promoType=%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%84%E0%B8%8A%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88&amp;lang=EN_TH" />
          
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 flex items-center">
          Requirements <span className="bg-green-100 text-greeen-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ml-2">Easy</span>
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a form user interface and show the data in a table.
        </div>
        <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5">
          <li>
            Show error message when user input invalid data.
          </li>
          <li>
            Check password and confirm password are matched.
          </li>
          <li>
            Complete the form and show the data in a table.
          </li>
        </ul>
        <br />
        <h2 className="text-lg font-semibold text-gray-900">Technical</h2>
        <ul className="space-y-1 text-gray-500 list-disc list-inside ml-5 mt-5">
          <li>
            react hook form
          </li>
          <li>
            tailwindcss
          </li>
        </ul>
      </div>
      <br />
      <br />

      <form>
        <div className="mb-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Name</label>
            <input type="text" id="name" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5" />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">Please enter name.</p>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="john.doe@company.com" />
        </div> 
        <div className="mb-6">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 w-full p-2.5 text-gray-900 text-sm rounded-lg">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="•••••••••" />
        </div> 
        <div className="mb-6">
          <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
          <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="•••••••••" />
        </div> 
        <div className='flex justify-end'>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </div>
      </form>

      <br />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Country
                    </th>
                </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                  macbook@gmail.com
                </td>
                <td className="px-6 py-4">
                  Canada
                </td>
              </tr>
              <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                  microsoft@gmail.com
                </td>
                <td className="px-6 py-4">
                  United States
                </td>
              </tr>
            </tbody>
        </table>
      </div>
      <br />
      <br />
    </>
  )
}

export default ContactForm