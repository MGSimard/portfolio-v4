import type { ProjectsData } from "@/_lib/types";

export const projectsGamedev: ProjectsData = {
  name: "projectsGD",
  description: "Game Development Projects by MGSimard",
  author: "MGSimard - https://github.com/MGSimard/",
  data: [
    {
      section: "Unreal Engine 5",
      more: null,
      projects: [
        {
          title: "Terminal (WIP)",
          thumbnail: "./assets/gd-thumbnails/thumb_terminal.webp",
          label: "Level Design",
          carouselImages: [
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_1.webp",
              alt: "Terminal 1",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_2.webp",
              alt: "Terminal 2",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_3.webp",
              alt: "Terminal 3",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_4.webp",
              alt: "Terminal 4",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_5.webp",
              alt: "Terminal 5",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_6.webp",
              alt: "Terminal 6",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_7.webp",
              alt: "Terminal 7",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_8.webp",
              alt: "Terminal 8",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_9.webp",
              alt: "Terminal 9",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_10.webp",
              alt: "Terminal 10",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_11.webp",
              alt: "Terminal 11",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_12.webp",
              alt: "Terminal 12",
            },
            {
              url: "/assets/gamedev/unreal-engine/terminal/terminal_13.webp",
              alt: "Terminal 13",
            },
          ],
          overview:
            "Project to learn UE5, aiming for all geometry to be built completely in-engine without utilizing outside software like Blender.",
          features: ["Level Design", "Blockout"],
          stack: "Unreal Engine 5",
          description: `Jumped into experimenting with UE5's built-in modeling tools and some blueprint-based tools through Lyra. Drew up a couple sections and then started mapping them out in low detail. Geo dimensions is partly based on Unreal documentation's recommendations, real world scale, ADA standards and whatever else I could find.
          
So far I've utilized the modeling tools, Lyra's procedural BP tools, Spline-based mesh generation for curved roads, material related stuff and basic things like transforms. Not much scripting as of yet for what you would consider a proper level.

Beyond that, this map would still require a good amount of stuff to be considered a finished blockout as it only contains one spawn area and its connections to what would be considered the middle of the map.`,
          link: null,
          githubRepo: null,
        },
      ],
    },
    {
      section: "Halo Infinite",
      more: null,
      projects: [
        {
          title: "DEATHRUN (WIP)",
          thumbnail: "./assets/gd-thumbnails/thumb_deathrun.webp",
          label: "Level Design",
          carouselImages: [
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_1.webp",
              alt: "Deathrun 1",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_2.webp",
              alt: "Deathrun 2",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_3.webp",
              alt: "Deathrun 3",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_4.webp",
              alt: "Deathrun 4",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_6.webp",
              alt: "Deathrun 6",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_7.webp",
              alt: "Deathrun 7",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_8.webp",
              alt: "Deathrun 8",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_9.webp",
              alt: "Deathrun 9",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_10.webp",
              alt: "Deathrun 10",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_11.webp",
              alt: "Deathrun 11",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_12.webp",
              alt: "Deathrun 12",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_13.webp",
              alt: "Deathrun 13",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_14.webp",
              alt: "Deathrun 14",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_15.webp",
              alt: "Deathrun 15",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_16.webp",
              alt: "Deathrun 16",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_17.webp",
              alt: "Deathrun 17",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_18.webp",
              alt: "Deathrun 18",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_script1.webp",
              alt: "Deathrun script 1",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_script2.webp",
              alt: "Deathrun script 2",
            },
            {
              url: "/assets/gamedev/halo-infinite/deathrun/deathrun_script3.webp",
              alt: "Deathrun script 3",
            },
          ],
          overview:
            "This project is currently a work in progress. In the same fashion as the rest of my creations, it aims to modernize and introduce classic game modes into Halo. In this case, deathrun.",
          features: ["Level Design", "Environmental Art", "Scripting"],
          stack: "Halo Infinite Forge",
          description: `Deathrun is a mode coming from old Source game servers (such as Garry's Mod, Counter-Strike: Source etc). The objective is quite simple; one to two "deaths" control the traps alongside a linear map and attempt to prevent runners from reaching the end. Each runner only gets one life, and each trap can only be triggered once. The general idea is that a death can win the round were they to average at least one kill per trap.
          
This project, like others such as the planned improved sequel to the popular Lake Hot Pursuit, has been placed on-hold for different reasons. Whether or not I find time to continue development is still up in the air, it's extremely time-consuming to put out something of this quality as a one man team, having to handle full cycle responsibilities from game design, level design, environmental art, scripting, lighting, sound design, graphic design etc.


At this point, the map is roughly 70% done. All traps and their core functions have been finished along with the required scripting. Lighting and environmental art is nearly halfway there - and the ending sequence has yet to be implemented.

Runners would need to pass through every trap until they eventually reach the end. Upon reaching the end, the winning player(s) would either get to kill the trap master(s) or choose a some form of a duel minigame, as sometimes seen in Gmod deathrun maps.

The environment is based on a mix of forerunner and banished architecture embedded within a mountain, set underground. A large part of the map is very dark, as lighting work hadn't been started for those sections yet.

As of now, every single trap is fully functional (24) and fully scripted with both visual and function. Node-based script brains handle all of it, plus extended game settings, player traits and game logic such as scoring, win conditions etc. The carousel images give an idea of the structure for scripts, there's a whole lot more happening under the hood with script brains scattered around nearly every trap.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Lake Hot Pursuit",
          thumbnail: "./assets/gd-thumbnails/thumb_lake-hot-pursuit.webp",
          label: "Level Design",
          carouselImages: [
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_1.webp",
              alt: "Lake Hot Pursuit 1",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_2.webp",
              alt: "Lake Hot Pursuit 2",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_3.webp",
              alt: "Lake Hot Pursuit 3",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_4.webp",
              alt: "Lake Hot Pursuit 4",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_5.webp",
              alt: "Lake Hot Pursuit 5",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_6.webp",
              alt: "Lake Hot Pursuit 6",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_7.webp",
              alt: "Lake Hot Pursuit 7",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_8.webp",
              alt: "Lake Hot Pursuit 8",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_9.webp",
              alt: "Lake Hot Pursuit 9",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_10.webp",
              alt: "Lake Hot Pursuit 10",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_11.webp",
              alt: "Lake Hot Pursuit 11",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_12.webp",
              alt: "Lake Hot Pursuit 12",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_13.webp",
              alt: "Lake Hot Pursuit 13",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_14.webp",
              alt: "Lake Hot Pursuit 14",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_15.webp",
              alt: "Lake Hot Pursuit 15",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_16.webp",
              alt: "Lake Hot Pursuit 16",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script1.webp",
              alt: "Lake Hot Pursuit script 1",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script2.webp",
              alt: "Lake Hot Pursuit script 2",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script3.webp",
              alt: "Lake Hot Pursuit script 3",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script4.webp",
              alt: "Lake Hot Pursuit script 4",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script5.webp",
              alt: "Lake Hot Pursuit script 5",
            },
            {
              url: "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script6.webp",
              alt: "Lake Hot Pursuit script 6",
            },
          ],
          overview:
            "Hot Pursuit map - main road around the lake with subroutes in the center connecting various islets and shores. Unfortunately no terrain tool in Forge, so all built from individual Halo assets, terrain and rock pieces.",
          features: ["Level Design", "Environmental Art", "Scripting"],
          stack: "Halo Infinite Forge",
          description: `Lake Hot Pursuit is based on a mix between the original Need for Speed Hot Pursuit mode and its Halo recreations over the years. The project began as a simple _"I'll show you how to do this properly"_ after experiencing the existing variants in Halo Infinite. One thing led to another, which eventually ended up becoming a feature-complete mode played by thousands since its creation.
          
The map received 300 bookmarks and 500 plays at a 4.7 rating within the first week of beta testing - as of 2025, it stands at over 52,000 play counts, 4,700 bookmarks and 4.5/5* rating over 339 votes. The development process was publicly documented within the Forgehub Discord's WIP section. From April 2024 onwards, the map was "unlocked" for other users to fork, study, and iterate upon for their own versions. Across all its variations it garnered over 100,000 plays, solidifying itself as one of the most popular custom maps & modes in Halo Infinite's lifetime.

#### Gameplay

The objective is for cops to chase, and ultimately catch, robbers in order to arrest them. Doing so can be accomplished by either running them off the road into the lake, boxing them in and hijacking them to arrest them, or leaving them stranded to the 10 second death timer. Robbers who are arrested change sides - otherwise must survive for a set amount of time.

The main differing factor between what I would consider to be the most feature-complete Hot Pursuit mode ever made for Halo, is that it specifically goes out of its way to limit gameplay to vehicles only while also giving a little bit of space for on-foot transitions between vehicle grabs. Past variants also strictly rely on pushing robbers off the road, whereas my version also allows cops to directly interact with the robbers by pulling them out of their vehicles and arresting them manually, which greatly expanded the possibilities in terms of level & systems design.

I ensured advantages on both sides depending on which part of the terrain they drive on, whether it be the tight spaces favouring the robbers' mongooses or the cops' superior top speed on straight lines. The map has multiple intersecting sections which reward skilled navigation.

#### Scripting

After a few different scripting and game mode iterations, a heavy modification of the new infection game mode was opted for. Multiple scripts were set up in order achieve the very specific vision I had for the Hot Pursuit game mode. Round grace giving a small time cushion for robbers to get ready and depart, forcing players to remain in vehicles, allowing cops to arrest robbers through manual hijacking over their vehicles, player traits etc.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Overdose",
          thumbnail: "./assets/gd-thumbnails/thumb_overdose.webp",
          label: "Level Design",
          carouselImages: [
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_1.webp",
              alt: "Overdose 1",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_2.webp",
              alt: "Overdose 2",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_3.webp",
              alt: "Overdose 3",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_4.webp",
              alt: "Overdose 4",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_5.webp",
              alt: "Overdose 5",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_6.webp",
              alt: "Overdose 6",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_7.webp",
              alt: "Overdose 7",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_8.webp",
              alt: "Overdose 8",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_9.webp",
              alt: "Overdose 9",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_10.webp",
              alt: "Overdose 10",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_11.webp",
              alt: "Overdose 11",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_12.webp",
              alt: "Overdose 12",
            },

            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_script1.webp",
              alt: "Overdose script 1",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_script2.webp",
              alt: "Overdose script 2",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_script3.webp",
              alt: "Overdose script 3",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_script4.webp",
              alt: "Overdose script 4",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_script5.webp",
              alt: "Overdose script 5",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_script6.webp",
              alt: "Overdose script 6",
            },
            {
              url: "/assets/gamedev/halo-infinite/overdose/overdose_script7.webp",
              alt: "Overdose script 7",
            },
          ],
          overview: `Overdose is a recreation of Combat Arms' original map "Overdose", along with its core game mode "Quarantine".`,
          features: ["Level Design", "Environmental Art", "Scripting"],
          stack: "Halo Infinite Forge",
          description: `A recreation of Combat Arms' [original map](https://combatarms.fandom.com/wiki/Overdose) using Halo Infinite's UGC tool, _"Forge"_. The level was entirely built using primitive shapes & Halo Infinite's stock assets over the course of a month (~300 hours). References for the project were numerous different Youtube videos showcasing gameplay of the map.
          
#### Gameplay

Supported by the scripts shown in the gallery, the basis of this map + game mode combo is for the survivors to outlive the infected. They can accomplish this objective either by surviving until the round's end, or by exterminating all of the infected. The infected are chosen at random at the start of every round, and those Alpha infected eventually turn after a short grace period. Unlike Vanilla Halo infection where infection forces a respawn, I've scripted a system which dynamically infects players where they stand to simulate Combat Arms' Quarantine mode. This instills paranoia and lack of trust in each player during pre-round, while also groups to split evenly throughout the map until the infected are turned.

The map contains defensible areas, several hiding spots and obstacles which the survivors can utilize in order to get away from the infected, or even set up traps. Once there is 70 seconds left to the round, a 10 second alert rings which then leads to saferooms unlocking. If survivors can manage to reach those rooms, they can be locked from within to aid in surviving the last minute of the round. If enough infected are still standing, fortifications can be broken through with relative ease - so it&apos;s a decent idea to ensure that you have enough explosives saved for them.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Junk Flea",
          thumbnail: "./assets/gd-thumbnails/thumb_junk-flea.webp",
          label: "Level Design",
          carouselImages: [
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_1.webp",
              alt: "Junk Flea 1",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_2.webp",
              alt: "Junk Flea 2",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_3.webp",
              alt: "Junk Flea 3",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_4.webp",
              alt: "Junk Flea 4",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_5.webp",
              alt: "Junk Flea 5",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_6.webp",
              alt: "Junk Flea 6",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_7.webp",
              alt: "Junk Flea 7",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_8.webp",
              alt: "Junk Flea 8",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_9.webp",
              alt: "Junk Flea 9",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_10.webp",
              alt: "Junk Flea 10",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_11.webp",
              alt: "Junk Flea 11",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_12.webp",
              alt: "Junk Flea 12",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_13.webp",
              alt: "Junk Flea 13",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_14.webp",
              alt: "Junk Flea 14",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_15.webp",
              alt: "Junk Flea 15",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_16.webp",
              alt: "Junk Flea 16",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_17.webp",
              alt: "Junk Flea 17",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_18.webp",
              alt: "Junk Flea 18",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_19.webp",
              alt: "Junk Flea 19",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_20.webp",
              alt: "Junk Flea 20",
            },

            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script1.webp",
              alt: "Junk Flea script 1",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script2.webp",
              alt: "Junk Flea script 2",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script3.webp",
              alt: "Junk Flea script 3",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script4.webp",
              alt: "Junk Flea script 4",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script5.webp",
              alt: "Junk Flea script 5",
            },
            {
              url: "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script6.webp",
              alt: "Junk Flea script 6",
            },
          ],
          overview: `Similarly to the previous project, "Overdose", Junk Flea was also a recreation of a map originating from Combat Arms.`,
          features: ["Level Design", "Environmental Art", "Scripting"],
          stack: "Halo Infinite Forge",
          description: `This was also developed within Halo Infinite's Forge tool over the course of over 400 hours shortly after the tool's release. The process for this level was slightly different, rather than "eyeballing" it off of Youtube videos, I resorted to seeking out shady tools to rip the original map files out of Combat Arms. Once the original map files were acquired, I brought them into Blender to use as reference for measurements and positioning. Once again however, the level was entirely created with primitive shapes and stock Halo Infinite assets. The majority of props are actually primitive groups.
          
In this release I also introduced Gun Game to Halo Infinite - a script set which keeps track of a player's scoring on kill to change their weapon according to the corresponding index within a weapon list. The scripting is included within the last section of this article.

#### Gameplay

Junk Flea's primary game modes are standard types of Free for All & Team Deathmatch. Each team spawns within their own buildings at the beginning, and then eventually follows a dynamic spawn system across the map depending on threat proximity during the match. A night version was planned specifically for Quarantine (Infection) however due to a lack of specific nodes within Forge's script system, I had decided to put the night version on hold.

With the introduction of my Gun Game game mode/scripts alongside the map, an alternative version supporting it was also released. It follows the standard Gun Game ruleset; You gain a level upon killing opponents with your intended weapon and lose a level through being melee'd or self-inflicted death. Ammo can be replenished by killing an opponent with melee. The script system allows anyone to modify their own version in Forge simply by modifying the weapon list. Since the script is fully data-driven, score and all other settings automatically adjust to fit. Once a player cycles through all available weapons, they win the round.

#### Scripting

Not specific to Junk Flea, but since it was developed alongside it I decided to include the Gun Game script written for its first implementation. This prefab can be imported into any map to turn them into a Gun Game FFA compatible map made specifically for its custom game mode I created. Weapon lists, level up, kill confirmation, scoring etc all handled by the script prefab.`,
          link: null,
          githubRepo: null,
        },
      ],
    },
  ],
};
