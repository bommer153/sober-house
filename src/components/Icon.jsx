import {
  Home,
  Users,
  Shield,
  Heart,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  ArrowRight,
  Menu,
  X,
  BarChart,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';

const Icon = ({ name, size = 'md', className = '', ...props }) => {
  const icons = {
    home: Home,
    users: Users,
    shield: Shield,
    heart: Heart,
    lightning: Zap,
    star: Star,
    phone: Phone,
    email: Mail,
    location: MapPin,
    clock: Clock,
    check: Check,
    arrowRight: ArrowRight,
    menu: Menu,
    close: X,
    chart: BarChart,
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
  };

  const sizeMap = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    '2xl': 40,
  };

  const IconComponent = icons[name] || Home;

  return (
    <IconComponent
      size={sizeMap[size]}
      className={className}
      strokeWidth={2.5}
      {...props}
    />
  );
};

export default Icon; 