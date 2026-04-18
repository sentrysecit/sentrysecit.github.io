import { ExternalLink } from 'lucide-react';
import { Button } from '@/modules/core/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/modules/core/components/ui/card';
import { Badge } from '@/modules/core/components/ui/badge';
import { Link } from 'react-router-dom';
import { WriteUp } from '@/modules/writeups/interfaces';

export const WriteupList = ({ writeUps }: { writeUps: WriteUp[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {writeUps.map((writeup, index) => (
        <Card
          key={index}
          className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-secondary/50 dark:bg-secondary/20"
        >
          <CardHeader>
            <Badge
              variant="outline"
              className="border-accent/50 text-accent w-fit-content mb-2"
            >
              {writeup.category}
            </Badge>
            <CardTitle>{writeup.title}</CardTitle>
            <CardDescription>{writeup.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              {writeup.difficulty} • {writeup.readTime}
            </span>
            <Button variant="ghost" size="sm" asChild>
              <Link to={`/writeups/${writeup.slug}`}>
                Leer más <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
