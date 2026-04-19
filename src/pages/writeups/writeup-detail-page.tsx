import { useParams, useNavigate } from 'react-router-dom';
import { useWriteUps } from '@/modules/writeups/hooks/useWriteUps';
import { WriteUpDetail } from '@/modules/writeups/components/writeup-detail';
import { Spinner } from '@/modules/core/components/ui/spinner';

export default function WriteUpDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { writeUps, loading } = useWriteUps();

  const writeUp = writeUps.find(w => w.slug === slug);

  if (!loading && !writeUp) return <p>WriteUp no encontrado</p>;

  return (
    <>
      {loading ? (
        <div className="flex min-h-screen items-center justify-center bg-background">
          <Spinner className="size-8 text-primary" />
        </div>
      ) : (
        <WriteUpDetail
          writeUp={writeUp!}
          onBack={() => navigate('/writeups')}
        />
      )}
    </>
  );
}
