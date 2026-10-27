import ModuleTabs from '@/components/ModuleTabs';
import { redirect } from 'next/navigation';

const tabs = [
  { id: '21', name: 'Ex 21: Multiple Tabs', path: '/browser-context/exercise-21' },
  { id: '22', name: 'Ex 22: Pop-ups', path: '/browser-context/exercise-22' },
  { id: '23', name: 'Ex 23: iframe', path: '/browser-context/exercise-23' },
  { id: '24', name: 'Ex 24: Navigation', path: '/browser-context/exercise-24' },
  { id: '25', name: 'Ex 25: Storage/Cookies', path: '/browser-context/exercise-25' },
];

export default function Module5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="page-title">Module 5: Browser Context and Navigation</h1>
      <p className="page-subtitle">Practice working with multiple tabs, iframes, and browser storage.</p>
      
      <ModuleTabs tabs={tabs} />
      
      <div className="card">
        {children}
      </div>
    </div>
  );
}
