import { Sub } from "../types";
import useNewSubForm from "../hooks/useNewSubForm";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

export default function Form({ onNewSub }: FormProps) {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputValues);

    handleClear();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Once again have to set a list
    const { name, value } = event.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          placeholder="nick"
          name="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          placeholder="subMonths"
          name="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          placeholder="avatar"
          name="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          placeholder="description"
          name="description"
        />
        <button onClick={handleClear} type="button">
          Clear the form
        </button>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  );
}
