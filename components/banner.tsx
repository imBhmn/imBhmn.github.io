import cn from 'clsx'
import { XIcon } from 'nextra/icons'
import type { ReactElement } from 'react'
import { useConfig } from 'nextra-theme-docs';
import { renderComponent } from '../utils/render';

// export function Banner(): ReactElement | null {
//   const { banner } = useConfig()
//   if (!banner.text) {
//     return null
//   }
//   const hideBannerScript = `try{if(localStorage.getItem(${JSON.stringify(
//     banner.key
//   )})==='0'){document.body.classList.add('nextra-banner-hidden')}}catch(e){}`

//   return (
//     <>
//       <script dangerouslySetInnerHTML={{ __html: hideBannerScript }} />
//       <div
//         className={cn(
//           'nextra-banner-container nx-sticky nx-top-0 nx-z-20 nx-flex nx-items-center md:nx-relative',
//           'nx-h-[var(--nextra-banner-height)] [body.nextra-banner-hidden_&]:nx-hidden',
//           'nx-text-slate-50 dark:nx-text-white nx-bg-neutral-900 dark:nx-bg-[linear-gradient(1deg,#383838,#212121)]',
//           'nx-px-2 ltr:nx-pl-10 rtl:nx-pr-10 print:nx-hidden'
//         )}
//       >
//         <div className="nx-w-full nx-truncate nx-px-4 nx-text-center nx-font-medium nx-text-sm">
//           {renderComponent(banner.text)}
//         </div>
//         {banner.dismissible && (
//           <button
//             type="button"
//             aria-label="Dismiss banner"
//             className="nx-w-8 nx-h-8 nx-opacity-80 hover:nx-opacity-100"
//             onClick={() => {
//               try {
//                 localStorage.setItem(banner.key, '0')
//               } catch {
//                 /* ignore */
//               }
//               document.body.classList.add('nextra-banner-hidden')
//             }}
//           >
//             <XIcon className="nx-mx-auto nx-h-4 nx-w-4" />
//           </button>
//         )}
//       </div>
//     </>
//   )
// }


import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <div className=" w-full flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">210 آموزش فوق العاده اینجاست!</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          میدونستی میتونی  به بقیه افراد مثل خودت کمک کنی؟ اگر نمیدونی چجوری بیا  
        
        <a
          href="#"
          className="flex-none rounded-md bg-orange-400 px-3.5 py-1 mx-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
         راهنما 
        </a>
        رو بخون
        </p>

      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
