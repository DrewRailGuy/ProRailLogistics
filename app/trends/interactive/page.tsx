'use client'
import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

// Sample data for charts
const carloadData = [
  { name: 'Coal', value: 27.3 },
  { name: 'Chemicals', value: 18.7 },
  { name: 'Grain', value: 12.4 },
  { name: 'Intermodal', value: 11.8 },
  { name: 'Metals', value: 8.5 },
  { name: 'Automotive', value: 7.2 },
  { name: 'Construction', value: 6.8 },
  { name: 'Other', value: 7.3 },
];

const trafficTrendData = [
  { month: 'Jan', '2023': 980, '2024': 1020, '2025': 1030 },
  { month: 'Feb', '2023': 950, '2024': 990, '2025': 1015 },
  { month: 'Mar', '2023': 970, '2024': 1000, '2025': 1025 },
  { month: 'Apr', '2023': 990, '2024': 1010, '2025': 1040 },
  { month: 'May', '2023': 1010, '2024': 1030, '2025': 1050 },
  { month: 'Jun', '2023': 1020, '2024': 1040, '2025': 1060 },
  { month: 'Jul', '2023': 1030, '2024': 1050, '2025': 1070 },
  { month: 'Aug', '2023': 1020, '2024': 1045, '2025': 0 },
  { month: 'Sep', '2023': 1010, '2024': 1035, '2025': 0 },
  { month: 'Oct', '2023': 1000, '2024': 1025, '2025': 0 },
  { month: 'Nov', '2023': 990, '2024': 1015, '2025': 0 },
  { month: 'Dec', '2023': 1000, '2024': 1025, '2025': 0 },
];

const commodityGrowthData = [
  { name: 'Coal', growth: -2.3 },
  { name: 'Chemicals', growth: 7.27 },
  { name: 'Grain', growth: 6.1 },
  { name: 'Intermodal', growth: 10.3 },
  { name: 'Metals', growth: -3.3 },
  { name: 'Automotive', growth: 5.5 },
  { name: 'Construction', growth: -0.25 },
  { name: 'Stone/Glass', growth: 3.5 },
];

const marketShareData = [
  { year: '2015', rail: 28, truck: 65, water: 5, pipeline: 2 },
  { year: '2016', rail: 27, truck: 66, water: 5, pipeline: 2 },
  { year: '2017', rail: 27, truck: 66, water: 5, pipeline: 2 },
  { year: '2018', rail: 26, truck: 67, water: 5, pipeline: 2 },
  { year: '2019', rail: 25, truck: 68, water: 5, pipeline: 2 },
  { year: '2020', rail: 24, truck: 69, water: 5, pipeline: 2 },
  { year: '2021', rail: 25, truck: 68, water: 5, pipeline: 2 },
  { year: '2022', rail: 26, truck: 67, water: 5, pipeline: 2 },
  { year: '2023', rail: 27, truck: 66, water: 5, pipeline: 2 },
  { year: '2024', rail: 28, truck: 65, water: 5, pipeline: 2 },
  { year: '2025', rail: 29, truck: 64, water: 5, pipeline: 2 },
];

// Colors for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

