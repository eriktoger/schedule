export const TrainingDays = [
  {
    title: "Mon",
    exercises: ["Pull-ups", "Dips"],
    finisher: "Sledge",
    skill: "Empty-hand"
  },
  {
    title: "Tue",
    exercises: ["Clean and Press", "Curls"],
    finisher: "Over head carry",
    skill:"Sac-sac"
  },
  {
    title: "Wed",
    exercises: ["Push ups", "Rows", "One leg Squats", "Swings"],
    finisher: "No finisher",
    skill:"Double stick"
  },
  {
    title: "Thu",
    exercises: ["Snatch", "Calf raises", "Squats"],
    finisher: "Sandbag",
    skill:"Empty-hand"
  },
  {
    title: "Fri",
    exercises: ["Push press", "Rows", "RDL", "Lunges"],
    finisher: "No finisher",
    skill:"Pakal"
  },
  {
    title: "Sat",
    exercises: ["Bicycle/Deck of Cards"],
    finisher: "No finisher",
    skill:"Mixed reach"

  },
  {
    title: "Sun",
    exercises: ["Hill sprints"],
    finisher: "No finisher",
    skill:"Single stick"
  },
] as const;

export type TrainingDay = (typeof TrainingDays)[number];
