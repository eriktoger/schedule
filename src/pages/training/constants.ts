export const TrainingDays = [
  {
    title: "Mon",
    exercises: ["Pull-ups", "Dips"],
    finisher: "Sledge",
  },
  {
    title: "Tue",
    exercises: ["Clean and Press", "Curls"],
    finisher: "Over head carry",
  },
  {
    title: "Wed",
    exercises: ["Push ups", "Rows", "One leg Squats", "Swings"],
    finisher: "No finisher",
  },
  {
    title: "Thu",
    exercises: ["Snatch", "Calf raises", "Squats"],
    finisher: "Sandbag",
  },
  {
    title: "Fri",
    exercises: ["Push press", "Rows", "RDL", "Lunges"],
    finisher: "No finisher",
  },
  {
    title: "Sat",
    exercises: ["Bicycle"],
    finisher: "No finisher",
  },
  {
    title: "Sun",
    exercises: ["Hill sprints"],
    finisher: "No finisher",
  },
] as const;

export type TrainingDay = (typeof TrainingDays)[number];
