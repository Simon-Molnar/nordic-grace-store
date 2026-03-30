import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { products, categoryLabels } from '@/data/products';
import alabasterRosary from '@/assets/products/alabaster-rosary.jpg';
import madonnaPrint from '@/assets/products/madonna-print.jpg';

const categories = [
  { key: 'rosaries', image: alabasterRosary },
  { key: 'jewelry', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80' },
  { key: 'home', image: madonnaPrint },
  { key: 'books', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80' },
];

const Index = () => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-linen">
        <div className="container mx-auto px-4 lg:px-8 py-24 md:py-32 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Nordic Grace</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Faithful living,<br />beautifully made.
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            A curated collection of Catholic goods for the modern home.
          </p>
          <Link to="/shop">
            <Button variant="default" size="lg" className="tracking-wide">
              Shop Easter Living
            </Button>
          </Link>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.key}
              to={`/shop?category=${cat.key}`}
              className="group block"
            >
              <div className="aspect-[3/4] bg-muted rounded overflow-hidden mb-3 flex items-center justify-center">
                <img src={cat.image} alt={categoryLabels[cat.key]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-sm md:text-base text-center group-hover:text-primary transition-colors">
                {categoryLabels[cat.key]}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-linen">
        <div className="container mx-auto px-4 lg:px-8 py-20 max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nordic Grace was born out of a simple observation: beautiful Catholic living has a home in Southern Europe and in North America, but almost nowhere in the North. We believe that faith belongs in your home, on your hands, and in your everyday life. Every piece in our collection is chosen because it is genuinely well made, thoughtfully designed, and worthy of becoming part of your family's story.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">Featured</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
};

export default Index;
