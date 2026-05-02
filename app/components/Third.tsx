import Image from "next/image";

export default function Third() {
  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Laptop Image Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#E5E7EB] aspect-[4/5] md:aspect-[1.2/1]">
            <Image
              src="/Small.jpeg"
              alt="Dashboard on Laptop"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
              <div className="rounded-full bg-white/90 backdrop-blur-sm px-6 py-3">
                <span className="text-sm font-medium text-black">Demo our dashboard.</span>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Features and Green Stats */}
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-8">
              {/* Feature 01 */}
              <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-xs font-medium text-gray-400">01</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <h3 className="text-lg font-bold text-black">AI Revolution</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-poppins">
                    Access procurement securely with Blockchain, ensuring part authenticity.
                  </p>
                </div>
              </div>

              {/* Feature 02 */}
              <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-xs font-medium text-gray-400">02</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <h3 className="text-lg font-bold text-black">AI Chatbot JET</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-poppins">
                    Boost sourcing with AI Chatbot JET on popular messaging platforms.
                  </p>
                </div>
              </div>

              {/* Feature 03 */}
              <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-xs font-medium text-gray-400">03</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <h3 className="text-lg font-bold text-black">AI Assistance</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-poppins">
                    Interact efficiently with our system using voice commands.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="max-w-xs text-sm text-gray-500 leading-relaxed font-poppins">
                Explore a multitude of benefits meticulously tailored to meet the unique needs of buyers.
              </p>
              
              {/* Green Stats Box */}
              <div className="w-full md:w-64 bg-[#00C875] rounded-md p-8 text-white">
                <h2 className="text-6xl font-bold mb-8">40%</h2>
                <p className="text-xs font-medium leading-relaxed font-poppins opacity-90">
                  JET AI Chatbot slashes response times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
