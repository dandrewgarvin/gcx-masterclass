import React from 'react'

const Layout = ({ children, width = '80%' }) => {
  return <div style={{ width }}>{children}</div>;
};

export default Layout