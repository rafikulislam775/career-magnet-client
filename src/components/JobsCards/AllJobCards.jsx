import Tilt from "react-parallax-tilt";

const AllJobCards = ({ data }) => {
  const scale = 1.1;
  const {
    _id,
    name,
    img,
    title,
    category,
    postingDate,
    applicationDeadline,
    salaryRange,
    jobApplicantsNumber,
  } = data;
  return (
    <div>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="object-cover h-48 w-96" src={img} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="flex items-center">
              {" "}
              <p>{title}</p>{" "}
              <div className="badge badge-outline">{category}</div>
            </div>

            <div className="badge badge-secondary">{salaryRange}</div>
            <div className="card-actions">
              {/* <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div> */}
              <button className="btn btn-sm">details</button>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default AllJobCards;
