'use client';

import { Drawer } from 'vaul';

export function Hero() {
  return (
    <div className="relative h-[200vh]">
      <div
        aria-hidden
        className="absolute top-0 w-[1000px] z-10 h-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#A4A4A3, transparent 50%)' }}
      />
      <svg
        className="absolute pointer-events-none inset-0 h-full w-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
        aria-hidden
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>
      <div className="max-w-2xl mx-auto text-center pt-64">
        <div className="flex flex-col relative">
          <h1 className="text-7xl font-semibold mb-4 relative">Vaul</h1>
          <p className="text-gray-600 text-xl">Drawer component for React.</p>
        </div>
        <div className="flex gap-4 justify-center mt-6">
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <button
                type="button"
                className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Open Drawer
              </button>
            </Drawer.Trigger>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Portal>
              <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[50vh] rounded-t-[10px]">
                <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
                  <input className="border border-gray-400 my-8" placeholder="Input" />

                  <input className="border border-gray-400 my-8" placeholder="Input" />
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
          <a
            href="https://github.com/emilkowalski/vaul"
            className="font-semibold text-sm px-4 py-2.5 hover:bg-gray-100 rounded-full"
            target="_blank"
          >
            GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
