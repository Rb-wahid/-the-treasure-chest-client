import React from "react";

const Blogs = () => {
  return (
    <div className="md:max-w-4xl md:mx-auto md:mt-12">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-lg font-semibold text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Difference between JavaScript and Node.js
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5 text-justify">
              <h2 className="font-semibold underline underline-offset-4 mb-2 text-blue-600">
                JavaScript
              </h2>
              <p className="indent-6">
                Javascript is a high-level programming language. It is
                lightweight and run in the browsers. Js used for client side
                development. It can update and change both HTML and CSS using
                DOM. And also can calculate, manipulate and validate data.
              </p>
              <br />
              <h2 className="font-semibold underline underline-offset-4 mb-2 text-blue-600">
                Node.js
              </h2>
              <p className=" indent-6">
                Node.js is a Javascript runtime environment . It run JS code
                outside of browser using V8 engine. It is mostly used on the
                server-side development. Node.js provides a lot of modules thats
                help to develop full stack web application.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item border-l-0 border-r-0  rounded-none bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="flush-headingThree">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-lg font-semibold text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Differences between SQL and NOSQL databases.
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h2 className="text-center font-semibold border-b">SQL</h2>
                  <div>
                    <p className=" border-r border-b py-2 px-3">
                      SQL databases are relational
                    </p>
                    <p className=" bg-gray-100  border-r border-b py-2 px-3">
                      SQL databases use structured query language and have a
                      predefined schema.
                    </p>
                    <p className=" border-r border-b py-2 px-3">
                      SQL databases are vertically scalable
                    </p>
                    <p className=" bg-gray-100  border-r border-b py-5 px-3">
                      SQL databases are table-based
                    </p>
                    <p className="border-r border-b py-2 px-3">
                      SQL databases are better for multi-row transactions
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-center font-semibold border-b">NOSQL</h2>
                  <div>
                    <p className=" border-r border-b py-2 px-3">
                      NoSQL databases are non-relational.
                    </p>
                    <p className=" bg-gray-100  border-r border-b py-2 px-3">
                      NoSQL databases have dynamic schemas for unstructured
                      data.
                    </p>
                    <p className=" border-r border-b py-2 px-3">
                      NoSQL databases are horizontally scalable.
                    </p>
                    <p className=" bg-gray-100  border-r border-b py-2 px-3">
                      NoSQL databases are document, key-value, graph, or
                      wide-column stores.
                    </p>
                    <p className="border-r border-b py-2 px-3">
                      NoSQL is better for unstructured data like documents or
                      JSON.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="flush-headingFour">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-lg font-semibold text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              What is the purpose of jwt and how does it work
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5 indent-6 text-justify">
              <p>
                A JWT is a mechanism to verify the owner of some JSON data
                between two parties securely — a client and a server. It’s an
                encoded, URL-safe string that can contain an unlimited amount of
                data and is cryptographically signed. It is mostly used for
                authentication, authorization, and information exchange.
              </p>{" "}
              <br />
              <p>
                The token is mainly composed of header, payload, signature.
                These three parts are separated by dots(.). JWT defines the
                structure of information we are sending from one party to the
                another, and it comes in two forms – Serialized, Deserialized.
                The Serialized approach is mainly used to transfer the data
                through the network with each request and response. While the
                deserialized approach is used to read and write data to the web
                token.
              </p>
            </div>
          </div>
        </div>
        {/* 
        
          <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="flush-headingTwo">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              When should you use nodejs and when should you use mongodb
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse border-0 collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        
         */}
      </div>
    </div>
  );
};

export default Blogs;
