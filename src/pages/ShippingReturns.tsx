const ShippingReturns = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 max-w-3xl">
      <h1 className="font-serif text-3xl md:text-4xl mb-12 text-center">Shipping & Returns</h1>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-6">Shipping</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
          <p>
            We ship to all EU and EEA countries, as well as the United Kingdom and Switzerland. We are based in Europe and all orders are dispatched from within the EU, meaning no customs charges apply for European customers.
          </p>
          <p>
            Standard shipping takes 3–7 business days depending on your country. Express shipping (1–3 business days) is available at checkout for most destinations. During peak seasons such as Advent and Easter, please allow an additional 2–3 business days.
          </p>
          <p>
            Standard shipping is free on all orders over €75. Below €75, a flat rate of €6.90 applies. Express shipping is calculated at checkout based on destination.
          </p>
          <p>
            You will receive a tracking link by email once your order has been dispatched. If your order arrives damaged or does not arrive within the estimated timeframe, contact us at hello@nordicgrace.com.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl mb-6">Returns</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
          <p>
            You have the right to return any item within 30 days of receiving it, without giving a reason. To initiate a return, contact us at hello@nordicgrace.com with your order number and the item you wish to return.
          </p>
          <p>
            Items must be returned in their original condition and packaging. Once we receive and inspect your return, we will issue a full refund to your original payment method within 5 business days.
          </p>
          <p>
            Shipping costs are refunded only if the return is due to our error or a defective product. Candles that have been burned and personalised or engraved items cannot be returned unless faulty.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ShippingReturns;
