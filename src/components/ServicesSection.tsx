import { Package, Home, Briefcase, ShoppingBag, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Courier Delivery",
    description: "Send documents, packages & parcels anywhere in the city with real-time tracking.",
  },
  {
    icon: Home,
    title: "House Shifting",
    description: "Complete relocation services with packing, loading & careful transportation.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Solutions",
    description: "Customized logistics for businesses with dedicated fleet & priority support.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Delivery",
    description: "Fast & reliable delivery for online sellers with COD & prepaid options.",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Urgent deliveries within 2 hours. Premium service for time-critical packages.",
  },
  {
    icon: Shield,
    title: "Insured Transport",
    description: "Full insurance coverage for valuable items. Peace of mind guaranteed.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From quick courier pickups to complete house shifting, we've got all your delivery needs covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
