const Footer = () => {
  return (
    <footer className="p-10 bg-neutral text-neutral-content flex flex-col md:flex-row justify-between items-center gap-6">
      <aside>
        <p className="text-xl font-bold text-orange-400">SummerCart</p>
        <p>Providing quality seasonal products since 2026</p>
      </aside> 
      
      <nav className="flex flex-wrap gap-4 text-sm uppercase font-semibold">
        <span>Sunglasses</span>
        <span>Outfits</span>
        <span>Skincare</span>
        <span>Accessories</span>
      </nav>

      <div className="text-xs opacity-60">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;