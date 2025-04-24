import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaLaptopCode,
  FaCloud,
  FaBrain,
  FaCloudUploadAlt,
} from "react-icons/fa";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold-creekcap.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think-reality.png";
import AkashMegaMart from "./assets/web-development-portfolio/Akash-Mega-Mart.png";
import MidwamImmersive from "./assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "./assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.jpg";
import AkashMegaMartApp from "./assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.jpg";
import FeelItMobileApp from "./assets/app-development-portfolio/FeelIt-Mobile-App.jpg";
import KlikomicsMobileApp from "./assets/app-development-portfolio/Klikomics-Mobile-App.jpg";
import AutoSnapMobileApp from "./assets/app-development-portfolio/AutoSnap-Mobile-App.jpg";

export { logoImg };

export const companyDetails = {
  phone: "+91-7411331718",
  phone2: "+91-9345361250.",
  address: "ABC Street, City, Country",
  email: "sales@manya.ai",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio
// export const portfolio = [
//   {
//     id: 1,
//     title: "Figo Tech",
//     img: require("./assets/images/portfolio/1.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 2,
//     title: "News Feed",
//     img: require("./assets/images/portfolio/2.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 3,
//     title: "Food Application",
//     img: require("./assets/images/portfolio/3.png"),
//     imgFit: "object-contain",
//   },
//   {
//     id: 4,
//     title: "Crio Load App",
//     img: require("./assets/images/portfolio/4.jpg"),
//     imgFit: "object-cover",
//   },
// ];

export const testimonials = [
  {
    id: 1,
    clientSay:
      "5G Homes provided us with an incredible solution that improved our internet speed and reliability. We highly recommend their services!",
    clientName: "John Doe",
    position: "CEO",
    companyName: "5G Homes",
  },
  {
    id: 2,
    clientSay:
      "Bayut has truly revolutionized the property market in the UAE. The platform is user-friendly and highly efficient.",
    clientName: "Amina Shah",
    position: "Founder & CEO",
    companyName: "Bayut",
  },
  {
    id: 3,
    clientSay:
      "Cold Creek Cap offers top-notch products. The quality of their caps is unmatched, and we’re proud to be working with them.",
    clientName: "David White",
    position: "Product Manager",
    companyName: "Cold Creek Cap",
  },
  {
    id: 4,
    clientSay:
      "Emergency Music Distribution has been a game-changer for our music business, allowing us to easily reach a global audience.",
    clientName: "Sarah Lee",
    position: "Marketing Director",
    companyName: "Emergency Music Distribution",
  },
  {
    id: 5,
    clientSay:
      "Flatiorn's user-friendly platform allowed us to seamlessly enter the cryptocurrency market with confidence.",
    clientName: "Mohammed Ali",
    position: "Founder & CEO",
    companyName: "Flatiorn",
  },
  {
    id: 6,
    clientSay:
      "Maven has significantly improved our team’s workflow and productivity. It's a powerful tool for project management.",
    clientName: "Sophia Turner",
    position: "Operations Manager",
    companyName: "Maven",
  },
  {
    id: 7,
    clientSay:
      "Menissa's Catering provided us with an exceptional experience. The food and service were flawless, and we couldn’t be happier.",
    clientName: "Rebecca Hall",
    position: "Event Planner",
    companyName: "Menissa's Catering",
  },
  {
    id: 8,
    clientSay:
      "Methodist Health has been instrumental in providing excellent care to our patients. Their professionalism is unparalleled.",
    clientName: "Dr. William Carter",
    position: "Chief Medical Officer",
    companyName: "Methodist Health",
  },
  {
    id: 9,
    clientSay:
      "Think Realty’s insights and real estate opportunities have helped us make informed investment decisions. A fantastic platform!",
    clientName: "Lucas Green",
    position: "Real Estate Investor",
    companyName: "Think Realty",
  },
];

// all services

export const allServicesss = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "In today’s mobile world, connecting with customers is key. Our mobile app development focuses on high-performance apps with seamless user experiences. We prioritize intuitive design, robust functionality, and engaging interfaces to exceed expectations. Whether expanding your reach or boosting engagement, our solutions make a lasting impact while improving productivity and performance.",
    icon: (
      <FaMobileAlt className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    detailContent:
      "In today's mobile-driven world, connecting with your customers is essential. Our mobile app development services focus on creating high-performance applications that provide seamless user experiences across various platforms. We prioritize intuitive design, robust functionality, and engaging interfaces to ensure your app not only meets but exceeds user expectations. Whether you're looking to extend your business reach or enhance customer engagement, our mobile solutions are designed to make a lasting impact. We emphasise the consumer's experience initially, ensure that the apps we develop not solely retain users intrigued but also streamline workflows and maximise performance. Each application we develop is a potent tool intended to improve productivity and foster greater engagement, encouraging your company to thrive in a world that is getting more and more mobile-focused.",
  },
  {
    id: 2,
    title: "UI/UX Design ",
    description:
      "Deliver exceptional digital experiences with intuitive, engaging, and user-centric UI/UX designs tailored to meet modern standards. We focus on creating interfaces that are not only visually stunning but also highly functional and aligned with your brand’s identity. Our approach ensures consistency, usability, and delightful interactions that drive user satisfaction and business success.",
    icon: (
      <FaPaintBrush className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    detailContent:
      "At MANYAA TECH SOLUTIONS Technologies, we specialize in designing user experiences that delight, engage, and convert. Our UI/UX design and development services blend aesthetics with functionality, ensuring intuitive navigation, responsive design, and seamless interactions across devices. We conduct in-depth user research, wireframing, prototyping, and usability testing to craft digital products that resonate with your target audience. Whether you're building a new product or enhancing an existing one, our team creates immersive digital experiences that are not only visually compelling but also functionally effective. Let us help you elevate your brand with design solutions that leave a lasting impact.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Your website is the digital face of your business. At MANYAA TECH SOLUTIONS, we specialize in creating dynamic, responsive websites that drive digital transformation. Our team uses the latest technologies to build user-friendly, high-performance sites that convert visitors into loyal customers. From e-commerce to corporate platforms, we offer full-stack web development services, ensuring secure, scalable, and reliable applications across all platforms.",
    icon: (
      <FaLaptopCode className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    detailContent:
      "Your website is the digital face of your business. At MANYAA TECH SOLUTIONS, we specialize in crafting dynamic and responsive websites that drive digital transformation. Our web development team employs the latest technologies and best practices to create user-friendly designs optimized for performance, speed, and scalability. From e-commerce platforms to corporate sites, we build websites that not only attract visitors but also convert them into loyal customers, ensuring a strong online presence for your brand. We provide full-stack web development services, that involve back-end infrastructure and front-end user interfaces. Our area of expertise is developing safe, scalable, and reliable online application that work flawlessly across all platforms.",
  },
  {
    id: 4,
    title: "Cloud Computing Services",
    description:
      "In today’s digital landscape, adapting quickly is key to success. At MANYAA TECH SOLUTIONS Technologies, we provide cloud computing services that offer flexibility, scalability, and cost-effectiveness to help your business thrive. Our solutions allow you to focus on growth and innovation, with seamless cloud migration, IT optimization, and enhanced collaboration.",
    icon: (
      <FaCloud className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    detailContent:
      "In today's digital landscape, the ability to adapt quickly to changing business needs is crucial for success. At MANYAA TECH SOLUTIONS Technologies, we offer comprehensive cloud computing services designed to empower your organization with the flexibility, scalability, and cost-effectiveness required to thrive. Our cloud solutions are not just a service—they're a strategic advantage that enables your business to focus on growth and innovation. Embrace the future of IT with our comprehensive cloud computing services. We offer scalable cloud infrastructure solutions that adapt to your business needs, allowing for enhanced flexibility and cost-effectiveness. Our expert team guides you through the entire cloud migration process, ensuring a smooth transition with minimal disruption. By leveraging cloud technologies, we help you optimize your IT environment, improve collaboration, and drive innovation.",
  },
  {
    id: 5,
    title: "Artificial Intelligence Services",
    description:
      "Harness AI and machine learning to automate processes, analyze data, and provide insights for informed decisions. Our solutions enhance efficiency, personalize experiences, and predict trends, keeping you ahead in a competitive digital landscape. From machine learning models to AI chatbots, we help you automate, improve experiences, and make smarter, data-driven decisions.",
    icon: (
      <FaBrain className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    detailContent:
      "Harness the transformative power of AI and machine learning with our advanced solutions. We develop intelligent systems that automate processes, analyze data, and provide actionable insights to help you make informed, data-driven decisions. Our AI solutions empower your organization to enhance operational efficiency, personalize customer experiences, and predict market trends, ensuring you stay ahead of the competition in a fast-paced digital landscape. From developing machine learning models to creating AI-powered chatbots, we help you automate processes, enhance customer experiences, and gain deeper insights into your operations. Let AI take your business to the next level with smarter, data-driven decisions.",
  },
  {
    id: 6,
    title: "Cloud Migration Services",
    description:
      "Migrate your IT infrastructure to the cloud with confidence. Our cloud migration services ensure a seamless transition with minimal disruption to your business. We handle everything from planning to execution, ensuring your systems are optimized, secure, and scalable in the cloud.",
    icon: (
      <FaCloudUploadAlt className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    detailContent:
      "Transitioning to the cloud doesn’t have to be complicated. MANYAA TECH SOLUTIONS Technologies offers expert cloud migration services to help your business move from legacy systems to scalable, secure cloud infrastructure. Our process includes thorough planning, risk assessment, seamless data transfer, and post-migration optimization. We ensure minimal downtime and maintain data integrity throughout the transition, while aligning with your business goals. Let us handle the complexities of migration so you can focus on innovation and growth with confidence.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const allServices = [
  {
    id: 1,
    title: "Mobile App Development",
    link: "mobile-app-development",
    icon: (
      <FaMobileAlt className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Transform your business with our cutting-edge mobile applications. We develop high-performance, user-friendly apps for iOS and Android that engage customers and drive growth.",
    detailsPage: {
      banner: require("./assets/images/services/app-development.jpg"),
      img1: require("./assets/images/services/app-dev-1.jpg"),
      img2: require("./assets/images/services/app-dev-2.jpg"),
      img3: require("./assets/images/services/app-dev-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Innovative Mobile Solutions for Modern Businesses
            </h2>
            <p>
              In today's mobile-first world, having a powerful app is crucial for business success. We create custom mobile applications that deliver exceptional user experiences while meeting your specific business objectives.
            </p>
            <p>
              Our team specializes in native and cross-platform development, ensuring your app performs flawlessly across all devices and platforms.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Mobile App Development Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cross-Platform Compatibility</h3>
                <p>
                  We build apps that work seamlessly on both iOS and Android platforms, maximizing your reach and reducing development costs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">User-Centric Design</h3>
                <p>
                  Our apps feature intuitive interfaces and engaging experiences that keep users coming back.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Performance Optimization</h3>
                <p>
                  We optimize every aspect of your app to ensure fast loading times and smooth operation.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Security First Approach</h3>
                <p>
                  We implement robust security measures to protect user data and prevent vulnerabilities.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Mobile Development Expertise
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Native App Development</h3>
                <p>
                  High-performance apps built specifically for iOS or Android platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Hybrid App Development</h3>
                <p>
                  Cost-effective solutions that work across multiple platforms with single codebase.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Progressive Web Apps</h3>
                <p>
                  Web applications that deliver app-like experiences without installation.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">App Maintenance & Support</h3>
                <p>
                  Ongoing updates and improvements to keep your app current and competitive.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 2,
    title: "UI/UX Design",
    link: "ui-ux-design",
    icon: (
      <FaPaintBrush className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Beautiful, intuitive user interfaces and experiences that engage users, enhance usability, and drive conversions for your digital products.",
    detailsPage: {
      banner: require("./assets/images/services/ui-ux.jpg"),
      img1: require("./assets/images/services/uiux-1.jpg"),
      img2: require("./assets/images/services/uiux-2.jpg"),
      img3: require("./assets/images/services/uiux-3.jpg"),
      firstSection: `
      <div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Crafting Exceptional Digital Experiences
          </h2>
          <p>
            Our UI/UX design services focus on creating visually stunning and highly functional interfaces that delight users and achieve business objectives.
          </p>
          <p>
            Through user research, thoughtful design, and rigorous testing, we create digital products that are both beautiful and easy to use.
          </p>
        </div>
      </div>
    `,
      secondSection: `
      <div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Benefits of Professional UI/UX Design
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Improved User Engagement</h3>
              <p>
                Intuitive interfaces keep users engaged and coming back.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Higher Conversion Rates</h3>
              <p>
                Thoughtful user flows guide visitors toward desired actions.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Reduced Development Costs</h3>
              <p>
                Clear design specifications prevent costly rework during development.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Competitive Advantage</h3>
              <p>
                Superior user experience sets your product apart in the market.
              </p>
            </li>
          </ul>
        </div>
      </div>
    `,
      thirdSection: `
      <div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our UI/UX Design Process
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">User Research</h3>
              <p>
                Understand your audience through interviews, surveys, and analytics.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Information Architecture</h3>
              <p>
                Organize content and features for optimal usability.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Wireframing & Prototyping</h3>
              <p>
                Create interactive prototypes to test and refine concepts.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Visual Design</h3>
              <p>
                Apply brand-consistent aesthetics with pixel-perfect precision.
              </p>
            </li>
          </ul>
        </div>
      </div>
    `,
    },
  },
  {
    id: 3,
    title: "Web Development (Full stack)",
    link: "web-development",
    icon: (
      <FaLaptopCode className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Comprehensive full-stack web development services that deliver robust, scalable, and high-performance web applications tailored to your business needs.",
    detailsPage: {
      banner: require("./assets/images/services/web-development.jpg"),
      img1: require("./assets/images/services/web-dev-1.jpg"),
      img2: require("./assets/images/services/web-dev-2.jpg"),
      img3: require("./assets/images/services/web-dev-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              End-to-End Web Solutions for Your Business
            </h2>
            <p>
              Our full-stack development services cover every aspect of web application development, from front-end interfaces to back-end systems and database integration.
            </p>
            <p>
              We create responsive, secure, and scalable web applications that drive business growth and enhance user engagement.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Benefits of Our Full-Stack Development Approach
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Seamless Integration</h3>
                <p>
                  Unified development process ensures all components work together perfectly.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Faster Development</h3>
                <p>
                  Single-team responsibility for entire project reduces communication overhead.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Efficiency</h3>
                <p>
                  Comprehensive service reduces need for multiple specialists and vendors.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Future-Proof Solutions</h3>
                <p>
                  Architecture designed for easy updates and scalability as your needs evolve.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Full-Stack Technology Stack
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Front-End Technologies</h3>
                <p>
                  React, Angular, Vue.js, HTML5, CSS3, JavaScript/TypeScript
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Back-End Technologies</h3>
                <p>
                  Node.js, Python (Django, Flask), Ruby on Rails, PHP (Laravel)
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Database Solutions</h3>
                <p>
                  PostgreSQL, MySQL, MongoDB, Firebase, AWS DynamoDB
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">DevOps & Deployment</h3>
                <p>
                  Docker, Kubernetes, AWS, Azure, CI/CD pipelines
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 4,
    title: "Cloud Computing Services",
    link: "cloud-computing-services",
    icon: (
      <FaCloud className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Scalable, secure, and reliable cloud solutions that empower your business with flexibility, cost-efficiency, and enterprise-grade performance.",
    detailsPage: {
      banner: require("./assets/images/services/cloud-computing.jpg"),
      img1: require("./assets/images/services/cloud-1.jpg"),
      img2: require("./assets/images/services/cloud-2.jpg"),
      img3: require("./assets/images/services/cloud-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Transform Your Business with Cloud Technology
            </h2>
            <p>
              Our cloud computing services help businesses of all sizes leverage the power of cloud technology to improve efficiency, reduce costs, and scale operations effortlessly.
            </p>
            <p>
              From migration to ongoing management, we provide comprehensive cloud solutions tailored to your specific business requirements.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Advantages of Our Cloud Services
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cost Reduction</h3>
                <p>
                  Eliminate capital expenses with pay-as-you-go cloud services and reduced IT maintenance costs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalability</h3>
                <p>
                  Easily scale resources up or down based on demand, ensuring optimal performance at all times.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Business Continuity</h3>
                <p>
                  Robust disaster recovery solutions ensure your business remains operational under any circumstances.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Security & Compliance</h3>
                <p>
                  Enterprise-grade security measures and compliance with industry regulations.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Cloud Service Offerings
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Cloud Migration</h3>
                <p>
                  Seamless transition of your applications and data to the cloud with minimal downtime.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cloud Infrastructure Setup</h3>
                <p>
                  Custom-designed cloud environments optimized for your specific workloads.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Managed Cloud Services</h3>
                <p>
                  Ongoing management, monitoring, and optimization of your cloud resources.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Hybrid & Multi-Cloud Solutions</h3>
                <p>
                  Strategic combinations of public and private cloud services for optimal performance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 5,
    title: "Artificial Intelligence Development",
    link: "artificial-intelligence-development",
    icon: (
      <FaBrain className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Cutting-edge AI solutions that automate processes, enhance decision-making, and create intelligent systems to give your business a competitive edge.",
    detailsPage: {
      banner: require("./assets/images/services/ai-development.jpg"),
      img1: require("./assets/images/services/ai-1.jpg"),
      img2: require("./assets/images/services/ai-2.jpg"),
      img3: require("./assets/images/services/ai-3.jpg"),
      firstSection: `
      <div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Harness the Power of Artificial Intelligence
          </h2>
          <p>
            Our AI development services help businesses leverage machine learning, deep learning, and cognitive computing to solve complex problems and create new opportunities.
          </p>
          <p>
            We build custom AI solutions that learn, adapt, and deliver measurable business value across industries and applications.
          </p>
        </div>
      </div>
    `,
      secondSection: `
      <div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Benefits of AI for Your Business
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Process Automation</h3>
              <p>
                Automate repetitive tasks and workflows to improve efficiency and reduce costs.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Enhanced Decision Making</h3>
              <p>
                Data-driven insights and predictive analytics for smarter business decisions.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Personalized Experiences</h3>
              <p>
                Deliver customized products, services, and interactions to your customers.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Competitive Advantage</h3>
              <p>
                Stay ahead of competitors with innovative AI-powered solutions.
              </p>
            </li>
          </ul>
        </div>
      </div>
    `,
      thirdSection: `
      <div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our AI Development Expertise
          </h2>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Machine Learning</h3>
              <p>
                Custom algorithms that learn from data and improve over time.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Natural Language Processing</h3>
              <p>
                Systems that understand, interpret, and generate human language.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Computer Vision</h3>
              <p>
                Image and video analysis for recognition, classification, and interpretation.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Predictive Analytics</h3>
              <p>
                Forecast future trends and behaviors based on historical data patterns.
              </p>
            </li>
          </ul>
        </div>
      </div>
    `,
    },
  },
  {
    id: 5,
    title: "Cloud Migration Services",
    link: "cloud-migration-services",
    icon: (
      <FaCloudUploadAlt className="group-hover:text-white h-[3.5rem] md:h-[4rem] object-contain text-4xl mx-auto group-hover:scale-110 duration-300 transition-all" />
    ),
    desc: "Seamless cloud migration solutions that enhance scalability, performance, and security while minimizing downtime and risk.",
    detailsPage: {
      banner: require("./assets/images/services/cloud-migration.jpg"),
      img1: require("./assets/images/services/cloud-migration-1.jpg"),
      img2: require("./assets/images/services/cloud-migration-2.jpg"),
      img3: require("./assets/images/services/cloud-migration-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Seamless Transition to the Cloud
            </h2>
            <p>
              Our cloud migration services help organizations modernize their infrastructure by securely moving applications, data, and workloads to cloud environments.
            </p>
            <p>
              Whether you're moving to a public, private, or hybrid cloud, we ensure a smooth and efficient migration process with minimal disruption to your business.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Key Benefits of Cloud Migration
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Improved Scalability</h3>
                <p>
                  Easily scale resources up or down based on your business needs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Optimization</h3>
                <p>
                  Reduce infrastructure and maintenance costs with pay-as-you-go models.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Enhanced Security</h3>
                <p>
                  Leverage cloud-native security features and compliance support.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Business Continuity</h3>
                <p>
                  Ensure data backup, disaster recovery, and minimal downtime during transitions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Cloud Migration Capabilities
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Application Rehosting</h3>
                <p>
                  Lift and shift your existing apps to the cloud with minimal changes.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data Migration</h3>
                <p>
                  Migrate structured and unstructured data securely and efficiently.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cloud-Native Optimization</h3>
                <p>
                  Refactor and optimize apps to fully leverage cloud capabilities.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Hybrid & Multi-Cloud Strategies</h3>
                <p>
                  Build resilient architectures across multiple cloud environments.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
];
