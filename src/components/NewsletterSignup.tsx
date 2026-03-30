import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsletterSignup = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-xl">
        <h2 className="font-serif text-2xl mb-3">Join our community</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Be the first to know about new arrivals and seasonal collections.
        </p>
        <form className="flex gap-2 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
          <Input type="email" placeholder="Your email" className="bg-background" />
          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
