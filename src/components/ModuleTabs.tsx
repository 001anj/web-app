'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface Tab {
  id: string;
  name: string;
  path: string;
}

interface ModuleTabsProps {
  tabs: Tab[];
}

export default function ModuleTabs({ tabs }: ModuleTabsProps) {
  const pathname = usePathname();

  return (
    <div className="module-tabs">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path || pathname.startsWith(`${tab.path}/`);
        return (
          <Link
            key={tab.id}
            href={tab.path}
            className={`tab-btn ${isActive ? 'active' : ''}`}
            id={`tab-${tab.id}`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
