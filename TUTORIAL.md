Excellent — you’ve successfully pushed your clean, working version to GitHub, and everything is in sync. Now let’s create the `tutorial.md` file to serve as a walkthrough for using the component library.

---

### 📘 `tutorial.md` (Full Copy & Paste Version)

````md
# 🧩 Component Library Tutorial

This guide walks you through the usage and purpose of each component in the `component-library` project. It is intended for internal developers integrating reusable UI components in their React + TypeScript applications.

---

## 📦 Project Overview

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v3
- **Bundler:** Vite
- **Testing:** Vitest + React Testing Library

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Bvega/component-library.git
cd component-library
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

---

## 🧱 Components

### 1. `AlertBox`

A reusable alert component for success, warning, info, and error messages.

**Props:**

```ts
type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}
```

**Example Usage:**

```tsx
<AlertBox type="success" message="Item added!" onClose={() => alert('Closed')}>
  <p className="text-sm">Check your cart for more details.</p>
</AlertBox>
```

---

### 2. `UserProfileCard`

Displays user information with optional email, role, and avatar.

**Props:**

```ts
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}
```

**Example Usage:**

```tsx
<UserProfileCard
  user={user}
  showEmail
  showRole
  onEdit={(id) => alert(`Edit ${id}`)}
>
  <div className="text-xs text-gray-500">Last login: 2 hours ago</div>
</UserProfileCard>
```

---

### 3. `ProductDisplay`

Displays product details with options for description, stock status, and cart actions.

**Props:**

```ts
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}
```

**Example Usage:**

```tsx
<ProductDisplay
  product={product}
  showDescription
  showStockStatus
  onAddToCart={(id) => alert(`Added ${id}`)}
>
  <p className="text-xs text-gray-500">Free shipping on orders over $50</p>
</ProductDisplay>
```

---

## 🧪 Running Tests

```bash
npm run test
```

All components include tests using Vitest and React Testing Library to ensure rendering and prop behavior.

---

## 📁 Folder Structure

```
src/
  components/
    AlertBox/
    ProductDisplay/
    UserProfileCard/
  types/
    index.ts
```

---

## 📌 Notes

* All props are type-safe using TypeScript interfaces.
* Components are designed for reusability and composition.
* Tailwind ensures responsive and consistent styling.

---

## ✅ Ready for Integration

Import any component into other apps like so:

```tsx
import { AlertBox } from './components/AlertBox/AlertBox';
```

---

For further customization or additions, fork the repo and build on top of these solid foundations.