"use client";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="w-full items-center justify-center text-center">
      <p className="mb-6">
        ©️ {year} DabAZ. All rights reserved
      </p>
    </footer>
  );
};
