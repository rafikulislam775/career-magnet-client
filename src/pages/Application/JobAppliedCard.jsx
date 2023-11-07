import Tilt from "react-parallax-tilt";
import { MdCalendarMonth } from "react-icons/md";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const JobAppliedCard = ({ data }) => {
  const scale = 1.1;
  const { _id, name, img, title, category, applicationDeadline, salaryRange } =
    data;
  return (
    <div>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <div className="flex flex-col dark:bg-gray-900">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src={img}
            />
          </a>
          <div className="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs tracki uppercase hover:underline dark:text-violet-400"
            >
              {category}
            </a>
            <h3 className="flex-1 py-2 text-lg font-semibold leadi">{title}</h3>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
              <span>{applicationDeadline}</span>
              <span>{salaryRange}</span>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
JobAppliedCard.propTypes = {
  data: PropTypes.object,
};

export default JobAppliedCard;
