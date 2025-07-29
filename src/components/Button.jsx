import { Link } from 'react-router-dom'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  to, 
  href, 
  onClick, 
  type = 'button',
  disabled = false,
  loading = false,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-4 text-xl'
  }
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg',
    white: 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-500 shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const handleClick = (e) => {
    // Scroll to top of the page for navigation
    if (to || href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  if (loading) {
    return (
      <button 
        className={`${classes} cursor-not-allowed`} 
        disabled 
        {...props}
      >
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
      </button>
    )
  }

  if (to) {
    return (
      <Link 
        to={to} 
        className={classes}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 