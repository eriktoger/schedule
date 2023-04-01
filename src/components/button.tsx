export default function Button({
  text,
  onClick,
  selected = false,
  small = false,
  disabled = false,
}: {
  text: string;
  onClick: () => void;
  selected?: boolean;
  small?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      ${selected ? "bg-blue-800" : "bg-blue-600"}
      ${small ? "py-1 px-2 h-1/2" : "py-2 px-4"}
      ${disabled ? "bg-gray-800 opacity-50" : "hover:bg-blue-700"}
        text-white font-bold m-1 rounded`}
    >
      {text}
    </button>
  );
}
