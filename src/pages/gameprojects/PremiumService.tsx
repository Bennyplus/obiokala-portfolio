import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function PremiumService() {
  return (
    <div className="min-h-screen bg-dark-space text-foreground">
      <Navigation />

      <div className="container mx-auto px-6 py-20 animate-fade-in">
        {/* Back */}
        <Link to="/portfolio/games">
          <Button
            variant="outline"
            className="mb-8 hover:bg-secondary/100 hover:border-secondary glow-blue hover-scale font-heading px-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to  Game Portfolio
          </Button>
        </Link>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-4">
          Premium Service
        </h1>

        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
          Status: In Development
        </p>

        {/* Description */}
        <p className="text-muted-foreground max-w-3xl mb-10">
          Premium Service is a management simulation prototype focused on
          operational decision-making within a live event hospitality
          environment. The project explores how players prioritise orders,
          allocate staff, manage inventory, and respond to fluctuating demand
          during a service shift.
        </p>

        {/* Development Notice */}
        <div className="border border-border rounded-lg bg-dark-surface p-6 mb-12">
          <h2 className="font-heading text-xl mb-3 text-primary">
            Development Status
          </h2>
          <p className="text-muted-foreground">
            This project is currently in early development. Systems are being
            designed and prototyped, and the project is not yet playable. This
            page exists to communicate intent, scope, and planned architecture
            rather than completed features.
          </p>
        </div>

        {/* Planned Focus */}
        <h2 className="font-heading text-2xl mb-4">
          Planned Systems & Focus
        </h2>

        <ul className="space-y-3 text-muted-foreground mb-12">
          <li>▹ Order prioritisation and ticket-based workflow</li>
          <li>▹ Staff assignment and workload balancing</li>
          <li>▹ Inventory tracking and restocking logic</li>
          <li>▹ Time-based service pressure and demand spikes</li>
          <li>▹ Performance evaluation across an entire shift</li>
        </ul>

        {/* Platform */}
        <p className="text-muted-foreground">
          <strong>Target Platform:</strong> PC
        </p>

      </div>
    </div>
  );
}
