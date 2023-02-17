import useFormField from "../../hooks/use-form-field";

interface Props {
  onSubmit: (name: string, address: string) => void;
}

const OrderForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    value: name,
    isValueValid: isNameValid,
    isFieldInvalid: isNameFieldInvalid,
    onValueChange: onChangeName,
    onBlur: onBlurName,
    onReset: onResetName,
  } = useFormField((value) => value.trim().length > 0);

  const {
    value: address,
    isValueValid: isAddressValid,
    isFieldInvalid: isAddressFieldInvalid,
    onValueChange: onChangeAddress,
    onBlur: onBlurAddress,
    onReset: onResetAddress,
  } = useFormField((value) => value.trim().length > 0);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onBlurAddress();
    onBlurName();
    if (!isNameValid || !isAddressValid) {
      console.log("invalid");
      return;
    }

    onResetName();
    onResetAddress();

    onSubmit(name, address);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={onChangeName}
          onBlur={onBlurName}
        />
        {isNameFieldInvalid && <p>Please enter your name.</p>}
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          value={address}
          onChange={onChangeAddress}
          onBlur={onBlurAddress}
        />
        {isAddressFieldInvalid && <p>Please enter your address.</p>}
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default OrderForm;
