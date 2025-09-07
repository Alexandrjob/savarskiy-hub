import MainLayout from '../components/MainLayout';
import ClientPageContent from '../components/ClientPageContent'; // Import the new client component

export default function Home() {
  return (
    <MainLayout>
      <ClientPageContent />
    </MainLayout>
  );
}
