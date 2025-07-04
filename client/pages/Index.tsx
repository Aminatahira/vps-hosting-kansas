import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Server,
  Clock,
  Users,
  Star,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "SSD Storage for Super Speed",
      description:
        "Ultra-fast SSD drives deliver quicker read/write performance—perfect for databases, e-commerce, and high-traffic sites.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Full Root Access",
      description:
        "Install any software, configure your settings, and enjoy complete control over your server environment.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Choose Your OS",
      description:
        "Deploy your VPS with your choice of operating system, including Ubuntu, Debian, CentOS, AlmaLinux, and more.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Dedicated IPv4 Address",
      description:
        "A professional IP address is included with each VPS for secure and seamless access.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "99.99% Uptime Guarantee",
      description:
        "Host with confidence, knowing your site will stay up, even during peak traffic or unexpected surges.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "24/7 Expert Support",
      description:
        "Our friendly, experienced support team is available round-the-clock to resolve issues and help you grow.",
    },
  ];

  const plans = [
    {
      name: "Basic VPS",
      price: "$11.50",
      specs: ["1 vCPU", "1 GB RAM", "30 GB SSD", "1 TB Bandwidth"],
      description: "Perfect for small projects and lightweight apps",
      popular: false,
    },
    {
      name: "Standard VPS",
      price: "$21.50",
      specs: ["2 vCPU", "2 GB RAM", "60 GB SSD", "2 TB Bandwidth"],
      description: "Ideal for business websites and testing environments",
      popular: false,
    },
    {
      name: "Premium VPS",
      price: "$36.50",
      specs: ["4 vCPU", "4 GB RAM", "120 GB SSD", "3 TB Bandwidth"],
      description: "Great for growing eCommerce stores or agencies",
      popular: true,
    },
    {
      name: "Pro VPS",
      price: "$62.50",
      specs: ["6 vCPU", "6 GB RAM", "200 GB SSD", "4 TB Bandwidth"],
      description: "Designed for large apps or high-traffic websites",
      popular: false,
    },
    {
      name: "Turbo VPS",
      price: "$92.50",
      specs: ["8 vCPU", "8 GB RAM", "250 GB SSD", "5 TB Bandwidth"],
      description: "Built for performance-heavy platforms and APIs",
      popular: false,
    },
    {
      name: "Turbo Plus VPS",
      price: "$122.50",
      specs: ["10 vCPU", "10 GB RAM", "300 GB SSD", "6 TB Bandwidth"],
      description: "Enterprise-ready solution for serious professionals",
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Emily R.",
      role: "Boutique Owner",
      content:
        "We were tired of slow shared hosting. Since switching to Kansas City VPS, our site loads in a flash!",
      rating: 5,
    },
    {
      name: "Cameron T.",
      role: "Software Engineer",
      content:
        "As a dev team working with U.S.-based clients, hosting in Kansas City was a game-changer for latency and speed.",
      rating: 5,
    },
    {
      name: "Linda M.",
      role: "Marketing Consultant",
      content:
        "Easy to set up, great support, and flexible plans. What more could you ask for?",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Can I use VPS hosting for WordPress or eCommerce?",
      answer:
        "Absolutely. Our Kansas City VPS plans are ideal for WordPress, WooCommerce, Magento, Shopify, and custom-built e-commerce applications.",
    },
    {
      question: "Is technical knowledge required?",
      answer:
        "You can choose between unmanaged (for tech-savvy users) or managed (we handle setup and maintenance) VPS plans.",
    },
    {
      question: "What if I outgrow my plan?",
      answer:
        "No worries! You can scale up at any time without downtime. Just contact support or upgrade from your dashboard.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Right away! Most VPS accounts are deployed within minutes after signup.",
    },
    {
      question: "Will I get a dedicated IP address?",
      answer: "Yes, all plans include a dedicated IPv4 address.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">ARZ Host</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="https://arzhost.com/hosting/kansas-reliable-vps-hosting/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                VPS Hosting Kansas
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                VPS Regions
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://arzhost.com/vps/">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 bg-secondary/20 text-secondary-foreground border-secondary/30"
            >
              Kansas City VPS Hosting
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Local Power. Global Reach.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Supercharge your online experience with{" "}
              <a
                href="https://arzhost.com/"
                className="text-primary hover:underline"
              >
                VPS hosting
              </a>{" "}
              in Kansas City—where blazing-fast performance meets full control
              and unbeatable value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                <a href="https://arzhost.com/vps/">Start Your VPS Journey</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Kansas City VPS Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Is Kansas City VPS Hosting?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Kansas City VPS (Virtual Private Server) hosting provides you
                with dedicated virtual space on a powerful server located in
                Kansas City. Unlike shared hosting,{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Virtual_private_server"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VPS
                </a>{" "}
                provides you with isolated resources, complete root access, and
                the flexibility to install software, manage traffic spikes, and
                scale as needed.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With servers located in Kansas City, you enjoy lightning-fast
                connections and better load times for regional and nationwide
                users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Host in Kansas City */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Host in Kansas City?
            </h2>
            <p className="text-xl text-accent font-semibold mb-8">
              "Hosting closer = Performing faster."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Kansas City is a central location in the U.S., making it ideal for
              businesses targeting Midwest and nationwide audiences. Hosting
              your website or application locally brings you the following
              benefits:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Lower Latency",
                description: "Faster page loading times",
              },
              {
                title: "Better Performance",
                description: "Optimized for U.S. users",
              },
              {
                title: "Data Security",
                description: "U.S.-based infrastructure",
              },
              {
                title: "Improved SEO",
                description: "Better local search rankings",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-primary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kansas City VPS Features You'll Love
            </h2>
            <p className="text-muted-foreground text-lg">
              Our VPS packages are loaded with powerful features that give you
              total freedom and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kansas City VPS Plans & Pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that fits your needs—upgrade anytime without
              downtime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-card border-border hover:border-primary/50 transition-all duration-300 ${plan.popular ? "border-primary ring-2 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-2" />
                        <span className="text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href="https://arzhost.com/vps/">Choose Plan</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Stand Out */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes Our Kansas City VPS Hosting Stand Out?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Locally Hosted, National Performance",
                  description:
                    "Data centers in Kansas City offer high-speed access across the U.S.",
                },
                {
                  title: "Scalable & Flexible",
                  description:
                    "Instantly upgrade your plan as your needs grow—without any downtime.",
                },
                {
                  title: "Security Comes First",
                  description:
                    "DDoS protection, isolated environments, and regular backups keep your data safe.",
                },
                {
                  title: "Eco-Friendly Infrastructure",
                  description:
                    "Our modern data centers are designed for optimal energy efficiency and reduced carbon footprint.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/20">
                <Server className="h-24 w-24 text-primary mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">99.99% Uptime</h3>
                  <p className="text-muted-foreground">
                    Guaranteed reliability with enterprise-grade infrastructure
                    and redundant systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real Customer Feedback
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our customers say about their experience with{" "}
              <a
                href="https://arzhost.com/"
                className="text-primary hover:underline"
              >
                ARZ Host
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-foreground italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Level Up?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Say goodbye to slow, shared hosting and hello to VPS performance.
              Choose Kansas City VPS hosting for unmatched speed, control, and
              support—right from the heart of the U.S.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg"
            >
              <a href="https://arzhost.com/vps/">Get Started Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Server className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">
                  ARZ Host
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Professional VPS hosting solutions with unmatched performance
                and support.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Website:{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                  >
                    arzhost.com
                  </a>
                </p>
                <p>Phone: +1 (631) 594-8060</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://arzhost.com/hosting/kansas-reliable-vps-hosting/"
                    className="hover:text-primary transition-colors"
                  >
                    VPS Hosting Kansas
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="hover:text-primary transition-colors"
                  >
                    VPS Regions
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="hover:text-primary transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/vps/"
                    className="hover:text-primary transition-colors"
                  >
                    All VPS Plans
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="hover:text-primary transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="hover:text-primary transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Ready to experience the power of Kansas City VPS hosting?
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                <a href="https://arzhost.com/vps/">Start Your VPS</a>
              </Button>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 ARZ Host. All rights reserved. | Kansas City VPS Hosting
              Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
