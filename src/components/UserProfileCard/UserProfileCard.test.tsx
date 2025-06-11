// src/components/UserProfileCard/UserProfileCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { UserProfileCard } from './UserProfileCard';
import { User } from '../../types';

const mockUser: User = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane@example.com',
  role: 'Admin',
  avatarUrl: 'https://example.com/avatar.jpg'
};

describe('UserProfileCard', () => {
  it('renders name, email, and role based on props', () => {
    render(
      <UserProfileCard user={mockUser} showEmail showRole />
    );
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', () => {
    const handleEdit = vi.fn();
    render(
      <UserProfileCard user={mockUser} onEdit={handleEdit} />
    );
    fireEvent.click(screen.getByText('Edit Profile'));
    expect(handleEdit).toHaveBeenCalledWith('1');
  });
});
