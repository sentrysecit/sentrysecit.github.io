import { useState, useEffect } from 'react';
import frontMatter from 'front-matter';
import { WriteUp } from '../interfaces/writeup';

const writeupFiles = import.meta.glob('@/content/writeups/*.md', {
  query: '?raw',
  import: 'default',
});

export function useWriteUps() {
  const [writeUps, setWriteUps] = useState<WriteUp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWriteUps = async () => {
      const loaded: WriteUp[] = [];

      for (const path in writeupFiles) {
        const raw = (await writeupFiles[path]()) as string;
        const { attributes, body } = frontMatter<Record<string, string>>(raw);

        const fileName = path.split('/').pop()?.replace('.md', '') ?? '';

        loaded.push({
          slug: attributes.slug ?? fileName,
          title: attributes.title ?? '',
          description: attributes.description ?? '',
          category: attributes.category ?? '',
          difficulty: attributes.difficulty ?? '',
          readTime: attributes.readTime ?? '',
          author: attributes.author ?? '',
          date: attributes.date ?? '',
          content: body,
        });
      }

      loaded.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
      setWriteUps(loaded);
      setLoading(false);
    };

    loadWriteUps();
  }, []);

  return { writeUps, loading };
}
