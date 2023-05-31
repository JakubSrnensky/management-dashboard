import { render, fireEvent } from "@testing-library/react"
import { Input } from "../InputText";

describe('Input', () => {
  it('renders input with correct label, type, placeholdre and onChange event', () => {
    const onChangeMock = jest.fn();
    const placeholder = 'textace'
    const type = 'text';
    const labelText = 'Click me';
    const { getByPlaceholderText, getByText } = render(
        <Input label={labelText} type={type} placeholder={placeholder} onChange={onChangeMock} />
      );
    const input = getByPlaceholderText(placeholder);
    const label = getByText(labelText);
        expect(label.innerHTML).toBe(labelText)
        //expect(label).toBeTruthy() //Měl by být true nebo false ??
        expect(input.getAttribute('type')).toBe(type)
        expect(input.getAttribute('placeholder')).toBe(placeholder)
        fireEvent.change(input, {target: {value: 'Hello'} })
        expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: 'Hello' }) }))
  });
});