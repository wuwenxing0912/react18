import { Icon } from '../../components/Icon'

type Props = {
  kind: Item['kind']
}
export const Tags: React.FC<Props> = (props) => {
  const tags = Array.from({ length: 199 })
  const { kind } = props
  return (
    <div>
      <ol grid grid-cols="[repeat(auto-fit,48px)]" gap-x-32px
        gap-y-16px py-16px px-8px justify-center>
        <li>
          <span w-48px h-48px block flex justify-center items-center
            rounded='50%' mb-8px text-24px b-1 b='#8F4CD7'>
            <Icon name='add' />
          </span>
        </li>
        {tags.map(tag => <li w-48px flex justify-center items-center flex-col>
          <span w-48px h-48px block flex justify-center items-center bg="#EFEFEF"
            rounded='50%' mb-8px text-24px b-1 b='#8F4CD7'>😊</span>
          <span text-12px text='#666'>美食</span>
        </li>)}
      </ol>
    </div>
  )
}
