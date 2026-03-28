import { readFile } from "fs/promises";
import { join } from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const CONTENT_DIR = join(process.cwd(), "content", "blog");

const postMeta: Record<string, { title: string; date: string; readTime: string; category: string }> = {
  "quiet-italy-beyond-tourist-trail": { title: "Quiet Italy: 10 Destinations Beyond the Tourist Trail", date: "2026-03-25", readTime: "8 min", category: "Destinations" },
  "ai-travel-planning-future": { title: "How AI Is Changing Luxury Travel Planning", date: "2026-03-20", readTime: "6 min", category: "Industry" },
  "italy-honeymoon-guide-2026": { title: "The Complete Italy Honeymoon Guide for 2026", date: "2026-03-15", readTime: "12 min", category: "Planning" },
  "italian-food-mistakes-tourists-make": { title: "7 Italian Food Mistakes Every Tourist Makes", date: "2026-03-10", readTime: "5 min", category: "Culture" },
  "heritage-travel-italy-roots": { title: "Heritage Travel: How to Trace Your Italian Roots", date: "2026-03-05", readTime: "10 min", category: "Heritage" },
};

export async function generateStaticParams() {
  return Object.keys(postMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = postMeta[slug];
  if (!meta) return {};
  return {
    title: `${meta.title} — Volta Travel`,
    description: `${meta.title}. Read time: ${meta.readTime}.`,
  };
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.*$)/gm, '<h3 class="mt-8 mb-3 font-serif text-xl text-charcoal">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="mt-10 mb-4 font-serif text-2xl text-charcoal">$1</h2>')
    .replace(/^# (.*$)/gm, '')
    .replace(/^\*([^*]+)\*$/gm, '<p class="text-sm italic text-charcoal/50 mb-6">$1</p>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-medium text-charcoal">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/^- \[ \] (.*$)/gm, '<li class="flex items-start gap-2 text-sm text-charcoal/70 py-1"><span class="text-warm">☐</span> $1</li>')
    .replace(/^- (.*$)/gm, '<li class="text-sm text-charcoal/70 py-1 pl-4 border-l-2 border-warm/20">$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li class="text-sm text-charcoal/70 py-1 pl-4 border-l-2 border-warm/20">$1</li>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-warm-dark underline underline-offset-2 hover:text-charcoal transition-colors">$1</a>')
    .replace(/^(?!<[hla-z])((?!^$).+)$/gm, '<p class="text-sm leading-relaxed text-charcoal/70 mb-4">$1</p>')
    .replace(/^---$/gm, '<hr class="my-8 border-warm/10" />')
    .replace(/\n{3,}/g, '\n\n');
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = postMeta[slug];
  if (!meta) notFound();

  let content: string;
  try {
    content = await readFile(join(CONTENT_DIR, `${slug}.md`), "utf-8");
  } catch {
    notFound();
  }

  const html = markdownToHtml(content);

  return (
    <div className="min-h-screen bg-cream">
      <nav className="fixed top-0 z-50 w-full bg-cream/80 backdrop-blur-md border-b border-warm/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-2xl tracking-wide text-charcoal">Volta</Link>
          <Link href="/blog" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">← Back to Journal</Link>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-charcoal/40">
          <span className="rounded-full bg-warm/10 px-3 py-1 font-medium text-warm-dark">{meta.category}</span>
          <span>{meta.date}</span>
          <span>{meta.readTime} read</span>
        </div>

        <h1 className="font-serif text-4xl leading-tight tracking-tight text-charcoal md:text-5xl">
          {meta.title}
        </h1>

        <div className="mt-10 prose-volta" dangerouslySetInnerHTML={{ __html: html }} />

        <div className="mt-16 rounded-2xl border border-warm/20 bg-warm/5 p-8 text-center">
          <h3 className="font-serif text-xl text-charcoal">Ready to experience Italy?</h3>
          <p className="mt-2 text-sm text-charcoal/60">Get a free personalized itinerary in 24 hours.</p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex rounded-full bg-charcoal px-8 py-3 text-sm font-medium text-cream hover:bg-navy transition-colors"
          >
            Get Your Free Itinerary
          </Link>
        </div>
      </article>

      <footer className="border-t border-warm/15 bg-charcoal py-12 text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <p className="font-serif text-xl">Volta</p>
          <p className="text-xs text-cream/30">&copy; {new Date().getFullYear()} Volta Travel</p>
        </div>
      </footer>
    </div>
  );
}
