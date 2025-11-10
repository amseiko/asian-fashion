import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Lightbulb, ShoppingBag, ExternalLink } from "lucide-react";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";
import { useMemo, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const [readingProgress, setReadingProgress] = useState(0);

  // Track reading progress
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                Post Not Found
              </h1>
              <p className="text-muted-foreground mb-8">
                Sorry, we couldn't find the blog post you're looking for.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Generate table of contents from the markdown content
  const tableOfContents = useMemo(() => {
    const headings = post.content.match(/^#{2,3}\s+(.+)$/gm) || [];
    return headings.map(heading => {
      const level = heading.match(/^#+/)?.[0].length || 2;
      const text = heading.replace(/^#+\s+/, '');
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return { level, text, id };
    });
  }, [post.content]);

  // Extract key takeaways (bold statements or first paragraph of each section)
  const keyTakeaways = useMemo(() => {
    const sections = post.content.split(/\n#{2,3}\s+/);
    const takeaways: string[] = [];
    sections.forEach(section => {
      const firstPara = section.split('\n\n')[0];
      if (firstPara && firstPara.length < 200 && firstPara.length > 30) {
        takeaways.push(firstPara.replace(/\*\*/g, '').trim());
      }
    });
    return takeaways.slice(0, 3);
  }, [post.content]);

  return (
    <div className="min-h-screen">
      <Progress value={readingProgress} className="fixed top-0 left-0 right-0 z-50 h-1 rounded-none" />
      <Navigation />
      <main className="pt-16">
        {/* Hero Image */}
        <div className="relative h-[400px] bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground text-lg">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground line-clamp-2">{post.author.bio}</div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            {keyTakeaways.length > 0 && (
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-l-4 border-primary rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-bold text-foreground">Key Takeaways</h3>
                </div>
                <ul className="space-y-3">
                  {keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="bg-card border-2 border-border rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-bold text-foreground">Table of Contents</h3>
                </div>
                <nav className="space-y-2">
                  {tableOfContents.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className={`block text-sm hover:text-primary transition-colors ${
                        item.level === 2 ? 'font-semibold text-foreground' : 'pl-4 text-muted-foreground'
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Article Body */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12 shadow-sm">
              <div className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-20
                prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:border-b-2 prose-h1:border-primary/30 prose-h1:pb-4
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-primary prose-h2:flex prose-h2:items-center prose-h2:gap-3
                prose-h2:before:content-[''] prose-h2:before:w-1 prose-h2:before:h-8 prose-h2:before:bg-primary prose-h2:before:rounded
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-foreground prose-h3:border-l-4 prose-h3:border-secondary prose-h3:pl-4
                prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-secondary/80
                prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-base
                prose-strong:text-foreground prose-strong:font-bold prose-strong:bg-gradient-to-r prose-strong:from-primary/10 prose-strong:to-secondary/10 prose-strong:px-2 prose-strong:py-0.5 prose-strong:rounded
                prose-ul:text-muted-foreground prose-ul:my-8 prose-ul:space-y-3 prose-ul:list-none
                prose-ul>li:relative prose-ul>li:pl-6 prose-ul>li:before:content-['→'] prose-ul>li:before:absolute prose-ul>li:before:left-0 prose-ul>li:before:text-primary prose-ul>li:before:font-bold
                prose-ol:text-muted-foreground prose-ol:my-8 prose-ol:space-y-3 prose-ol:list-none prose-ol:counter-reset-[item]
                prose-ol>li:relative prose-ol>li:pl-8 prose-ol>li:counter-increment-[item] prose-ol>li:before:content-[counter(item)] prose-ol>li:before:absolute prose-ol>li:before:left-0 prose-ol>li:before:w-6 prose-ol>li:before:h-6 prose-ol>li:before:bg-primary/10 prose-ol>li:before:text-primary prose-ol>li:before:rounded-full prose-ol>li:before:flex prose-ol>li:before:items-center prose-ol>li:before:justify-center prose-ol>li:before:text-sm prose-ol>li:before:font-bold
                prose-li:my-3 prose-li:leading-[1.8]
                prose-blockquote:border-l-[6px] prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:pr-6 prose-blockquote:italic prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary/5 prose-blockquote:to-transparent prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
                prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-foreground
                prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline hover:prose-a:text-primary/80
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-hr:border-border prose-hr:my-8 prose-hr:border-t-2
              ">
                <ReactMarkdown
                  components={{
                    h2: ({ children, ...props }) => {
                      const text = children?.toString() || '';
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                      return <h2 id={id} {...props}>{children}</h2>;
                    },
                    h3: ({ children, ...props }) => {
                      const text = children?.toString() || '';
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                      return <h3 id={id} {...props}>{children}</h3>;
                    },
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* FAQs Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t-2 border-border">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-primary rounded"></span>
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {post.faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`faq-${index}`}
                        className="border border-border rounded-xl px-6 bg-card hover:border-primary/50 transition-colors"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Shop Related Products CTA */}
              {post.products && post.products.length > 0 && (
                <div className="mt-12 pt-8 border-t-2 border-border">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                    Shop the Essentials
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Curated products mentioned in this guide to help you achieve the results you want.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {post.products.map((product, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-2xl overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="aspect-square bg-muted relative overflow-hidden">
                          <img 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">
                              ${product.price}
                            </span>
                            <Button asChild size="sm" className="group-hover:scale-105 transition-transform">
                              <a href={product.link} target="_blank" rel="noopener noreferrer">
                                Shop Now
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Card at Bottom */}
              <div className="mt-12 pt-8 border-t-2 border-border">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-6">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Written by</div>
                    <div className="font-display text-2xl font-bold text-foreground mb-2">{post.author.name}</div>
                    <div className="text-muted-foreground leading-relaxed">{post.author.bio}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50 group"
                    >
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {relatedPost.category}
                        </span>
                        <h3 className="font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
