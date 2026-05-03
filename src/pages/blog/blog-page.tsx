import { useBlogPosts } from '@/modules/blog/hooks/useBlogPosts';
import { BlogList } from '@/modules/blog/components/blog-list';
import { Spinner } from '@/modules/core/components/ui/spinner';

export default function BlogPage() {
  const { posts, loading } = useBlogPosts();

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Blog de la Comunidad
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Perspectivas, reflexiones y artículos sobre el ecosistema de la ciberseguridad.
        </p>
      </div>

      {loading ? (
        <Spinner className="size-8 text-primary mx-auto block" />
      ) : posts.length > 0 ? (
        <BlogList posts={posts} />
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground">Aún no hay publicaciones en el blog.</p>
        </div>
      )}
    </div>
  );
}
