import Image from "next/image";

export default function Home() {
  return (

    <main className="bg-black text-white font-sans">

      <div className="flex flex-col md:flex-row h-screen  w-7xl content-center">
        
        <main className="flex-1 p-4 md:p-8 bg-black">
          <h1 className="text-3xl font-bold text-purple-600 mb-6">Most Expensive Products</h1>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <div className="bg-purple-700 p-6 rounded-lg shadow-xl">
              <img src="product-image.jpg" alt="Product Image" className="w-full h-40 object-cover rounded-lg mb-4"/>
                <h3 className="text-2xl font-semibold text-white">Product Name</h3>
                <p className="text-lg text-gray-300">Price: $999.99</p>
                <p className="text-sm text-gray-400 mt-2">This is the most expensive product in the store, featuring top-of-the-line features.</p>
            </div>

            <div className="bg-purple-700 p-6 rounded-lg shadow-xl">
              <img src="product-image.jpg" alt="Product Image" className="w-full h-40 object-cover rounded-lg mb-4"/>
                <h3 className="text-2xl font-semibold text-white">Product Name</h3>
                <p className="text-lg text-gray-300">Price: $799.99</p>
                <p className="text-sm text-gray-400 mt-2">A premium product with high-quality materials and advanced technology.</p>
            </div>
            <div className="bg-purple-700 p-6 rounded-lg shadow-xl">
              <img src="product-image.jpg" alt="Product Image" className="w-full h-40 object-cover rounded-lg mb-4"/>
                <h3 className="text-2xl font-semibold text-white">Product Name</h3>
                <p className="text-lg text-gray-300">Price: $599.99</p>
                <p className="text-sm text-gray-400 mt-2">An expensive product designed for the discerning customer.</p>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
