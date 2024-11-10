
import { Heading } from "../components/Heading"
import { MaxWidthWrapper } from "../components/max-width-wrapper"
import { ShinyButton } from "../components/ShinyButton";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { HeartHandshake, MessageCircleHeart, Sparkles, Trees, UsersRound, Wrench } from "lucide-react";


export default function Home() {
  return (
    <>
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-emerald-950 to-emerald-600">
      {/* <section className="relative py-24 sm:py-32 bg-brand-25 bg-home-banner bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-75"></div> */}
        <MaxWidthWrapper className="text-center ">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading className="">
              <span className="text-white text-6xl">Bolivian Latin Age Association</span>
                {/* <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">Bolivian Latin</span><span className="bg-gradient-to-r from-yellow-500 to-green-500 text-transparent bg-clip-text"> Age Association</span> */}
                {/* <br />
                <br/>
                <span className="text-white">
                Building Community, Sharing Culture
                </span> */}
              </Heading>
            </div>

            <p className="text-base/7 max-w-prose text-center text-pretty text-gray-300 text-lg pt-6">
              
            We're empowering individuals within the Bolivian and Latin community by providing a supportive and inclusive environment.
            We strive to 
             
              {" "}
              <span className="font-semibold text-green-500">
              enhance social health and well-being, foster cultural appreciation, and build lasting connections
              </span>{" "}
              that unite us all in a shared sense of community.
            </p>



            <div className="w-full max-w-80 shadow-md">
              <ShinyButton
                href="https://www.facebook.com/people/Latin-Age-Uk/100090506665209/"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Get Involved
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>


      <section className="relative py-24 sm:py-16 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div className="">
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
          
            </h2>
            <Heading className="text-center bg-gradient-to-r from-emerald-900 to-emerald-600 text-transparent bg-clip-text py-2">Building Community, Sharing Culture</Heading>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
    <div className="relative">
      <div className="relative flex h-full flex-col">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
            About Us
          </p>
          <p className="mt-2 max-w-lg text-sm/7 text-gray-600 max-lg:text-center">
          At BLAS UK, we are a vibrant and inclusive Bolivian and Latin community group based in the heart of Southwark. Our mission is to provide a welcoming space where individuals can come together, make new friends, and enjoy a variety of activities that foster joy and companionship.<br/><br/> By actively supporting each other, we aim to combat loneliness and enhance mental well-being. Through the sharing of cultures, skills, and experiences, we are committed to nurturing personal growth and deepening connections among our members. Our group thrives on the principles of teamwork and kindness, making every encounter a step towards a stronger community.
          </p>
        </div>

      </div>
    </div>
   
    <div className="relative">
    <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
          <Image className="size-full object-cover object-top"
                 src="./boliviandiasporalondon.webp"
                 alt="Phone screen displaying app interface"
                 fill />
        </div>
    </div>
  </div>

      </MaxWidthWrapper>
    </section >

    



    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-emerald-950 to-emerald-600">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
            </h2>
            <Heading className="text-white">What we value</Heading>
          </div>
          <div className="grid gap-4">
          {/* <ul className="space-y-2 text-sm/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Community: We believe in the power of togetherness, where each member plays a vital role in strengthening our collective spirit.",
                "Inclusion: Everyone is welcome, and we cherish the diversity that each individual brings to our group.",
                "Cultural Appreciation: We celebrate the rich tapestry of Bolivian and Latin cultures through sharing, learning, and appreciating our diverse heritage.",
                "Kindness: Acts of kindness are at the heart of our interactions, promoting a culture of care and empathy.",
                "Growth*: Personal and collective growth is achieved through shared experiences, learning new skills, and supporting each other.",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul> */}



            <div className="container mx-auto ">
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
    {[
      {
        valueTitle: "Community",
        valueDescription:<UsersRound className="text-brand-700" size={48}/>,
        valueContent:
          "We believe in the power of togetherness, where each member plays a vital role in strengthening our collective spirit.",
      },
      {
        valueTitle: "Inclusion",
        valueDescription:<HeartHandshake  className="text-brand-700" size={48}/>,
        valueContent:
          "Everyone is welcome, and we cherish the diversity that each individual brings to our group.",
      },
      {
        valueTitle: "Cultural Appreciation",
        valueDescription:<Sparkles className="text-brand-700" size={48}/>,
        valueContent:
          "We celebrate the rich tapestry of Bolivian and Latin cultures through sharing, learning, and appreciating our diverse heritage.",
      },
      {
        valueTitle: "Kindness",
        valueDescription:<MessageCircleHeart className="text-brand-700" size={48}/>,
        valueContent:
          "Acts of kindness are at the heart of our interactions, promoting a culture of care and empathy.",
      },
      {
        valueTitle: "Growth",
        valueDescription:<Trees  className="text-brand-700" size={48}/>,
        valueContent:
          "Personal and collective growth is achieved through shared experiences, learning new skills, and supporting each other.",
      },
      {
        valueTitle: "Develop Skills",
        valueDescription:<Wrench className="text-brand-700"  size={48}/>,
        valueContent:
          "We provide a platform to learn new skills, gain valuable experience and the chance to hone your abilities while making a positive impact.",
      },
    ].map((item, index) => (
      <Card
        key={index}
        className="bg-white p-6 rounded-lg shadow-md shadow-green-900 hover:shadow-lg transition-shadow duration-300 "
      >
        <CardDescription className="flex justify-center pt-2">{item.valueDescription}</CardDescription>
        <CardTitle className="text-xl font-semibold my-4 flex justify-center ">
          {item.valueTitle}
        </CardTitle>
        
        <CardContent className="text-gray-700 ">{item.valueContent}</CardContent>
      </Card>
    ))}
  </div>
</div>



    {/* <div className="relative">
      <div className="relative flex h-full flex-col">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
            Our Mission
          </p>
          <p className="mt-2 max-w-lg text-sm/7 text-gray-600 max-lg:text-center">

          
          <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Community: We believe in the power of togetherness, where each member plays a vital role in strengthening our collective spirit.",
                "Inclusion: Everyone is welcome, and we cherish the diversity that each individual brings to our group.",
                "Cultural Appreciation: We celebrate the rich tapestry of Bolivian and Latin cultures through sharing, learning, and appreciating our diverse heritage.",
                "Kindness: Acts of kindness are at the heart of our interactions, promoting a culture of care and empathy.",
                "Growth*: Personal and collective growth is achieved through shared experiences, learning new skills, and supporting each other.",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
          </p>
        </div>

      </div>
    </div> */}



  </div>

      </MaxWidthWrapper>
    </section >












    <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              
            </h2>
            <Heading>Get involved</Heading>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
   
   
    <div className="relative">
    <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
          <Image className="size-full object-cover object-top"
                 src="./SABOR 2.webp"
                 alt="Phone screen displaying app interface"
                 fill />
        </div>
    </div>



    <div className="relative">
      <div className="relative flex h-full flex-col">
        <div className="px-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
          Volunteers are the heart of our work
          </p>
          <p className="max-w-lg text-sm/7 text-gray-600 max-lg:text-center">
          Volunteering with BLAS UK is an enriching opportunity to make a meaningful impact within the Bolivian and Latin community in Southwark. By joining our team, you'll contribute to reducing loneliness and boosting the mental well-being of individuals who need a supportive environment to thrive. Immerse yourself in the vibrant cultures of Bolivia and Latin America, gaining a deeper appreciation for diverse traditions and perspectives.<br/><br/> As a volunteer, you'll have the chance to build lasting connections, develop new skills, and experience personal growth while contributing to a cause that spreads kindness and compassion. Whether you're interested in event planning, communication, or simply sharing your time and heart, your efforts will play a vital role in building a stronger, more connected community. Volunteering with BLAS UK is more than just service; it's a journey of learning, sharing, and caring, where every act of kindness creates a ripple effect of positivity. Join us today and help make a real difference!

          </p>
        </div>

      </div>
    </div>



  </div>

      </MaxWidthWrapper>
    </section >











    <section className="relative py-24 sm:py-32 bg-white">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              The community
            </h2>
            <Heading className="text-center">What our members say</Heading>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem] ">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">

              </div>

              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
              "Being a part of BLAS UK has truly been a life-changing experience for me. I've met amazing people who have become like family, and together, we've created an inclusive space where everyone feels welcomed and valued."
              </p>

              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                {/* <Image
                  src="/user-2.png"
                  className="rounded-full object-cover"
                  alt="Random user"
                  width={48}
                  height={48}
                /> */}
                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center">
                    Carmen E.
                   
                  </p>
                  {/* <p className="text-sm text-gray-600">@itsfreya</p> */}
                </div>
              </div>
            </div>

          
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">

              </div>

              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
              "Volunteering with BLAS UK not only allowed me to share my Bolivian culture but also enriched my own understanding of diverse communities. It's heartwarming to see the difference we are making in people's lives every day."
              </p>

              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                {/* <Image
                  src="/user-1.png"
                  className="rounded-full object-cover"
                  alt="Random user"
                  width={48}
                  height={48}
                /> */}
                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center">
                    Fernando A.
                    
                  </p>
                  {/* <p className="text-sm text-gray-600">@kdurant_</p> */}
                </div>
              </div>
            </div>
          </div>

          <ShinyButton
            // href="/sign-up"
            href="https://www.facebook.com/people/Latin-Age-Uk/100090506665209/"
            className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Contact Us
          </ShinyButton>
        </MaxWidthWrapper>
      </section>



        </>
        );
}

