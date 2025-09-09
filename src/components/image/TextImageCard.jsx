export default function ChamferCard() {
  return (
    <div className="bg-transparent">
      <svg viewBox="0 0 400 500" className="w-full h-full">
        {/* Card outline with chamfer + border */}
        <path
          d="
            M0,0 
            H360 
            L400,40 
            V500 
            H0 
            Z
          "
          fill="white"
          stroke="#D1D5DB" /* border color */
          strokeWidth="1"
          rx="15"
        />
        {/* Content goes inside using foreignObject */}
        <foreignObject x="0" y="0" width="400" height="500">
          <div className="p-5 flex flex-col h-full">
            <h2 className="font-display text-xl font-bold text-title">Real estate</h2>
            <p className="text-paragraph text-sm mt-2">
              Fundrise is one of the 50 largest real estate private equity investors in the world by
              total annual deployment — deploying more than $1 billion annually…
            </p>

            <a
              href="#"
              className="mt-4 inline-block px-4 py-2 rounded-lg text-sm font-semibold
                         bg-btext-2-base text-white hover:bg-btext-2-dark"
            >
              Explore Our Real estate Portfolio
            </a>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
