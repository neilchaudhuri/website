import {BlogPost, BlogPostCategories, BlogPostMetadata} from "../../lib/blogPost-utils";
import {BlogPostCard} from "./BlogPostCard";
import {ChangeEvent, useEffect, useState} from "react";

interface BlogPostIndexProps {
    blogPosts: BlogPostMetadata[]
    blogPostCategories: BlogPostCategories
}

export const BlogPostIndex = (p: BlogPostIndexProps) => {
    const tags = Object.keys(p.blogPostCategories).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    const [selectedTag, selectTag] = useState<string>("")
    const [currentPosts, setCurrentPosts] = useState<BlogPostMetadata[]>(p.blogPosts)
    useEffect(() => {
        const posts = p.blogPostCategories[selectedTag]
        if (posts) {
            setCurrentPosts(posts)
        } else {
            setCurrentPosts(p.blogPosts)
        }
    }, [p.blogPosts, selectedTag])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const tag = e.target.value
        if (tag) {
            selectTag(tag)
        } else {
            selectTag("")
        }
    }

    const onTagClick = (tag: string) => () => {
        selectTag(tag)
    }

    return (
        <div className="relative bg-blue-light dark:bg-gray-dark pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl tracking-tight font-extrabold text-red dark:text-red-light sm:text-4xl mt-0">Blog posts by the staff at Vidya</h1>
                <h2 className="mt-3 max-w-2xl mx-auto text-xl text-gray-dark dark:text-blue-light sm:mt-4">
                    From programming to project management, check out our observations about the tech industry.
                </h2>
            </div>
            <div className="flex flex-col">
                <label htmlFor="tag" className="mx-auto block text-lg font-medium text-blue dark:text-blue-light md:text-xl mt-8">
                    Filter by tag
                </label>
                <div className="mt-1">
                    <input list="tag"
                           placeholder="Search..."
                           onChange={onChange}
                           className="mx-auto p-2 outline-none block text-red sm:text-xl lg:text-2xl focus:border-green-dark md:w-full lg:w-full shadow-sm sm:max-w-xs sm:text-sm border-gray rounded-md" />
                    <datalist id="tag">
                        <option value=""/>
                        {
                            tags.map(t => <option key={t} value={t}>{t}</option>)
                        }
                    </datalist>
                </div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <nav className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {
                        currentPosts.map((blogPost) => (
                            <BlogPostCard key={blogPost.slug} blogPost={blogPost} onTagClick={onTagClick}/>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}

