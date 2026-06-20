const PriorityTab = ({priority}) => {
    const color = priority == 'development' ? 'bg-red-500' : 'bg-green-500';
  return (
    <div className={`${color}  px-2 rounded-sm font-medium`}>{priority}</div>
  )
}

export default PriorityTab
