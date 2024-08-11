
const Button = ({ label }:{label: string}) => {
  return (
    <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-[#F2FFE9] to-[#F2FFE9] bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:from-gray-700 hover:to-gray-700 hover:text-white"> 
         {label}
    </button>
  )
}

export default Button