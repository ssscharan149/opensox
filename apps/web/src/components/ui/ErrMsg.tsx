export const ErrMsg = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center text-center text-gray-500">
      <p>{text}</p>
    </div>
  );
};
