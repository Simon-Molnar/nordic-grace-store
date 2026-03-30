import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'How to build a home altar',
    excerpt: 'A simple guide to creating a beautiful, prayerful space in your home — no matter how small.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80',
  },
  {
    title: 'The saints of the North',
    excerpt: 'Scandinavia has a rich Catholic heritage. Meet the saints who shaped the faith in the Nordic countries.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
  },
  {
    title: 'A guide to Advent living',
    excerpt: 'Practical and beautiful ways to observe the Advent season with your family at home.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80',
  },
];

const Journal = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Journal</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Stories, reflections, and guides for faithful living.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {articles.map((article) => (
          <div key={article.title} className="group">
            <div className="aspect-[4/3] bg-muted rounded overflow-hidden mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {article.excerpt}
            </p>
            <span className="text-xs uppercase tracking-wider text-primary font-medium">
              Read more →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
