import { Bike, Car, Truck, Package } from "lucide-react";
import { useState } from "react";

const vehicles = [
  {
    id: "bike",
    name: "Two Wheeler",
    icon: Bike,
    description: "Best for documents & small packages",
    capacity: "Up to 20 kg",
    price: "Starting ₹49",
    time: "Fastest option",
  },
  {
    id: "auto",
    name: "Auto",
    icon: Car,
    description: "Perfect for medium sized items",
    capacity: "Up to 100 kg",
    price: "Starting ₹99",
    time: "Quick delivery",
  },
  {
    id: "mini",
    name: "Mini Truck",
    icon: Package,
    description: "Great for shifting small loads",
    capacity: "Up to 500 kg",
    price: "Starting ₹299",
    time: "Same day",
  },
  {
    id: "truck",
    name: "Truck",
    icon: Truck,
    description: "For heavy duty & house shifting",
    capacity: "Up to 2000 kg",
    price: "Starting ₹599",
    time: "Scheduled",
  },
];

const VehiclesSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("bike");

  return (
    <section id="vehicles" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Vehicle</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the perfect vehicle for your delivery needs. From quick document drops to full house shifting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => {
            const Icon = vehicle.icon;
            const isSelected = selectedVehicle === vehicle.id;
            
            return (
              <div
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle.id)}
                className={`group cursor-pointer bg-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 animate-slide-up ${
                  isSelected 
                    ? "ring-2 ring-primary shadow-card" 
                    : "shadow-soft hover:shadow-card"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isSelected 
                    ? "gradient-hero" 
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <Icon className={`w-8 h-8 transition-colors ${
                    isSelected ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{vehicle.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{vehicle.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-medium text-foreground">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-semibold text-primary">{vehicle.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium text-foreground">{vehicle.time}</span>
                  </div>
                </div>

                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                      Selected
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
