import { ArrowLeft, Clock, User } from 'lucide-react';
import { Button } from '@/modules/core/components/ui/button';
import { Badge } from '@/modules/core/components/ui/badge';
import { MarkdownRenderer } from '../../shared/markdown/components/md-renderer';
import { WriteUpDetailProps } from '../interfaces';

export const WriteUpDetail = ({ writeUp, onBack }: WriteUpDetailProps) => {
  return (
    <div className="min-h-screen bg-background font-sans pt-24 pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-8 -ml-4 text-muted-foreground hover:text-foreground"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a WriteUps
        </Button>

        <header className="mb-12">
          <Badge
            variant="outline"
            className="border-accent/50 text-accent mb-4"
          >
            {writeUp.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {writeUp.title}
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground text-sm border-y border-border/50 py-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{writeUp.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{writeUp.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">
                Dificultad: {writeUp.difficulty}
              </span>
            </div>
          </div>
        </header>

        <main className="animate-fade-in">
          <MarkdownRenderer content={writeUp.content} />
        </main>
      </div>
    </div>
  );
};
