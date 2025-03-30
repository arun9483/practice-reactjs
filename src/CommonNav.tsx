import { Link } from 'react-router';

function CommonNav({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Link to="/">Go to Home</Link>
      </nav>
      {children}
    </div>
  );
}

export default CommonNav;
