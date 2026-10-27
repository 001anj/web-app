import ModuleTabs from '@/components/ModuleTabs';
import { redirect } from 'next/navigation';

const tabs = [
  { id: '26', name: 'Ex 26: Create Data', path: '/api-network/exercise-26' },
  { id: '27', name: 'Ex 27: Validate API', path: '/api-network/exercise-27' },
  { id: '28', name: 'Ex 28: Mock Request', path: '/api-network/exercise-28' },
  { id: '29', name: 'Ex 29: API Errors', path: '/api-network/exercise-29' },
];

export default function Module6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="page-title">Module 6: API and Network Automation</h1>
      <p className="page-subtitle">Practice working with API requests, mocking data, and testing server responses.</p>
      
      <ModuleTabs tabs={tabs} />
      
      <div className="card">
        {children}
      </div>
    </div>
  );
}
