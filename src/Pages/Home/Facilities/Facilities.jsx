import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Facilities = () => {
  return (
    <div>
        <section className="md:mt-20 grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto text-justify border-y-2 py-5">
          <div className="">
            <MdOutlineLocalShipping className="w-[50px] h-[50px] text-[#0E4194] mx-auto" />
            <h3 className="text-center text-xl">Free Shipping</h3>
            <p>Free nationwide delivery on order above $250.</p>
          </div>
          <div className="">
            <img
              className="mx-auto"
              src="https://boibichitra.com/public/img/OpzIb06307.png"
              alt=""
            />
            <h3 className="text-center text-xl">
              7 Days Return / Exchange Policy{" "}
            </h3>
            <p className="text-left ">
              Simply return or exchange any products within 7 days from the date of
              purchased.
            </p>
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://boibichitra.com/public/img/kbUGF06407.png"
              alt=""
            />
            <h3 className="text-center text-xl">Secured Online Payment</h3>
            <p>
              We accept all major credit & debit cards, mobile and internet banking.
            </p>
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://boibichitra.com/public/img/eG47g06307.png"
              alt=""
            />
            <h3 className="text-center text-xl">Cash on Delivery</h3>
            <p>Pay in cash upon receiving the products.</p>
          </div>
          <div>
            <BiSupport className="w-[50px] h-[50px] text-[#0E4194] mx-auto" />
            <h3 className="text-center text-xl">Online Support</h3>
            <p>Saturday – Thursday: 10 AM - 6 PM every day.</p>
          </div>
          </section>
          <hr />
    </div>
  );
};

export default Facilities;
