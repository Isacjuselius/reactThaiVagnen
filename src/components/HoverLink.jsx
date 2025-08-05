import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function HoverLink({ to, children }) {
  const [hover, setHover] = useState(false);

  return (
    <NavLink
      to={to}
      className={hover ? "hovered" : ""}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </NavLink>
  );
}

export default HoverLink;