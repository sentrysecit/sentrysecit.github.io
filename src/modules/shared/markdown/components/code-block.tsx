import { useState } from 'react';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';
import { CodeBlockProps } from '../interfaces';

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative mt-6 mb-6 rounded-lg overflow-hidden bg-[#1E1E1E] border border-border/50 shadow-2xl group">
      <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-border/50">
        <span className="text-xs font-mono text-muted-foreground uppercase">
          {language}
        </span>

        <button
          onClick={handleCopy}
          disabled={isCopied}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200 disabled:opacity-80 disabled:cursor-default"
          aria-label="Copiar código"
        >
          {isCopied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" />
              <span className="text-green-500">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Copiar
              </span>
            </>
          )}
        </button>
      </div>

      <SyntaxHighlighter
        style={materialDark}
        language={language}
        PreTag="div"
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: 'transparent',
        }}
        wrapLines={true}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export { CodeBlock };
