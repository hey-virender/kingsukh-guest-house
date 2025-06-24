import React from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kingsukh Guest House",
  description: "Kingsukh Guest House",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default layout;
