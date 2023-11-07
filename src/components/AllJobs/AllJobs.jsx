import { useQuery } from "@tanstack/react-query";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxios from "../../hooks/useAxios";
import AllJobCards from "../JobsCards/AllJobCards";

const AllJobs = () => {

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
      <span className="loading text-8xl loading-spinner text-error"></span>
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

      <Tabs className="container mx-auto">
        <TabList className="flex gap-8 justify-center tabs my-10 ">
          <Tab className="btn btn-sm btn-outline tab-lifted">All Jobs</Tab>
          <Tab className="btn btn-sm btn-outline tab-lifted  ">Remote Job</Tab>
          <Tab className="btn btn-sm btn-outline tab-lifted">Hybrid</Tab>
          <Tab className="btn btn-sm btn-outline tab-lifted ">On Site Job</Tab>
          <Tab className="btn btn-sm btn-outline tab-lifted ">Part Time</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-4 gap-4 space-y-3">
            {Jobs?.data?.map((data) => (
              <AllJobCards key={data._id} data={data}></AllJobCards>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-4 gap-4 space-y-3">
            {Jobs?.data
              .filter((data) => data.category === "Remote Job")
              .map((filteredData) => (
                <AllJobCards
                  key={filteredData._id}
                  data={filteredData}
                ></AllJobCards>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-4 gap-4 space-y-3">
            {Jobs?.data
              .filter((data) => data.category === "Hybrid")
              .map((filteredData) => (
                <AllJobCards
                  key={filteredData._id}
                  data={filteredData}
                ></AllJobCards>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-4 gap-4 space-y-3">
            {Jobs?.data
              .filter((data) => data.category === "On Site Job")
              .map((filteredData) => (
                <AllJobCards
                  key={filteredData._id}
                  data={filteredData}
                ></AllJobCards>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-4 gap-4 space-y-3">
            {Jobs?.data
              .filter((data) => data.category === "Part Time")
              .map((filteredData) => (
                <AllJobCards
                  key={filteredData._id}
                  data={filteredData}
                ></AllJobCards>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllJobs;
