

# Nordic Grace — Catholic Lifestyle E-commerce Store

## Design System
- **Palette:** White backgrounds, warm off-white/linen (#FAF9F6), muted sage (#A3B18A) and stone (#B5B1A4) accents
- **Typography:** Playfair Display for headings, Inter for body text
- **Style:** Scandinavian minimalism — generous whitespace, clean lines, no heavy religious iconography in the UI

## Pages & Features

### 1. Homepage
- Hero with tagline "Faithful living, beautifully made" + featured "Easter Living" collection CTA
- Four category tiles: Rosaries & Prayer, Jewelry, Home & Art, Books & Paper
- Mission statement section
- Featured products row (4 products marked as featured)
- Newsletter signup strip

### 2. Shop Page
- Filterable product grid with filters: category, price range, occasion (Baptism, First Communion, Confirmation, Wedding, Christmas, Easter)
- Sort: featured, price low→high, price high→low, newest

### 3. Product Detail Page
- Large image gallery (left) + product info (right): name, price (EUR), descriptions, occasion tags, Add to Cart
- Related products row at bottom

### 4. Cart & Checkout
- Slide-out cart drawer from cart icon
- Checkout page: name, email, shipping address, country selector
- Stripe placeholder with "Secure payment via Stripe" note
- Order confirmation page

### 5. About Page
- Full mission copy as specified

### 6. Shipping & Returns Page
- Two sections with verbatim copy provided

### 7. Contact Page
- Form: name, email, subject, message
- Email + Instagram/Pinterest icons

### Navigation
- Text logo "Nordic Grace" (Playfair Display) left
- Center links: Shop, Collections, About, Journal, Contact
- Right: search icon, cart icon with badge
- Mobile hamburger menu

### Footer
- Brand description + social icons | Site links + Shipping & Returns | Newsletter signup
- Bottom bar: © 2025 Nordic Grace, Privacy Policy, Terms of Service (placeholder)

## Backend (Supabase)
- **Products table:** id, name, short_description, long_description, price (numeric EUR), category (enum), occasion_tags (array), images (URL array), stock_status (boolean), featured (boolean), created_at
- Seed with all 12 products as specified
- Cart state managed client-side (React context/localStorage)

## State Management
- Cart context with add/remove/update quantity
- Product filtering/sorting via URL params on shop page

