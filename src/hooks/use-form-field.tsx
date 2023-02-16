import { useState } from "react";

const useFormField = (validator: (value: string) => boolean) => {
  const [value, setValue] = useState("");
  const [visited, setVisited] = useState(false);

  const isValueValid = validator(value);
  const isFieldInvalid = visited && !isValueValid;

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setVisited(true);
  };

  const onReset = () => {
    setValue("");
    setVisited(false);
  };

  return { value, isValueValid, isFieldInvalid, onValueChange, onBlur, onReset };
};

export default useFormField;
