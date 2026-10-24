'use client';

export default function WebsiteMockup() {
  return (
    <>
      <style jsx global>{`
        @keyframes scrollPage {
          0%, 12% { transform: translateY(0); }
          45%, 58% { transform: translateY(-220px); }
          88%, 100% { transform: translateY(0); }
        }
        @keyframes moveCursor {
          0%   { transform: translate(180px, 140px); }
          25%  { transform: translate(380px, 190px); }
          50%  { transform: translate(160px, 310px); }
          75%  { transform: translate(340px, 360px); }
          100% { transform: translate(180px, 140px); }
        }
        .mockup-page {
          animation: scrollPage 12s ease-in-out infinite;
        }
        .mockup-cursor {
          animation: moveCursor 12s ease-in-out infinite;
        }
      `}</style>

      <div className="relative w-full max-w-[560px]">
        {/* Browser */}
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-neutral-200/80">
          
          {/* Browser bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-neutral-100 border-b border-neutral-200/70">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="flex-1 h-7 bg-white rounded-md border border-neutral-200 flex items-center px-3">
              <div className="w-36 h-2 bg-neutral-200 rounded"></div>
            </div>
          </div>

          {/* Content */}
          <div className="h-[380px] overflow-hidden bg-neutral-50">
            <div className="p-6 mockup-page">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="w-20 h-4 bg-neutral-300 rounded"></div>
                <div className="flex gap-3">
                  <div className="w-10 h-2 bg-neutral-300 rounded"></div>
                  <div className="w-10 h-2 bg-neutral-300 rounded"></div>
                  <div className="w-10 h-2 bg-neutral-300 rounded"></div>
                </div>
              </div>

              {/* Hero */}
              <div className="flex gap-5 mb-8">
                <div className="flex-1 flex flex-col gap-3 pt-2">
                  <div className="h-3 bg-neutral-300 rounded w-[75%]"></div>
                  <div className="h-3 bg-neutral-300 rounded w-[55%]"></div>
                  <div className="h-3 bg-neutral-300 rounded w-[40%]"></div>
                </div>
                <div className="w-[150px] h-[100px] bg-neutral-200 rounded-lg flex-shrink-0"></div>
              </div>

              {/* Cards */}
              <div className="flex gap-3 mb-5">
                <div className="flex-1 h-20 bg-neutral-200 rounded-lg"></div>
                <div className="flex-1 h-20 bg-neutral-200 rounded-lg"></div>
                <div className="flex-1 h-20 bg-neutral-200 rounded-lg"></div>
              </div>

              <div className="mb-5">
                <div className="w-full h-24 bg-neutral-200 rounded-lg"></div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 h-20 bg-neutral-200 rounded-lg"></div>
                <div className="flex-1 h-20 bg-neutral-200 rounded-lg"></div>
              </div>

              <div className="h-28"></div>
            </div>
          </div>
        </div>

        {/* Cursor */}
        <div className="absolute top-0 left-0 z-30 pointer-events-none mockup-cursor">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5.5 3.21V20.8c0 .10.10.0.2.35l4.86-4.86 1.95 4.4c.10.0.2.3.5.22l2.2-.85c.22-.08.33-.33.24-.54l-1.95-4.4 5.53-.46c.3-.02.45-.37.24-.56L6.05 2.86a.4.4 0 0 0-.55.35z"
              fill="white"
              stroke="#111"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}