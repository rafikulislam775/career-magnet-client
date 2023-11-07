import Tilt from "react-parallax-tilt";
import { MdCalendarMonth } from "react-icons/md";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const AllJobCards = ({ data }) => {
  const scale = 1.1;
  const { _id, name, img, title, category, applicationDeadline, salaryRange } =
    data;
  return (
    <div>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <div className="card  bg-base-100 shadow-xl border">
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
            <div className="flex items-center">
              {" "}
              Application Date Line :<MdCalendarMonth></MdCalendarMonth>{" "}
              <div> {applicationDeadline}</div>
            </div>
            <div className="card-actions">
              {/* <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div> */}
              <NavLink to={`/jobDetails/${_id}`}>
                <button className="btn btn-sm">details</button>
              </NavLink>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
AllJobCards.propTypes = {
  data: PropTypes.object,
};

export default AllJobCards;
