import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-primary hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div className="aspect-[3/4] bg-muted rounded flex items-center justify-center">
          <img src={product.images[0]} alt={product.name} className="w-24 h-24 opacity-30" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">{product.name}</h1>
          <p className="font-serif text-2xl text-foreground mb-6">€{product.price}</p>
          <p className="text-muted-foreground leading-relaxed mb-4">{product.short_description}</p>
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{product.long_description}</p>

          {/* Occasion Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {product.occasion_tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-muted"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-muted"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button size="lg" className="flex-1" onClick={() => addToCart(product, quantity)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section>
          <h2 className="font-serif text-2xl mb-8">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
