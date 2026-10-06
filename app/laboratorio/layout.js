import Laboratorio from '@/components/laboratorio/Laboratorio';

export default function LaboratorioLayout({ children }) {
  return (
    <>
      <Laboratorio />
      {children}
    </>
  );
}
