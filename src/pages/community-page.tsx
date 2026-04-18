import { Shield, Users, Briefcase, Code } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/modules/core/components/ui/card';

export default function CommunityPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Nuestra Comunidad
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Unidos por el conocimiento, fortalecidos por la colaboración.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="p-2 bg-secondary/50 dark:bg-secondary/20">
          <CardHeader>
            <CardTitle>¿Quiénes Somos?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              SentrySec es una comunidad dedicada a la ciberseguridad, donde la
              curiosidad se encuentra con la experiencia. Fomentamos un ambiente
              de aprendizaje para entusiastas y profesionales.
            </p>
            <p>
              Creemos en el poder del conocimiento compartido y en la
              importancia de mantener altos estándares de ética en cada análisis
              y proyecto.
            </p>
          </CardContent>
        </Card>

        <Card className="p-2 bg-secondary/50 dark:bg-secondary/20">
          <CardHeader>
            <CardTitle>Nuestros Principios</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              {[
                {
                  icon: Code,
                  title: 'Aprendizaje Continuo:',
                  text: 'Fomentamos la curiosidad y el perfeccionamiento.',
                },
                {
                  icon: Shield,
                  title: 'Ética:',
                  text: 'Mantenemos una conducta íntegra en nuestras prácticas.',
                },
                {
                  icon: Users,
                  title: 'Colaboración:',
                  text: 'Crecemos juntos, compartiendo conocimiento.',
                },
                {
                  icon: Briefcase,
                  title: 'Profesionalismo:',
                  text: 'Buscamos la excelencia en todo lo que hacemos.',
                },
              ].map(item => (
                <li key={item.title} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">{item.title}</strong>{' '}
                    {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
