'use client'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import Link from 'next/link'

export default function TrendsPage() {
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
          <h1 className="text-4xl font-bold mb-4">Rail Industry Trends</h1>
          <p className="text-xl max-w-3xl">Explore current metrics, volumes, costs, and innovations shaping the future of rail logistics.</p>
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
                  <a href="#market-growth" className="block p-2 hover:bg-primary/5 rounded-md">Market Growth & Projections</a>
                  <a href="#traffic-trends" className="block p-2 hover:bg-primary/5 rounded-md">Current Traffic Trends</a>
                  <a href="#commodity-trends" className="block p-2 hover:bg-primary/5 rounded-md">Commodity-Specific Trends</a>
                  <a href="#growth-drivers" className="block p-2 hover:bg-primary/5 rounded-md">Growth Drivers</a>
                  <a href="#challenges" className="block p-2 hover:bg-primary/5 rounded-md">Challenges & Uncertainties</a>
                  <a href="#technological-innovations" className="block p-2 hover:bg-primary/5 rounded-md">Technological Innovations</a>
                  <a href="#digital-transformation" className="block p-2 hover:bg-primary/5 rounded-md">Digital Transformation</a>
                  <a href="#future-outlook" className="block p-2 hover:bg-primary/5 rounded-md">Future Outlook</a>
                  <a href="#strategic-priorities" className="block p-2 hover:bg-primary/5 rounded-md">Strategic Priorities</a>
                </nav>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              <div id="overview" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="mb-4">The rail logistics industry is experiencing significant transformation driven by economic shifts, technological advancements, and changing market demands. Understanding these trends is essential for industry professionals, as they shape strategic decisions, investment priorities, and operational approaches across the sector.</p>
                <p>This section provides a comprehensive analysis of current rail industry trends, examining market growth projections, traffic patterns, commodity-specific developments, and the technological innovations that are reshaping the industry. By tracking these trends, stakeholders can better position themselves to capitalize on opportunities and navigate challenges in this evolving landscape.</p>
              </div>

              <div id="market-growth" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Market Growth & Projections</h2>
                <p className="mb-4">The global rail logistics market continues to demonstrate robust growth potential, supported by increasing demand for efficient and environmentally sustainable freight transportation:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Global Market Size</h3>
                    <p>The global rail logistics market was valued at USD 416.8 billion in 2024 and is estimated to register a CAGR of 5.4% between 2025 and 2034. This growth reflects increasing recognition of rail's efficiency advantages for long-haul freight movement.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">North American Projections</h3>
                    <p>The North American rail freight transportation market specifically is projected to grow by USD 37.53 billion from 2025-2029, at a CAGR of 7.3%. This growth rate exceeds global averages, indicating particularly strong momentum in the region.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Investment Trends</h3>
                    <p>Capital investment in rail infrastructure and equipment remains strong, with Class I railroads in North America investing approximately $23 billion annually in recent years. These investments focus on capacity expansion, technology implementation, and efficiency improvements.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Regional Growth Variations</h3>
                    <p>Growth patterns vary significantly by region, with particularly strong expansion in Asia-Pacific markets where infrastructure development is accelerating. In mature markets like North America and Europe, growth is more focused on technological enhancement and service improvement rather than network expansion.</p>
                  </div>
                </div>
                
                <p>These growth projections reflect rail's increasing competitiveness in the transportation landscape, particularly as environmental considerations and road congestion challenges drive interest in modal shift from highway to rail for appropriate freight types.</p>
              </div>

              <div id="traffic-trends" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Current Traffic Trends</h2>
                <p className="mb-4">Rail freight traffic patterns in 2025 reflect broader economic crosscurrents, with uneven growth across different market segments:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Overall Volume Stabilization</h3>
                    <p>After several years of volatility, rail freight volumes are showing signs of stabilization. U.S. railroads originated 1.03 million carloads in January 2025, up 0.2% year-over-year, marking the first overall increase in five months. While modest, this uptick suggests steady underlying demand.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Intermodal Strength</h3>
                    <p>Intermodal traffic has shown particular strength, with a 10.3% surge in January 2025 compared to the previous year. This growth is fueled by strong consumer demand, e-commerce expansion, and improved service reliability that has helped railroads recapture market share from trucking.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Industrial Sector Weakness</h3>
                    <p>Industrial shipments remain a weak spot, reflecting broader manufacturing challenges. However, recent data suggests a potential turning point, with U.S. manufacturing showing signs of expansion for the first time in two years, which could drive increased demand for rail-hauled industrial goods in coming quarters.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Service Metrics Improvement</h3>
                    <p>Operational performance metrics have shown steady improvement, with average train speeds increasing and terminal dwell times decreasing across most Class I railroads. These service improvements are critical for retaining existing traffic and attracting new business from competing modes.</p>
                  </div>
                </div>
                
                <p>The divergence between consumer-driven sectors (like intermodal) and industrial shipments highlights the importance of diversified service offerings for railroads in the current economic environment. Those with balanced exposure across market segments are better positioned to maintain overall volume stability.</p>
              </div>

              <div id="commodity-trends" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Commodity-Specific Trends</h2>
                <p className="mb-4">Different commodity groups are experiencing distinct trends, reflecting sector-specific economic conditions and structural changes in energy and manufacturing markets:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Coal</h3>
                    <p>Coal traffic continues its long-term decline, with January 2025 volumes down 2.3% year-over-year. However, this represents the smallest percentage decline in 13 months, potentially signaling a stabilization after prolonged declines. Coal remains the largest single carload commodity by volume, accounting for 27.3% of total non-intermodal U.S. rail shipments.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Chemicals</h3>
                    <p>Chemical shipments have shown consistent strength, with volumes up 7.27% in January 2025. This growth reflects both domestic manufacturing activity and strong export demand. Plastics, industrial chemicals, and fertilizers have been particularly strong performers within this category.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Grain</h3>
                    <p>Agricultural products, particularly grain, have demonstrated robust performance with a 6.1% increase in carloadings. Strong export markets and competitive U.S. crop prices have supported this growth, though seasonal variations remain significant.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Metals</h3>
                    <p>Metal shipments have struggled, with volumes down 3.3% for iron and steel scrap. However, the manufacturing rebound mentioned earlier could reverse this trend in coming quarters as industrial production increases.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Automotive</h3>
                    <p>Automotive traffic has stabilized after pandemic-related disruptions, with motor vehicles and parts showing a 5.5% increase. Production normalization and inventory rebuilding have supported this recovery.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Construction Materials</h3>
                    <p>Construction-related shipments show mixed performance, with lumber and wood products down 0.25% while stone, clay, and glass products increased by 3.5%. Regional variations in construction activity significantly impact these categories.</p>
                  </div>
                </div>
                
                <p>These commodity-specific trends highlight the importance of portfolio diversification for railroads and the need for specialized service offerings tailored to the unique requirements of different market segments. The shift away from coal toward chemicals, intermodal, and agricultural products represents a significant structural change in the industry's traffic mix.</p>
              </div>

              <div id="growth-drivers" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Growth Drivers</h2>
                <p className="mb-4">Several key factors are driving growth in the rail logistics sector:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Cost Efficiency</h3>
                    <p>Rail transportation offers significant cost advantages over trucking for long-haul movements, particularly for bulk commodities and heavy goods. With fuel prices and labor costs rising in the trucking sector, rail's cost efficiency has become an increasingly important competitive advantage.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Manufacturing Resurgence</h3>
                    <p>The emerging rebound in U.S. manufacturing activity could reshape rail demand patterns. For the first time in over two years, U.S. manufacturing is expanding, potentially driving increased demand for rail-hauled industrial goods like metals, machinery, and chemicals.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Consumer Spending</h3>
                    <p>Strong consumer demand continues to drive intermodal and merchandise traffic. E-commerce growth in particular has created new opportunities for rail in the retail supply chain, especially when integrated with efficient intermodal services.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Environmental Benefits</h3>
                    <p>Rail's environmental advantages are becoming increasingly important as companies focus on reducing carbon footprints. Rail transportation is approximately 4 times more fuel-efficient than trucking, producing 75% less greenhouse gas emissions per ton-mile. This efficiency is driving modal shift for environmentally conscious shippers.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Infrastructure Investment</h3>
                    <p>Significant public and private investment in rail infrastructure is enhancing capacity and service reliability. Major railroads continue to invest billions annually in network improvements, while government infrastructure initiatives are also supporting rail development in key corridors.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Technological Advancements</h3>
                    <p>Innovations in equipment, operations, and information systems are improving rail's competitiveness. Technologies like Positive Train Control (PTC), advanced tracking systems, and automated inspection capabilities are enhancing safety, reliability, and customer service.</p>
                  </div>
                </div>
                
                <p>These growth drivers are creating opportunities for railroads to expand their market share and develop new service offerings. However, capitalizing on these opportunities requires continued investment in infrastructure, technology, and service quality.</p>
              </div>

              <div id="challenges" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Challenges & Uncertainties</h2>
                <p className="mb-4">Despite positive growth indicators, the rail industry faces several significant challenges and uncertainties:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Inflation Pressures</h3>
                    <p>Rising inflation affects both operational costs and customer demand patterns. Increased costs for labor, materials, and energy put pressure on margins, while inflation's impact on consumer spending and industrial production creates uncertainty about future volumes.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Trade Policy Uncertainty</h3>
                    <p>Shifting trade policies and international tensions pose risks to rail traffic, particularly for commodities heavily dependent on export markets. Tariff debates and changing trade relationships can rapidly alter traffic patterns and volume projections.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Modal Competition</h3>
                    <p>Competition from trucking remains intense, particularly for shorter-haul movements and time-sensitive freight. Technological advancements in trucking, including potential automation, could shift the competitive balance in certain market segments.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Regulatory Environment</h3>
                    <p>Evolving regulations related to safety, environmental impact, and economic oversight create compliance challenges and potential operational constraints. Uncertainty about future regulatory directions complicates long-term planning and investment decisions.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Labor Market Challenges</h3>
                    <p>The rail industry, like many sectors, faces workforce challenges including recruitment difficulties, an aging workforce, and evolving skill requirements. Attracting and retaining qualified personnel is increasingly competitive, particularly for specialized technical roles.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Energy Transition</h3>
                    <p>The ongoing transition in energy markets creates both challenges and opportunities. While coal traffic continues to decline, new energy-related commodities like battery materials and components for renewable energy infrastructure offer potential growth areas.</p>
                  </div>
                </div>
                
                <p>The rail industry's outlook depends on how effectively these challenges are addressed. Railroads that demonstrate agility in responding to changing market conditions while maintaining operational excellence will be best positioned to navigate these uncertainties successfully.</p>
              </div>

              <div id="technological-innovations" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Technological Innovations</h2>
                <p className="mb-4">Technological innovation is transforming equipment and infrastructure across the rail industry:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Advanced Locomotives</h3>
                    <p className="mb-2">Next-generation locomotive technologies are improving efficiency and reducing environmental impact:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Tier 4 diesel-electric locomotives with significantly reduced emissions</li>
                      <li>Battery-electric locomotives for yard operations and short-haul service</li>
                      <li>Hydrogen fuel cell prototypes under development for zero-emission operations</li>
                      <li>Hybrid power systems that optimize fuel consumption based on operating conditions</li>
                      <li>Advanced energy management systems that maximize efficiency</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Railcar Innovations</h3>
                    <p className="mb-2">Modern railcar designs offer improved capacity, efficiency, and specialized capabilities:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Lightweight materials that increase payload capacity while reducing energy consumption</li>
                      <li>Aerodynamic designs that reduce drag and improve fuel efficiency</li>
                      <li>Specialized car types optimized for specific commodities and loading/unloading requirements</li>
                      <li>Improved suspension systems that reduce track impact and improve ride quality</li>
                      <li>Smart railcars with integrated monitoring systems for tracking and condition assessment</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Infrastructure Technologies</h3>
                    <p className="mb-2">Advanced technologies are enhancing the performance and maintenance of rail infrastructure:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Automated track inspection systems using machine vision and AI for defect detection</li>
                      <li>Advanced materials for track components that extend service life and reduce maintenance needs</li>
                      <li>Predictive maintenance systems that identify potential failures before they occur</li>
                      <li>Enhanced signaling systems that increase line capacity and operational flexibility</li>
                      <li>Structural health monitoring for bridges and other critical infrastructure</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Safety Systems</h3>
                    <p className="mb-2">Technology-driven safety enhancements are reducing risk across operations:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Positive Train Control (PTC) systems that prevent train-to-train collisions and overspeed derailments</li>
                      <li>Enhanced braking systems that improve stopping performance and reduce in-train forces</li>
                      <li>Wayside detection systems that identify equipment defects in real-time</li>
                      <li>Crew alertness monitoring systems that prevent operator fatigue-related incidents</li>
                      <li>Advanced crossing protection technologies that enhance safety at highway-rail interfaces</li>
                    </ul>
                  </div>
                </div>
                
                <p>These technological innovations are not only improving operational performance but also enhancing safety, environmental sustainability, and economic competitiveness. The pace of innovation continues to accelerate as railroads seek to address challenges and capitalize on new opportunities in the transportation marketplace.</p>
              </div>

              <div id="digital-transformation" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Digital Transformation</h2>
                <p className="mb-4">Digital technologies are revolutionizing rail operations, customer service, and business models:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">AI and Machine Learning</h3>
                    <p className="mb-2">Artificial intelligence and machine learning applications are transforming data analysis and decision-making:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Predictive maintenance algorithms that forecast equipment failures before they occur</li>
                      <li>Network optimization models that improve asset utilization and service reliability</li>
                      <li>Automated inspection systems that identify infrastructure and equipment defects</li>
                      <li>Dynamic pricing models that optimize revenue management</li>
                      <li>Customer demand forecasting to improve resource planning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Enhanced Tracking and Visibility</h3>
                    <p className="mb-2">Advanced tracking systems provide unprecedented visibility into shipment status:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>GPS-based tracking with real-time location updates</li>
                      <li>IoT sensors that monitor cargo conditions (temperature, humidity, shock)</li>
                      <li>Predictive ETA calculations that improve delivery time accuracy</li>
                      <li>Exception management systems that proactively identify and address delays</li>
                      <li>Customer-facing visibility platforms with self-service capabilities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Automation of Terminal Operations</h3>
                    <p className="mb-2">Terminal and yard operations are being transformed through automation:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Automated gate systems that streamline terminal entry and exit processes</li>
                      <li>Remote-controlled and autonomous cranes for loading and unloading</li>
                      <li>Automated guided vehicles for terminal transfers</li>
                      <li>Computer-controlled classification systems in hump yards</li>
                      <li>Digital work order management for terminal operations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Digital Twins</h3>
                    <p className="mb-2">Virtual replicas of physical assets and systems enable advanced simulation and optimization:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Network digital twins for capacity planning and bottleneck identification</li>
                      <li>Equipment digital twins for performance monitoring and maintenance optimization</li>
                      <li>Terminal digital twins for layout and process optimization</li>
                      <li>Train performance simulators for energy optimization</li>
                      <li>Infrastructure digital twins for lifecycle management</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Big Data Analytics</h3>
                    <p className="mb-2">Advanced analytics capabilities are transforming how railroads use their vast data resources:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Operational performance analytics to identify improvement opportunities</li>
                      <li>Customer behavior analysis for service development and marketing</li>
                      <li>Network flow optimization to improve asset utilization</li>
                      <li>Safety analytics to identify risk patterns and prevention opportunities</li>
                      <li>Fuel efficiency analytics to reduce consumption and emissions</li>
                    </ul>
                  </div>
                </div>
                
                <p>Digital transformation is fundamentally changing how railroads operate, interact with customers, and create value. The integration of these technologies is enabling more efficient, responsive, and customer-centric rail services while also opening new business opportunities and revenue streams.</p>
              </div>

              <div id="future-outlook" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Future Outlook</h2>
                <p className="mb-4">Several emerging trends are likely to shape the future of the rail logistics industry:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Industrial Demand Shift</h3>
                    <p>The potential manufacturing rebound in the United States could significantly reshape rail demand patterns. If current expansion trends continue, demand for rail-hauled industrial goods like metals, machinery, and chemicals could increase substantially, reversing years of weakness in these sectors.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Sustainability Focus</h3>
                    <p>Environmental considerations will increasingly drive transportation decisions, benefiting rail due to its superior energy efficiency and lower emissions. As companies pursue carbon reduction goals, modal shift from truck to rail for appropriate shipments is likely to accelerate, particularly for longer hauls.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Intermodal Integration</h3>
                    <p>Greater integration between rail and other transportation modes will create more seamless end-to-end logistics solutions. Partnerships between railroads, trucking companies, and logistics providers will expand, offering customers more comprehensive and flexible service options.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Corridor Development</h3>
                    <p>Investment in high-capacity, efficient rail corridors will continue, particularly for intermodal and automotive traffic. These corridors will feature advanced technologies, streamlined operations, and enhanced service reliability to compete effectively with highway transportation.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Energy Market Adaptation</h3>
                    <p>Railroads will continue to adapt to changing energy markets, developing new services for renewable energy components, battery materials, and other growth commodities while managing the ongoing decline in traditional fossil fuel shipments.</p>
                  </div>
                </div>
                
                <p>The rail industry's outlook depends on how effectively these emerging trends are addressed and leveraged. Railroads that demonstrate foresight and adaptability in responding to these developments will be best positioned for long-term success in an evolving transportation landscape.</p>
              </div>

              <div id="strategic-priorities" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Strategic Priorities</h2>
                <p className="mb-4">To capitalize on opportunities and address challenges, rail industry leaders are focusing on several key strategic priorities:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Service Reliability</h3>
                    <p className="mb-2">Enhancing service consistency and reliability remains a top priority:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Implementing precision scheduled railroading principles to improve operational consistency</li>
                      <li>Investing in capacity at strategic network points to reduce congestion</li>
                      <li>Enhancing recovery capabilities to minimize service disruptions</li>
                      <li>Improving first-mile/last-mile service reliability</li>
                      <li>Developing more accurate and transparent service metrics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Operational Efficiency</h3>
                    <p className="mb-2">Continuous improvement in operational efficiency to enhance competitiveness:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Optimizing train length and weight to maximize asset utilization</li>
                      <li>Implementing advanced dispatching systems to improve network fluidity</li>
                      <li>Reducing terminal dwell times through process improvements and automation</li>
                      <li>Enhancing fuel efficiency through technology and operating practices</li>
                      <li>Streamlining maintenance practices while maintaining safety and reliability</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Customer Experience</h3>
                    <p className="mb-2">Elevating the customer experience to strengthen relationships and attract new business:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Enhancing digital interfaces for shipment management and tracking</li>
                      <li>Developing more responsive customer service capabilities</li>
                      <li>Creating more flexible service offerings to meet diverse customer needs</li>
                      <li>Improving transparency in pricing and service commitments</li>
                      <li>Providing enhanced data and analytics to support customer decision-making</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Workforce Development</h3>
                    <p className="mb-2">Building the workforce of the future to support evolving operational needs:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Attracting diverse talent to the industry</li>
                      <li>Developing technical skills for increasingly technology-driven operations</li>
                      <li>Creating more flexible work arrangements to improve quality of life</li>
                      <li>Implementing knowledge transfer programs as experienced workers retire</li>
                      <li>Enhancing leadership development to prepare the next generation of industry leaders</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Technological Innovation</h3>
                    <p className="mb-2">Accelerating the adoption of transformative technologies:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Implementing advanced automation to improve efficiency and safety</li>
                      <li>Developing and deploying alternative propulsion technologies</li>
                      <li>Expanding predictive maintenance capabilities</li>
                      <li>Enhancing data analytics to drive decision-making</li>
                      <li>Exploring emerging technologies like blockchain for supply chain transparency</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Sustainability Initiatives</h3>
                    <p className="mb-2">Advancing environmental performance to meet stakeholder expectations:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Setting and pursuing ambitious carbon reduction targets</li>
                      <li>Investing in fuel-efficient and low-emission technologies</li>
                      <li>Implementing energy management systems across operations</li>
                      <li>Developing services specifically designed for sustainable supply chains</li>
                      <li>Enhancing transparency in environmental performance reporting</li>
                    </ul>
                  </div>
                </div>
                
                <p>These strategic priorities reflect the industry's focus on balancing immediate operational excellence with long-term transformation. Success requires not only technological innovation but also organizational and cultural evolution to create more agile, customer-centric, and forward-looking rail enterprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Metrics Dashboard Preview */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Interactive Metrics Dashboard</h2>
          <p className="text-xl mb-8">Explore key rail industry metrics through our interactive data visualizations.</p>
          
          <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">U.S. Rail Carloads by Commodity (Jan. 2025)</h3>
            <div className="h-80 bg-muted/20 rounded-lg flex items-center justify-center">
              <p className="text-xl font-medium">Interactive Chart Placeholder</p>
            </div>
            <p className="mt-4 text-muted-foreground">Data source: Association of American Railroads</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Rail Traffic Year-over-Year Change</h3>
              <div className="h-60 bg-muted/20 rounded-lg flex items-center justify-center">
                <p className="text-lg font-medium">Interactive Chart Placeholder</p>
              </div>
              <p className="mt-4 text-muted-foreground">Data source: Association of American Railroads</p>
            </div>
            
            <div className="bg-card rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Rail Market Share Trends</h3>
              <div className="h-60 bg-muted/20 rounded-lg flex items-center justify-center">
                <p className="text-lg font-medium">Interactive Chart Placeholder</p>
              </div>
              <p className="mt-4 text-muted-foreground">Data source: U.S. Department of Transportation</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Explore Full Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Related Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Class I Railroads</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Understanding Class I Railroads</h3>
                <p className="text-muted-foreground mb-4">Learn about the major players driving industry trends.</p>
                <Link href="/railroads">
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
                <p className="text-muted-foreground mb-4">Explore technological innovations in rail tracking.</p>
                <Link href="/tracking">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Resources</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Industry Resources</h3>
                <p className="text-muted-foreground mb-4">Access tools and guides for rail logistics professionals.</p>
                <Link href="/resources">
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
