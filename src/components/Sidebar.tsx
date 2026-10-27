'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  MousePointer2, 
  ShoppingCart, 
  Layers, 
  Globe2, 
  Network, 
  Workflow,
  Settings
} from 'lucide-react';

const modules = [
  { id: 'fundamentals', name: 'M1: PW Essentials', path: '/fundamentals', icon: BookOpen },
  { id: 'ui-interactions', name: 'M2: Locators & UI', path: '/ui-interactions', icon: MousePointer2 },
  { id: 'ecommerce', name: 'M3: E-Commerce', path: '/ecommerce', icon: ShoppingCart },
  { id: 'advanced-ui', name: 'M4: Advanced UI', path: '/advanced-ui', icon: Layers },
  { id: 'browser-context', name: 'M5: Browser Context', path: '/browser-context', icon: Globe2 },
  { id: 'api-network', name: 'M6: API & Network', path: '/api-network', icon: Network },
  { id: 'e2e-flow', name: 'M7: E2E Scenario', path: '/e2e-flow', icon: Workflow },
  { id: 'test-suite', name: 'M8: Improving Suite', path: '/test-suite', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Anjo&apos;s QA Playground</h1>
      </div>
      <nav className="sidebar-nav">
        {modules.map((m) => {
          const isActive = pathname.startsWith(m.path);
          const Icon = m.icon;
          return (
            <Link
              key={m.id}
              href={m.path}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} className="sidebar-icon" />
              <span>{m.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
