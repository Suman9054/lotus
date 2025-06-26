const Card = () => {
  return (
    <div className="w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
      <legend className="text-xl font-semibold mb-3 select-none">
        Choose One
      </legend>
      <label
        htmlFor="html"
        className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
      >
        <div className="w-5 fill-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g id="c133de6af664cd4f011a55de6b0011b2">
              <path
                display="inline"
                d="M30.713,0.501L71.717,460.42l184.006,51.078l184.515-51.15L481.287,0.501H30.713z M395.754,109.646   l-2.567,28.596l-1.128,12.681h-0.187H256h-0.197h-79.599l5.155,57.761h74.444H256h115.723h15.201l-1.377,15.146l-13.255,148.506   l-0.849,9.523L256,413.854v0.012l-0.259,0.072l-115.547-32.078l-7.903-88.566h26.098h30.526l4.016,44.986l62.82,16.965l0.052-0.014   v-0.006l62.916-16.977l6.542-73.158H256h-0.197H129.771l-13.863-155.444l-1.351-15.131h141.247H256h141.104L395.754,109.646z"
              />
            </g>
          </svg>
        </div>
        HTML
        <input
          defaultChecked
          type="radio"
          name="status"
          className="peer/html w-4 h-4 absolute accent-current right-3"
          id={}
        />
      </label>
    </div>
  );
};

export default Card;
