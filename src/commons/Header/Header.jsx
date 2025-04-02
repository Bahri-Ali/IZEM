import GooeyNav from "../Nav/Nav";
import logo from '../../assets/logo.png'
import './Header.css'
export default function Header() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <div className="Header">
        <img src={logo} alt=""  />
      <div style={{ height: "600px", position: "relative" }}>
        <GooeyNav
          items={items}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>
    </div>
  );
}
