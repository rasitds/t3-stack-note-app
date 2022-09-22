type NoteCardProps = {
    id: string;
    title: string;
    body: string;
    type: string;
  };
  
export const NoteCard = ({
    id,
    title,
    body,
    type,
}: NoteCardProps) => {
    return (
      <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
        
        <h2 className="text-lg text-gray-700">{title}</h2>
        <h3
          className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        >
          Type: {type}
        </h3>
        <p className="text-sm text-gray-600">{body}</p>
      </section>
    );
};