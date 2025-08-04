import { Link, useLocation } from 'react-router-dom';

function NavLink({ to, children, onClick, className = "", scrolled = false }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = (e) => {
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  const getLinkClasses = () => {
    if (isActive) {
      return scrolled 
        ? 'bg-gradient-to-r from-tropical-ocean-100 to-tropical-palm-100 text-tropical-ocean-700 font-semibold shadow-tropical' 
        : 'bg-white/20 text-white font-semibold backdrop-blur-sm';
    } else {
      return scrolled 
        ? 'text-tropical-ocean-600 hover:text-tropical-ocean-700 hover:bg-tropical-ocean-50' 
        : 'text-white/90 hover:text-white hover:bg-white/10';
    }
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick} 
      className={`
        px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center
        ${getLinkClasses()} 
        ${className}
      `}
    >
      {children}
    </Link>
  );
}

export default NavLink; 