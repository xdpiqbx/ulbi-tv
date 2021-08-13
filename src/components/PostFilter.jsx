import MyInput from "./UI/input/MyInput"
import MySelect from "./UI/select/MySelect"

const PostFilter = ({filter, setFilter}) => {
  return(
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.searchQuery}
        onChange={(e) => setFilter({...filter, searchQuery: e.target.value.toLowerCase()})}
      />
      <MySelect
        options={[
          {
            value: 'title',
            title: 'По названию',
          },
          {
            value: 'body',
            title: 'По описанию',
          },
        ]}
        defaultValue="Сортировка по"
        value={filter.selectedSort}
        onChange={selectedSort =>setFilter({...filter, selectedSort})}
      />
    </div>
  )
}
export default PostFilter