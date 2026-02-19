# CIMB Product Recommendation Demo

A modern, interactive web application for demonstrating AI-powered product recommendations for bank relationship managers.

![Demo Screenshot](./public/images/banking-hero.jpg)

## Features

### 1. Customer Search
- Search customers by first name and last name
- Real-time loading states with smooth animations
- Error handling with helpful suggestions

### 2. AI-Generated Customer Persona
- **Customer Profile**: Name, age, and occupation
- **Risk Score**: Visual gauge with color-coded risk levels (1-10)
- **Vulnerable Flag**: Warning indicator for vulnerable customers
- **Years with CIMB**: Animated counter showing customer loyalty
- **Customer Segment**: Mass or Preferred badge
- **Existing Products**: List of current holdings with amounts
- **Total Assets**: Animated summary of customer's portfolio value

### 3. Product Recommendations
- **Product Comparison Table**: Compare investment duration, rating, interest rates
- **Interactive Charts**: Bar chart showing projected returns
- **Scenario-Based Recommendations**:
  - Retirement Planning
  - Wealth Growth
  - Education Fund
- Each scenario includes projected returns and time horizons

### 4. Branch Locator
- Interactive map visualization with location pins
- List of nearest branches with distances
- Branch details: address, hours, phone, services
- "Get Directions" functionality

### 5. Custodian Account CTA
- Full-width promotional banner
- Benefits list with checkmarks
- Statistics display (Assets Under Custody, Client Satisfaction, Years Experience)
- Call-to-action buttons

## Demo Data

### Sample Customers
| Name | Age | Occupation | Risk Score | Segment |
|------|-----|------------|------------|---------|
| Somchai Jaidee | 45 | Business Owner | 6 | Preferred |
| Nattaporn Wongsuwan | 35 | Software Engineer | 4 | Mass |
| Pranee Srisai | 62 | Retired Teacher | 2 | Preferred |
| Krit Chaisiri | 28 | Marketing Manager | 7 | Mass |

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4.19
- **UI Components**: shadcn/ui (40+ pre-installed components)
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── CustomerSearch.tsx
│   ├── PersonaCard.tsx
│   ├── RiskGauge.tsx
│   ├── ProductComparison.tsx
│   ├── ScenarioCard.tsx
│   ├── BranchMap.tsx
│   └── CustodianCTA.tsx
├── sections/           # Page sections
│   ├── Header.tsx
│   ├── SearchSection.tsx
│   ├── PersonaSection.tsx
│   ├── ProductSection.tsx
│   ├── BranchSection.tsx
│   └── CustodianSection.tsx
├── hooks/              # Custom React hooks
│   ├── useCountUp.ts
│   ├── useMockData.ts
│   └── useScrollReveal.ts
├── data/               # Mock data
│   └── mockData.ts
├── types/              # TypeScript types
│   └── index.ts
├── App.tsx
├── App.css
└── main.tsx
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Design System

### Colors
- **Primary**: `#E31837` (CIMB Red)
- **Secondary**: `#1A365D` (Deep Navy)
- **Accent**: `#F6AD55` (Gold)
- **Success**: `#48BB78`
- **Warning**: `#ED8936`
- **Error**: `#E53E3E`

### Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Base Size**: 16px

### Spacing
- Base unit: 4px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px

## Animations

- Page load sequence with staggered reveals
- Card hover effects with lift and shadow
- Number count-up animations
- Circular risk gauge animation
- Scroll-triggered section reveals
- Map pin pulse animations
- Gradient background animations

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader labels
- Focus indicators
- Color contrast ratios met
- Reduced motion support (`prefers-reduced-motion`)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo application for demonstration purposes only.

## Author

CIMB Bank Thailand - Digital Innovation Team
