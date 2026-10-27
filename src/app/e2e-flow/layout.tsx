import ModuleTabs from '@/components/ModuleTabs';
import { redirect } from 'next/navigation';

const tabs = [
  { id: '30', name: 'Ex 30: E2E Scenario', path: '/e2e-flow/exercise-30' },
];

export default function Module7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="page-title">Module 7: Complete Automation Scenario</h1>
      <p className="page-subtitle">Build a complete End-to-End E-Commerce test combining all skills learned.</p>
      
      <ModuleTabs tabs={tabs} />
      
      <div className="card">
        {children}
      </div>
    </div>
  );
}
