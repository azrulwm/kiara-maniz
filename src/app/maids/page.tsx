import OurServices from '@/components/ForeignWorkerPage/OurServices';
import Compliance from '@/components/MaidsPage/Compliance';
import HousemaidServices from '@/components/MaidsPage/HousemaidServices';
import Maids from '@/components/MaidsPage/Maids';
import Quality from '@/components/MaidsPage/Quality';
import Steps from '@/components/MaidsPage/Steps';

export default function MaidsPage() {
  return (
    <div>
      <Maids />
      <HousemaidServices />
      <Steps />
      <Quality />
      <OurServices />
      <Compliance />
    </div>
  );
}
