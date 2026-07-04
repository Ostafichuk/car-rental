export default function SearchFilter() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500">Pick-up Location</label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 focus-within:border-gray-400 transition-colors">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search a location"
              className="w-full outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500">Pick-up date</label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 focus-within:border-gray-400 transition-colors">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="12/12/2023"
              className="w-full outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500">Drop-off Location</label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 focus-within:border-gray-400 transition-colors">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search a location"
              className="w-full outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500">Drop-off date</label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 focus-within:border-gray-400 transition-colors">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="12/12/2023"
              className="w-full outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        <button className="bg-[#111111] text-white rounded-lg px-6 py-3.5 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors w-full">
          <span className="text-sm font-medium">Find a Vehicle</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
