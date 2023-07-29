import { Inter } from "next/font/google";
import { createApi } from "unsplash-js";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// export async function getStaticProps() {
//   const unsplash = createApi({
//     accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
//   });

//   let photo;

//   await unsplash.search
//     .getPhotos({ query: "cat", orientation: "portrait" })
//     .then((result) => {
//       if (result.errors) {
//         console.log("Error ocurred: ", result.errors[0]);
//       } else {
//         photo = result.response.results[0];
//         console.log("Success!");
//         console.log(photo);
//       }
//     });

//   return {
//     props: { photo },
//   };
// }

export default function Home({ photo }) {
  return (
    <div className="container mt-28 mx-auto px-4">
      <section
        id="home"
        className="flex justify-center items-center md:justify-start"
      >
        <div className="w-48 overflow-hidden border-stone-300 border-8 rounded-full">
          <img
            className="w-full h-full object-cover mx-auto my-auto"
            src="/profile_photo.jpg"
            alt="profile_photo"
          />
        </div>
      </section>

      <section id="aboutme" className="py-4 text-left">
        <div className="mt-16 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          About Me
        </div>
        <p className="text-xl mb-5 leading-normal text-gray-600">
          Hi, my name is Juan Chung. I'm currently studying at BCIT. CST
          Program. TESTESTSETSET With a proven track record in operations, I am
          currently seeking a new challenge as a cloud engineer. I possess
          strong skills in various programming languages and have self-taught
          knowledge in cloud computing. My most notable strength is my agile
          comprehension of business processes and organizational structure.
        </p>
        <div className="container bg-stone-100 p-5">
          <ul className="list-disc leading-normal pl-5 text-xl text-gray-600">
            <li>
              Abundant hands-on experience in operations across various
              industries.
            </li>
            <li>
              Capable of quickly understanding clients business processes and
              systems.
            </li>
            <li>
              Strong belief in the importance of collective intelligence and
              motivation for team success in achieving shared goals.
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Technical Skills
        </div>

        <ul className="pl-5 list-disc md:list-none lg:grid lg:grid-cols-4 md:grid-cols-2 gap-2 text-xl text-gray-600">
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML5, CSS3</li>
          <li>Node JS</li>
          <li>SQL, NoSQL</li>
          <li>Azure, AWS</li>
          <li>Agile Methodology</li>
          <li>Quality Assurance</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
        </ul>
      </section>

      <section id="education" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Education
        </div>

        <ul className="grid grid-cols-3 pl-5 text-xl leading-normal text-gray-600">
          <li className="col-span-2 list-disc">
            British Columbia Institute of Technology |
            <i> Computer Systems Technology Diploma (GPA: 90%)</i>
          </li>
          <li className="col-span-1 text-xl text-right">Jan 2023 - Present</li>
          <li className="col-span-2 text-xl list-disc">
            University of Washington in Seattle |{" "}
            <i>Bachelors Degree in Economics</i>
          </li>
          <li className="col-span-1 text-xl text-right">Sep 2004 - Aug 2010</li>
        </ul>

        <div className="mt-20 mb-5 py-4 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Certifications
        </div>

        <ul className="grid grid-cols-3 pl-5 text-xl leading-normal text-gray-600">
          <li className="col-span-2 list-disc">
            Microsoft Azure Administrator Associate (AZ-104){" "}
            <span className="text-sm text-orange-700">
              <Link href="#">view credential</Link>
            </span>
          </li>
          <li className="col-span-1 text-right">In Progress</li>
          <li className="col-span-2 list-disc">
            AWS Cloud Practitioner (CLF-C01){" "}
            <span className="text-sm text-orange-700">
              <Link href="#">view credential</Link>
            </span>
          </li>
          <li className="col-span-1 text-right">Jun 2023</li>
          <li className="col-span-2 list-disc">
            Microsoft Azure Fundamentals (AZ-900){" "}
            <span className="text-sm text-orange-700">
              <Link href="#">view credential</Link>
            </span>
          </li>
          <li className="col-span-1 text-right">Jun 2023</li>
          <li className="col-span-2 list-disc">
            Java Programming I, Online Course, University of Helsinki{" "}
            <span className="text-sm text-orange-700">
              <Link href="#">view credential</Link>
            </span>
          </li>
          <li className="col-span-1 text-right">Sep - Nov 2022</li>
        </ul>
      </section>

      <section id="projects" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Projects
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Full Stack Developer, Interactive Story Platform
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Jul 2015 - Oct 2022
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Developed a community platform that connects writers and readers,
              enabling them to create unique stories with the help of the OpenAI
              API.
            </li>
            <li>
              As a member of 4, utilized Next JS to create API endpoints, and
              used Tailwind CSS to design the user interface and layout of the
              web application.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Full Stack Developer, Quiz Web Apps
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Jan - Apr 2023
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Led a 3-member team in developing a trivia quiz game that educates
              users on pet care during extreme weather events.
            </li>
            <li>
              Took care of the full development cycle, from designing the
              database structure to writing code in JavaScript and Node JS to
              create server-side logic such as calculating scores.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Front-End Developer, Imposter Syndrome Self Assessment Web Apps
            (Hackathon)
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Mar 2023
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Developed a self-assessment tool to help users in identifying the
              symptoms and triggers of Imposter Syndrome.
            </li>
            <li>
              In a team of 3, used Bootstrap to design the user interface and
              JavaScript to add interactive elements like form submissions,
              modal pop-ups, and buttons.
            </li>
          </ul>
        </div>
      </section>

      <section id="experience" className="py-4 text-left">
        <div className="mt-20 mb-5 pb-2 border-b-2 border-stone-200 text-3xl text-gray-600 font-semi-bold tracking-widest">
          Work Experience
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Book Publisher, Operations Manager | Jo-Eun-Saeng-Gak
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Jul 2015 - Oct 2022
          </div>
          <ul className="col-span-3 pl-14 mt-3 list-disc text-xl leading-normal text-gray-600">
            <li>
              Led a digital transformation team to renovate the outdated website
              and migrate 20 years of data from physical servers to Amazon cloud
              servers.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Operations Consultant, Senior Associate | PriceWaterhouseCoopers
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Jun 2014 - Jun 2015
          </div>
          <div className="col-span-3 pl-5 mt-3 text-xl text-gray-600 font-semi-bold">
            Project: SK Hynix Resource Management Project
          </div>
          <ul className="col-span-3 pl-14 list-disc text-xl leading-normal text-gray-600">
            <li>
              Conducted in-depth interviews with the R&D department of the
              world’s second-largest memory chip maker to design the foundation
              process map of a time-tracking module for managing and tracking
              individual contributions.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 mt-5 text-xl text-gray-600 font-bold">
            Operations Consultant, Associate | Accenture PLC
          </div>
          <div className="col-span-1 mt-5 text-xl text-gray-600 font-semi-bold text-right">
            Oct 2010 - Mar 2014
          </div>
          <div className="col-span-3 pl-5 mt-3 text-xl text-gray-600 font-semi-bold">
            Project: KT, SAP ERP(Enterprise Resource Planning) System
            Implementation
          </div>
          <ul className="col-span-3 pl-14 list-disc text-xl leading-normal text-gray-600">
            <li>
              As a member of the Project Management Office, wrote a daily
              progress report, managed the scheduling of integration tests, and
              participated in training power users for their quick adaptation.
            </li>
          </ul>
          <div className="col-span-3 pl-5 mt-3 text-xl text-gray-600 font-semi-bold">
            Project: Samsung Electronics, Contract Life-cycle Management
          </div>
          <ul className="col-span-3 pl-14 list-disc text-xl leading-normal text-gray-600">
            <li>
              Conducted assessment of the internal process and rules of more
              than 30,000 contracts and established an optimized CLM framework
              in collaboration with the internal legal team.
            </li>
          </ul>
          <div className="col-span-3 pl-5 mt-3 text-xl text-gray-600 font-semi-bold">
            Project: SIMTEC, Procurement Optimization Model Implementation
          </div>
          <ul className="col-span-3 pl-14 list-disc text-xl leading-normal text-gray-600">
            <li>
              Created an Excel-based automation tool to calculate a safety stock
              level, temporarily replacing the clients legacy system.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
