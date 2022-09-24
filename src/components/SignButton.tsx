import { useState } from 'react';
import { Button, Modal } from "flowbite-react";
import { signIn } from 'next-auth/react';

export const SignButton = () => {
    const [showModal, setShowModal] = useState(false);
    return (
            <>
        <Button onClick={() => setShowModal(true)}>
            Sign in/Sign up
        </Button>
        <Modal
            show={showModal}
            size="md"
            popup={true}
            onClose={() => setShowModal(false)}>
            <Modal.Header />
            <Modal.Body>
                <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
                    <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                       Sign in / Sign up 
                    </h3>
                    <div className='w-full'>
                        <Button onClick={() => signIn('discord')}>
                            Sign in / up with Discord
                        </Button>
                    </div>
                    <div className='w-full'>
                        <Button onClick={() => signIn('github')}>
                            Sign in / up with GitHub
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}