export default function HowItWorks() {
  return (
    <section className="mt-32 mb-20">
      {/* Заголовок та опис */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How it works</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Renting a luxury car has never been easier. Our streamlined process makes it simple for
          you to book and confirm your vehicle of choice online
        </p>
      </div>

      {/* Головний блок з контентом */}
      <div className="relative">
        {/* Сірий прямокутник на фоні правої частини (тільки для великих екранів) */}
        <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full bg-[#f8f9fa] rounded-3xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Ліва колонка: Кроки (Картки) */}
          <div className="flex flex-col gap-6 md:py-8">
            {/* Крок 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex gap-5 items-start">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Browse and select</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Choose from our wide range of premium cars, select the pickup and return dates and
                  locations that suit you best.
                </p>
              </div>
            </div>

            {/* Крок 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex gap-5 items-start">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Book and confirm</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Book your desired car with just a few clicks and receive an instant confirmation
                  via email or SMS.
                </p>
              </div>
            </div>

            {/* Крок 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex gap-5 items-start">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enjoy your ride</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Pick up your car at the designated location and enjoy your premium driving
                  experience with our top-quality service.
                </p>
              </div>
            </div>
          </div>

          {/* Права колонка: Зображення авто */}
          <div className="p-4 md:p-10">
            {/* Заміни /jeep.png на шлях до своєї картинки */}
            <img
              src="/jeep.png"
              alt="Jeep Wrangler"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