export default function InteractiveTrendsPage() {
  const [activeTab, setActiveTab] = useState('volumes')
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth)

    // Update window width when resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
            <Link href="/trends" className="text-secondary font-semibold">Industry Trends</Link>
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
          <h1 className="text-4xl font-bold mb-4">Interactive Rail Industry Metrics</h1>
          <p className="text-xl max-w-3xl">Explore current rail industry data through interactive visualizations. Analyze trends in volumes, commodity mix, market share, and more.</p>
        </div>
      </section>

      {/* Interactive Dashboard */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="volumes" className="w-full" onValueChange={setActiveTab}>
            <div className="mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TabsTrigger value="volumes" className="text-sm md:text-base">Traffic Volumes</TabsTrigger>
                <TabsTrigger value="commodities" className="text-sm md:text-base">Commodity Mix</TabsTrigger>
                <TabsTrigger value="growth" className="text-sm md:text-base">Growth Rates</TabsTrigger>
                <TabsTrigger value="market" className="text-sm md:text-base">Market Share</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="volumes" className="mt-0">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">U.S. Rail Traffic Trends (2023-2025)</h2>
                <p className="mb-6">Monthly carload volumes showing year-over-year comparison. Data shows stabilization in 2025 after volatility in previous years.</p>
                
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={trafficTrendData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[900, 1100]} />
                      <Tooltip formatter={(value) => [`${value} thousand carloads`, 'Volume']} />
                      <Legend />
                      <Line type="monotone" dataKey="2023" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="2024" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="2025" stroke="#ff7300" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Key Insights:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>January 2025 showed a 0.2% year-over-year increase, the first overall increase in five months</li>
                    <li>Intermodal traffic has shown particular strength with a 10.3% surge in January 2025</li>
                    <li>Seasonal patterns remain consistent with historical trends</li>
                    <li>Service metrics improvements correlate with volume stabilization</li>
                  </ul>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="commodities" className="mt-0">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">U.S. Rail Carloads by Commodity (Jan. 2025)</h2>
                <p className="mb-6">Distribution of rail traffic by major commodity groups, showing the relative importance of each category.</p>
                
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={carloadData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                        outerRadius={windowWidth < 768 ? 100 : 150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {carloadData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Legend layout={windowWidth < 768 ? "horizontal" : "vertical"} verticalAlign="bottom" align="center" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Key Insights:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Coal remains the largest single carload commodity by volume (27.3%)</li>
                    <li>Chemicals represent the second-largest category (18.7%) and continue to grow</li>
                    <li>Intermodal's share has increased significantly over the past decade</li>
                    <li>The shift away from coal toward chemicals, intermodal, and agricultural products represents a significant structural change</li>
                  </ul>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="growth" className="mt-0">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Year-over-Year Growth by Commodity (Jan. 2025)</h2>
                <p className="mb-6">Percentage change in carloadings by commodity group compared to the same period last year.</p>
                
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={commodityGrowthData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[-5, 12]} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Growth Rate']} />
                      <Legend />
                      <Bar dataKey="growth" fill="#8884d8">
                        {commodityGrowthData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.growth >= 0 ? '#00C49F' : '#FF8042'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Key Insights:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Intermodal shows the strongest growth at 10.3%, driven by e-commerce and improved service reliability</li>
                    <li>Chemical shipments continue strong performance with 7.27% growth</li>
                    <li>Coal's decline has moderated to -2.3%, the smallest percentage decline in 13 months</li>
                    <li>Automotive traffic has rebounded with 5.5% growth as production normalizes</li>
                    <li>Metals remain challenged with -3.3% growth, though manufacturing indicators suggest potential improvement</li>
                  </ul>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="market" className="mt-0">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Freight Transportation Modal Share (2015-2025)</h2>
                <p className="mb-6">Percentage of total U.S. freight ton-miles by transportation mode, showing competitive positioning.</p>
                
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={marketShareData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      stackOffset="expand"
                      layout="vertical"
                      barSize={30}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                      <YAxis type="category" dataKey="year" />
                      <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                      <Legend />
                      <Bar dataKey="rail" stackId="a" fill="#0088FE" name="Rail" />
                      <Bar dataKey="truck" stackId="a" fill="#00C49F" name="Truck" />
                      <Bar dataKey="water" stackId="a" fill="#FFBB28" name="Water" />
                      <Bar dataKey="pipeline" stackId="a" fill="#FF8042" name="Pipeline" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Key Insights:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Rail market share has rebounded since 2020, reversing a multi-year decline</li>
                    <li>Environmental considerations are driving modal shift from truck to rail for appropriate freight types</li>
                    <li>Rail's cost efficiency advantage has increased as trucking faces rising fuel and labor costs</li>
                    <li>Service improvements have been critical to rail's recent market share gains</li>
                    <li>Projections show continued rail share growth through 2025 as sustainability becomes more important</li>
                  </ul>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Data Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Volume Stabilization</h3>
                <p className="mb-4">After several years of volatility, rail freight volumes are showing signs of stabilization. U.S. railroads originated 1.03 million carloads in January 2025, up 0.2% year-over-year, marking the first overall increase in five months.</p>
                <p>This stabilization reflects improved service metrics, with average train speeds increasing and terminal dwell times decreasing across most Class I railroads. These service improvements are critical for retaining existing traffic and attracting new business from competing modes.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Commodity Mix Evolution</h3>
                <p className="mb-4">The rail industry's traffic mix continues to evolve, with intermodal and chemicals showing the strongest growth while traditional bulk commodities like coal face ongoing challenges.</p>
                <p>This shift requires railroads to adapt their service offerings, equipment types, and network strategies to effectively serve growing market segments while managing the transition away from declining commodities.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Manufacturing Rebound Impact</h3>
                <p className="mb-4">The emerging rebound in U.S. manufacturing activity could reshape rail demand patterns. For the first time in over two years, U.S. manufacturing is expanding, potentially driving increased demand for rail-hauled industrial goods.</p>
                <p>This manufacturing recovery could particularly benefit metals, machinery, and chemical shipments, potentially reversing recent weakness in these sectors.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Environmental Advantage</h3>
                <p className="mb-4">Rail's environmental advantages are becoming increasingly important as companies focus on reducing carbon footprints. Rail transportation is approximately 4 times more fuel-efficient than trucking, producing 75% less greenhouse gas emissions per ton-mile.</p>
                <p>This efficiency is driving modal shift for environmentally conscious shippers and contributing to rail's recent market share gains in the transportation landscape.</p>
              </Card>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Customize Your Analysis</h2>
            <p className="mb-6">Select parameters to generate custom reports and visualizations. <span className="text-primary font-semibold">(Premium feature - available with subscription)</span></p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <label className="font-medium">Time Period</label>
                <select className="w-full p-2 border rounded-md bg-background" disabled>
                  <option>Last 12 Months</option>
                  <option>Year-to-Date</option>
                  <option>Last 5 Years</option>
                  <option>Custom Range</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="font-medium">Commodity Groups</label>
                <select className="w-full p-2 border rounded-md bg-background" disabled>
                  <option>All Commodities</option>
                  <option>Coal</option>
                  <option>Chemicals</option>
                  <option>Intermodal</option>
                  <option>Custom Selection</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="font-medium">Visualization Type</label>
                <select className="w-full p-2 border rounded-md bg-background" disabled>
                  <option>Line Chart</option>
                  <option>Bar Chart</option>
                  <option>Pie Chart</option>
                  <option>Data Table</option>
                </select>
              </div>
            </div>
            
            <Button className="bg-primary/50 cursor-not-allowed" disabled>Generate Custom Report</Button>
            <p className="text-sm text-muted-foreground mt-2">Subscribe to unlock custom analysis features</p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Related Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Industry Trends</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rail Industry Trends Analysis</h3>
                <p className="text-muted-foreground mb-4">Comprehensive analysis of current rail industry trends and future outlook.</p>
                <Link href="/trends">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <p className="text-lg font-medium">Class I Railroads</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Class I Railroad Performance</h3>
                <p className="text-muted-foreground mb-4">Analysis of operational and financial performance of major railroads.</p>
                <Link href="/railroads">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Resources</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rail Data Resources</h3>
                <p className="text-muted-foreground mb-4">Additional data sources and analytical tools for rail logistics.</p>
                <Link href="/resources">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for monthly updates on rail industry metrics and trends.</p>
            
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
