import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '@/features/cart/cartSlice';
import { EyeIcon, EyeOffIcon, TrashIcon } from 'lucide-react';

const FloatingSelectionTray = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDetailView, setIsDetailView] = useState(false);

  if (cartItems.length === 0) return null;

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 w-auto rounded-2xl border border-border-primary bg-white shadow-xl">
      <div className="px-5 py-4 border-b border-border-primary flex flex-col items-center justify-between">
        <p className="font-sora text-sm font-semibold text-sub-heading">
          {cartItems.length} {cartItems.length === 1 ? 'project' : 'projects'} selected
        </p>
        <button
          className="text-blue-500 text-xs flex items-center gap-1"
          onClick={() => setIsDetailView((prev) => !prev)}
        >
          {isDetailView ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
        </button>
      </div>

      {isDetailView && (
        <ul className="px-5 py-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center gap-2 mb-2">
              <span className="text-lg text-sub-heading font-bold">{item.name}</span>
              <button
                className="text-red-500 text-xs flex items-center gap-1"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <TrashIcon size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="px-5 py-4 border-t border-border-primary flex items-center justify-center">
        <button
          className="px-4 py-2 rounded-md border border-btext-1-base text-btext-1-base font-display text-sm font-bold"
          onClick={() => navigate('/user/invests')}
        >
          Continue
        </button>
      </div>
    </aside>
  );
};

export default FloatingSelectionTray;
