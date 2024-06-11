import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="m-0 text-center">Techbrain © 2022 - {currentYear} copyright all right reserved</p>
      </div>
    </footer>
  );
}
