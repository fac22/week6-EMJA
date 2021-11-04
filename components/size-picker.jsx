import stylesPicker from "./size-picker.module.css";

export default function SizePicker({ size, setSize }) {
  return (
    <div>
      <form
        onChange={(event) => {
          setSize(event.target.value);
        }}
      >
        <input type="radio" id="small" name="size" value="small" />
        <label htmlFor="small">Small</label>
        <input type="radio" id="medium" name="size" value="medium" />
        <label htmlFor="small">Medium</label>
        <input type="radio" id="large" name="size" value="large" />
        <label htmlFor="small">Large</label>
      </form>
    </div>
  );
}
