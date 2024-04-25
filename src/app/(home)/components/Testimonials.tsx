import Image from "next/image";
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    imageUrl: "/images/team/sarah.png", 
    review: "Recipe&Order has changed the way I cook! Finding new recipes and ordering ingredients is a breeze."
  },
  {
    id: 2,
    name: "Mark Lee",
    imageUrl: "/images/team/mark.png", 
    review:  "As a busy professional, Recipe&Order saves me so much time. I love the quick and delicious meal suggestions."
  },
  {
    id: 3,
    name: "John Davis",
    imageUrl: "/images/team/john.png", 
    review:  "My cooking skills have seriously improved thanks to Recipe&Order's clear instructions and awesome recipes." 
  },
  {
    id: 4, 
    name: "Emily Chen",
    imageUrl: "/images/team/emily.png", 
    review:  "Recipe&Order is my go-to for dinner party inspiration. My friends are always impressed!"
  },
  {
    id: 5,
    name: "Olivia Rodriguez",
    imageUrl: "/images/team/olivia.png", 
    review:  "The Recipe&Order community is amazing! I've made new friends and discovered countless delicious dishes."
  }
];

const Testimonials = () => {
  
  return (
    <section className="container mx-auto py-16" id="testimonials"> {/* Add an id for navigation */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-restaurant-primary">
          Our Client's Said About Us
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          We care about our customers and do our best to make them happy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 "> 
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6"> 
            <div className="mb-4 flex items-center"> 
              <Image 
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={80} 
                height={80}
                className="rounded-full" 
              />
              <h3 className="text-xl font-semibold text-restaurant-secondary ml-4"> 
                {testimonial.name}
              </h3>
            </div>
            <p className="text-gray-700">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Testimonials