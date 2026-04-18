import { useWriteUps } from '@/modules/writeups/hooks/useWriteUps';
import { WriteupList } from './writeup-list';
import { Spinner } from '@/modules/core/components/ui/spinner';

export default function WriteupPage() {
  const { writeUps, loading } = useWriteUps();

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Arsenal de Conocimiento
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Documentación técnica de élite creada por nuestros miembros.
        </p>
      </div>

      {loading ? (
        <Spinner className="size-8 text-primary mx-auto block" />
      ) : (
        <WriteupList writeUps={writeUps} />
      )}
    </div>
  );
}
