import { Apple, PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Download the Ddelivery App
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Get exclusive offers, track your deliveries in real-time, and manage everything from your pocket.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-primary-foreground font-semibold">4.8</span>
            <span className="text-primary-foreground/70">• 50K+ Reviews</span>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="white" size="xl" className="min-w-[200px]">
              <Apple className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Download on</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>
            <Button variant="white" size="xl" className="min-w-[200px]">
              <PlayCircle className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
