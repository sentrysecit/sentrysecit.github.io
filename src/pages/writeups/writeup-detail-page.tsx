import { useParams, useNavigate } from 'react-router-dom';
import { useWriteUps } from '@/modules/writeups/hooks/useWriteUps';
import { WriteUpDetail } from '@/modules/writeups/components/writeup-detail';

export default function WriteUpDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { writeUps } = useWriteUps();

  const writeUp = writeUps.find(w => w.slug === slug);

  if (!writeUp) return <p>WriteUp no encontrado</p>;

  return (
    <WriteUpDetail writeUp={writeUp} onBack={() => navigate('/writeups')} />
  );
}
