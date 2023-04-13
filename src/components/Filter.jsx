import { useSearchParams } from "next/navigation";

const Filter = (props) => {
  const SearchParams = useSearchParams();
  const category = SearchParams.get("category");

  return (
    <div className="flex items-center justify-center">
      <label for="categories" className="block mb-2 text-sm font-medium text-gray-900 white:text-white">Select an option</label>
      <div>
        <select
          name="category-list"
          id="category-list"
          className="bg-black-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={props.getSelectedValue}
        >
            <option value="all">select ...</option>
          <option value="all">All</option>

          {props.filter.data.map((elt, index) => {
            return (
              <option key={index} value={elt.attributes.name}>
                {elt.attributes.name}
              </option>
            );
          })}
        </select>
      </div>
      {/* <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => props.fetchSelectedValue(category)}
      >
        {" "}
        filter{" "}
      </button> */}
    </div>
  );
};

export default Filter;
