type Props = {
  point: number;
};

const Rating = ({ point }: Props) => {
  // renk belirle
  const color =
    point >= 4
      ? "bg-green-500"
      : point >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div>
      <span
        className={`${color} p-2 rounded-lg text-white font-bold w-fit`}
      >
        {point}
      </span>
    </div>
  );
};

export default Rating;
