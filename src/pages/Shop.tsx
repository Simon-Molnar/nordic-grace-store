import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products, categoryLabels } from '@/data/products';
import { Category, Occasion } from '@/types/product';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const occasions: Occasion[] = ['Baptism', 'First Communion', 'Confirmation', 'Wedding', 'Christmas', 'Easter'];
const categoryKeys = Object.keys(categoryLabels) as Category[];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as Category | null;

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedOccasions, setSelectedOccasions] = useState<Occasion[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleOccasion = (occ: Occasion) => {
    setSelectedOccasions(prev =>
      prev.includes(occ) ? prev.filter(o => o !== occ) : [...prev, occ]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    if (selectedOccasions.length > 0) {
      result = result.filter(p => p.occasion_tags.some(t => selectedOccasions.includes(t)));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategories, selectedOccasions, sortBy]);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <h1 className="font-serif text-3xl md:text-4xl mb-8">Shop</h1>

      <div className="flex items-center justify-between mb-8">
        <button
          className="text-sm text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-muted-foreground hidden sm:inline">Sort by</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Sidebar Filters */}
        <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-48 flex-shrink-0 space-y-8`}>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Category</h3>
            <div className="space-y-2">
              {categoryKeys.map(cat => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={selectedCategories.includes(cat)}
                    onCheckedChange={() => toggleCategory(cat)}
                  />
                  <span className="text-sm text-muted-foreground">{categoryLabels[cat]}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Occasion</h3>
            <div className="space-y-2">
              {occasions.map(occ => (
                <label key={occ} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={selectedOccasions.includes(occ)}
                    onCheckedChange={() => toggleOccasion(occ)}
                  />
                  <span className="text-sm text-muted-foreground">{occ}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} products</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
