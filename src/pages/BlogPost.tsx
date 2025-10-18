import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

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

  return (
    <div className="min-h-screen">
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
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.bio}</div>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12 shadow-sm">
              <div className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-6 prose-h1:border-b prose-h1:border-border prose-h1:pb-4
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-primary
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-secondary
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-2
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-foreground prose-strong:font-semibold prose-strong:bg-primary/5 prose-strong:px-1 prose-strong:rounded
                prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:space-y-2
                prose-ol:text-muted-foreground prose-ol:my-6 prose-ol:space-y-2
                prose-li:my-2 prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:my-6
                prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-foreground
                prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline hover:prose-a:text-primary/80
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-hr:border-border prose-hr:my-8
              ">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* Author Card at Bottom */}
              <div className="mt-12 pt-8 border-t-2 border-border">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Written by</div>
                    <div className="font-display text-xl font-bold text-foreground mb-2">{post.author.name}</div>
                    <div className="text-muted-foreground">{post.author.bio}</div>
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
