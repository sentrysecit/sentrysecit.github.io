import { useParams, Link } from 'react-router-dom';
import { useBlogPosts } from '@/modules/blog/hooks/useBlogPosts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/modules/core/components/ui/card';
import { Badge } from '@/modules/core/components/ui/badge';
import { Spinner } from '@/modules/core/components/ui/spinner';
import { MarkdownRenderer } from '@/modules/shared/markdown/components/md-renderer';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading } = useBlogPosts();
  const post = posts.find(p => p.slug === slug);

  if (loading) {
    return <Spinner className="size-8 text-primary mx-auto block" />;
  }

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Artículo no encontrado</h2>
        <p className="text-muted-foreground mt-2">El artículo que buscas no existe.</p>
        <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">
          Volver al Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Link
        to="/blog"
        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Volver al Blog
      </Link>

      <Card className="bg-secondary/50 dark:bg-secondary/20">
        <CardHeader>
          <div className="flex flex-wrap gap-3 items-center justify-between mb-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
          <CardTitle className="text-3xl md:text-4xl">{post.title}</CardTitle>
          <CardDescription className="text-lg mt-2">{post.description}</CardDescription>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
          </div>
        </CardHeader>
        <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
          <MarkdownRenderer content={post.content} />
        </CardContent>
      </Card>
    </div>
  );
}