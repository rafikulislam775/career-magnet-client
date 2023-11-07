import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import JobAppliedCard from "./JobAppliedCard";

const AppliedJobs = () => {
  const axios = useAxios();
  const applyJob = async () => {
    return await axios.get("/applyJob");
  };
  const { data } = useQuery({
    queryKey: ["applyJob"],
    queryFn: applyJob,
  });
  console.log(data?.data);
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold"> Tracking Your Applied Jobs</h2>
            <p className="font-serif text-sm dark:text-gray-400">
        
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {data?.data?.map((data) => (
              <JobAppliedCard key={data._id} data={data}></JobAppliedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppliedJobs;
