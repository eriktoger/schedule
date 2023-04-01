export default function Button({
  text,
  onClick,
  selected = false,
}: {
  text: string;
  onClick: () => void;
  selected?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        selected ? "bg-blue-800" : "bg-blue-600"
      } hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded`}
    >
      {text}
    </button>
  );
}
