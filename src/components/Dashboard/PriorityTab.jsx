const PriorityTab = ({priority}) => {
    const color = priority == 'high' ? 'bg-red-500' : (priority == 'medium' ? 'bg-yellow-500' : 'bg-green-500');
    const text = priority == 'medium' ? 'text-black' : 'text-white';
  return (
    <div className={`${color} ${text} px-2 rounded-sm font-medium`}>{priority}</div>
  )
}

export default PriorityTab
