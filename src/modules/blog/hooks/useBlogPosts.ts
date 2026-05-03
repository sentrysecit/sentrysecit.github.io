import { useState, useEffect } from 'react';
import frontMatter from 'front-matter';
import { BlogPost } from '../interfaces/blog';

const blogFiles = import.meta.glob('@/content/blog/*.md', {
  query: '?raw',
  import: 'default',
});

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const loaded: BlogPost[] = [];

      for (const path in blogFiles) {
        const raw = (await blogFiles[path]()) as string;
        const { attributes, body } = frontMatter<Record<string, string>>(raw);

        const fileName = path.split('/').pop()?.replace('.md', '') ?? '';

        loaded.push({
          slug: attributes.slug ?? fileName,
          title: attributes.title ?? 'Untitled Post',
          description: attributes.description ?? '',
          author: attributes.author ?? 'SentrySec Member',
          date: attributes.date ?? '',
          category: attributes.category ?? 'General',
          readTime: attributes.readTime ?? '',
          content: body,
        });
      }

      loaded.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
      setPosts(loaded);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return { posts, loading };
}
