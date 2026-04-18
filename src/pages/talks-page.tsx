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
          Sesiones de entrenamiento dirigidas por expertos en ciberseguridad.
        </p>
      </div>

      <div className="space-y-6">
        {upcomingTalks.map((talk, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row bg-secondary/50 dark:bg-secondary/20"
          >
            <CardHeader className="flex-shrink-0 md:w-1/4 md:border-r md:dark:border-slate-800 p-6 text-center md:text-left">
              <p className="text-lg font-semibold text-accent">{talk.date}</p>
              <p className="text-sm text-muted-foreground">
                por {talk.speaker}
              </p>
              <Badge
                variant="outline"
                className="mt-2 border-primary/50 text-primary"
              >
                {talk.level}
              </Badge>
            </CardHeader>
            <div className="flex-grow p-6 flex flex-col">
              <CardTitle>{talk.title}</CardTitle>
              <CardDescription className="mt-2 flex-grow">
                {talk.description}
              </CardDescription>
              <div className="mt-4">
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Reservar Lugar
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
