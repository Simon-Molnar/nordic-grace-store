import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-lg">
      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
      <h1 className="font-serif text-3xl mb-4">Thank you for your order</h1>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Your order has been placed successfully. You will receive a confirmation email shortly with your order details and tracking information.
      </p>
      <Link to="/shop">
        <Button variant="outline">Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
