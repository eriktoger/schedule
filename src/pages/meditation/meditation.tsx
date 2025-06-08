import { Button, Header } from "components";
import { Link } from "react-router-dom";
import { useMeditation, useWakeLock } from "./hooks";

const MeditationTitle = ({ title }: { title: string | undefined }) => {
  if (title === "MeditationLeft") {
    return (
      <p className="text-lg">
        Meditation, <span className="font-bold">left leg</span> forwad
      </p>
    );
  }

  if (title === "MeditationRight") {
    return (
      <p className="text-lg">
        Meditation, <span className="font-bold">right leg</span> forwad
      </p>
    );
  }

  return <p className="text-lg">{title}</p>;
};

const Meditation = () => {
  const {
    meditationItem,
    handleText,
    prevIsAvailable,
    nextIsAvailable,
    getPrevMeditationItem,
    getNextMediationItem,
    handleMeditation,
  } = useMeditation();

  useWakeLock();

  const minutes = Math.floor((meditationItem?.time ?? 0) / 60);
  const seconds = (meditationItem?.time ?? 0) % 60;

  return (
    <>
      <Link to={"../"}>Home</Link>
      <Header text="Meditation Page" />
      <div className="flex justify-center items-end">
        <Button onClick={handleMeditation} text={handleText} />
        <Button
          small
          text="Prev"
          onClick={getPrevMeditationItem}
          disabled={!prevIsAvailable}
        />
        <Button
          small
          text="Next"
          onClick={getNextMediationItem}
          disabled={!nextIsAvailable}
        />
      </div>

      <MeditationTitle title={meditationItem?.title} />
      <p>
        Time: {minutes}m {seconds}s
      </p>
      <img
        className="h-72 w-72 object-contain"
        src={`images/${meditationItem?.image}`}
        alt={meditationItem?.image}
      />
    </>
  );
};

export default Meditation;
