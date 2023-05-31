import { render, fireEvent } from "@testing-library/react"
import { expect } from '@jest/globals';
import Button from "../Button"

jest.mock('../Button.scss', () => ({}));

describe('Button', () => {
  it('renders button with click', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button as="button" design="primary" onClick={onClickMock}>Click me</Button>);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders button with correct label, design, and element type', () => {
    const design = 'primary';
    const elementType = 'button';
    const label = 'Click me';
    const { getByRole } = render(
      <Button as={elementType} design={design}>
        {label}
      </Button>
    );
    const buttonElement = getByRole(elementType);
    expect(buttonElement.tagName.toLowerCase()).toBe(elementType); // Ověření element typu
    expect(buttonElement.className).toContain(`button-${design}`); // Ověření designu
  });
});