'use client'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import Link from 'next/link'

export default function TrackingPage() {
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
            <Link href="/tracking" className="text-secondary font-semibold">Trip Tracking</Link>
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
          <h1 className="text-4xl font-bold mb-4">Rail Trip Tracking Systems</h1>
          <p className="text-xl max-w-3xl">Explore the technologies and systems used to track rail shipments, monitor movements, and enhance supply chain visibility.</p>
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
                  <a href="#evolution" className="block p-2 hover:bg-primary/5 rounded-md">Evolution of Rail Tracking</a>
                  <a href="#technologies" className="block p-2 hover:bg-primary/5 rounded-md">Key Technologies</a>
                  <a href="#ais" className="block p-2 hover:bg-primary/5 rounded-md">Automatic Identification Systems</a>
                  <a href="#gps" className="block p-2 hover:bg-primary/5 rounded-md">GPS Tracking</a>
                  <a href="#iot" className="block p-2 hover:bg-primary/5 rounded-md">IoT and Sensors</a>
                  <a href="#wayside" className="block p-2 hover:bg-primary/5 rounded-md">Wayside Detection Systems</a>
                  <a href="#software" className="block p-2 hover:bg-primary/5 rounded-md">Software Platforms</a>
                  <a href="#benefits" className="block p-2 hover:bg-primary/5 rounded-md">Business Benefits</a>
                  <a href="#challenges" className="block p-2 hover:bg-primary/5 rounded-md">Challenges and Limitations</a>
                  <a href="#future" className="block p-2 hover:bg-primary/5 rounded-md">Future Trends</a>
                </nav>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              <div id="overview" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="mb-4">Rail trip tracking systems are essential components of modern rail logistics operations, providing real-time visibility into the location, status, and condition of railcars and their cargo. These systems enable railroads, shippers, and logistics providers to monitor shipments throughout their journey, optimize operations, and provide accurate information to customers.</p>
                <p>The ability to track rail shipments has evolved significantly over the decades, from manual record-keeping and verbal communications to sophisticated digital systems that leverage GPS, IoT sensors, and advanced analytics. Today's rail tracking systems provide unprecedented visibility and data-driven insights that enhance efficiency, safety, and customer service across the rail logistics industry.</p>
              </div>

              <div id="evolution" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Evolution of Rail Tracking</h2>
                <p className="mb-4">The history of rail tracking reflects the broader technological evolution in transportation and logistics:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Early Methods (Pre-1960s)</h3>
                    <p>Manual record-keeping, telegraph communications, and physical inspection of trains at yards and terminals. Railroads relied on paper documentation and verbal reports to track shipments, with limited real-time visibility.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Computerization (1960s-1980s)</h3>
                    <p>Introduction of computerized systems for tracking railcars, with data entered at key points in the journey. Early Electronic Data Interchange (EDI) standards developed to share information between railroads and customers.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Automatic Identification (1980s-2000s)</h3>
                    <p>Implementation of Automatic Equipment Identification (AEI) systems using RFID technology. Trackside readers began automatically recording railcar movements, significantly improving tracking accuracy and timeliness.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">GPS and Wireless Era (2000s-2010s)</h3>
                    <p>Integration of GPS tracking and wireless communications, enabling real-time location tracking of locomotives and some railcars. Development of web-based platforms for customers to access shipment information.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">IoT and Big Data (2010s-Present)</h3>
                    <p>Proliferation of IoT sensors, advanced analytics, and cloud computing, creating comprehensive tracking ecosystems. Integration of multiple data sources to provide not just location but also condition monitoring, predictive ETAs, and operational insights.</p>
                  </div>
                </div>
                
                <p>This evolution has transformed rail tracking from a basic operational necessity to a strategic capability that drives efficiency, customer service, and competitive advantage in the rail logistics industry.</p>
              </div>

              <div id="technologies" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Key Technologies</h2>
                <p className="mb-4">Modern rail tracking systems integrate multiple technologies to create comprehensive visibility solutions. The following key technologies form the foundation of today's rail tracking capabilities:</p>
              </div>

              <div id="ais" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Automatic Identification Systems</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">RFID Technology</h3>
                  <p className="mb-4">Radio Frequency Identification (RFID) is a cornerstone technology in rail tracking, implemented through the industry-standard Automatic Equipment Identification (AEI) system.</p>
                  
                  <h4 className="font-semibold text-lg mt-4 mb-2">How It Works:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>RFID tags mounted on railcars contain unique identification information</li>
                    <li>Trackside readers at strategic locations scan passing railcars</li>
                    <li>When a tag passes a reader, the car's ID and timestamp are recorded</li>
                    <li>Data is transmitted to central tracking systems</li>
                  </ul>
                </div>
                
                <p className="mb-4">The Association of American Railroads (AAR) mandated AEI tags on all North American railcars in the early 1990s, creating a standardized identification system across the rail network. Today, there are thousands of AEI readers positioned throughout the North American rail system at:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Terminal entrances and exits</li>
                  <li>Classification yards</li>
                  <li>Interchange points between railroads</li>
                  <li>Strategic locations along mainlines</li>
                  <li>International border crossings</li>
                </ul>
                
                <p>While RFID/AEI technology provides excellent identification capabilities, it only offers visibility at fixed reader locations. This "snapshot" approach has been supplemented with continuous tracking technologies like GPS to provide more comprehensive visibility.</p>
              </div>

              <div id="gps" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">GPS Tracking</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Global Positioning System</h3>
                  <p className="mb-4">GPS technology provides continuous, real-time location data for rail assets, offering significant advantages over fixed-point identification systems.</p>
                  
                  <h4 className="font-semibold text-lg mt-4 mb-2">Implementation in Rail:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>GPS trackers installed on locomotives and high-value railcars</li>
                    <li>Devices typically include cellular or satellite communication capabilities</li>
                    <li>Position data transmitted at regular intervals or triggered by events</li>
                    <li>Integration with mapping systems for visual tracking</li>
                  </ul>
                </div>
                
                <p className="mb-4">GPS tracking in rail logistics offers several key advantages:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Continuous visibility:</strong> Not limited to fixed reader locations</li>
                  <li><strong>Real-time updates:</strong> Current location information available on demand</li>
                  <li><strong>Geofencing capabilities:</strong> Automatic notifications when assets enter or exit defined areas</li>
                  <li><strong>Speed and direction data:</strong> Additional context beyond simple location</li>
                  <li><strong>ETA calculations:</strong> Enables more accurate delivery time predictions</li>
                </ul>
                
                <p>While GPS tracking provides excellent visibility, the cost of GPS devices and associated communication services has historically limited their deployment to locomotives and high-value or specialized railcars. However, as technology costs decrease and battery life improves, GPS tracking is becoming more widespread across the rail fleet.</p>
              </div>

              <div id="iot" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">IoT and Sensors</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Internet of Things</h3>
                  <p className="mb-4">The Internet of Things (IoT) has revolutionized rail tracking by expanding capabilities beyond simple location tracking to include comprehensive condition monitoring and environmental sensing.</p>
                  
                  <h4 className="font-semibold text-lg mt-4 mb-2">Common IoT Sensors in Rail:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Temperature and humidity sensors for climate-sensitive cargo</li>
                    <li>Shock and vibration sensors to detect rough handling</li>
                    <li>Door sensors to monitor security and loading status</li>
                    <li>Wheel bearing sensors to detect potential failures</li>
                    <li>Fuel level and consumption sensors for locomotives</li>
                    <li>Weight and load distribution sensors</li>
                  </ul>
                </div>
                
                <p className="mb-4">IoT devices in rail logistics typically combine multiple functions:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Sensing:</strong> Collecting data about the asset and its environment</li>
                  <li><strong>Processing:</strong> Local computation to filter and analyze data</li>
                  <li><strong>Communication:</strong> Transmitting relevant data to central systems</li>
                  <li><strong>Power management:</strong> Optimizing battery life for long-term deployment</li>
                </ul>
                
                <p className="mb-4">The integration of IoT sensors with tracking systems creates a more comprehensive view of rail shipments, addressing questions beyond "where is it?" to include:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>"Is the cargo at the right temperature?"</li>
                  <li>"Has the shipment been subjected to excessive vibration?"</li>
                  <li>"Is the railcar developing mechanical issues?"</li>
                  <li>"Has the cargo been tampered with?"</li>
                </ul>
                
                <p>This enhanced visibility is particularly valuable for high-value, sensitive, or hazardous cargo where condition monitoring is as important as location tracking.</p>
              </div>

              <div id="wayside" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Wayside Detection Systems</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Trackside Monitoring</h3>
                  <p className="mb-4">Wayside detection systems are sophisticated monitoring installations positioned alongside railroad tracks to inspect trains as they pass by at normal operating speeds.</p>
                  
                  <h4 className="font-semibold text-lg mt-4 mb-2">Common Wayside Systems:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Hot bearing detectors to identify overheating wheel bearings</li>
                    <li>Wheel impact load detectors to find flat spots or other wheel defects</li>
                    <li>Dragging equipment detectors to identify components hanging below the train</li>
                    <li>Acoustic bearing detectors that "listen" for problematic sounds</li>
                    <li>Machine vision systems that use cameras and AI to inspect components</li>
                  </ul>
                </div>
                
                <p className="mb-4">While primarily focused on safety and maintenance, wayside detection systems contribute valuable data to tracking systems by:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Providing additional confirmation of train passages at specific locations</li>
                  <li>Identifying potential mechanical issues that could affect transit times</li>
                  <li>Contributing to the overall health status of railcars in tracking systems</li>
                  <li>Enabling predictive maintenance based on trend analysis</li>
                </ul>
                
                <p>Modern wayside systems are increasingly networked and integrated with central tracking and asset management platforms, creating a more comprehensive view of rail operations and asset condition.</p>
              </div>

              <div id="software" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Software Platforms</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Tracking and Visibility Systems</h3>
                  <p className="mb-4">Software platforms are the central nervous system of rail tracking, integrating data from multiple sources and providing interfaces for users to access and analyze tracking information.</p>
                  
                  <h4 className="font-semibold text-lg mt-4 mb-2">Key Components:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data integration layers that collect information from various tracking technologies</li>
                    <li>Database systems for storing historical and current tracking data</li>
                    <li>Analytics engines that process raw data into actionable insights</li>
                    <li>User interfaces for different stakeholders (railroads, shippers, customers)</li>
                    <li>API services for integration with other business systems</li>
                  </ul>
                </div>
                
                <p className="mb-4">Modern rail tracking software platforms offer a range of capabilities:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Real-time mapping:</strong> Visual representation of asset locations</li>
                  <li><strong>ETA predictions:</strong> Estimated arrival times based on current status and historical data</li>
                  <li><strong>Exception management:</strong> Alerts for delays or other issues requiring attention</li>
                  <li><strong>Reporting and analytics:</strong> Historical performance analysis and trend identification</li>
                  <li><strong>Mobile access:</strong> Smartphone and tablet applications for on-the-go visibility</li>
                  <li><strong>Customer portals:</strong> Self-service access to shipment information for end customers</li>
                </ul>
                
                <p className="mb-4">These platforms typically operate at multiple levels:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Railroad internal systems:</strong> Comprehensive operational visibility for the carrier</li>
                  <li><strong>Shipper visibility platforms:</strong> Focused on specific customer shipments across carriers</li>
                  <li><strong>Third-party visibility providers:</strong> Aggregating data across multiple carriers and modes</li>
                </ul>
                
                <p>The integration capabilities of these platforms are increasingly important as supply chains become more complex and intermodal transportation grows, requiring visibility across different transportation modes and carriers.</p>
              </div>

              <div id="benefits" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Business Benefits</h2>
                <p className="mb-4">Advanced rail tracking systems deliver significant business benefits across the supply chain:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">For Railroads</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Improved asset utilization and equipment turns</li>
                      <li>Enhanced operational efficiency and network fluidity</li>
                      <li>Reduced dwell time in terminals and classification yards</li>
                      <li>Better maintenance planning and reduced equipment failures</li>
                      <li>Improved customer service and satisfaction</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">For Shippers</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Enhanced supply chain visibility and planning</li>
                      <li>Reduced safety stock requirements</li>
                      <li>More accurate customer delivery commitments</li>
                      <li>Better coordination of downstream logistics</li>
                      <li>Improved product quality through condition monitoring</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">For Receivers</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Better workforce planning for loading/unloading</li>
                      <li>Reduced demurrage and detention charges</li>
                      <li>Improved inventory management</li>
                      <li>Enhanced production planning</li>
                      <li>Reduced stockouts and production disruptions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">For Service Providers</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Better coordination of intermodal transfers</li>
                      <li>Improved equipment positioning and utilization</li>
                      <li>Enhanced customer service capabilities</li>
                      <li>Value-added visibility services</li>
                      <li>Data-driven operational improvements</li>
                    </ul>
                  </div>
                </div>
                
                <p>The collective impact of these benefits includes reduced overall supply chain costs, improved service levels, enhanced safety, and better environmental performance through more efficient operations.</p>
              </div>

              <div id="challenges" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Challenges and Limitations</h2>
                <p className="mb-4">Despite significant advances, rail tracking systems still face several challenges:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Infrastructure Gaps</h3>
                    <p>Coverage limitations in remote areas where cellular networks are unavailable or unreliable. Satellite communications can address this but at higher cost and with potential latency issues.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Power Constraints</h3>
                    <p>Battery life limitations for mobile tracking devices, particularly for railcars that may be stationary for extended periods. Solar and energy harvesting solutions are emerging but have their own limitations.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Data Integration</h3>
                    <p>Challenges in integrating data across multiple railroads, each with their own systems and data formats. Industry standards exist but implementation varies.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Cost Considerations</h3>
                    <p>The economic justification for advanced tracking can be challenging, particularly for low-value commodities or infrequently used railcars. The industry continues to seek the right balance of cost and capability.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Legacy Systems</h3>
                    <p>Many railroads operate with a mix of modern and legacy systems, creating integration challenges and sometimes limiting the potential of newer technologies.</p>
                  </div>
                </div>
                
                <p>The rail industry continues to address these challenges through technological innovation, standards development, and collaborative initiatives aimed at improving the overall tracking ecosystem.</p>
              </div>

              <div id="future" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Future Trends</h2>
                <p className="mb-4">The future of rail tracking is being shaped by several emerging trends and technologies:</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Artificial Intelligence and Machine Learning</h3>
                    <p>AI and ML are increasingly being applied to tracking data to predict ETAs more accurately, identify potential delays before they occur, optimize routing, and detect patterns that human analysts might miss.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Advanced Energy Solutions</h3>
                    <p>Innovations in battery technology, energy harvesting, and power management are extending the life of mobile tracking devices and enabling more frequent updates without maintenance.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">5G and Advanced Connectivity</h3>
                    <p>Next-generation wireless networks will enable more devices, higher data throughput, and lower latency, supporting more comprehensive and real-time tracking capabilities.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Blockchain and Distributed Ledger Technology</h3>
                    <p>These technologies are being explored for creating more secure, transparent, and efficient tracking records, particularly for international shipments involving multiple parties.</p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Autonomous and Semi-Autonomous Operations</h3>
                    <p>As railroads move toward more automated operations, tracking systems will play a crucial role in monitoring and coordinating autonomous equipment and ensuring safety.</p>
                  </div>
                </div>
                
                <p>The continued evolution of rail tracking systems will likely focus on creating more comprehensive, predictive, and actionable visibility that extends beyond simple location tracking to encompass the entire logistics ecosystem.</p>
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
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Class I Railroads</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Understanding Class I Railroads</h3>
                <p className="text-muted-foreground mb-4">Learn about the major players that operate these tracking systems.</p>
                <Link href="/railroads">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <p className="text-lg font-medium">Regulatory Maintenance</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Maintenance Requirements</h3>
                <p className="text-muted-foreground mb-4">Understand how tracking systems support regulatory compliance.</p>
                <Link href="/maintenance">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <p className="text-lg font-medium">Industry Trends</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tracking Technology Trends</h3>
                <p className="text-muted-foreground mb-4">Explore the latest innovations in rail tracking technology.</p>
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
