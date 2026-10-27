import ModuleTabs from '@/components/ModuleTabs';
import { redirect } from 'next/navigation';

const tabs = [
  { id: '1', name: 'Ex 1: Login', path: '/ui-interactions/exercise-1' },
  { id: '2', name: 'Ex 2: Login Errors', path: '/ui-interactions/exercise-2' },
  { id: '3', name: 'Ex 3: Registration', path: '/ui-interactions/exercise-3' },
  { id: '4', name: 'Ex 4: Dynamic Elements', path: '/ui-interactions/exercise-4' },
  { id: '5', name: 'Ex 5: Search', path: '/ui-interactions/exercise-5' },
];

export default function Module2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="page-title">Module 2: Locators and User Interactions</h1>
      <p className="page-subtitle">Practice interacting with forms, dynamic elements, and search functionality.</p>
      
      <ModuleTabs tabs={tabs} />
      
      <div className="card">
        {children}
      </div>
    </div>
  );
}
