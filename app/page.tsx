'use client'
import { Button } from '../../components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Rail Logistics</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/railroads" className="hover:text-secondary transition-colors">Class I Railroads</Link>
            <Link href="/railcars" className="hover:text-secondary transition-colors">Railcar Types</Link>
            <Link href="/tracking" className="hover:text-secondary transition-colors">Trip Tracking</Link>
            <Link href="/maintenance" className="hover:text-secondary transition-colors">Regulatory Maintenance</Link>
            <Link href="/trends" className="hover:text-secondary transition-colors">Industry Trends</Link>
            <Link href="/resources" className="hover:text-secondary transition-colors">Resources</Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" className="text-primary-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-20 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Rail Logistics Education & Insights</h1>
              <p className="text-xl mb-6">Your comprehensive resource for rail logistics professionals, from industry veterans to newcomers.</p>
              <div className="flex space-x-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Explore Content
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Industry Trends
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative h-80">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-accent/20 rounded-lg flex items-center justify-center">
                <p className="text-xl font-semibold">Rail Logistics Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Class I Railroads</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Understanding Class I Railroads</h3>
                <p className="text-muted-foreground mb-4">Learn about the major players in the North American rail industry and their operations.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Card>
            
            {/* Card 2 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Railcar Types</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Guide to Railcar Types</h3>
                <p className="text-muted-foreground mb-4">Explore the different types of railcars and their specific uses in freight transportation.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Card>
            
            {/* Card 3 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <p className="text-lg font-medium">Industry Trends</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Latest Rail Industry Trends</h3>
                <p className="text-muted-foreground mb-4">Stay updated with the latest metrics, volumes, costs, and innovations in rail logistics.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Industry News</h2>
            <Button variant="ghost">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">April 2, 2025</p>
              <h3 className="text-xl font-bold mb-2">Rail Freight Market Expected to Grow by $37.5 Billion by 2029</h3>
              <p className="text-muted-foreground mb-4">The North American rail freight transportation market is projected to grow at a CAGR of 7.3% over the next four years.</p>
              <Button variant="link" className="px-0">Read More</Button>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">March 28, 2025</p>
              <h3 className="text-xl font-bold mb-2">Manufacturing Rebound Could Reshape Rail Demand</h3>
              <p className="text-muted-foreground mb-4">U.S. manufacturing is expanding for the first time in two years, signaling rising demand for rail-hauled industrial goods.</p>
              <Button variant="link" className="px-0">Read More</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for the latest rail logistics news, trends, and educational content.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md text-foreground"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rail Logistics</h3>
              <p className="text-muted-foreground">Educational resource for rail logistics professionals and newcomers to the industry.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Educational Content</h4>
              <ul className="space-y-2">
                <li><Link href="/railroads" className="text-muted-foreground hover:text-primary">Class I Railroads</Link></li>
                <li><Link href="/railcars" className="text-muted-foreground hover:text-primary">Railcar Types</Link></li>
                <li><Link href="/tracking" className="text-muted-foreground hover:text-primary">Trip Tracking</Link></li>
                <li><Link href="/maintenance" className="text-muted-foreground hover:text-primary">Regulatory Maintenance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Industry Insights</h4>
              <ul className="space-y-2">
                <li><Link href="/trends" className="text-muted-foreground hover:text-primary">Market Metrics</Link></li>
                <li><Link href="/trends/volumes" className="text-muted-foreground hover:text-primary">Volume Trends</Link></li>
                <li><Link href="/trends/costs" className="text-muted-foreground hover:text-primary">Cost Analysis</Link></li>
                <li><Link href="/trends/innovations" className="text-muted-foreground hover:text-primary">New Designs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/resources/glossary" className="text-muted-foreground hover:text-primary">Glossary</Link></li>
                <li><Link href="/resources/guides" className="text-muted-foreground hover:text-primary">Guides</Link></li>
                <li><Link href="/resources/tools" className="text-muted-foreground hover:text-primary">Tools</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2025 Rail Logistics. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
