import React, { FC } from 'react';
import './sidebar.scss';

export const Sidebar: FC = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};
