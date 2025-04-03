import { useScrollAnimation } from '@/utils/animations';

const About = () => {
  const animation = useScrollAnimation(0.1, 'up');
  
  // Calculate the appropriate dimensions for the profile image
  // This will be used to request an appropriately sized image from ImageKit
  // Consider 2x for retina displays
  const imageWidth = 800; // Adjust based on your container's maximum width
  const imageHeight = 1000; // Maintaining the 4:5 aspect ratio
  
  // Your ImageKit.io URL (replace with your actual ImageKit URL if different)
  const imageKitUrl = "https://ik.imagekit.io/mahitha/626975e7-ac6b-4458-8d81-a8448edac23f.jpg?updatedAt=1742230270722";
  const profileImagePath = "/IMG_4759.jpg"; // Path to your image on ImageKit
  
  // Construct URL with transformations
  const profileImageUrl = `${imageKitUrl}${profileImagePath}?tr=w-${imageWidth},h-${imageHeight},f-auto,q-90`;
  
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="w-full lg:w-2/5">
            <div 
              {...animation}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Profile Image with ImageKit optimization */}
              <div className="aspect-[4/5] w-full h-full">
                <img 
                  src={profileImageUrl}
                  alt="Namdigam Mahitha Chowdary" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to local image if ImageKit fails
                    e.currentTarget.src = "/images/profile.jpg";
                  }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 z-[-1]"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-lg bg-primary/10 backdrop-blur-lg border border-primary/20 z-[-1]"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-3/5">
            <div className="animate-on-scroll from-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">About</span> Me
              </h2>
              
              <p className="text-muted-foreground mb-4">
              3rd-year Computer Science student at SRM University, AP, passionate about building innovative software solutions. Currently juggling studies while gaining hands-on industry experience.
              </p>
              
              <p className="text-muted-foreground mb-6">
                My academic journey has equipped me with strong fundamentals in computer science, while my hands-on projects have allowed me to apply these concepts to real-world problems. I'm particularly interested in web development, machine learning, and creating intuitive user experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Product Development</h3>
                    <p className="text-sm text-muted-foreground">Creating innovative solutions that solve real problems</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Web Development</h3>
                    <p className="text-sm text-muted-foreground">Building modern, responsive web applications</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary font-medium">03</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Machine Learning</h3>
                    <p className="text-sm text-muted-foreground">Applying ML techniques to extract insights from data</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary font-medium">04</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Problem Solving</h3>
                    <p className="text-sm text-muted-foreground">Tackling complex challenges with creative solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#experience" className="btn-primary">
                  My Experience
                </a>
                <a href="#projects" className="btn-outline">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;