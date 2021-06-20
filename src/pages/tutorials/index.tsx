import {TutorialHeadElement} from "../../components/tutorials/TutorialHeadElement";
import {Page} from "../../components/Page";
import Image from "next/image";
import Link from "next/link";

const tutorials = [
    {
        title: 'Nina Reasons to Try Scala',
        href: '/tutorials/java-for-work',
        description: "We will look at nine compelling features of Scala that will hopefully impress you and inspire you to explore both the language itself and its applications.",
        imageUrl: '/img/tutorials/programming.jpg',
    },
    {
        title: 'Starting with Data',
        href: '/tutorials/modern-agile',
        description: "This tutorial is for beginners in software development who want to learn just enough to access data on the web and visualize it on their own websites or mobile device applications",
        imageUrl: '/img/tutorials/data.jpg',
    },
    {
        title: 'Comparison Shopping',
        href: 'tutorials/software-engineering-with-apache-spark',
        description: "This tutorial is for intermediate-level Java developers who want to add comparison and sorting capabilities to the custom classes they’ve created for their projects.",
        imageUrl: '/img/tutorials/car-shopping.jpg',
    },
    {
        title: 'Web Design 101',
        href: 'tutorials/software-engineering-with-apache-spark',
        description: "This tutorial is for people brand new to web design who haven’t done anything more complicated on the web than tag their friends on Facebook.",
        imageUrl: '/img/tutorials/web-design.jpg',
    },
]

export const Tutorials = () => {

    return (
        <Page headElement={<TutorialHeadElement title="Vidya | Tutorials" />}>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Tutorials</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Watch our video tutorials (with accompanying source code on GitHub) to learn something new.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {tutorials.map((tutorial) => (
                        <div key={tutorial.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0 bg-gray-light hover:bg-red-light">
                                <Link href={tutorial.href}>
                                    <a>
                                        <div className="h-48 w-full relative">
                                            <Image
                                                objectFit="cover"
                                                layout="fill"
                                                quality={100}
                                                src={tutorial.imageUrl}
                                                alt={tutorial.title}
                                            />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between hover:bg-red-light">
                                <div className="flex-1">
                                    <Link href={tutorial.href}>
                                    <a className="block mt-2">
                                        <p className="text-xl font-semibold text-red">{tutorial.title}</p>
                                        <p className="mt-3 text-base text-gray-dark">{tutorial.description}</p>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </Page>
    )
}

export default Tutorials