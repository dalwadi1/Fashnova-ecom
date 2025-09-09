import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice/auth.slice";

const Logout = ({ open, handleClose }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleConfirm = () => {
        dispatch(logout());
        navigate('/')
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="flex items-center flex-col justify-center min-h-[30vh]">
                <DialogHeader className="flex items-center justify-center">
                    <div className="bg-sky-50 shadow-sm rounded-full">
                        <img src="/assets/gif/logout.gif" alt="main-logo" className='h-18 w-19 rounded-full bg-transparent' />
                        {/* <LogOut size={40} /> */}
                    </div>
                    <DialogTitle className="text-center">Are you sure you want to logout?</DialogTitle>
                    <DialogDescription className='text-center'>
                        This will end your current session. You can login again anytime.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className=''>
                    <Button variant="outline" onClick={() => handleClose()} className='cursor-pointer'>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleConfirm} className='cursor-pointer'>
                        Logout
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Logout;
