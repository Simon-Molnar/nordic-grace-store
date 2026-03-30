import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Instagram, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 max-w-2xl">
      <h1 className="font-serif text-3xl md:text-4xl mb-8 text-center">Contact</h1>

      <form className="space-y-4 mb-12" onSubmit={e => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
        </div>
        <Input placeholder="Subject" required />
        <Textarea placeholder="Your message" rows={6} required />
        <Button type="submit" className="w-full">Send Message</Button>
      </form>

      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Mail className="h-4 w-4" />
          <a href="mailto:hello@nordicgrace.com" className="text-sm hover:text-foreground transition-colors">
            hello@nordicgrace.com
          </a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Pinterest">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
