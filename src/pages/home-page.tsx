import { Button } from '@/modules/core/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/modules/core/components/ui/card';
import { Badge } from '@/modules/core/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, Users, ArrowRight, Zap } from 'lucide-react';
import { upcomingTalks } from '@/data/talks';
import { socialLinks } from '@/data/social';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <div className="text-center pt-16 pb-8">
        <img
          src="/sentry-uploads/e961a312-file.png"
          alt="SentrySec Logo"
          className="w-24 h-24 mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-foreground">
          SentrySec
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Una comunidad para entusiastas de la ciberseguridad.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/writeups">
              Explorar WriteUps <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a
              href="https://www.linkedin.com/company/sentrysecit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Únete a la Comunidad
            </a>
          </Button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Stats Card */}
        <Card className="p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-secondary/50 dark:bg-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              Estadísticas
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">120+</div>
              <div className="text-sm text-muted-foreground">Miembros</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">Charlas</div>
            </div>
          </CardContent>
        </Card>

        {/* Comunidad */}
        <Card className="p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-secondary/50 dark:bg-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-accent" />
              Nuestra Comunidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Seguinos en nuestras redes sociales.
            </p>
            <div className="flex justify-around">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6 mx-auto" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
