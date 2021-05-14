import Link from 'next/link'
import Image from "next/image";

export const Clients = () => {
    return (
        <div className="bg-green-light">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-red sm:text-4xl">
                            Government and business trust Vidya.
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-dark">
                            We are proud to have brought our expertise and insight to large government agencies, small businesses, and
                            everything in between to help them all capitalize on an ever-evolving technology landscape.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <Link href="/contact">
                                    <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red hover:bg-blue-dark">
                                        Contact Us
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-blue-light">
                            <Image
                                width={231}
                                height={144}
                                src="/img/partners/dos.svg"
                                alt="United States Department of State"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-blue-light">
                            <Image
                                width={231}
                                height={144}
                                src="/img/partners/trss.png"
                                alt="Thomson Reuters Special Services"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-blue-light">
                            <Image
                                width={231}
                                height={33}
                                src="/img/partners/healthcaregov.png"
                                alt="Healthcare.gov"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-blue-light">
                            <Image
                                width={231}
                                height={33}
                                src="/img/partners/ninaday.svg"
                                alt="Ninaday"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-blue-light">
                            <Image
                                width={144}
                                height={144}
                                src="/img/partners/eop.png"
                                alt="Executive Office of the President of the United States"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-blue-light">
                            <Image
                                width={231}
                                height={144}
                                src="/img/partners/gcn.png"
                                alt="Government Computing News"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
