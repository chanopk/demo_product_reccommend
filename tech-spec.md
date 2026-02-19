# CIMB Product Recommendation Demo - Technical Specification

## 1. Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, actions | Custom colors, sizes |
| Card | Content containers | Custom shadows, borders |
| Input | Search fields | Focus states |
| Badge | Status indicators | Color variants |
| Avatar | Customer photo | Size variants |
| Progress | Risk score gauge | Circular variant |
| Table | Product comparison | Sortable, striped |
| Tabs | Section navigation | Custom styling |
| Skeleton | Loading states | Shimmer effect |
| Separator | Visual dividers | Color variants |
| Tooltip | Info hints | Custom delay |
| Alert | Warning messages | Vulnerable flag |

### Third-Party Registry Components

| Component | Registry | Purpose |
|-----------|----------|---------|
| @magicui/number-ticker | magicui | Animated number counting |
| @aceternity/timeline | aceternity | Customer journey visualization |

### Custom Components

| Component | Purpose | Props |
|-----------|---------|-------|
| CustomerSearch | Search bar with inputs | onSearch, loading |
| PersonaCard | Individual metric card | title, value, icon, type |
| RiskGauge | Circular risk indicator | score, size |
| ProductComparison | Product table | products |
| ScenarioCard | Investment scenario | scenario, products |
| BranchMap | Abstract map visualization | branches, selectedBranch |
| BranchCard | Branch info card | branch, onSelect |
| CustodianCTA | Call-to-action banner | onAction |

---

## 2. Animation Implementation Plan

| Animation | Library | Implementation | Complexity |
|-----------|---------|----------------|------------|
| Page load sequence | Framer Motion | AnimatePresence + stagger | Medium |
| Card hover lift | Framer Motion | whileHover transform | Low |
| Number count up | Custom hook | useCountUp with requestAnimationFrame | Low |
| Risk gauge fill | CSS + SVG | stroke-dasharray animation | Medium |
| Search button pulse | CSS | @keyframes pulse | Low |
| Skeleton shimmer | CSS | @keyframes shimmer | Low |
| Scroll reveal | Framer Motion | useInView + variants | Medium |
| Map pin pulse | CSS | @keyframes pulse-scale | Low |
| Gradient shift | CSS | @keyframes gradient-position | Low |
| Staggered card entrance | Framer Motion | staggerChildren variant | Medium |
| Table row highlight | CSS | transition background-color | Low |
| Button glow | CSS | box-shadow transition | Low |

---

## 3. Animation Library Choices

### Primary: Framer Motion

**Rationale**: 
- Best React integration
- Declarative API
- Built-in gesture support
- AnimatePresence for mount/unmount
- useInView hook for scroll triggers

**Use for**:
- Page transitions
- Card animations
- Scroll-triggered reveals
- Gesture interactions

### Secondary: CSS Animations

**Rationale**:
- Performance for simple animations
- No JS overhead
- Native browser support

**Use for**:
- Hover effects
- Loading states
- Infinite animations (pulse, shimmer)
- Gradient animations

---

## 4. Project File Structure

```
/mnt/okcomputer/output/app/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── CustomerSearch.tsx
│   │   ├── PersonaCard.tsx
│   │   ├── RiskGauge.tsx
│   │   ├── ProductComparison.tsx
│   │   ├── ScenarioCard.tsx
│   │   ├── BranchMap.tsx
│   │   ├── BranchCard.tsx
│   │   └── CustodianCTA.tsx
│   ├── sections/
│   │   ├── Header.tsx
│   │   ├── SearchSection.tsx
│   │   ├── PersonaSection.tsx
│   │   ├── ProductSection.tsx
│   │   ├── BranchSection.tsx
│   │   └── CustodianSection.tsx
│   ├── hooks/
│   │   ├── useCountUp.ts
│   │   ├── useMockData.ts
│   │   └── useScrollReveal.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── mockData.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
│   └── images/
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 5. Dependencies

### Core (Pre-installed)
- React 18
- TypeScript
- Vite
- Tailwind CSS 3.4.19
- shadcn/ui components

### Animation
```bash
npm install framer-motion
```

### Charts
```bash
npm install recharts
```

### Icons
```bash
npm install lucide-react
```

### Utilities
```bash
npm install clsx tailwind-merge
```

---

## 6. Mock Data Structure

### Customer Data
```typescript
interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
  riskScore: number; // 1-10
  vulnerableFlag: boolean;
  yearsWithBank: number;
  segment: 'Mass' | 'Preferred';
  existingProducts: ExistingProduct[];
  address: string;
}

interface ExistingProduct {
  name: string;
  amount: number;
  type: 'savings' | 'investment' | 'insurance' | 'loan';
}
```

### Product Data
```typescript
interface Product {
  id: string;
  name: string;
  category: 'fund' | 'bond' | 'insurance' | 'deposit';
  duration: string;
  rating: number; // 1-5
  interestRate: number; // percentage
  minInvestment: number;
  features: string[];
  recommended: boolean;
  riskLevel: 'low' | 'medium' | 'high';
}
```

### Scenario Data
```typescript
interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  recommendedProducts: string[]; // product IDs
  projectedReturn: number;
}
```

### Branch Data
```typescript
interface Branch {
  id: string;
  name: string;
  address: string;
  distance: number; // km
  hours: string;
  phone: string;
  coordinates: { x: number; y: number };
  services: string[];
}
```

---

## 7. Key Implementation Notes

### Risk Score Gauge
- Use SVG circle with stroke-dasharray
- Color coding: 1-3 (green), 4-6 (yellow), 7-10 (red)
- Animated fill on mount

### Product Comparison
- Sortable columns
- Highlight recommended product
- Show/hide features toggle
- Mobile: horizontal scroll

### Branch Map
- Abstract illustration (not real map)
- Relative positioning of pins
- Click to select branch
- Distance calculation (mock)

### Search Functionality
- Debounced input (300ms)
- Loading state simulation
- Mock customer data lookup
- Error handling UI

---

## 8. Performance Considerations

- Use React.memo for card components
- Lazy load sections below fold
- Optimize re-renders with useMemo/useCallback
- CSS animations for simple effects
- will-change for animated elements
- Reduce motion media query support
