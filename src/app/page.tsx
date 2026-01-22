import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { QuickStart } from '@/components/QuickStart'
import { Documentation } from '@/components/Documentation'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <QuickStart />
      <Documentation />
      <Footer />
    </main>
  )
}
