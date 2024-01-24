import { Slider } from "./ui/slider";

export default function SLider({
  min,
  max,
  value,
  handleChange,
}: {
  min: number;
  max: number;
  value: number[];
  handleChange(val: number[]): void;
}) {
  return (
    <div className="w-full p-4">
      <Slider
        className="w-full"
        min={min}
        max={max}
        value={value}
        onValueChange={handleChange}
      />
    </div>
  );
}
