import { useSelector } from 'react-redux';
import { selectTotalQuantity, selectTotalPrice } from '../store/cartSlice';

export default function CartSummary() {
    const totalItems = useSelector(selectTotalQuantity);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <div className='bg-white p-4 rounded-lg shadow mb-6'>
            <h3 className='font-bold text-gray-800'>Your Cart</h3>
            <p className='text-gray-600 mt-1'>
                {totalItems} item{totalItems !== 1 ? 's' : ''} • ${totalPrice.toFixed(2)}
            </p>

        </div>
    )
}