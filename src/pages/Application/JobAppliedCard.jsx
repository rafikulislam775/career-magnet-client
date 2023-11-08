import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";
import { SiArxiv } from "react-icons/si";
import useAxios from "../../hooks/useAxios";

const JobAppliedCard = ({ data }) => {
  const scale = 1.1;
  const { _id, name, img, title, category, applicationDeadline, salaryRange } =
    data;
  const axios = useAxios();
  const handleDelete = (id) => {
    console.log(id);
    //   axios.delete(`/applyJob/${id}`).then((res) => console.log(res));
    //
    fetch(`http://localhost:5001/applyJob/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
        <div className="flex flex-col dark:bg-gray-900">
          <div
            aria-label="Te nulla oportere reprimique his dolorum"
            className=" "
          >
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src={img}
            />
            <span
              onClick={() => handleDelete(_id)}
              className=" text-white btn btn-sm absolute btn-error  m-4 -top-1 -right-1"
            >
              <SiArxiv></SiArxiv>
            </span>
          </div>
          <div className="flex flex-col flex-1 p-6">
            <div aria-label="Te nulla oportere reprimique his dolorum"></div>
            <div className="text-xs tracki uppercase hover:underline dark:text-violet-400">
              {category}
            </div>
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
