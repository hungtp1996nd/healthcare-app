
import { NavLink } from 'react-router-dom'
import { ReactComponent as CloseIcon } from '../../assets/icon_close.svg'

type NavigationItemProps = {
  label: string
  path: string
}

type Props = {
  onClose: () => void
}

export const DropdownMenu: React.FC<Props> = ({ onClose }) => {
  

  const navItems: NavigationItemProps[] = [
    {
      label: '自分の記録',
      path: ``,
    },
    {
        label: '体重グラフ',
      path: '',
    },
    {
        label: '目標',
      path: '',
    },
    {
        label: '選択中のコース',
      path: '',
    },
    {
        label: 'コラム一覧',
      path: ``,
    },
    {
        label: '設定',
      path: '',
    },
  ]

  return (
    <div className='absolute top-[48px] right-0 w-[280px] h-[280px] flex flex-col'>
      <div className="w-full flex justify-end items-end">
        <div className="w-8 h-8 text-primary-500 bg-dark-500" onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className=" bg-light text-light w-full flex-1 flex flex-col gap-[1px]">
        {navItems.map(item => (
          <NavLink
            className="w-full h-[72px] bg-gray-400 pl-8 flex items-center text-lg font-light"
            key={item.label}
            to={`/${item.path}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}



