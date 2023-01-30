import Image from "next/image"
import Link from "next/link"
import {constants} from "../../lib/constants";
const Culture = () => {
    return (
        <section className="bg-red-light dark:bg-red overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red dark:text-red-light sm:text-4xl">
                            Technology Culture
                        </h1>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:row-start-1 lg:col-start-2">
                        <svg
                            className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-red" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <Image
                                            width={568}
                                            height={661}
                                            objectFit="cover"
                                            src={constants["Neil Chaudhuri (He/Him)"].image}
                                            quality={100}
                                            className="rounded-lg shadow-lg object-center"
                                            alt="Vidya President Neil Chaudhuri (He/Him) speaking on Trends in Software Engineering"/>
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-dark dark:text-red-light">
                                    <span className="ml-2">Vidya President Neil Chaudhuri (He/Him) speaking on Trends in Software Engineering</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="text-base max-w-prose mx-auto lg:max-w-none">
                        <p className="text-lg text-gray-dark dark:text-red-light">
                            A lesson we have learned many times, sometimes painfully, is that even the most far-reaching
                            and well meaning technological transformation has no chance for success without a strong organizational
                            culture that promotes the right values. As we emphasize in our <Link href="/courses/modern-agile"><a>agile course</a></Link>,
                            a positive culture breeds comfort with experimenting with new technologies and encourages
                            the sharing of ideas and the collaboration necessary to implement them effectively. With technologies
                            and really the entire world changing constantly, a strong culture can be the reliable, sound
                            foundation for your organization.

                            Of course, organizational psychologists have been researching what it takes to do that for decades. It
                            isn't easy, but at least in technology-related areas, we can help.
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <section className="text-lg max-w-prose mx-auto">
                            <h3 className="text-red dark-text-red-light">Technology Communication</h3>
                            <p className="mt-4 text-xl text-gray-dark dark:text-blue-light leading-8">
                                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                    <p className="text-lg text-gray-dark dark:text-red-light">
                                        Technology is meaningless without the ability to express its power through engaging
                                        verbal and written communication. Whether explaining the value and risk of a particular
                                        technology to customers or writing concise but thorough prose in a proposal, we can
                                        communicate our technical expertise effectively to reach the goals of your organization.
                                    </p>
                                    <p className="text-lg text-gray-dark dark:text-red-light">
                                        We welcome you to look at examples of our communications, some of which target a wide
                                        audience while others target people who get excited by phrases like "dependency injection":
                                        <div className="mt-5 prose text-gray-dark mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                            <ul>
                                                <li><Link href="/blog"><a>Our blog</a></Link></li>
                                                <li><Link href="/tutorials"><a>Our video tutorials</a></Link></li>
                                                <li>
                                                    <Link href="https://gcn.com/Forms/Search-Results.aspx?key=2fae820b-7983-4dbf-9ed5-6ab36d6a8c93">
                                                        <a>Columns on Government Computing News</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog/learning-the-playbook/">
                                                        <a>Guest appearance on Public Spend Forum YouTube series</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="http://www.pdfpower.com/XML2005Proceedings/ship/77/xmlbinding.PDF">
                                                        <a>An old conference paper called XML Data Binding: Integrating XML andObject-Oriented Technologies
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="http://soft.vub.ac.be/FFSE/Workshops/ELISA-submissions/09-Chaudhuri-full.pdf">
                                                        <a>An even older conference paper called J2EE or .NET: A Managerial Perspective
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </p>
                                    <p className="text-lg text-gray-dark dark:text-red-light">
                                        Please let us know if you would like us to help you craft RFPs, proposals, or marketing for your organization
                                        or to give a talk on any architecture or development topics.
                                    </p>
                                </div>
                            </p>
                        </section>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <section className="text-lg max-w-prose mx-auto">
                            <h3 className="text-red dark-text-red-light">Technology Review</h3>
                            <p className="mt-4 text-xl text-gray-dark dark:text-blue-light leading-8">
                                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                    <p className="text-lg text-gray-dark dark:text-red-light">
                                        Clients come to Vidya when they are concerned about the direction of their technology strategy. Sometimes it's a particular
                                        software application that lacks documentation, is difficult to change without worrying the whole thing will blow up, or has proven unreliable to the point
                                        of losing data. Sometimes it takes forever to deploy to production. Or maybe you are having trouble
                                        creating <Link href="https://leaddev.com/culture-engagement-motivation/why-flow-matters-more-passion"><a>Flow State</a></Link>,
                                        so your development team is unable to reach their potential.
                                    </p>
                                    <p className="text-lg text-gray-dark dark:text-red-light">
                                        At Vidya, we have worked with a wide array of clients, so we have seen what works. We also keep abreast
                                        of the latest research in organization psychology, particularly as it relates to delivering digital services.
                                        Trust us to help you slow things down so you can in fact go much further.
                                    </p>
                                </div>
                            </p>
                        </section>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <section className="text-lg max-w-prose mx-auto">
                            <h3 className="text-red dark-text-red-light">Technology Contracting and Recruiting</h3>
                            <p className="mt-4 text-xl text-gray-dark dark:text-blue-light leading-8">
                                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                    <p className="text-lg text-gray-dark dark:text-red-light">
                                        It may not be obvious, but two areas of your organization critical to the success of technology initiatives
                                        are contracting and recruiting. Too often contracts motivate the wrong goals and therefore yield the wrong results. Meanwhile,
                                        it's hard to know where to look for talent, and <Link href="/blog/why-coding-interviews-are-the-worst"><a>technology interviews have been broken for a long time</a></Link>.
                                        Both of these things wreak havoc on your technology culture.
                                    </p>
                                    <p className="text-lg text-gray-dark dark:text-red-light">
                                        After the debacle with the initial rollout of HealthCare.gov, we worked with the Executive Office of the President to help the government
                                        identify ways <Link href="https://www.fai.gov/certification/fac-c/contracting-fac/fac-c-digital-services"><a>to improve the procurement process</a></Link>
                                        to produce better technology outcomes, and many of the same ideas apply outside government. We have also supported
                                        recruiting activities extensively to provide candidates that are the best match for your technology challenges and your
                                        organizational culture. They will be just as happy to work in your organization as you
                                        are you to have them.
                                    </p>
                                </div>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Culture
