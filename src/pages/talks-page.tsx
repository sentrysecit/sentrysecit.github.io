import { Calendar } from 'lucide-react';
import { Button } from '@/modules/core/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/modules/core/components/ui/card';
import { Badge } from '@/modules/core/components/ui/badge';
import { upcomingTalks } from '@/data/talks';

export default function TalksPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Próximas Charlas
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Estamos preparando nuevas sesiones de entrenamiento dirigidas por expertos en ciberseguridad.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="relative">
          <Calendar className="h-12 w-12 text-muted-foreground animate-pulse" />
          <div className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full animate-ping" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Próximamente</h3>
          <p className="text-muted-foreground max-w-sm">
            Esta sección se actualizará automáticamente una vez que la API de eventos esté desplegada.
          </p>
        </div>
      </div>
    </div>
  );
}
