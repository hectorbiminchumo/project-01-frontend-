import React, { useEffect, useContext } from "react";



import { Link } from "react-router-dom";

export default function Books() {
  // ESTADO GLOBAL





  // ESTADO LOCAL

  // EL MOMENTO EN QUE SE EJECUTA EL USE EFFECT ES DESPUÉS DEL RETURN.

  return (
    <h1>Hello books</h1>
  )
  // return (
  //   <>
  //     {currentUser.admin ? (
  //       <>
  //         <div class="relative">
  //           <Link to="/books/crear">
  //             <button
  //               type="button"
  //               id="button-create"
  //               class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#557C55] hover:bg-[#A6CF98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
  //             >
  //               Create Book
  //             </button>
  //           </Link>
  //         </div>
  //       </>
  //     ) : (
  //       <></>
  //     )}

  //     <div className="bg-white">
  //       <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  //         <h2 className="sr-only">Books</h2>

  //         <h1 className="text-5xl font-sans font-bold">New Books</h1>

  //         <div className="mx-px  grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-5 gap-x-6 mt-10">
  //           {books.map((element) => {
  //             return (
  //               <>
  //                 <div className="group relative bg-white  rounded-lg flex flex-col overflow-hidden">
  //                   <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
  //                     <Link to={`/books/${element._id}`}>
  //                       <img
  //                         src={element.image}
  //                         alt="imagen de libro"
  //                         className="w-full h-full object-contain h-100 w-200"
  //                       />
  //                     </Link>
  //                   </div>

  //                   <div className="flex-1 p-4 space-y-2 flex flex-col">
  //                     <h3 className=" text-center text-sm font-medium text-gray-900 ">
  //                       <Link to={`/books/${element._id}`}>
  //                         <span
  //                           aria-hidden="true"
  //                           className=" absolute inset-0"
  //                         ></span>
  //                         {element.title}
  //                       </Link>
  //                     </h3>
  //                     </div> <div>
  //                     <div className="flex-1 flex flex-col justify-end">
  //                       <p className="text-center text-sm italic text-gray-500">
  //                         {element.condition}
  //                       </p>

  //                       <p className="text-center text-base font-medium text-gray-900">
  //                         ${element.price} USD
  //                       </p>
  //                       <div class="image-cart">
                          
  //                           <img src="https://westwooddigitalmarketing.com/wp-content/uploads/2013/04/517f8532e771cc40edabf236946d4be7d84a9_640.jpg" />
                          
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </>
  //             );
  //           })}
  //         </div>
  //         <div className="mx-px  grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-6 gap-x-6"></div>
  //       </div>
  //     </div>
  //   </>
  // );
}
