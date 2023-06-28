import { CSSProperties } from 'react'

type Props = {
  title: string
  style?: CSSProperties
  onClick?: () => void
}

export default function SeeMoreButton({ title, style, onClick }: Props) {
  return (
    <button className='m-auto w-[296px] h-[56px] text-white text-base rounded see-more' style={style} onClick={onClick}>
      {title}
    </button>
  )
}
