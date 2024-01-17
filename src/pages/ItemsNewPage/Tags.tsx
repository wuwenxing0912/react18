type Props = {
  kind: Item['kind']
}
export const Tags: React.FC<Props> = (props) => {
  const tags = Array.from({ length: 199 })
  const { kind } = props
  console.log(kind)
  return (
    <div>
      <ol grid grid-cols="[repeat(auto-fit,48px)]" gap-x-32px
        gap-y-16px py-16px px-8px justify-center>
        {tags.map(tag => <li w-48px h-48px b-1 b-blue flex justify-center items-center>😊</li>)}
      </ol>
    </div>
  )
}