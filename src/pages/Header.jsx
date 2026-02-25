import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Insights", path: "/insights" },
  { name: "Services" }, // no path → not clickable
  { name: "Contact", path: "/contact" },
];

const servicesDropdown = [
  { name: "HVAC", path: "/service1" },
  { name: "Contracting", path: "/service2" },
  { name: "ElectroMechanical", path: "/service3" },
  { name: "Finishing", path: "/service4" },
  { name: "Interior Works", path: "/service5" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = !isHome || scrolled || open ? "text-black" : "text-white";

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-[font4]">

      {/* Glass Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-700"
        style={{
          opacity: scrolled || !isHome ? 1 : 0,
          transform: scrolled || !isHome ? "translateY(0)" : "translateY(-100%)",
          backdropFilter: "blur(18px) saturate(140%)",
          WebkitBackdropFilter: "blur(18px) saturate(140%)",
          background: `
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.35) 0%,
              rgba(255,255,255,0.18) 60%,
              rgba(255,255,255,0.05) 100%
            )
          `,
          borderBottom: "1px solid rgba(0,0,0,0.05)"
        }}
      />

      {/* Header Content */}
      <div className={`relative z-20 max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 ${textColor}`}>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-base md:text-lg font-medium">GrapsTech</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 text-[12px] uppercase tracking-[0.18em]">

          {navItems.map((item) =>
            item.name === "Services" ? (

              /* SERVICES DROPDOWN */
              <div key={item.name} className="relative group">

                {/* Not clickable */}
                <span className="cursor-pointer transition hover:opacity-60">
                  {item.name}
                </span>

                {/* Dropdown */}
                <div
                  className="
                    absolute left-0 top-full pt-3
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                  "
                >
                  {/* This wrapper prevents hover gap issue */}
                  <div className="bg-white text-black shadow-lg rounded-md overflow-hidden min-w-45">
                    {servicesDropdown.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className="transition hover:opacity-60"
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xs uppercase tracking-widest"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`relative z-30 md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 bg-black/60 text-white" : "max-h-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-6 text-sm uppercase tracking-widest">

          {navItems.map((item) =>
            item.name === "Services" ? (
              <div key={item.name} className="flex flex-col gap-2">
                <span className="font-semibold">Services</span>
                {servicesDropdown.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    onClick={() => setOpen(false)}
                    className="pl-4 hover:opacity-60"
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="hover:opacity-60"
              >
                {item.name}
              </NavLink>
            )
          )}

        </div>
      </div>

    </header>
  );
};

export default Header;