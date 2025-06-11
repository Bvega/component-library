import React from 'react';
import type { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="border p-4 rounded shadow bg-white flex gap-4 items-start">
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={`${user.name}'s avatar`}
          className="w-16 h-16 rounded-full object-cover"
        />
      )}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
        {showRole && <p className="text-sm text-gray-500">{user.role}</p>}
        {children && <div className="mt-2">{children}</div>}
      </div>
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="text-sm text-blue-500 hover:underline ml-4"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};
