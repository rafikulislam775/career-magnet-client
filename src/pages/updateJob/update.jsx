import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AllJobCards from "../../components/JobsCards/AllJobCards";

const UpdateJob = () => {
  const axios = useAxios();
  const allJobs = async () => {
    const res = await axios.get("/allJobs");
    return res;
  };
  //01
  const {
    data: Jobs,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["AllJobs"],
    queryFn: allJobs,
  });
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-red-900"></div>
    );
  }
  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }
  console.log("allJobs", isLoading, Jobs);
  return (
    <div className="min-h-screen   ">
      <div className="text-8xl text-center pt-10 ">
        {" "}
        <span className=""> Our Recent Jobs</span>
      </div>
      <p className="my-10 text-center">
        The Easiest Way to Get Your New Job ! 8 new opportunities posted today!
      </p>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-3 gap-4 space-y-3 ">
          {Jobs?.data
            .filter((data) => data.id === null || data.id === undefined)
            .map((filteredData) => (
              <AllJobCards
                key={filteredData._id}
                data={filteredData}
              ></AllJobCards>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
