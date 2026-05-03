import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/modules/core/components/ui/card';
import { Badge } from '@/modules/core/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '../interfaces/blog';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.slug} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-secondary/50 dark:bg-secondary/20 flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="border-primary/50 text-primary">
                {post.category}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" /> {post.readTime}
              </div>
            </div>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            <CardDescription className="line-clamp-3">{post.description}</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-4 border-t border-border/50 space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
            <Link 
              to={`/blog/${post.slug}`} 
              className="block text-center py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Leer más
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
