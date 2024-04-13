// create a react component button
export const Button = ({ children, className = "", ...props }: { children: React.ReactNode; } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={`px-3 rounded-full border text-white hover:bg-neutral-700 ${className}`}
  >
    {children}
  </button>
);