import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const AllJobs = () => {
  return (
    <div>
      <Tabs>
        <TabList className="flex gap-8 ">
          <Tab className="btn btn-sm">All Jobs</Tab>
          <Tab className="btn btn-sm">Remote Job</Tab>
          <Tab className="btn btn-sm">Hybrid</Tab>
          <Tab className="btn btn-sm">On Site Job</Tab>
          <Tab className="btn btn-sm">Part Time</Tab>
        </TabList>

        <TabPanel>
          <p>
            is a fictional character in the Mario video game franchise, owned by
            Nintendo and created by Japanese video game designer Shigeru
            Miyamoto. Serving as the mascot and the eponymous protagonist of the
            series, Mario has appeared in over 200 video games since his
            creation. Depicted as a short, pudgy, Italian plumber who resides in
            the Mushroom Kingdom, his adventures generally center upon rescuing
            Princess Peach from the Koopa villain Bowser. His younger brother
            and sidekick is Luigi.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos commodi sed accusamus quam mollitia architecto perferendis blanditiis voluptate placeat qui provident eius iure eum ut, magnam doloribus assumenda distinctio quidem repellendus? Quo sint ipsa consequuntur enim unde porro assumenda explicabo doloribus reprehenderit, similique repudiandae quae corporis quaerat temporibus atque blanditiis!
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
