import { MapPin, Smartphone, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    step: "01",
    title: "Enter Locations",
    description: "Add your pickup and drop locations. Get instant price estimate.",
  },
  {
    icon: Smartphone,
    step: "02",
    title: "Choose Vehicle",
    description: "Select from bikes, autos, or trucks based on your package size.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Track in Real-time",
    description: "Watch your delivery move live on the map. Know exactly when it arrives.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Delivery Complete",
    description: "Get notified when delivered. Rate your experience & share feedback.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Booking a delivery is as easy as ordering food. Just 4 simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  className="relative text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step Circle */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 gradient-hero rounded-full flex items-center justify-center shadow-button">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
