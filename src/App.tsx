// src/App.tsx
import React, { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';

const demoUser = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  role: 'Frontend Developer',
  avatarUrl: 'https://i.pravatar.cc/150?img=32'
};

const demoProduct = {
  id: '1',
  name: 'Noise Cancelling Headphones',
  price: 129.99,
  description: 'Premium over-ear headphones with active noise cancellation.',
  imageUrl: 'https://via.placeholder.com/300x200.png?text=Headphones',
  inStock: true
};

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems(prev => [...prev, productId]);
    setShowAlert(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        >
          <p className="text-sm">Check your cart for more details.</p>
        </AlertBox>
      )}

      <UserProfileCard
        user={demoUser}
        showEmail
        showRole
        onEdit={(userId) => alert(`Editing user: ${userId}`)}
      >
        <p className="text-xs text-gray-500">Last login: 2 hours ago</p>
      </UserProfileCard>

      <ProductDisplay
        product={demoProduct}
        showDescription
        showStockStatus
        onAddToCart={handleAddToCart}
      >
        <p className="text-xs text-gray-500">Free shipping on orders over $50</p>
      </ProductDisplay>
    </div>
  );
}

export default App;
