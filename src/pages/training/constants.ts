export const TrainingDays = [
  {
    title: "Mon",
    exercises: ["Snatch", "Calf raises"],
    finisher: "Sledge",
  },
  {
    title: "Wed",
    exercises: ["Lunges", "Dips/Push press", "Pull ups"],
    finisher: "Jumps",
  },
  {
    title: "Fri",
    exercises: ["Clean and Press", "Curls"],
    finisher: "Sandbag",
  },
  {
    title: "Sat",
    exercises: ["Hillsprint"],
    finisher: "",
  },
  {
    title: "Sun",
    exercises: ["One leg squat", "Push ups", "Row"],
    finisher: "Core",
  },
] as const;

export type TrainingDay = typeof TrainingDays[number];
