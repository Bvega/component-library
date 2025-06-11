// src/components/ProductDisplay/ProductDisplay.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductDisplay } from './ProductDisplay';
import { Product } from '../../types';

const mockProduct: Product = {
  id: '1',
  name: 'Bluetooth Speaker',
  price: 59.99,
  description: 'A high-quality wireless speaker.',
  imageUrl: 'https://example.com/speaker.jpg',
  inStock: true
};

describe('ProductDisplay', () => {
  it('renders product name and price', () => {
    render(<ProductDisplay product={mockProduct} />);
    expect(screen.getByText('Bluetooth Speaker')).toBeInTheDocument();
    expect(screen.getByText('$59.99')).toBeInTheDocument();
  });

  it('renders description and stock status when props are true', () => {
    render(
      <ProductDisplay
        product={mockProduct}
        showDescription
        showStockStatus
      />
    );
    expect(screen.getByText('A high-quality wireless speaker.')).toBeInTheDocument();
    expect(screen.getByText('In Stock')).toBeInTheDocument();
  });

  it('calls onAddToCart when button is clicked', () => {
    const handleAdd = vi.fn();
    render(<ProductDisplay product={mockProduct} onAddToCart={handleAdd} />);
    fireEvent.click(screen.getByText('Add to Cart'));
    expect(handleAdd).toHaveBeenCalledWith('1');
  });
});
