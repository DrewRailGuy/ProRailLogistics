'use client'
import { Button } from '@/components/ui/button'
import { Card } from '../../../components/ui/card'
import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">Rail Logistics</Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/railroads" className="hover:text-secondary transition-colors">Class I Railroads</Link>
            <Link href="/railcars" className="hover:text-secondary transition-colors">Railcar Types</Link>
            <Link href="/tracking" className="hover:text-secondary transition-colors">Trip Tracking</Link>
            <Link href="/maintenance" className="hover:text-secondary transition-colors">Regulatory Maintenance</Link>
            <Link href="/trends" className="hover:text-secondary transition-colors">Industry Trends</Link>
            <Link href="/resources" className="text-secondary font-semibold">Resources</Link>
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

      {/* Page Header */}
      <section className="bg-primary/10 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Rail Logistics Resources</h1>
          <p className="text-xl max-w-3xl">Access tools, guides, glossaries, and reference materials to enhance your understanding of rail logistics.</p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Rail Glossary</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rail Terminology Glossary</h3>
                <p className="text-muted-foreground mb-4">Comprehensive dictionary of rail logistics terms and definitions.</p>
                <Link href="/resources/glossary">
                  <Button variant="outline" className="w-full">Access Glossary</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <p className="text-lg font-medium">Calculators</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rail Logistics Calculators</h3>
                <p className="text-muted-foreground mb-4">Interactive tools for calculating costs, capacity, and transit times.</p>
                <Link href="/resources/calculators">
                  <Button variant="outline" className="w-full">Use Calculators</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Guides</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rail Logistics Guides</h3>
                <p className="text-muted-foreground mb-4">Step-by-step guides for common rail logistics processes.</p>
                <Link href="/resources/guides">
                  <Button variant="outline" className="w-full">View Guides</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Resource Categories</h2>
          
          <div className="space-y-8">
            {/* Reference Materials */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Reference Materials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Rail Industry Glossary</h4>
                  <p className="text-muted-foreground mb-4">Comprehensive dictionary of rail terminology with detailed definitions.</p>
                  <Link href="/resources/glossary">
                    <Button variant="outline" size="sm">View Glossary</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Railcar Specifications</h4>
                  <p className="text-muted-foreground mb-4">Detailed technical specifications for all common railcar types.</p>
                  <Link href="/resources/railcar-specs">
                    <Button variant="outline" size="sm">View Specifications</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Railroad Maps</h4>
                  <p className="text-muted-foreground mb-4">Interactive maps of Class I railroad networks and key facilities.</p>
                  <Link href="/resources/maps">
                    <Button variant="outline" size="sm">View Maps</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Industry Standards</h4>
                  <p className="text-muted-foreground mb-4">Overview of key AAR and other industry standards for rail operations.</p>
                  <Link href="/resources/standards">
                    <Button variant="outline" size="sm">View Standards</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Regulatory References</h4>
                  <p className="text-muted-foreground mb-4">Guide to key regulations affecting rail logistics operations.</p>
                  <Link href="/resources/regulations">
                    <Button variant="outline" size="sm">View Regulations</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Historical Data</h4>
                  <p className="text-muted-foreground mb-4">Archive of historical rail industry statistics and trends.</p>
                  <Link href="/resources/historical-data">
                    <Button variant="outline" size="sm">View Data</Button>
                  </Link>
                </Card>
              </div>
            </div>
            
            {/* Interactive Tools */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Interactive Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Cost Calculator</h4>
                  <p className="text-muted-foreground mb-4">Calculate estimated shipping costs for rail transportation.</p>
                  <Link href="/resources/calculators/cost">
                    <Button variant="outline" size="sm">Use Calculator</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Transit Time Estimator</h4>
                  <p className="text-muted-foreground mb-4">Estimate transit times between major rail origins and destinations.</p>
                  <Link href="/resources/calculators/transit-time">
                    <Button variant="outline" size="sm">Use Estimator</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Capacity Planner</h4>
                  <p className="text-muted-foreground mb-4">Determine optimal railcar types and quantities for your shipments.</p>
                  <Link href="/resources/calculators/capacity">
                    <Button variant="outline" size="sm">Use Planner</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Carbon Footprint Calculator</h4>
                  <p className="text-muted-foreground mb-4">Calculate emissions savings from using rail vs. alternative modes.</p>
                  <Link href="/resources/calculators/emissions">
                    <Button variant="outline" size="sm">Calculate Emissions</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Route Visualizer</h4>
                  <p className="text-muted-foreground mb-4">Visualize potential rail routes between origin and destination pairs.</p>
                  <Link href="/resources/visualizer">
                    <Button variant="outline" size="sm">Visualize Routes</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Demurrage Calculator</h4>
                  <p className="text-muted-foreground mb-4">Estimate potential demurrage charges based on loading/unloading times.</p>
                  <Link href="/resources/calculators/demurrage">
                    <Button variant="outline" size="sm">Calculate Demurrage</Button>
                  </Link>
                </Card>
              </div>
            </div>
            
            {/* Guides & Tutorials */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Guides & Tutorials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Rail Shipping Basics</h4>
                  <p className="text-muted-foreground mb-4">Step-by-step guide to shipping by rail for beginners.</p>
                  <Link href="/resources/guides/basics">
                    <Button variant="outline" size="sm">View Guide</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Railcar Loading Best Practices</h4>
                  <p className="text-muted-foreground mb-4">Guidelines for safe and efficient loading of different railcar types.</p>
                  <Link href="/resources/guides/loading">
                    <Button variant="outline" size="sm">View Guide</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Documentation Guide</h4>
                  <p className="text-muted-foreground mb-4">Comprehensive guide to rail shipping documentation requirements.</p>
                  <Link href="/resources/guides/documentation">
                    <Button variant="outline" size="sm">View Guide</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Intermodal Shipping Tutorial</h4>
                  <p className="text-muted-foreground mb-4">How to effectively utilize rail intermodal services for your shipments.</p>
                  <Link href="/resources/guides/intermodal">
                    <Button variant="outline" size="sm">View Tutorial</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Hazardous Materials Guide</h4>
                  <p className="text-muted-foreground mb-4">Requirements and best practices for shipping hazardous materials by rail.</p>
                  <Link href="/resources/guides/hazmat">
                    <Button variant="outline" size="sm">View Guide</Button>
                  </Link>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold mb-2">Rail Facility Planning</h4>
                  <p className="text-muted-foreground mb-4">Guide to planning and developing on-site rail facilities.</p>
                  <Link href="/resources/guides/facility-planning">
                    <Button variant="outline" size="sm">View Guide</Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Links */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Industry Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Regulatory Agencies</h3>
              <ul className="space-y-4">
                <li className="p-4 bg-card rounded-lg">
                  <h4 className="font-bold">Federal Railroad Administration (FRA)</h4>
                  <p className="text-muted-foreground mb-2">U.S. federal agency responsible for railroad safety regulations.</p>
                  <a href="https://railroads.dot.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                </li>
                <li className="p-4 bg-card rounded-lg">
                  <h4 className="font-bold">Surface Transportation Board (STB)</h4>
                  <p className="text-muted-foreground mb-2">U.S. federal agency with economic regulatory oversight of railroads.</p>
                  <a href="https://www.stb.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                </li>
                <li className="p-4 bg-card rounded-lg">
                  <h4 className="font-bold">Transport Canada</h4>
                  <p className="text-muted-foreground mb-2">Canadian federal department responsible for transportation policies and programs.</p>
                  <a href="https://tc.canada.ca/en/rail-transportation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                </li>
                <li className="p-4 bg-card rounded-lg">
                  <h4 className="font-bold">Pipeline and Hazardous Materials Safety Administration (PHMSA)</h4>
                  <p className="text-muted-foreground mb-2">U.S. agency regulating hazardous materials transportation.</p>
                  <a href="https://www.phmsa.dot.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Industry Associations</h3>
              <ul className="space-y-4">
                <li className="p-4 bg-card rounded-lg">
                  <h4 className="font-bold">Association of American Railroads (AAR)</h4>
                  <p className="text-muted-foreground mb-2">Trade association representing major freight railroads in North America.</p>
                  <a href="https://www.aar.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                </li>
                <li className="p-4 bg-card rounded-lg">
                  <h4 className="font-bold">American Short Line and Regional Railroad Association (ASLRRA)</h4>
                  <p className="text-muted-foreground mb-2">Represents short line and regional railroads in the United States.</p>
                  <a href="https://www.aslrra.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                </li>
                <li className="p-4 bg-card rounded-lg">
                  <h4 className="font-bold">Railway Association of Canada (RAC)</h4>
                  <p className="text-muted-foreground mb-2">Industry association representing railways operating in Canada.</p>
                  <a href="https://www.railcan.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                </li>
                <li className="p-4 bg-card rounded-lg">
                  <h4 className="font-bold">Intermodal Association of North America (IANA)</h4>
                  <p className="text-muted-foreground mb-2">Industry trade association representing the intermodal freight industry.</p>
                  <a href="https://www.intermodal.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for the latest rail logistics resources, trends, and updates.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 rounded-md border border-input" />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
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
