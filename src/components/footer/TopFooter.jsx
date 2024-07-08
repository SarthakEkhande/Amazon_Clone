import React from 'react'

const TopFooter = () => {
  return (
    <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-wrap">
       
        <div class="w-full md:w-1/4 px-4">
          <h2 class="font-bold text-lg mb-2">About Us</h2>
          <p class="text-sm">
            We are an e-commerce platform providing the best products at affordable prices.
          </p>
        </div>
        
      
        <div class="w-full md:w-1/4 px-4">
          <h2 class="font-bold text-lg mb-2">Customer Service</h2>
          <ul>
            <li class="text-sm mb-2"><a href="#" class="hover:underline">Help Center</a></li>
            <li class="text-sm mb-2"><a href="#" class="hover:underline">Returns</a></li>
            <li class="text-sm mb-2"><a href="#" class="hover:underline">Track Order</a></li>
            <li class="text-sm mb-2"><a href="#" class="hover:underline">Shipping Info</a></li>
          </ul>
        </div>

    
        <div class="w-full md:w-1/4 px-4">
          <h2 class="font-bold text-lg mb-2">Connect With Us</h2>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

       
        <div class="w-full md:w-1/4 px-4">
          <h2 class="font-bold text-lg mb-2">Contact Information</h2>
          <p class="text-sm mb-2">Email: support@amazonclone.com</p>
          <p class="text-sm mb-2">Phone: +123 456 7890</p>
          <p class="text-sm mb-2">Address: 123 E-commerce St, Online City, Web</p>
        </div>
      </div>

      
      <div class="mt-10 text-center">
        <p class="text-sm">&copy; 2024 Amazon Clone. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default TopFooter
