import ModuleTabs from '@/components/ModuleTabs';
import { redirect } from 'next/navigation';

const tabs = [
  { id: '6', name: 'Ex 6: Filter', path: '/ecommerce/exercise-6' },
  { id: '7', name: 'Ex 7: Sort', path: '/ecommerce/exercise-7' },
  { id: '8', name: 'Ex 8: Add to Cart', path: '/ecommerce/exercise-8' },
  { id: '9', name: 'Ex 9: Quantity', path: '/ecommerce/exercise-9' },
  { id: '10', name: 'Ex 10: Remove', path: '/ecommerce/exercise-10' },
  { id: '11', name: 'Ex 11: Checkout', path: '/ecommerce/exercise-11' },
  { id: '12', name: 'Ex 12: Summary', path: '/ecommerce/exercise-12' },
];

export default function Module3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="page-title">Module 3: E-Commerce Automation</h1>
      <p className="page-subtitle">Practice with product lists, filtering, sorting, and cart management.</p>
      
      <ModuleTabs tabs={tabs} />
      
      <div className="card">
        {children}
      </div>
    </div>
  );
}
