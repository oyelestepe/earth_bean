import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../store/cartSlice";
import Navbar from "./Navbar";

function Cart() {
  const allProducts = useSelector((state) => state.cart.products);
  const products = useMemo(
    () => allProducts.filter((p) => p.quantity > 0),
    [allProducts]
  );
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const handleDecrease = (product) => {
    if (product.quantity === 1) {
      setProductToRemove(product);
      setShowModal(true);
    } else {
      dispatch(updateQuantity({ id: product.id, delta: -1 }));
    }
  };

  const confirmRemove = () => {
    if (productToRemove) {
      dispatch(updateQuantity({ id: productToRemove.id, delta: -1 }));
      setShowModal(false);
      setProductToRemove(null);
    }
  };

  const cancelRemove = () => {
    setShowModal(false);
    setProductToRemove(null);
  };

  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <>
      <Navbar />

      {/* Sayfa ortalama */}
      <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9]">
        <div className="max-w-[650px] w-full mx-auto bg-white rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-8 py-10">
          <h1 className="text-center mb-8 text-[2.2rem] font-bold text-[#2B2B2B]">
            Your Cart
          </h1>

          <div className="flex flex-col gap-8 mb-10">
            {products.length === 0 && (
              <p className="text-center text-[#555] text-lg">
                Your cart is empty.
              </p>
            )}

            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-8 border-b border-[#eee] pb-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] object-cover"
                />

                <div className="flex-1">
                  <h3 className="mb-2 text-[1.25rem] font-semibold text-[#73472e]">
                    {product.name}
                  </h3>
                  <p className="mb-3 text-[#555] text-lg">
                    ${product.price.toFixed(2)}
                  </p>

                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrease(product)}
                      className="bg-[#846c3a] text-white border-none rounded-full w-9 h-9 text-[1.2rem] cursor-pointer transition-colors hover:bg-[#73472e] flex items-center justify-center"
                    >
                      −
                    </button>

                    <span className="mx-4 text-[#2B2B2B] text-lg">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: product.id, delta: 1 }))
                      }
                      className="bg-[#846c3a] text-white border-none rounded-full w-9 h-9 text-[1.2rem] cursor-pointer transition-colors hover:bg-[#73472e] flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-right mt-6 text-[#2B2B2B] text-xl font-semibold">
            Total: ${total.toFixed(2)}
          </h2>

          <button
            disabled={products.length === 0}
            className="w-full py-[14px] mt-6 bg-[#73472e] text-white border-none rounded-full text-[1.15rem] font-bold cursor-pointer transition-colors hover:bg-[#846c3a] disabled:opacity-60"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-[2000]">
          <div className="bg-white px-6 py-8 rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] min-w-[300px] text-center">
            <p className="text-[#2B2B2B]">
              Remove <b>{productToRemove?.name}</b> from cart?
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={confirmRemove}
                className="bg-[#73472e] text-white border-none rounded-md px-5 py-2 font-semibold cursor-pointer transition-colors hover:bg-[#846c3a]"
              >
                Yes
              </button>
              <button
                onClick={cancelRemove}
                className="bg-[#eee] text-[#333] border-none rounded-md px-5 py-2 font-semibold cursor-pointer hover:bg-[#ddd]"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;