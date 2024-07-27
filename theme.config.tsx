import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import 'nextra/normalize-pages'
import { ThemeSwitch } from 'nextra-theme-docs'
import Banner from './components/banner'

const config: DocsThemeConfig = {
  logo: <span style={{fontSize:24}}>🥕</span>,
  direction: 'rtl',
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
 
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
    component: <Footer />,
  },
  primaryHue:40,
  primarySaturation:88,

  navbar:{
    component: Navbar,
    extraContent: <ThemeSwitch lite={true}/>,
    
  
  },search:{
    placeholder:"دنبال چی میگردی؟"
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s – هویج'
    }
  },
  // banner:{
  //   dismissible:false,
  //   key:"join",
  //   text:(
  //     <div className='p-2'>
  //     <p className="text-sm leading-6 text-gray-50 ">
  //         <strong className="font-semibold">210 آموزش فوق العاده اینجاست!</strong>
  //         <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
  //           <circle cx={1} cy={1} r={1} />
  //         </svg>
  //         میدونستی میتونی  به بقیه افراد مثل خودت کمک کنی؟ اگر نمیدونی چجوری بیا  
        
  //       <a
  //         href="#"
  //         className="flex-none rounded-md bg-orange-400 px-3.5 py-1 mx-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
  //       >
  //        راهنما 
  //       </a>
  //       رو بخون
  //       </p>
  //       </div>
  //   )
    
  // },
  sidebar:{
    toggleButton: true,
    
  },
  toc:{
    title:"توی این صفحه به :"
  },
  editLink:{
    text:"وایرایش صفحه"
  },
  feedback:{
    content:"سوال، نظر یا انتقادی داری؟ بهمون بگو!",
  
    
  },  themeSwitch: {
    useOptions() {
      return {
        light: 'روشن',
        dark: 'تاریک',
        system: 'بر اساس سیستم '
      }
    }
  }
  
}

export default config
