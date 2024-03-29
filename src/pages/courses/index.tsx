import {Page} from "../../components/Page";
import Image from "next/image";
import Link from "next/link";
import {NextSeo} from "next-seo";

export const courses = [
    {
        title: 'Java for Work',
        href: '/courses/java-for-work',
        // @ts-ignore
        description: process.env.java.blurb,
        imageUrl: '/img/courses/programming.jpg',
        width: 8000,
        height: 4000
    },
    {
        title: 'Modern Agile',
        href: '/courses/modern-agile',
        // @ts-ignore
        description: process.env.agile.blurb,
        imageUrl: '/img/courses/agile.jpg',
        width: 4800,
        height: 2400
    },
    {
        title: 'Software Engineering with Apache Spark',
        href: 'courses/software-engineering-with-apache-spark',
        // @ts-ignore
        description: process.env.spark.blurb,
        imageUrl: '/img/courses/spark.jpg',
        width: 4810,
        height: 3207
    },
]

export const Courses = () => {
    const title = "Vidya | Courses"
    const description = "Build faster. Build better. Technology courses from Vidya."
    const url = `${process.env.basePath}/courses`
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    title: title,
                    description: description,
                    url: url,
                    type: 'company',
                }}
            />
            <Page>
                <div className="relative bg-blue-light pt-16 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white dark:bg-gray-dark h-1/3 sm:h-2/3"/>
                    </div>
                    <section className="relative max-w-7xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl tracking-tight font-extrabold text-red dark:text-red-light sm:text-4xl mt-0">Courses from Vidya</h1>
                            <h2 className="mt-3 max-w-2xl mx-auto text-xl text-gray-dark dark:text-blue-light sm:mt-4">
                                Level up in your career with our course offerings.
                            </h2>
                        </div>
                        <nav className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            {courses.map((course) => (
                                <div key={course.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-shrink-0 bg-gray-light hover:bg-red-light">
                                        <Link href={course.href}>
                                            <a>
                                                <div className="h-48 w-full relative">
                                                    <Image
                                                        loading="eager"
                                                        priority={true}
                                                        objectFit="cover"
                                                        layout="fill"
                                                        quality={100}
                                                        src={course.imageUrl}
                                                        alt={course.title}
                                                    />
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between hover:bg-red-light">
                                        <div className="flex-1">
                                            <Link href={course.href}>
                                                <a className="block mt-2">
                                                    <p className="text-xl font-semibold text-red dark:text-red">{course.title}</p>
                                                    <p className="mt-3 text-base text-gray-dark dark:text-gray-dark">{course.description}</p>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </section>
                </div>
            </Page>
        </>

    )
}

export default Courses
