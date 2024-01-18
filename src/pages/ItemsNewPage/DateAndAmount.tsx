import { Icon } from '../../components/Icon'
import { usePopup } from '../../hooks/usePopup'
import { Datepicker } from '../../components/Datepicker'

type Props = {
  className?: string
}
export const DateAndAmount: React.FC<Props> = (props) => {
  const { className } = props
  const { toggle, popup } = usePopup(true, <Datepicker />)
  return (
    <>
      <div className={className}>
        <div flex items-center px-16px pt-15px pb-16px border-t-1px border-t="#ddd" gap-x-8px>
          <span flex items-center gap-x-8px onClick={toggle}>
            <Icon name='calendar' className='h-24px w-24px grow-0 shrink-0' />
            <span grow-0 shrink-0 text-12px color="#999">2024-01-18</span>
          </span>
          <span text-right grow-1 shrink-1 color="#53A867">123456789.99</span>
        </div>
        <div grid grid-rows="[repeat(4,56px)]" grid-cols="[repeat(4,1fr)]"
          children-bg-white children-b-none bg="#ddd" gap-1px py-1px>
          <button row-start-1 col-start-1 row-end-2 col-end-2>1</button>
          <button row-start-1 col-start-2 row-end-2 col-end-3>2</button>
          <button row-start-1 col-start-3 row-end-2 col-end-4>3</button>
          <button row-start-2 col-start-1 row-end-3 col-end-2>4</button>
          <button row-start-2 col-start-2 row-end-3 col-end-3>5</button>
          <button row-start-2 col-start-3 row-end-3 col-end-4>6</button>
          <button row-start-3 col-start-1 row-end-4 col-end-2>7</button>
          <button row-start-3 col-start-2 row-end-4 col-end-3>8</button>
          <button row-start-3 col-start-3 row-end-4 col-end-4>9</button>
          <button row-start-4 col-start-1 row-end-5 col-end-3>0</button>
          <button row-start-4 col-start-3 row-end-5 col-end-4>.</button>
          <button row-start-1 col-start-4 row-end-3 col-end-5>清空</button>
          <button row-start-3 col-start-4 row-end-5 col-end-5>提交</button>
        </div>
      </div>
      {popup}
    </>
  )
}
