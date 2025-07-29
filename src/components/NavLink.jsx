import { Link, useLocation } from 'react-router-dom';

function NavLink({ to, children, onClick, className = "" }) {
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

  return (
    <Link 
      to={to} 
      onClick={handleClick} 
      className={`
        px-4 py-2 rounded-lg font-medium transition-all duration-300
        ${isActive 
          ? 'bg-blue-100 text-blue-700 font-semibold' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
        } 
        ${className}
      `}
    >
      {children}
    </Link>
  );
}

export default NavLink; 