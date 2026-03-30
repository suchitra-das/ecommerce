import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,

} from '@/components/ui/dialog'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {

    const [payment, setPayment] = useState({
        name: "Suchitra Das",
        card: "2345 1345 6345",
        cvv: "123"
    });

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handlePayment = () => {
        if (!payment.name || !payment.card || !payment.cvv) {
            alert("give correct");
            return;
        }

        setOpen(true);
    };

    const handleChange = (e: any) => {
        setPayment({
            ...payment,
            [e.target.name]: e.target.value
        });
    };

    const handleOk = () => {
        setOpen(false);
        navigate('/home');
    };

    return (
        <div className='flex flex-col items-center justify-center m-4 md:p-40'>

            <h2 className='text-xl font-semibold'>Payment Details</h2>

            <div className='border flex flex-col gap-4 p-6 mt-4 w-80 rounded-lg shadow-md'>
                <input
                    name="name"
                    value={payment.name}

                    onChange={handleChange}
                    placeholder="Name"
                    className='border p-2 rounded'
                />

                <input
                    name="card"
                    value={payment.card}
                    onChange={handleChange}
                    placeholder="Card Number"
                    className='border p-2 rounded'
                />

                <input
                    name="cvv"
                    value={payment.cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    className='border p-2 rounded'
                />



                <Button onClick={handlePayment}>
                    Payment Now
                </Button>

            </div>


            <Dialog open={open} onOpenChange={setOpen} >
                <DialogContent className=" items-center justify-center">

                    <DialogHeader>
                        <DialogTitle className="text-blue-600">
                            Payment Successful
                        </DialogTitle>
                        <Button onClick={handleOk} className='bg-blue-700 text-white'>
                            OK
                        </Button>

                    </DialogHeader>




                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Payment;