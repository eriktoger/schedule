const homeActivities = [
  {
    title: "Taichi",
    info: ["Choose a program from 24 form"],
  },
  {
    title: "Calisthenics",
    info: ["Bridge, Crow stand, One leg squat", "Hindu push up"],
  },
  {
    title: "Ring work",
    info: [
      "Hang, One arm hang, Leg raise, Pull ups,",
      "Negative pull ups, Weighted hang",
    ],
  },
  { title: "Sitting stretch", info: ["See Stretching page"] },
  { title: "Kneeling stretch", info: ["See Stretching page"] },
  { title: "Martials arts", info: ["Hands, Elbows, Knees, Feet, Blade"] },
] as const;

const workActivities = [
  { title: "Taichi", info: ["Choose a program from Taiflow"] },
  {
    title: "Squat",
    info: ["Rest in squat position and strech legs", "and back"],
  },
  { title: "Standing stretch", info: ["See Stretching page"] },
  { title: "Martials arts", info: ["Hands, Elbows, Knees, Feet"] },
] as const;

export const activities = { home: homeActivities, work: workActivities };
