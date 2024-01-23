import { useNavigate, useParams } from 'react-router-dom'
import { Gradient } from '../components/Gradient'
import { TopNav } from '../components/TopNav'
import { useAjax } from '../lib/ajax'
import { BackIcon } from '../components/BackIcon'
import { TagForm } from './TagsNewPage/TagForm'

export const TagsEditPage: React.FC = () => {
  const { del } = useAjax({ showLoading: true, handleError: true })
  const { id } = useParams()
  const nav = useNavigate()
  const confirm = (func: () => void) => () => {
    const result = window.confirm('确定要删除该标签吗？')
    if (!result) { return }
    func()
  }
  const onDelete = confirm(async () => {
    if (!id) { return }
    await del(`/api/v1/tags/${id}`).catch(() => { window.alert('删除失败'); throw new Error('删除失败') })
    window.alert('删除成功')
    nav('/items/new')
  })
  return (
    <div>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="查看标签" icon={<BackIcon />} />
      </Gradient>
      <TagForm type="edit" />
      <div px-16px p-b-32px>
        <button j-btn bg="#E10505" onClick={onDelete}>删除</button>
      </div>
    </div>
  )
}
