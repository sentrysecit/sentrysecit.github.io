import { useState } from 'react';
import { Shield, BookOpen, Calendar, Users, ExternalLink, Github, Twitter, Facebook, ArrowRight, Zap, Briefcase, Code, Youtube, Instagram, Linkedin, Music, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeSwitcher } from '@/components/theme-switcher';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const upcomingTalks = [
    {
      title: "Fundamentos de Docker",
      date: "02 Agosto 2025",
      speaker: "@KrozFu",
      description: "Aprende técnicas de explotación de memoria y control de flujo de ejecución.",
      level: "Intermedio"
    },
    {
      title: "Estrategias para CTF",
      date: "09 Agosto 2025",
      speaker: "SentrySec",
      description: "Metodologías para dominar desafíos de ciberseguridad en competiciones.",
      level: "Intermedio"
    },
    {
      title: "Arsenal de Seguridad Web",
      date: "16 Agosto 2025",
      speaker: "SentrySec",
      description: "Explora el OWASP Top 10 y técnicas modernas de pentesting web.",
      level: "Principiante"
    }
  ];

  const writeUps = [
    {
      title: "Análisis de 'Legacy' en HTB",
      category: "HackTheBox",
      difficulty: "Fácil",
      description: "Un walkthrough completo de la explotación SMB con herramientas modernas.",
      readTime: "12 min"
    },
    {
      title: "Control de EIP en Buffer Overflows",
      category: "Exploit Dev",
      difficulty: "Medio",
      description: "Una guía para controlar el flujo de ejecución en overflows basados en stack.",
      readTime: "25 min"
    },
    {
      title: "Soluciones a Retos Web de PicoCTF 2024",
      category: "CTF",
      difficulty: "Variado",
      description: "Soluciones y metodologías para los desafíos web más comunes.",
      readTime: "18 min"
    },
    {
      title: "Infiltración en Active Directory",
      category: "Red Team",
      difficulty: "Difícil",
      description: "Técnicas de reconocimiento y escalada de privilegios en entornos AD.",
      readTime: "35 min"
    }
  ];

  const socialLinks = [
    // { name: 'Facebook', icon: Facebook, url: '#', followers: '2.5K' },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/sentrysecit'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sentrysecit'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@sentrysec'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/sentrysec.it/'
    },
    {
      name: 'Discord',
      icon: Bot,
      url: 'https://discord.gg/TyAQFcUe'
    }
    // {
    //   name: 'TikTok',
    //   icon: Music,
    //   url: 'https://tiktok.com/@tuusuario'
    // }
  ];

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Shield },
    { id: 'writeups', label: 'WriteUps', icon: BookOpen },
    { id: 'talks', label: 'Charlas', icon: Calendar },
    { id: 'community', label: 'Comunidad', icon: Users }
  ];

  const renderHome = () => (
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
            <a href="#writeups" onClick={() => setActiveTab('writeups')}>
              Explorar WriteUps <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://discord.gg/TyAQFcUe" onClick={() => setActiveTab('community')}>
              Únete a la Comunidad
            </a>
          </Button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* WriteUps Card - Large */}
        {/* Upcoming Talks Card - Large */}
        <Card className="md:col-span-2 row-span-2 p-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-secondary/50 dark:bg-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Calendar className="h-6 w-6 text-accent" />
              Próximas Charlas
            </CardTitle>
            <CardDescription>
              Sesiones de entrenamiento dirigidas por expertos en ciberseguridad.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingTalks.slice(0, 3).map((talk, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background">
                <div>
                  <h4 className="font-semibold text-foreground">{talk.title}</h4>
                  <p className="text-sm text-muted-foreground">{talk.date} • por {talk.speaker}</p>
                </div>
                <Badge variant="outline" className="border-primary/50 text-primary">{talk.level}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

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
              <div className="text-3xl font-bold text-primary">65+</div>
              <div className="text-sm text-muted-foreground">Miembros</div>
            </div>
            {/* <div>
              <div className="text-3xl font-bold text-primary">47</div>
              <div className="text-sm text-muted-foreground">WriteUps</div>
            </div> */}
            <div>
              <div className="text-3xl font-bold text-primary">5</div>
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
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-center text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6 mx-auto" />
                  <span className="text-xs mt-1">{social.followers}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderWriteUps = () => (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Arsenal de Conocimiento
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Documentación técnica de élite creada por nuestros miembros.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {writeUps.map((writeup, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-secondary/50 dark:bg-secondary/20">
            <CardHeader>
              <Badge variant="outline" className="border-accent/50 text-accent w-fit-content mb-2">{writeup.category}</Badge>
              <CardTitle>{writeup.title}</CardTitle>
              <CardDescription>{writeup.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{writeup.difficulty} • {writeup.readTime}</span>
              <Button variant="ghost" size="sm" asChild>
                <a href="#">
                  Leer más <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderTalks = () => (
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
          <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row bg-secondary/50 dark:bg-secondary/20">
            <CardHeader className="flex-shrink-0 md:w-1/4 md:border-r md:dark:border-slate-800 p-6 text-center md:text-left">
              <p className="text-lg font-semibold text-accent">{talk.date}</p>
              <p className="text-sm text-muted-foreground">por {talk.speaker}</p>
              <Badge variant="outline" className="mt-2 border-primary/50 text-primary">{talk.level}</Badge>
            </CardHeader>
            <div className="flex-grow p-6 flex flex-col">
              <CardTitle>{talk.title}</CardTitle>
              <CardDescription className="mt-2 flex-grow">{talk.description}</CardDescription>
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

  const renderCommunity = () => (
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
              SentrySec es una comunidad dedicada a la ciberseguridad, donde la curiosidad
              se encuentra con la experiencia. Fomentamos un ambiente de aprendizaje
              para entusiastas y profesionales.
            </p>
            <p>
              Creemos en el poder del conocimiento compartido y en la importancia de mantener
              altos estándares de ética en cada análisis y proyecto.
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
                { icon: Code, title: "Aprendizaje Continuo:", text: "Fomentamos la curiosidad y el perfeccionamiento." },
                { icon: Shield, title: "Ética:", text: "Mantenemos una conducta íntegra en nuestras prácticas." },
                { icon: Users, title: "Colaboración:", text: "Crecemos juntos, compartiendo conocimiento." },
                { icon: Briefcase, title: "Profesionalismo:", text: "Buscamos la excelencia en todo lo que hacemos." }
              ].map(item => (
                <li key={item.title} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">{item.title}</strong> {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'writeups':
        return renderWriteUps();
      case 'talks':
        return renderTalks();
      case 'community':
        return renderCommunity();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="absolute top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28">
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-border/50 bg-background/80 backdrop-blur-lg z-50">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-around py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors duration-200 w-20 ${activeTab === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:bg-secondary'
                  }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;