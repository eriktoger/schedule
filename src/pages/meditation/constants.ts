export const meditationRoutineOne = [
  { title: "Wall stretch - Right", time: 70, image: "couchStretch.webp" },
  { title: "Wall stretch - Left", time: 70, image: "couchStretch.webp" },
  { title: "Pigeon stretch - Right", time: 70, image: "pigeon.png" },
  { title: "Pigeon stretch - Left", time: 70, image: "pigeon.png" },
  { title: "Open leg", time: 130, image: "openLeg.jpg" },
  { title: "Toe touch", time: 130, image: "toeTouch.jpg" },
  { title: "Lying buttefly", time: 130, image: "lyingButterfly.jpg" },
  {
    title: "Meditation, right leg forward",
    time: 15 * 60 + 10,
    image: "burmesePosition.jpg",
  },
];

export const meditationRoutineTwo = [
  { title: "Lunges stretch - Right", time: 70, image: "lunges.png" },
  { title: "Lunges stretch - Left", time: 70, image: "lunges.png" },
  { title: "Figure four - Right", time: 70, image: "figureFour.webp" },
  { title: "Figure four - Left", time: 70, image: "figureFour.webp" },
  { title: "Squat", time: 130, image: "squat.webp" },
  { title: "Standing Toe Touch", time: 130, image: "standingToeTouch.jpg" },
  { title: "Sitting buttefly", time: 130, image: "butterflyStretch.jpg" },
  {
    title: "Meditation, left leg forward",
    time: 15 * 60 + 10,
    image: "burmesePosition.jpg",
  },
];

export type MeditationRoutine = typeof meditationRoutineOne;

export const meditationDoneItem = {
  title: "Meditation Done!",
  time: 0,
  image: "meditationDone.webp",
};
