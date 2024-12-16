import React from "react";

function About() {
  return (
    <div>
    <div class="bg-gray-50 px-4 py-10 font-[sans-serif]">
      <h2 class="text-gray-800 text-3xl font-bold mb-14 text-center">
        Application Metrics
      </h2>
      <div class="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div class="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
          <h3 class="text-gray-800 text-5xl font-extrabold">
            5.4<span class="text-blue-600">M+</span>
          </h3>
          <div>
            <p class="text-gray-800 text-base font-bold">Total Users</p>
            <p class="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis
              turpis vitae ligula.
            </p>
          </div>
        </div>
        <div class="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
          <h3 class="text-gray-800 text-5xl font-extrabold">
            $80<span class="text-blue-600">K</span>
          </h3>
          <div>
            <p class="text-gray-800 text-base font-bold">Revenue</p>
            <p class="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis
              turpis vitae ligula.
            </p>
          </div>
        </div>
        <div class="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
          <h3 class="text-gray-800 text-5xl font-extrabold">
            100<span class="text-blue-600">K</span>
          </h3>
          <div>
            <p class="text-gray-800 text-base font-bold">Engagement</p>
            <p class="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis
              turpis vitae ligula.
            </p>
          </div>
        </div>
        <div class="bg-white flex gap-6 max-lg:flex-col rounded-2xl md:p-8 p-6 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.2)]">
          <h3 class="text-gray-800 text-5xl font-extrabold">
            99.9<span class="text-blue-600">%</span>
          </h3>
          <div>
            <p class="text-gray-800 text-base font-bold">Server Uptime</p>
            <p class="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis
              turpis vitae ligula.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="font-sans bg-white p-4">
      <div class="md:max-w-5xl max-w-xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="text-left">
            <h2 class="text-gray-800 text-2xl font-bold mb-4">Elevate Your Online Presence</h2>
            <p class="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
            <p class="text-sm text-gray-500">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
            <button type="button" class="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Get started</button>
          </div>
          <div class="max-h-72">
            <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" class="rounded-lg object-contain w-full h-full" />
          </div>
        </div>
        <hr class="border-gray-300 my-12" />
        <div class="grid md:grid-cols-2 gap-12">
          <div class="max-h-72 max-md:order-1">
            <img src="https://readymadeui.com/analtsis.webp" alt="Placeholder Image" class="rounded-lg object-contain w-full h-full" />
          </div>
          <div class="text-left">
            <h2 class="text-gray-800 text-2xl font-bold mb-4">Your Success, Our Commitment</h2>
            <p class="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
            <p class="text-sm text-gray-500">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
            <button type="button" class="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Get started</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
