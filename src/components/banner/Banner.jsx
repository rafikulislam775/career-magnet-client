const Banner = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-gradient-to-r from-red-800">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/b7wWRLD/bannerimg-removebg-preview.png"
            className="max-w-sm "
          />
          <div>
            <h1 className="text-5xl font-bold text-white uppercase ">
              Find your job here!
            </h1>
            <p className="py-6 text-2xl">
              provides a wide range of job options in various field around the
              world.
            </p>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
