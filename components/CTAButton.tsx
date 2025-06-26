import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const CTAButton = ({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}: CTAButtonProps) => {
  const baseClasses =
    'font-oswald font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center';

  const variantClasses = {
    primary:
      'bg-safety-yellow text-steel-blue hover:bg-yellow-400 focus:ring-safety-yellow',
    secondary:
      'bg-steel-blue text-white hover:bg-blue-800 focus:ring-steel-blue',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded',
    md: 'px-6 py-3 text-base rounded-md',
    lg: 'px-8 py-4 text-lg rounded-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default CTAButton;
