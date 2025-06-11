// src/components/AlertBox/AlertBox.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { AlertBox } from './AlertBox';

describe('AlertBox', () => {
  it('renders message and children', () => {
    render(
      <AlertBox type="success" message="Test success">
        <p>Additional info</p>
      </AlertBox>
    );
    expect(screen.getByText('Test success')).toBeInTheDocument();
    expect(screen.getByText('Additional info')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<AlertBox type="error" message="Error" onClose={handleClose} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
