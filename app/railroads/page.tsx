'use client'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import Link from 'next/link'

export default function RailroadsPage() {
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
            <Link href="/railroads" className="text-secondary font-semibold">Class I Railroads</Link>
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

      {/* Page Header */}
      <section className="bg-primary/10 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Class I Railroads</h1>
          <p className="text-xl max-w-3xl">Learn about the major players in the North American rail industry, their operations, networks, and services.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">In This Section</h3>
                <nav className="space-y-2">
                  <a href="#overview" className="block p-2 hover:bg-primary/5 rounded-md">Overview</a>
                  <a href="#classification" className="block p-2 hover:bg-primary/5 rounded-md">Classification</a>
                  <a href="#railroads" className="block p-2 hover:bg-primary/5 rounded-md">Current Class I Railroads</a>
                  <a href="#operations" className="block p-2 hover:bg-primary/5 rounded-md">Operational Areas</a>
                  <a href="#history" className="block p-2 hover:bg-primary/5 rounded-md">Historical Context</a>
                  <a href="#significance" className="block p-2 hover:bg-primary/5 rounded-md">Economic Significance</a>
                </nav>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              <div id="overview" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="mb-4">Class I railroads are the largest freight railroad operators in North America, playing a crucial role in the continent's transportation infrastructure and economy. These major carriers operate extensive networks spanning thousands of miles, connecting major industrial centers, ports, and agricultural regions across the United States, Canada, and parts of Mexico.</p>
                <p>The Class I designation is based on operating revenue thresholds established by regulatory authorities. These railroads handle the majority of rail freight in North America, transporting everything from raw materials and agricultural products to finished goods and intermodal containers.</p>
              </div>

              <div id="classification" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Classification</h2>
                <p className="mb-4">In the United States, railroads are designated as Class I, Class II, or Class III, according to size criteria established by the Surface Transportation Board (STB). As of 2023, a Class I railroad is defined as any carrier earning annual revenue greater than $289.4 million.</p>
                <p>This classification system helps in regulatory oversight and reporting requirements, with Class I railroads subject to more comprehensive regulatory scrutiny due to their significant impact on the national transportation system.</p>
              </div>

              <div id="railroads" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Current Class I Railroads</h2>
                <p className="mb-6">As of 2023, there are seven Class I railroads operating in North America:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      name: "BNSF Railway",
                      description: "One of the largest freight railroad networks in North America"
                    },
                    {
                      name: "Union Pacific Railroad",
                      description: "One of the largest freight railroads in the western US"
                    },
                    {
                      name: "CSX Transportation",
                      description: "Major freight railroad in the eastern US"
                    },
                    {
                      name: "Norfolk Southern Railway",
                      description: "Major freight railroad in the eastern US"
                    },
                    {
                      name: "Canadian National Railway (CN)",
                      description: "Canadian-owned with significant trackage in the US"
                    },
                    {
                      name: "Canadian Pacific Kansas City (CPKC)",
                      description: "Canadian-owned with trackage in the US and Mexico"
                    },
                    {
                      name: "Amtrak",
                      description: "The National Railroad Passenger Corporation, primarily focused on passenger service"
                    }
                  ].map((railroad, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg mb-2">{railroad.name}</h3>
                      <p className="text-muted-foreground">{railroad.description}</p>
                    </Card>
                  ))}
                </div>
                
                <p>Each of these railroads operates under different business models and serves different geographical regions, though there is some overlap in their service territories.</p>
              </div>

              <div id="operations" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Operational Areas</h2>
                <p className="mb-4">Class I railroads operate across distinct geographical regions in North America:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>CSX and Norfolk Southern</strong> primarily operate in the eastern United States</li>
                  <li><strong>Union Pacific and BNSF</strong> primarily operate in the western United States</li>
                  <li><strong>Canadian National and Canadian Pacific Kansas City</strong> operate transcontinental networks across Canada with extensions into the US</li>
                  <li><strong>Amtrak</strong> operates passenger service across the United States</li>
                </ul>
                <p>These operational divisions are the result of historical development and numerous mergers and acquisitions over the decades.</p>
              </div>

              <div id="history" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Historical Context</h2>
                <p className="mb-4">The current landscape of Class I railroads is the result of extensive consolidation within the industry. In the 1970s, there were over 40 Class I railroads operating in North America. Through mergers, acquisitions, and bankruptcies, that number has decreased to the current seven.</p>
                <p className="mb-4">Major consolidation events include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>The merger of Burlington Northern and Santa Fe to form BNSF</li>
                  <li>The acquisition of Conrail and division of its assets between CSX and Norfolk Southern</li>
                  <li>The merger of Canadian Pacific and Kansas City Southern to form CPKC</li>
                  <li>Union Pacific's acquisition of Southern Pacific</li>
                </ul>
                <p>These consolidations have created more efficient and financially stable railroad companies capable of making significant investments in infrastructure and technology.</p>
              </div>

              <div id="significance" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Economic Significance</h2>
                <p className="mb-4">Class I railroads are vital to the North American economy, transporting a significant portion of freight across the continent. They connect major industrial centers, ports, and agricultural regions, facilitating domestic and international trade.</p>
                <p className="mb-4">Key economic contributions include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Efficient transportation of bulk commodities like coal, grain, and chemicals</li>
                  <li>Support for manufacturing through the movement of raw materials and finished goods</li>
                  <li>Facilitation of international trade through connections to ports and border crossings</li>
                  <li>Significant employment and investment in infrastructure</li>
                  <li>Environmental benefits through fuel efficiency compared to trucking</li>
                </ul>
                <p>The health and efficiency of Class I railroads are often considered indicators of broader economic activity and trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Related Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Railcar Types</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Guide to Railcar Types</h3>
                <p className="text-muted-foreground mb-4">Explore the different types of railcars used by Class I railroads.</p>
                <Link href="/railcars">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <p className="text-lg font-medium">Trip Tracking</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rail Tracking Systems</h3>
                <p className="text-muted-foreground mb-4">Learn about the technologies used to track shipments across rail networks.</p>
                <Link href="/tracking">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Industry Trends</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rail Industry Metrics</h3>
                <p className="text-muted-foreground mb-4">Analyze current trends and metrics in the rail logistics industry.</p>
                <Link href="/trends">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
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
