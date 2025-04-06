'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function RailcarsPage() {
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
            <Link href="/railcars" className="text-secondary font-semibold">Railcar Types</Link>
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
          <h1 className="text-4xl font-bold mb-4">Railcar Types</h1>
          <p className="text-xl max-w-3xl">Explore the different types of railcars, their specifications, and specific uses in freight transportation.</p>
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
                  <a href="#autorack" className="block p-2 hover:bg-primary/5 rounded-md">Autorack</a>
                  <a href="#boxcar" className="block p-2 hover:bg-primary/5 rounded-md">Boxcar</a>
                  <a href="#centerbeam" className="block p-2 hover:bg-primary/5 rounded-md">Centerbeam</a>
                  <a href="#covered-hopper" className="block p-2 hover:bg-primary/5 rounded-md">Covered Hopper</a>
                  <a href="#coil-car" className="block p-2 hover:bg-primary/5 rounded-md">Coil Car</a>
                  <a href="#flatcar" className="block p-2 hover:bg-primary/5 rounded-md">Flatcar</a>
                  <a href="#gondola" className="block p-2 hover:bg-primary/5 rounded-md">Gondola</a>
                  <a href="#intermodal" className="block p-2 hover:bg-primary/5 rounded-md">Intermodal Equipment</a>
                  <a href="#open-top-hopper" className="block p-2 hover:bg-primary/5 rounded-md">Open-Top Hopper</a>
                  <a href="#refrigerated" className="block p-2 hover:bg-primary/5 rounded-md">Refrigerated Boxcar</a>
                  <a href="#tank-car" className="block p-2 hover:bg-primary/5 rounded-md">Tank Car</a>
                  <a href="#well-car" className="block p-2 hover:bg-primary/5 rounded-md">Well Car</a>
                </nav>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              <div id="overview" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="mb-4">Just as different road vehicles are designed for specific purposes, railcars come in a variety of types, each engineered to transport particular kinds of freight efficiently and safely. The design of each railcar type is optimized for loading, carrying, and unloading specific commodities or products.</p>
                <p>Understanding the different railcar types is essential for anyone involved in rail logistics, as it affects everything from loading procedures and transit times to cost considerations and regulatory compliance. This guide provides a comprehensive overview of the major railcar types used in North American freight transportation.</p>
              </div>

              <div id="autorack" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Autorack</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries finished vehicles, including cars, electric vehicles, trucks, and SUVs.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Fully enclosed metal structure with multiple levels (bi-level or tri-level).</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Metal "racks" create levels/decks to maximize shipping space by allowing vehicles to be safely stacked.</p>
                </div>
                
                <p className="mb-4">Autoracks are specialized railcars designed specifically for transporting finished vehicles from manufacturing plants to distribution centers. They are entirely enclosed to protect vehicles from the elements and potential damage during transit.</p>
                
                <p className="mb-4">There are two main types of autoracks:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Bi-level autoracks:</strong> Have two levels and can be used for any vehicle type, including larger vehicles like trucks and SUVs.</li>
                  <li><strong>Tri-level autoracks:</strong> Have three levels and are typically used for smaller passenger vehicles, maximizing the number of cars that can be transported in a single railcar.</li>
                </ul>
                
                <p>The enclosed design of autoracks provides protection against weather, vandalism, and road debris, ensuring that vehicles arrive at their destination in pristine condition.</p>
              </div>

              <div id="boxcar" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Boxcar</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries crated or palletized freight, including paper, lumber, packaged goods, and beverages.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Fully enclosed, boxy structure with doors on the side or ends.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Enclosed design protects freight from weather during transport.</p>
                </div>
                
                <p className="mb-4">Boxcars are among the most versatile railcars in the freight transportation system. Their enclosed design makes them ideal for carrying a wide variety of goods that need protection from the elements but don't require specialized handling or temperature control.</p>
                
                <p className="mb-4">Common cargo transported in boxcars includes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Paper products</li>
                  <li>Lumber and building materials</li>
                  <li>Packaged consumer goods</li>
                  <li>Beverages</li>
                  <li>Appliances</li>
                  <li>Automotive parts</li>
                </ul>
                
                <p>Boxcars typically have large sliding doors on the sides or ends to facilitate loading and unloading. Modern boxcars often include interior fixtures like load restraint systems to secure cargo during transit.</p>
              </div>

              <div id="centerbeam" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Centerbeam</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries bundled goods like lumber, wallboard, fence posts, and building supplies.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Features a center beam or partition that reinforces the center of gravity.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Center beam allows products to be secured in place.</p>
                </div>
                
                <p className="mb-4">Centerbeam cars are specialized flatcars designed primarily for transporting building materials, particularly lumber and other long, bundled products. The defining feature of these cars is the central beam that runs the length of the car, providing structural support and a point for securing cargo.</p>
                
                <p className="mb-4">The center beam serves multiple purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Reinforces the center of gravity to maintain stability</li>
                  <li>Provides a structure against which cargo can be braced</li>
                  <li>Allows for loading from both sides of the car</li>
                  <li>Enables secure tie-down of bundled materials</li>
                </ul>
                
                <p>Centerbeam cars are particularly efficient for transporting building materials from production facilities to distribution centers and construction sites.</p>
              </div>

              <div id="covered-hopper" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Covered Hopper</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries free-flowing dry bulk commodities like cement, roofing granules, sand, corn, wheat, fertilizer, and sugar.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Open top for loading with a sloped floor and bottom doors for unloading.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Covered top protects contents from elements.</p>
                </div>
                
                <p className="mb-4">Covered hoppers are designed to transport dry, granular commodities that need protection from the elements. They combine the loading and unloading efficiency of open hoppers with the weather protection of enclosed cars.</p>
                
                <p className="mb-4">These railcars feature:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Roof hatches for top loading</li>
                  <li>Sloped floors that direct the load toward discharge gates</li>
                  <li>Bottom gates or doors for gravity unloading</li>
                  <li>Weather-tight covers to protect cargo</li>
                </ul>
                
                <p className="mb-4">Covered hoppers come in various sizes and configurations optimized for different commodities:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Small-cube hoppers:</strong> For dense materials like cement and sand</li>
                  <li><strong>Medium-cube hoppers:</strong> For grains and similar agricultural products</li>
                  <li><strong>Large-cube hoppers:</strong> For light, bulky materials like plastic pellets</li>
                </ul>
                
                <p>The design allows for efficient loading and unloading while protecting the cargo from moisture and contamination.</p>
              </div>

              <div id="coil-car" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Coil Car</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries coiled steel, steel plate, or high-grade ores.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Various designs with troughs to prevent coils from rolling.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Some have side brackets for securing loads without cables, others have designs that don't require special measures.</p>
                </div>
                
                <p className="mb-4">Coil cars are specialized railcars designed specifically for transporting metal coils, particularly steel coils, which are heavy, dense, and have unique handling requirements. The design of coil cars addresses the challenges of securing these cylindrical loads during transport.</p>
                
                <p className="mb-4">Key features of coil cars include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Trough-shaped depressions or "cradles" that hold coils securely and prevent rolling</li>
                  <li>High load capacity to accommodate the density of metal coils</li>
                  <li>Side brackets or other securing mechanisms</li>
                  <li>Some designs include covers for weather protection</li>
                </ul>
                
                <p>Coil cars play a crucial role in the steel industry supply chain, moving raw materials from steel mills to manufacturing facilities where they are processed into various products.</p>
              </div>

              <div id="flatcar" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Flatcar</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries pipe, rail, steel plate, machinery, military vehicles, lumber, poles, and logs.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Simple flat, even platform, some with bulkheads at each end.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Open design accommodates oversized and oddly shaped freight.</p>
                </div>
                
                <p className="mb-4">Flatcars are among the simplest railcar designs, consisting essentially of a flat deck mounted on a underframe with trucks (wheel assemblies). Their straightforward design makes them extremely versatile for carrying a wide range of cargo, particularly items that are oversized, oddly shaped, or don't require protection from the elements.</p>
                
                <p className="mb-4">Variations of flatcars include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Standard flatcars:</strong> Basic flat deck design</li>
                  <li><strong>Bulkhead flatcars:</strong> Include vertical end walls to prevent cargo from shifting longitudinally</li>
                  <li><strong>Center depressed flatcars:</strong> Feature a lowered center section to accommodate taller loads while maintaining clearance requirements</li>
                  <li><strong>Multi-level flatcars:</strong> Used for automobile transport (see Autoracks)</li>
                </ul>
                
                <p>Flatcars require appropriate securing methods such as chains, straps, blocks, and braces to keep cargo in place during transit.</p>
              </div>

              <div id="gondola" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Gondola</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries heavy bulk commodities including scrap metal, aggregates, logs, steel, sand, copper, and iron ore.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Sturdy cars with low side walls and open tops.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Like a boxcar cut in half horizontally, providing containment with open-top access.</p>
                </div>
                
                <p className="mb-4">Gondola cars are open-top railcars with fixed sides and ends, designed to transport loose bulk materials that don't require protection from the weather. They can be thought of as a middle ground between flatcars and hoppers, providing containment for loose materials while allowing for easy top loading.</p>
                
                <p className="mb-4">Common types of gondolas include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Standard gondolas:</strong> General-purpose cars with solid floors</li>
                  <li><strong>Drop-bottom gondolas:</strong> Feature doors in the floor for easier unloading of certain materials</li>
                  <li><strong>Rotary gondolas:</strong> Designed to be emptied by rotary dumpers that turn the entire car upside down</li>
                  <li><strong>Coil gondolas:</strong> Specialized for transporting steel coils with interior cradles</li>
                </ul>
                
                <p>Gondolas are particularly important in heavy industries like steel production, mining, and construction, where they transport raw materials and finished products.</p>
              </div>

              <div id="intermodal" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Intermodal Equipment</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries a wide variety of goods from apparel to electronics to refrigerated products.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Includes containers (like boxcars without train wheels) and trailers.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Can be transferred between ships, trains, and trucks without unloading cargo.</p>
                </div>
                
                <p className="mb-4">Intermodal equipment represents a system rather than a specific railcar type. It involves standardized containers or trailers that can move seamlessly between different transportation modes (rail, truck, ship) without unloading and reloading the cargo inside.</p>
                
                <p className="mb-4">The two main types of intermodal equipment are:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Containers:</strong> Standardized boxes (typically 20, 40, or 53 feet long) that can be stacked on ships, loaded onto specialized railcars, and mounted on truck chassis</li>
                  <li><strong>Trailers:</strong> Truck trailers that can be loaded onto railcars for long-distance transport</li>
                </ul>
                
                <p className="mb-4">On railways, intermodal equipment is carried on specialized railcars:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Well cars:</strong> For containers, allowing for double-stacking</li>
                  <li><strong>Spine cars:</strong> Minimalist frames designed to carry containers or trailers</li>
                  <li><strong>Flatcars:</strong> Used for trailer-on-flatcar (TOFC) service</li>
                </ul>
                
                <p>Intermodal transportation has revolutionized global logistics by standardizing cargo units and enabling efficient transfers between transportation modes.</p>
              </div>

              <div id="open-top-hopper" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Open-Top Hopper</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries coal, petroleum coke, sand, rock, and copper concentrate.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Open top for loading with sloped floor and doors for unloading.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>No covers, suitable for freight that can be exposed to elements.</p>
                </div>
                
                <p className="mb-4">Open-top hoppers are designed for transporting bulk materials that don't require protection from the weather. They feature an open top for easy loading and a sloped floor with discharge doors for efficient unloading.</p>
                
                <p className="mb-4">Key characteristics of open-top hoppers include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Sloped floors that direct the load toward discharge gates</li>
                  <li>Bottom gates or doors for gravity unloading</li>
                  <li>No roof or cover, allowing for top loading</li>
                  <li>Sturdy construction to handle heavy, dense materials</li>
                </ul>
                
                <p className="mb-4">Open-top hoppers are commonly used for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Coal transportation from mines to power plants</li>
                  <li>Aggregate materials for construction</li>
                  <li>Mining products</li>
                  <li>Other bulk commodities that aren't sensitive to weather exposure</li>
                </ul>
                
                <p>Coal hoppers represent one of the largest subsets of this car type, playing a crucial role in energy supply chains.</p>
              </div>

              <div id="refrigerated" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Refrigerated Boxcar</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries perishable freight, like fresh fruits, vegetables, frozen food, meat, poultry, seafood, and cheese.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Similar to traditional boxcars but with temperature control.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Temperature-controlled environment for preserving perishable goods.</p>
                </div>
                
                <p className="mb-4">Refrigerated boxcars, commonly known as "reefers," are specialized railcars designed to transport temperature-sensitive goods. They combine the enclosed protection of a boxcar with refrigeration systems that maintain specific temperature ranges during transit.</p>
                
                <p className="mb-4">Modern refrigerated cars feature:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Insulated walls, floors, and ceilings</li>
                  <li>Mechanical refrigeration units (older designs used ice)</li>
                  <li>Temperature monitoring and control systems</li>
                  <li>Air circulation systems to maintain consistent temperatures throughout the car</li>
                  <li>Doors designed to maintain the temperature seal</li>
                </ul>
                
                <p className="mb-4">Refrigerated boxcars are essential for the food supply chain, transporting:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Fresh produce from growing regions to distribution centers</li>
                  <li>Frozen foods</li>
                  <li>Meat and dairy products</li>
                  <li>Other temperature-sensitive goods like certain pharmaceuticals</li>
                </ul>
                
                <p>Temperature ranges can be customized based on cargo requirements, from deep freezing to cool refrigeration for fresh produce.</p>
              </div>

              <div id="tank-car" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Tank Car</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries compressed or liquid commodities, like chemicals, molasses, water, asphalt, diesel fuel, and diesel exhaust fluid.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Cylindrical tank designed to hold liquids.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Can hold between 6,500 gallons to more than 31,000 gallons.</p>
                </div>
                
                <p className="mb-4">Tank cars are specialized railcars designed to transport liquids, gases, and certain dry bulk materials that flow like liquids. Their defining feature is a cylindrical tank mounted horizontally on a railcar underframe.</p>
                
                <p className="mb-4">Tank cars come in various specifications based on the cargo they're designed to carry:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Non-pressure tank cars:</strong> For liquids transported at atmospheric pressure</li>
                  <li><strong>Pressure tank cars:</strong> For liquefied gases and other pressurized commodities</li>
                  <li><strong>Cryogenic tank cars:</strong> For extremely cold liquefied gases</li>
                  <li><strong>Coiled and insulated tank cars:</strong> For commodities that must be kept at specific temperatures</li>
                </ul>
                
                <p className="mb-4">Safety features on tank cars may include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Pressure relief devices</li>
                  <li>Thermal protection systems</li>
                  <li>Head shields to protect tank ends</li>
                  <li>Double shelf couplers to prevent uncoupling in derailments</li>
                  <li>Thicker tank shells for hazardous materials</li>
                </ul>
                
                <p>Tank cars are subject to stringent regulations, particularly when transporting hazardous materials, with specifications continuously evolving to enhance safety.</p>
              </div>

              <div id="well-car" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Well Car</h2>
                <div className="bg-muted/20 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Purpose</h3>
                  <p>Carries intermodal containers with a wide variety of goods.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Design</h3>
                  <p>Features a depression ("well") that sits close to the rails.</p>
                  
                  <h3 className="font-bold text-xl mt-4 mb-2">Features</h3>
                  <p>Allows containers to be stacked (double-stacked) for efficient transport.</p>
                </div>
                
                <p className="mb-4">Well cars, also known as well wagons or stack cars, are specialized railcars designed specifically for transporting intermodal shipping containers. Their defining feature is a depressed center section—the "well"—that allows containers to ride lower, enabling double-stacking while still meeting height clearance requirements.</p>
                
                <p className="mb-4">Key features of well cars include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Recessed center section that brings the bottom container closer to the rails</li>
                  <li>Container locking mechanisms at the corners</li>
                  <li>Ability to accommodate various container sizes (20', 40', 45', 48', and 53')</li>
                  <li>Articulated designs that share trucks between car sections to reduce weight and improve efficiency</li>
                </ul>
                
                <p className="mb-4">The ability to double-stack containers provides significant advantages:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Doubles the carrying capacity per unit of train length</li>
                  <li>Improves fuel efficiency per container</li>
                  <li>Reduces crew and locomotive requirements per container</li>
                  <li>Maximizes use of limited rail corridor capacity</li>
                </ul>
                
                <p>Well cars have revolutionized intermodal transportation and are a key component in the global supply chain, enabling efficient movement of containerized goods between ships, trains, and trucks.</p>
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
                <p className="text-muted-foreground mb-4">Learn about the major players that operate these railcars.</p>
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
                <h3 className="text-xl font-bold mb-2">Railcar Maintenance Requirements</h3>
                <p className="text-muted-foreground mb-4">Understand the regulatory requirements for maintaining different railcar types.</p>
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
                <h3 className="text-xl font-bold mb-2">Railcar Design Innovations</h3>
                <p className="text-muted-foreground mb-4">Explore the latest innovations in railcar design and technology.</p>
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
