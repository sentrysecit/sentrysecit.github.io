import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './code-block';
import { MarkdownRendererProps } from '../interfaces';

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const markdownComponents = {
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');

      const codeString = String(children).replace(/\n$/, '');

      if (match) {
        return <CodeBlock language={match[1]} value={codeString} />;
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div
      className="
      prose prose-slate max-w-none w-full
      dark:prose-invert 
      prose-headings:font-bold prose-headings:tracking-tight
      prose-a:text-primary hover:prose-a:text-primary/80
      prose-img:rounded-xl prose-img:shadow-lg
      prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0
      prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
      prose-blockquote:border-l-primary prose-blockquote:bg-secondary/20 prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
    "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
