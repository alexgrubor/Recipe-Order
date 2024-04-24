import Image from "next/image";
const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/images/team/sarah.png", 
      bio: "Passionate foodie and recipe innovator, Sarah turned her love for cooking into the foundation of Recipe&Order."
    },
    {
      name: "Mark Lee",
      role: "Lead Developer",
      image: "/images/team/mark.png", 
      bio: "Coding wizard with a knack for intuitive interfaces, Mark brings Recipe&Order's features to life."
    },
    {
      name: "Emily Chen",
      role: "Culinary Director",
      image: "/images/team/emily.png",  
      bio: "Chef extraordinaire, Emily curates our selection of delicious recipes, ensuring every dish is a winner."
    },
    {
      name: "John Davis",
      role: "Marketing Lead",
      image: "/images/team/john.png", 
      bio:  "John spreads the word about Recipe&Order, making sure everyone knows how to simplify their cooking experience."
    },
    {
      name: "Olivia Rodriguez",
      role: "Community Manager",
      image: "/images/team/olivia.png", 
      bio: "Olivia fosters our vibrant community, connecting food lovers and keeping the conversation buzzing."
    },
    {
      name: "David Kim",
      role: "UI/UX Designer",
      image: "/images/team/david.png", 
      bio: "David ensures Recipe&Order is both beautiful and easy to use, crafting a seamless experience for our users."
    }
  ];

const OurTeam = () => {
  return (
    <div className="bg-restaurant-primary text-restaurant-neutral p-4">
        <h2 className="text-center text-3xl text-restaurant-accent">
            Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
            {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-6 text-center"> 
                <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full" />
                
                <h3 className="text-xl font-semibold text-restaurant-secondary mt-4 mb-2">
                {member.name}
                </h3>
                <p className="">{member.role}</p>
                <p className=" text-balance">{member.bio}</p>
            </div>
            ))}
        </div>


    </div>
  )
}
export default OurTeam