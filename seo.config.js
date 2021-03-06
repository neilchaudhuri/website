export default {
    title: "Vidya | Build faster. Build better.",
    description: "Consulting and custom application development to strengthen your business. Courses and content to help you harness technology for yourself.",
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: process.env.basePath,
        title: "Vidya | Build faster. Build better.",
        site_name: 'Vidya',
        description: "Build faster. Build better. Consulting and custom application development to strengthen your business. Courses and content to help you harness technology for yourself.",
        tags: ["Vidya", "technology", "courses", "tutorials", "software", "consulting", "engineering", "automation"],
        images: [
            {
                url: `${process.env.basePath}/img/vidya.png`,
                width: 600,
                height: 387,
                alt: 'Vidya | Build faster. Build better.',
            }
        ]
    },
    twitter: {
        handle: '@RealNeilC',
        site: '@VidyaSource',
        cardType: 'summary_large_image',
    },
    facebook: {
        appId: '312450288897871'
    },
    additionalMetaTags: [
        {
            property: 'theme-color',
            content: '#5a82b4'
        }
    ]
};