import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Mail } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 right-0 z-40 p-6">
      <div className="flex gap-6">
        {navItems.map((item) => {
          const isActive = item.path === "/portfolio" ? location.pathname.startsWith("/portfolio") : location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                group font-heading text-sm tracking-wider px-4 py-2 rounded-md
                border transition-all duration-300 hover-scale
                flex items-center gap-2
                ${isActive 
                  ? 'border-primary text-primary glow-neon bg-primary/10' 
                  : 'border-border text-foreground hover:border-primary hover:text-primary hover:glow-neon'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
