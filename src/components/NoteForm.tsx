import { Button, TextInput } from "flowbite-react";
import type { NextPage } from "next";
import { INote } from "../pages/notes/create";

interface NoteFormProps {
    formValue: INote;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: () => void;
}

export const NoteForm: NextPage<NoteFormProps> = ({
    formValue, onChange, submit,
}) => {
    const { title, body, type } = formValue;
    
    return (
    <>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <TextInput type="text" id="title" onChange={onChange} value={title} />
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Body</label>
            <textarea rows={4} id="body" onChange={onChange} value={body}></textarea>
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Type</label>
            <TextInput type="text" id="type" onChange={onChange} value={type} />
        </div>
        <div className="mb-6">
            <Button color="purple" onClick={submit}>Send</Button>
        </div>
    </>
    )
}