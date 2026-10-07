import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

      <div className="grid gap-6 md:grid-cols-2">
        {upcomingTalks.map(talk => (
          <Card
            key={talk.title}
            className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-secondary/50 dark:bg-secondary/20"
          >
            <CardHeader>
              <Badge
                variant="outline"
                className="border-accent/50 text-accent w-fit mb-2"
              >
                {talk.level}
              </Badge>
              <CardTitle>{talk.title}</CardTitle>
              <CardDescription>{talk.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span>{talk.date}</span>
                {talk.time && (
                  <>
                    <Clock className="h-4 w-4 text-accent ml-2" />
                    <span>{talk.time}</span>
                  </>
                )}
              </div>
              {talk.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{talk.location}</span>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                {talk.speaker}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
