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
    exercises: ["Pull ups", "Dips"],
    finisher: "Sandbag",
  },
  {
    title: "Fri",
    exercises: ["Push press", "Rows", "RDL", "Lunges"],
    finisher: "No finisher",
  },
  {
    title: "Sat",
    exercises: ["Snatch", "Calf raises", "One leg Squats"],
    finisher: "Ring hang",
  },
  {
    title: "Sun",
    exercises: ["Hill sprints"],
    finisher: "No finisher",
  },
] as const;

export type TrainingDay = (typeof TrainingDays)[number];
