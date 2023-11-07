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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos commodi sed accusamus quam mollitia architecto
            perferendis blanditiis voluptate placeat qui provident eius iure eum
            ut, magnam doloribus assumenda distinctio quidem repellendus? Quo
            sint ipsa consequuntur enim unde porro assumenda explicabo doloribus
            reprehenderit, similique repudiandae quae corporis quaerat
            temporibus atque blanditiis!
          </p>
        </TabPanel>

        <TabPanel>
          <p>
            Shigeru Miyamoto, Peach is the princess of the fictional Mushroom
            Kingdom, which is constantly under attack by Bowser. She often plays
            the damsel in distress role within the series and is the lead
            female. She is often portrayed as Marios love interest and has
            appeared in Super Princess Peach, where she is the main playable
            character.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            the Super Nintendo Entertainment System as Mario and Ls sidekick.
            Yoshi later starred in platform and puzzle games, including Super
            Mario World 2: Yoshis Island, Yoshis Story and Yoshis Woolly World.
            Yoshi also appears in many of the Mario spin-off games, including
            Mario Party and Mario Kart, various Mario sports games, and
            Nintendos crossover fighting game series Super Smash Bros. Yoshi
            belongs to the species of the same name, which is characterized by
            their variety of colors.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            behalf. He is usually seen as a non-player character (NPC) who
            provides assistance to Mario and his friends in most games, but
            there are times when Toad(s) takes center stage and appears as a
            protagonist, as seen in Super Mario Bros. 2, Super Mario 3D World,
            and Captain Toad: Treasure Tracker.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllJobs;
