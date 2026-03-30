import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { categoryLabels } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[3/4] bg-muted rounded overflow-hidden mb-4 flex items-center justify-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-16 h-16 opacity-30 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
        {categoryLabels[product.category]}
      </p>
      <h3 className="font-serif text-base mb-1 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-muted-foreground">€{product.price}</p>
    </Link>
  );
};

export default ProductCard;
