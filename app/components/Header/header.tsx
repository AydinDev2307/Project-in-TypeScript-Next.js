'use client';

import { useCartStore } from '@/app/store/cart';
import { useFavoriteStore } from '@/app/store/favorite';
import { useSearchStore } from '@/app/store/search';

const Header = () => {
  const { favorites } = useFavoriteStore();
  const { cart } = useCartStore();
  const { search, setSearch } = useSearchStore();

  const favCount = favorites.length;
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="w-full h-[100px] bg-gray-500">
      <nav className="w-[1600px] h-[100px] container mx-auto flex items-center justify-between">
        <h1 className="text-[36px] font-[700] text-white">AD Market</h1>
        <div>
          <input
            className="border border-white w-[500px] h-[40px] rounded-[30px] shadow-sm p-[20px] text-white focus:outline-none shadow-white"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-[20px]">
          <div>
            {favCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 rounded-full">
                {favCount}
              </span>
            )}
          </div>
          <div>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
