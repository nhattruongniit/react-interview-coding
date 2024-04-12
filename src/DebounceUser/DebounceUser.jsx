import React from "react";

function DebounceUser() {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Requirements</h2>
      <div className="space-y-1 text-gray-500 list-disc list-inside">
        - When users open the page, they can easily see a list of all the
        application users. <br />
        - Users have the ability to search for users by their name. <br />
        - Users can arrange the displayed list of users by name or age. <br />-
        Clicking on a user allows users to see detailed information about that
        specific individual.
      </div>

      <form className="max-w-sm flex items-center mt-4">
        <div className="flex items-center">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900 mr-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Please input name"
          />
        </div>
        <button
          type="submit"
          className="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default DebounceUser;
