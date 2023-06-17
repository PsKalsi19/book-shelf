/* eslint-disable react/prop-types */
import { Fragment, useContext } from 'react'
import {  Popover, Transition } from '@headlessui/react'
import status from '../../constants/Status'
import { ProductContext } from '../../context/ProductProvider'



const StatusMenu = ({product}) => {
    const {productStateDispatch}=useContext(ProductContext)
    const changeBookStatus=(val)=>{
        productStateDispatch({type:'CHANGE_STATUS',payload:{id:product.id,status:val}})
    }
    return (
        <Popover className="relative">
            <Popover.Button className="p-2 bg-gray-400 rounded-full"><svg fill="none" className='w-6 h-6 ' stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="absolute">
                    <div className="z-20 flex flex-col bg-orange-200 border border-gray-200 rounded-md backdrop-blur-lg w-max">
                        {status.map(({ value, title }) => (
                            /* Use the `active` state to conditionally style the active item. */
                            <Popover.Button  key={value} as={Fragment}>
                                <button onClick={()=>changeBookStatus(value)} type='button'
                                    className={`${product.currentStatus === value ? 'bg-orange-300  text-white' : 'inset-x-0 text-gray-700'
                                        } px-2 py-1 text-left text-sm`}
                                >
                                    {title}
                                </button>
                            </Popover.Button>
                        ))}
                          <Popover.Button as={Fragment}>
                                <button onClick={()=>changeBookStatus("none")} type='button'
                                    className={`${product.currentStatus === "none" ? 'bg-orange-300  text-white' : 'inset-x-0 text-gray-700'
                                        } px-2 py-1 text-left text-sm`}
                                >
                                    None
                                </button>
                            </Popover.Button>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default StatusMenu