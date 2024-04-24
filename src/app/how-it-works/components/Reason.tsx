interface ReasonProps {
  Icon: React.ComponentType;
  title: string;
  description: string;
}
const Reason = ({ Icon, title, description }: ReasonProps) => {
  return (
    <div className="p-6 flex flex-col items-center ">
      <div className="text-4xl ">
        <Icon />
      </div>

      <h3 className="text-xl font-medium mb-2 text-restaurant-accent">
        {title}
      </h3>
      <p className="text-center text-balance md:max-w-[80%]">{description}</p>
    </div>
  );
};
export default Reason;
