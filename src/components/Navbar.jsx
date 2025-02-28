import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

/*
* @note:这里使用的是react-router-dom的Link组件。Link组件是React Router提供的一个组件，用于在React应用中创建导航链接。
* 这里主要注意sm:block hidden和sm:hidden。这两个类刚好相反，
* sm:block hidden表示当屏幕宽度大于640px时，显示该元素，否则隐藏。sm:hidden表示当屏幕宽度大于640px时，隐藏该元素，否则显示。
* 因为sm:的意思是对sm与以上的屏幕起作用
* 还有一个 flex 标签，就是一维的标签显示。
* 
*/

const Navbar = () => {
  const [active, setActive] = useState(''); // 当前活动的链接
  const [toggle, setToggle] = useState(false); // 是否显示菜单
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' 
        className='flex items-center gap-2'
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
        >
          <img 
          src={logo} 
          alt='logo' 
          className='w-9 h-9 object-contain' /> {/* 参数解释：w-9 h-9 设置图片的宽度为9px，高度为9px，object-contain 保持图片的原始尺寸 */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> {/* 参数解释：text-white 设置文本颜色为白色，text-[18px] 设置文本大小为18px，font-bold 设置文本为粗体，cursor-pointer 设置鼠标悬停时文本的样式 */}
            Poorwym &nbsp;
            <span className='sm:block hidden'>|&nbsp;Java Developer</span> {/* 参数解释：sm:block hidden 当屏幕宽度大于640px时，显示span标签，否则隐藏 ,这里sm是small的意思*/}
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'> {/* 参数解释：list-none 移除列表项的默认样式，flex 使列表项成为弹性容器，flex-row 使列表项水平排列，gap-10 设置列表项之间的间距 */}
          {
            navLinks.map((link) => (
              <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-white' // 如果当前链接是活动的，则设置为白色
                  : 'text-secondary' // 否则设置为次要颜色
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a 
                href={`#${link.id}`} 
                onClick={() => setActive(link.title)}>
                  {link.title}
                  </a> {/* 这里link是navlinks这个数组中的一个对象，id是链接的id，title是链接的标题 */}
                {/* 当用户点击链接时，会调用setActive函数，将当前链接的标题作为参数传递给setActive函数，这样就能实现点到的标题是白色，否则不是白色*/}
              </li>
            ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>{/* 参数解释：sm:hidden 当屏幕宽度小于640px时，显示div标签，flex 使div标签成为弹性容器，flex-1 使div标签占据剩余的宽度，justify-end 使div标签右对齐，items-center 使div标签垂直居中 */}
          <img 
          src={toggle ? close : menu} // 如果toggle为true，则显示close图片，否则显示menu图片
          alt='menu' 
          className='w-6 h-6 object-contain cursor-pointer' 
          onClick={() => setToggle(!toggle)} />
          <div
          className={`${
            !toggle ? 'hidden' : 'flex' // 如果toggle为false，则隐藏div标签，否则显示div标签
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sidebar` /*参数解释：p-6 设置div标签的内边距为6px，black-gradient 设置div标签的背景为黑色渐变，absolute 设置div标签为绝对定位，top-20 设置div标签的顶部距离为20px，right-0 设置div标签的右侧距离为0px，mx-4 设置div标签的左右外边距为4px，my-2 设置div标签的上下外边距为2px，min-w-[140px] 设置div标签的最小宽度为140px，z-10 设置div标签的堆叠顺序为10，rounded-xl 设置div标签的圆角为10px，sidebar 设置div标签的样式为侧边栏 */}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'> {/* 参数解释：list-none 移除列表项的默认样式，flex 使列表项成为弹性容器，justify-end 使列表项右对齐，items-start 使列表项顶部对齐，flex-col 使列表项垂直排列，gap-4 设置列表项之间的间距 */}
            {
            navLinks.map((link) => (
              <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-white' // 如果当前链接是活动的，则设置为白色
                  : 'text-secondary' // 否则设置为次要颜色
              } font-poppins font-medium cursor-pointer text-[16px]`}
              >
                <a 
                href={`#${link.id}`} 
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}>
                  {link.title}
                  </a> {/* 这里link是navlinks这个数组中的一个对象，id是链接的id，title是链接的标题 */}
                {/* 当用户点击链接时，会调用setActive函数，将当前链接的标题作为参数传递给setActive函数，这样就能实现点到的标题是白色，否则不是白色*/}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar