export const TrainingDays = [
  {
    title: "Mon",
    exercises: ["Snatch", "Calf raises"],
    finisher: "Sledge",
  },
  {
    title: "Tue",
    exercises: ["Squats", "Swings"],
    finisher: "Ring hang",
  },
  {
    title: "Wed",
    exercises: ["Dips", "Pull ups"],
    finisher: "Jumps",
  },
  {
    title: "Thu",
    exercises: ["Clean and Press", "Curls"],
    finisher: "Core",
  },
  {
    title: "Fri",
    exercises:["One leg squat", "Push press"],
    finisher: "Sandbag",
  },
  {
    title: "Sat",
    exercises: ["Push ups", "Rows"],
    finisher: "Over head carry",
  },
  {
    title: "Sun",
    exercises:["RDL","Over head squat"]  ,
    finisher: "No finisher",
  },
] as const;

export type TrainingDay = typeof TrainingDays[number];
