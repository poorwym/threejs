import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'

import { ComputersCanvas } from './canvas'

const Hero = () => {
  /* 
  *@note:这里的设计模式是一个常见的布局技巧：
  *  外层 section 使用 relative，创建一个定位上下文
  *  内层 div 使用 absolute，相对于 section 进行定位 */
  return (
    <section className='relative w-full h-screen mx-auto'>{/* 参数解释：relative 使元素成为相对定位，w-full 使元素占据整个宽度，h-screen 使元素占据整个高度，mx-auto 使元素水平居中 */}
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto
      flex flex-row items-start gap-5`}>{/* 参数解释：inset-0 使元素占据整个宽度，top-[120px] 使元素距离顶部120px，max-w-7xl 使元素最大宽度为7xl，mx-auto 使元素水平居中, flex-row 使元素水平排列，items-start 使元素顶部对齐，gap-5 使元素之间有5px的间距 */}
        {/* 左边那个奇怪的装饰符 */}
        <div className='flex flex-col justify-center items-center mt-5'>{/* 参数解释：flex-col 使元素垂直排列，justify-center 使元素水平居中，items-center 使元素垂直居中，mt-5 使元素距离顶部5px */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' /> {/* 参数解释：w-5 使元素宽度为5px，h-5 使元素高度为5px，rounded-full 使元素变成圆形，bg-[#915eff] 使元素背景颜色为#915eff */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> {/* 参数解释：w-1 使元素宽度为1px，sm:h-80 使元素高度为80px，h-40 使元素高度为40px，violet-gradient 使元素背景颜色为紫色渐变 */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Alex&nbsp;Wu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a GIS Developer. <br className='sm:hidden'/>
            I develop web applications for GIS. <br />
            I'm SB. Only SB study GIS.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 
      bottom-32 w-full flex justify-center items-center'> {/* 参数解释：absolute 使元素相对于父元素定位，xs:bottom-10 使元素距离底部10px，bottom-32 使元素距离底部32px，w-full 使元素占据整个宽度，flex 使元素水平排列，justify-center 使元素水平居中，items-center 使元素垂直居中 */}
        <a href='#about'>
        </a>
      </div>
    </section>
  )
}

export default Hero 