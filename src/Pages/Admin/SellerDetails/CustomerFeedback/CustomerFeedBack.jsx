import CustomerReview from '../CustomerFeedback/CustomerReview'
import CustomerComplain from '../CustomerFeedback/CustomerComplain'

const CustomerFeedBack = () => {
    return (
        <div className='grid grid-cols-2 gap-2 '>
            <CustomerReview></CustomerReview>
            <CustomerComplain></CustomerComplain>
        </div>
    );
};

export default CustomerFeedBack;