import RecipeOfDay from "../CustomComponents/RecipeOfDay";
import MenusBYCategory from "./components/MenusBYCategory";

const MenusPage = () => {
  return (
    <div>
      <div className="relative text-restaurant-neutral mb-4">
        <div className="absolute inset-0 bg-my-custom-image-3 bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>
        <div className="relative z-10 h-[60vh] flex flex-col justify-center items-center p-4">
          <h1 className="text-4xl font-bold">Menus</h1>
          <p className="text-lg">Choose from our wide variety of menus</p>
        </div>
      </div>
      <RecipeOfDay />
      <MenusBYCategory />
    </div>
  );
};
export default MenusPage;
