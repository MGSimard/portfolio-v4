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
          
The map received 300 bookmarks and 500 plays at a 4.7 rating within the first week of beta testing - as of 2025, it stands at over 52,000 play count, 4,700 bookmarks and 4.5/5* rating over 339 votes. The development process was publicly documented within the Forgehub Discord's WIP section. From April 2024 onwards, the map was "unlocked" for other users to fork, study, and iterate upon for their own versions. Across all its variations it garnered over 100,000 plays, solidifying itself as one of the most popular custom maps & modes in Halo Infinite's lifetime.

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
    {
      section: "Tower Unite",
      more: null,
      projects: [
        {
          title: "Station 58",
          thumbnail: "./assets/gd-thumbnails/thumb_station-58.webp",
          label: "Level Design",
          carouselImages: [
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_1.webp",
              alt: "Station 58 1",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_2.webp",
              alt: "Station 58 2",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_3.webp",
              alt: "Station 58 3",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_4.webp",
              alt: "Station 58 4",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_5.webp",
              alt: "Station 58 5",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_6.webp",
              alt: "Station 58 6",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_7.webp",
              alt: "Station 58 7",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_8.webp",
              alt: "Station 58 8",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_9.webp",
              alt: "Station 58 9",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_10.webp",
              alt: "Station 58 10",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_11.webp",
              alt: "Station 58 11",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_12.webp",
              alt: "Station 58 12",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_13.webp",
              alt: "Station 58 13",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_14.webp",
              alt: "Station 58 14",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_15.webp",
              alt: "Station 58 15",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_16.webp",
              alt: "Station 58 16",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_17.webp",
              alt: "Station 58 17",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_18.webp",
              alt: "Station 58 18",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_19.webp",
              alt: "Station 58 19",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_20.webp",
              alt: "Station 58 20",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_21.webp",
              alt: "Station 58 21",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_22.webp",
              alt: "Station 58 22",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_23.webp",
              alt: "Station 58 23",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_24.webp",
              alt: "Station 58 24",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_25.webp",
              alt: "Station 58 25",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_26.webp",
              alt: "Station 58 26",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_27.webp",
              alt: "Station 58 27",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_28.webp",
              alt: "Station 58 28",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_29.webp",
              alt: "Station 58 29",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_30.webp",
              alt: "Station 58 30",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_31.webp",
              alt: "Station 58 31",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_32.webp",
              alt: "Station 58 32",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_33.webp",
              alt: "Station 58 33",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_34.webp",
              alt: "Station 58 34",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_35.webp",
              alt: "Station 58 35",
            },
            {
              url: "/assets/gamedev/tower-unite/station-58/station-58_36.webp",
              alt: "Station 58 36",
            },
          ],
          overview: "Station 58 is a puzzle/escape room level created in Tower Unite's Condo Editor.",
          features: ["Level Design", "Environmental Art", "Scripting"],
          stack: "Tower Unite",
          description: `After a save file corruption of an initial project with multiple puzzle games, I decided to build this escape room type project. It features a couple of different puzzle mechanics and a complete story throughout the level. I also intertwined plot and video elements from an Analog Horror youtube channel titled _"Local 58"_.
            
After hitting a block regarding one of the final rooms, I decided to take a break and head back to Halo Infinite's Forge tool to create _"Lake Hot Pursuit"_ - this project has been on-hold ever since.

#### Gameplay

The puzzle mechanics presented within the level are fairly simple. I still went out of my way to learn about a couple of concepts regarding escape rooms, one of the most important being the idea of _"Lock before key"_. That is to say, you should present the problem to your player prior to giving them the tools to solve said problem. Otherwise if you give a key before the lock, the player will attempt to use the key on every lock, rather than depend on problem-solving skills. This also entertains the idea of a _"Eureka"_ moment similarly to what you would find in a Metroidvania, where the player suddenly thinks _"Oh, I can use this new tool for that one thing earlier!"_ after acquiring said tool.

#### Section One - Story Setting

Immediately upon arriving within the condo, players are guided to the first room. They are presented with a fairly obvious keypad. Attempting to interact with said keypad reinforces the suggestion that it requires a code, and that it should be opened. On the table, illuminated by a lamp, lies a book which players can read in order to situate themselves with their environment, and get a clue on how to proceed.

From there, the players should seek to get helpful materials from within one of the lockers, as well as a cassette tape which they can play on the computer/media player on the desk. Watching the video in turns enables a trigger near a poster which is made obvious by the contents and messages of the video they've watched. Approaching said poster reveals the code for the locked keypad.

#### Section Two: Finding Objects

After passing the first room, it is made obvious that the following challenge requires the player to find specific key objects in order to open the garage door at the end of the room. As a placeholder, I had been using red balls. Some are hidden at different heights, other placed within boxes or behind other objects.

#### Section Three: Cross-Room Interactions

This section has the player interact with three different rooms at once over a slightly longer distance and back-and-forth.

They're presented with a locked door, a secured airlock and the lobby where they may find a keycard which allows them to access the control room. Would the condo editor have such advanced features, the main idea would be to have an interactive scene play out to help set the tone - something that would feel a little bit like what you'd find in "Outlast".

#### Section Four: Control Room

Should the player be capable of solving a fairly simple puzzle within this room, they'd soon find themselves having to make a run for the airlock as its access is time limited when unlocked.

#### Section Five: The Laboratory

This specific area is sectioned into three different sub puzzles. The first room requires you to decypher a symbol to number code on the keypad by finding its relevant clues around the room. The second requires you to be attentive to bloodtrails in the room, along with remembering some very blatant information which was communicated near the beginning of the level, and the third gives you an idea of where you have to go in order to progress within the level as your access is blocked by a broken door access panel.

This section also contains an interactive scene once players finish reading a book which clues them into entering the now unlocked admin room in the laboratory. After flickering, the lights turn to red and a menacing set of sounds play as a the doors lock and a monster briefly appears at the end of the lab. Shortly after the situation returning to normal, the doors unlock themselves and the way to the admin room is opened, where the player is then guided to return to the control room to enter through the ventilation shaft.

#### Section Six: Vent Maze

Fairly simple section, slightly confusing maze which eventually leads you to the area behind the broken door.

#### Section Seven: Moment of Respite

Once the player finds themselves on the other side of the door, they have to walk through an uneventful hallway which is where I'd generally have some kind of advanced piece of content made for storytelling.

#### Section Eight: The Experimental Room

At a point this room was supposed to be much smaller, or at least slightly more compact with different accessible areas. However the scope got a little large, and that was the point at which I couldn't quite make up my mind with what the room should be like, considering the limited options offered by the condo editor. I had decided to put the room on-hold and start working on the rest of the map.

#### Section X: The Inbetween

From that point forward, I focused on adding a few smaller story-driven sections leading up to the ending of the condo. From an interactive scene to a claustrophobic janitor closet, ultimately leading to the ending sequence in the section below.

#### Section X: The Ending

After falling through the world when the player believed they would make a successful escape, wondering why they had been getting deeper and deeper into the facility, the player is frozen in placed forced to stare down a long hallway. A few interactive triggers happen here, until the player is the quickly sent down the hallway to a set of doors, the doors are opened and the player snaps back to the beginning of the level while keeping the same momentum and doors opening. The player is pushed through the exit, where the entity wanted them. They take damage, and the gigantic unnerving moon appears in the sky as a line of what seem to be lifeless "people" welcomes the player amongst them.

All in all, despite the clear limitations set forward by the primitive level of tower unite's condo editing tool, I do hope to eventually revisit this condo in order to finish it completely, host playthrough sessions of it and release it on the Steam workshop in time. The Tower Unite development team actually showed up and played through the level while I was AFK and forgot to lock the condo while working on it, I was pretty surprised to find out they had actually enjoyed it very much despite its unfinished and unpolished state.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Lumbridge Castle",
          thumbnail: "./assets/gd-thumbnails/thumb_lumbridge-castle.webp",
          label: "Level Design",
          carouselImages: [
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_1.webp", alt: "Lumbridge Castle 1" },
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_2.webp", alt: "Lumbridge Castle 2" },
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_3.webp", alt: "Lumbridge Castle 3" },
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_4.webp", alt: "Lumbridge Castle 4" },
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_5.webp", alt: "Lumbridge Castle 5" },
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_6.webp", alt: "Lumbridge Castle 6" },
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_7.webp", alt: "Lumbridge Castle 7" },
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_8.webp", alt: "Lumbridge Castle 8" },
            { url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_9.webp", alt: "Lumbridge Castle 9" },
            {
              url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_10.webp",
              alt: "Lumbridge Castle 10",
            },
            {
              url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_11.webp",
              alt: "Lumbridge Castle 11",
            },
            {
              url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_12.webp",
              alt: "Lumbridge Castle 12",
            },
            {
              url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_13.webp",
              alt: "Lumbridge Castle 13",
            },

            {
              url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_15.webp",
              alt: "Lumbridge Castle 15",
            },
            {
              url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_16.webp",
              alt: "Lumbridge Castle 16",
            },
            {
              url: "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_17.webp",
              alt: "Lumbridge Castle 17",
            },
          ],
          overview:
            "Faithful, nearly perfect re-creation of Oldschool Runescape's Lumbridge Castle made within the Tower Unite Condo Creator.",
          features: ["Level Design", "Environmental Art"],
          stack: "Tower Unite",
          description: `For reference, Tower Unite's apartment building tool is extremely barebones. Nearly entirely made out of cubes and other primitive shapes, this is a high fidelity re-creation of Runescape's "Lumbridge Castle". Similarly to most of my other Tower Unite creations, this was made purely as a social space prior to the scripting update. Finishing the surrounding area of Lumbridge was also planned, however due to Quality of Life updates which never came, I opted to leave the map as-is since I'd rather exclude the skybox detail than make one which doesn't look exactly the way I want it to.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Quindecim",
          thumbnail: "./assets/gd-thumbnails/thumb_quindecim.webp",
          label: "Level Design",
          carouselImages: [
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_1.webp", alt: "Quindecim 1" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_2.webp", alt: "Quindecim 2" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_3.webp", alt: "Quindecim 3" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_4.webp", alt: "Quindecim 4" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_5.webp", alt: "Quindecim 5" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_6.webp", alt: "Quindecim 6" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_7.webp", alt: "Quindecim 7" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_8.webp", alt: "Quindecim 8" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_9.webp", alt: "Quindecim 9" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_10.webp", alt: "Quindecim 10" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_11.webp", alt: "Quindecim 11" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_12.webp", alt: "Quindecim 12" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_misc1.webp", alt: "Quindecim misc 1" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_misc2.webp", alt: "Quindecim misc 2" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_misc3.webp", alt: "Quindecim misc 3" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_misc4.webp", alt: "Quindecim misc 4" },
            { url: "/assets/gamedev/tower-unite/quindecim/quindecim_misc5.webp", alt: "Quindecim misc 5" },
          ],
          overview:
            'Quindecim is a re-creation of an establishment seen within an anime titled "Death Parade" and its Pilot episode, "Death Billiards".',
          features: ["Environmental Art", "3D Modeling", "Graphic Design"],
          stack: "Tower Unite",
          description: `Mostly everything but the bamboo and jukebox are primitives and in-game props. Stained glass/other graphics were created as SVGs in Adobe Illustrator, Inkscape and GIMP. The Barman NPC is a character model which I created in VRoid Studio by adjusting physical features, creating hair and heavily modifying base template clothing to match that of the anime character. The model was then imported and rigged into Blender then brought over into Tower Unite.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Exploded Cinema",
          thumbnail: "./assets/gd-thumbnails/thumb_exploded-cinema.webp",
          label: "Level Design",
          carouselImages: [
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_1.webp", alt: "Exploded Cinema 1" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_2.webp", alt: "Exploded Cinema 2" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_3.webp", alt: "Exploded Cinema 3" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_4.webp", alt: "Exploded Cinema 4" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_5.webp", alt: "Exploded Cinema 5" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_6.webp", alt: "Exploded Cinema 6" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_7.webp", alt: "Exploded Cinema 7" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_8.webp", alt: "Exploded Cinema 8" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_9.webp", alt: "Exploded Cinema 9" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_10.webp", alt: "Exploded Cinema 10" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_11.webp", alt: "Exploded Cinema 11" },
            { url: "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_12.webp", alt: "Exploded Cinema 12" },
          ],
          overview: 'Inspired by the "Exploded Cinema" at the Wushang Zhongyan Mall in Wuhan, China.',
          features: ["Level Design", "Environmental Art", "3D Modeling"],
          stack: "Tower Unite",
          description: `Not much to say about this creation other than the fact that it is a simple condo intended to be utilized as a movie theater. The overall look takes a few stylistic choices from a chinese theater, such as its exploded foam block walls and light fixtures, along with the design of columns protruding through surfaces.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Misc",
          thumbnail: "./assets/gd-thumbnails/thumb_tu-misc.webp",
          label: "Level Design",
          carouselImages: [
            { url: "/assets/gamedev/tower-unite/misc/art-gallery_1.webp", alt: "Art Gallery 1" },
            { url: "/assets/gamedev/tower-unite/misc/art-gallery_2.webp", alt: "Art Gallery 2" },
            { url: "/assets/gamedev/tower-unite/misc/art-gallery_3.webp", alt: "Art Gallery 3" },
            { url: "/assets/gamedev/tower-unite/misc/art-gallery_4.webp", alt: "Art Gallery 4" },
            { url: "/assets/gamedev/tower-unite/misc/bus-stop_1.webp", alt: "Bus Stop 1" },
            { url: "/assets/gamedev/tower-unite/misc/bus-stop_2.webp", alt: "Bus Stop 2" },
            { url: "/assets/gamedev/tower-unite/misc/bus-stop_3.webp", alt: "Bus Stop 3" },
            { url: "/assets/gamedev/tower-unite/misc/bus-stop_4.webp", alt: "Bus Stop 4" },
            { url: "/assets/gamedev/tower-unite/misc/bus-stop_5.webp", alt: "Bus Stop 5" },
            { url: "/assets/gamedev/tower-unite/misc/stairway_1.webp", alt: "Stairway 1" },
            { url: "/assets/gamedev/tower-unite/misc/stairway_2.webp", alt: "Stairway 2" },
            { url: "/assets/gamedev/tower-unite/misc/stairway_3.webp", alt: "Stairway 3" },
            { url: "/assets/gamedev/tower-unite/misc/stairway_4.webp", alt: "Stairway 4" },
            { url: "/assets/gamedev/tower-unite/misc/house_1.webp", alt: "House 1" },
            { url: "/assets/gamedev/tower-unite/misc/house_2.webp", alt: "House 2" },
            { url: "/assets/gamedev/tower-unite/misc/house_3.webp", alt: "House 3" },
            { url: "/assets/gamedev/tower-unite/misc/house_4.webp", alt: "House 4" },
            { url: "/assets/gamedev/tower-unite/misc/house_5.webp", alt: "House 5" },
            { url: "/assets/gamedev/tower-unite/misc/house_6.webp", alt: "House 6" },
            { url: "/assets/gamedev/tower-unite/misc/pool_1.webp", alt: "Pool 1" },
            { url: "/assets/gamedev/tower-unite/misc/pool_2.webp", alt: "Pool 2" },
            { url: "/assets/gamedev/tower-unite/misc/pool_3.webp", alt: "Pool 3" },
            { url: "/assets/gamedev/tower-unite/misc/pool_4.webp", alt: "Pool 4" },
            { url: "/assets/gamedev/tower-unite/misc/metro_1.webp", alt: "Metro 1" },
            { url: "/assets/gamedev/tower-unite/misc/metro_2.webp", alt: "Metro 2" },
            { url: "/assets/gamedev/tower-unite/misc/metro_3.webp", alt: "Metro 3" },
            { url: "/assets/gamedev/tower-unite/misc/metro_4.webp", alt: "Metro 4" },
            { url: "/assets/gamedev/tower-unite/misc/metro_5.webp", alt: "Metro 5" },
            { url: "/assets/gamedev/tower-unite/misc/metro_6.webp", alt: "Metro 6" },
          ],
          overview: "Miscellaneous projects created within Tower Unite.",
          features: ["Level Design", "Environmental Art"],
          stack: "Tower Unite",
          description: `Contains "Art Gallery", "Bus Stop", "Stairway", "House", "Pool", and "Metro".`,
          link: null,
          githubRepo: null,
        },
      ],
    },
    {
      section: "Roblox Studio",
      more: null,
      projects: [
        {
          title: "mp_shop",
          thumbnail: "./assets/gd-thumbnails/thumb_mp_shop.webp",
          label: "Level Design",
          carouselImages: [
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_1.webp", alt: "mp_shop 1" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_2.webp", alt: "mp_shop 2" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_3.webp", alt: "mp_shop 3" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_4.webp", alt: "mp_shop 4" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_5.webp", alt: "mp_shop 5" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_6.webp", alt: "mp_shop 6" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_7.webp", alt: "mp_shop 7" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_8.webp", alt: "mp_shop 8" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_9.webp", alt: "mp_shop 9" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_10.webp", alt: "mp_shop 10" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_11.webp", alt: "mp_shop 11" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_12.webp", alt: "mp_shop 12" },
            { url: "/assets/gamedev/roblox-studio/mp_shop/mp_shop_13.webp", alt: "mp_shop 13" },
          ],
          overview:
            'Circa 2020. A classic re-creation of one of Soldier of Fortune II: Double Helix\'s (2002) most iconic maps known as "mp_shop".',
          features: ["Level Design", "Environmental Art", "Graphic Design"],
          stack: "Roblox Studio",
          description: `_"mp_shop"_ was one of the more popular maps in the original SoF2 game, and was the one map included in the base version of the game's multiplayer test demo which used to house a very large community. Apart from the helicopter model from the asset store, everything else was made purely out of primitive objects, custom textures and decals.
          
The map was also widely played with custom game modes, more notably the likes of Cops & Robbers, which included custom rulesets like decreased gravity and increased movement speed. All of which could also be emulated on my own version of the map within Roblox. Though not completely finished as the map still necessitated additional furnishing in certain areas such as the kitchen and office spaces, it still contained a fully functional TDM system, spawns etc. I also took artistic liberty in populating the helipad with an elevated area, pipes and fence as the original version was simple flat roof with an H on it.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Q3DM17",
          thumbnail: "./assets/gd-thumbnails/thumb_q3dm17.webp",
          label: "Level Design",
          carouselImages: [
            { url: "/assets/gamedev/roblox-studio/q3dm17/q3dm17_1.webp", alt: "q3dm17 1" },
            { url: "/assets/gamedev/roblox-studio/q3dm17/q3dm17_2.webp", alt: "q3dm17 2" },
            { url: "/assets/gamedev/roblox-studio/q3dm17/q3dm17_3.webp", alt: "q3dm17 3" },
            { url: "/assets/gamedev/roblox-studio/q3dm17/q3dm17_4.webp", alt: "q3dm17 4" },
            { url: "/assets/gamedev/roblox-studio/q3dm17/q3dm17_5.webp", alt: "q3dm17 5" },
          ],
          overview: "A remake of the original Q3DM17 map from Quake III Arena.",
          features: ["Level Design", "Environmental Art"],
          stack: "Roblox Studio",
          description: `Another remake I enjoyed making a while back. This was one of my first attempts at doing primitive shape-based mapping on Roblox Studio. Experimenting with math calcs, union operations and setting up texture coordinates using the original textures from Quake.
          
I also learned a couple of plugin toolsets to facilitate my time since Roblox Studio lacked vertex snapping features and the likes. As stated everything apart from the teleporters are made of primitives, while the textures are ripped from Quake directly.`,
          link: null,
          githubRepo: null,
        },
        {
          title: "Thy Kingdom Come",
          thumbnail: "./assets/gd-thumbnails/thumb_thy-kingdom-come.webp",
          label: "Level Design",
          carouselImages: [
            {
              url: "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_1.webp",
              alt: "thy-kingdom-come 1",
            },
            {
              url: "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_2.webp",
              alt: "thy-kingdom-come 2",
            },
            {
              url: "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_3.webp",
              alt: "thy-kingdom-come 3",
            },
            {
              url: "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_4.webp",
              alt: "thy-kingdom-come 4",
            },
            {
              url: "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_5.webp",
              alt: "thy-kingdom-come 5",
            },
          ],
          overview: 'Based on a subsection of the "Thy Kingdom Come" level in Mirror\'s Edge Catalyst.',
          features: ["Level Design", "Environmental Art"],
          stack: "Roblox Studio",
          description: `There was no particular purpose for this one other than practicing modular environment modeling entirely out of primitives in Roblox Studio. I went on to build the same level for a public world in VRChat using Blender & Unity at a later date.`,
          link: null,
          githubRepo: null,
        },
      ],
    },
  ],
};
