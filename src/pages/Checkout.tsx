import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lock } from 'lucide-react';

const countries = [
  'Austria', 'Belgium', 'Denmark', 'Finland', 'France', 'Germany', 'Ireland', 'Italy',
  'Netherlands', 'Norway', 'Poland', 'Portugal', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom',
];

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [country, setCountry] = useState('');

  const shipping = totalPrice >= 75 ? 0 : 6.90;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Your cart is empty</h1>
        <Button variant="outline" onClick={() => navigate('/shop')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl">
      <h1 className="font-serif text-3xl mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-12">
        {/* Form */}
        <div className="md:col-span-3 space-y-6">
          <div>
            <h2 className="font-medium mb-4">Contact</h2>
            <div className="space-y-3">
              <Input placeholder="Full name" required />
              <Input type="email" placeholder="Email address" required />
            </div>
          </div>

          <div>
            <h2 className="font-medium mb-4">Shipping Address</h2>
            <div className="space-y-3">
              <Input placeholder="Address line 1" required />
              <Input placeholder="Address line 2 (optional)" />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="City" required />
                <Input placeholder="Postal code" required />
              </div>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-secondary rounded p-6">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Secure payment via Stripe</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Your payment details are processed securely. We never store your card information.
            </p>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Place Order — €{(totalPrice + shipping).toFixed(2)}
          </Button>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <div className="bg-secondary rounded p-6 space-y-4 sticky top-24">
            <h2 className="font-medium mb-2">Order Summary</h2>
            {items.map(item => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.product.name} × {item.quantity}</span>
                <span>€{(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t border-border">
                <span>Total</span>
                <span className="font-serif text-lg">€{(totalPrice + shipping).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
