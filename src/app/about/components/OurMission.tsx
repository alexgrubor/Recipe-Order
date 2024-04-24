import { FaCheckCircle, FaUtensils, FaShoppingCart, FaUsers  } from 'react-icons/fa';
const contentData = [
    { title: "Fresh Ingredients", description: "We believe in the power of fresh, high-quality ingredients to make delicious and healthy meals.", icon: <FaCheckCircle /> }, 
    { title: "Easy Recipes", description: "Our goal is to simplify cooking with clear instructions and inspiring recipes for all skill levels.", icon: <FaUtensils /> },
    { title: "Efficient Ordering", description: "Streamline your grocery shopping with automated lists and convenient ingredient delivery options.", icon: <FaShoppingCart /> },
    { title: "Community Connection", description: "We foster a community where food lovers can share recipes, tips, and create meaningful connections.", icon: <FaUsers /> }
  ];
const OurMission = () => {
  return (
    <div>
      <h2 className="text-center text-3xl text-restaurant-accent">
        Our Mission 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        {contentData.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 text-center"> 
           <span className='text-4xl text-restaurant-secondary'> {item.icon} </span>
            <h3 className="text-xl font-semibold text-restaurant-primary mt-4 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
        

    </div>
  )
}
export default OurMission