import { MapPin, Navigation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-light via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              Fast & Reliable Delivery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Move Anything,{" "}
              <span className="text-primary">Anywhere</span>
              <br />in Minutes
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              From documents to furniture, we deliver everything. Choose from bikes, autos, and trucks. Real-time tracking included.
            </p>

            {/* Booking Form */}
            <div className="bg-card rounded-2xl shadow-card p-6 max-w-lg">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors">
                    <Navigation className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  <input
                    type="text"
                    placeholder="Drop Location"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                    <MapPin className="w-5 h-5" />
                  </button>
                </div>

                <Button variant="hero" className="w-full" size="xl">
                  Get Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-8">
              <div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">15 min</div>
                <div className="text-sm text-muted-foreground">Avg. Pickup Time</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 gradient-hero rounded-full flex items-center justify-center shadow-button">
                    <MapPin className="w-20 h-20 text-primary-foreground" />
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Delivered!</div>
                    <div className="text-xs text-muted-foreground">2 min ago</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-lg">🚚</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">On the way</div>
                    <div className="text-xs text-muted-foreground">ETA: 8 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
