const page = () => {
  return (
    <div className="relative text-restaurant-neutral">
    <div className="absolute inset-0 bg-my-custom-image-4 bg-cover bg-center bg-no-repeat bg-fixed brightness-50"></div>
    <div className="relative z-10 min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-wrap my-3">Contact Us</h1>
        <p className="text-xl text-balance md:max-w-[60%] mx-auto mt-6">
          We would love to hear from you! If you have any questions, comments,
          or suggestions, please feel free to reach out to us. We are here to
          help you in any way we can.
        </p>
        <p className="text-lg text-balance md:max-w-[60%] mx-auto mt-6">
          You can contact us by email, or by filling out the form
          below. We will do our best to get back to you as soon as possible.
        </p>
        <p className="text-lg text-balance md:max-w-[60%] mx-auto mt-6">
          Thank you for choosing Recipe&Order. We look forward to serving you!
        </p>
      </div>
      <div className="mt-8 w-full max-w-md mx-auto">
        <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-restaurant-primary hover:bg-restaurant-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};
export default page;
