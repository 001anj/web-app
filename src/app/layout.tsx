import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: "Anjo's QA Playground",
  description: 'A hands-on sandbox app built for practicing and demonstrating Playwright test automation skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
