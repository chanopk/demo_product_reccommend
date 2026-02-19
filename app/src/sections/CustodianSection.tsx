import { CustodianCTA } from '@/components/CustodianCTA';

interface CustodianSectionProps {
  onAction?: () => void;
}

export function CustodianSection({ onAction }: CustodianSectionProps) {
  return (
    <section className="py-12 px-4 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto">
        <CustodianCTA onAction={onAction} />
      </div>
    </section>
  );
}
