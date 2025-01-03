"use client"
import React from 'react';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { client } from '../../../sanity/lib/client'; // For client.ts
import { urlFor } from '../../../sanity/lib/image'; // sanely/lib/image.ts file se
import { components } from '../../components/CustomStyle'; // Corrected path
import Image from 'next/image';

interface Author {
  bio: string;
  image: string;
  name: string;
  date: string;
}

interface Post {
  title: string;
  summary: string;
  content: PortableTextBlock[];
  author: Author;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

// Type for params with slug
interface Params {
  slug: string;
}

// Fetching post data based on slug
const fetchPostData = async (slug: string): Promise<Post | null> => {
  const query = `
    *[_type == "blog" && slug.current == $slug] {
      summary,
      title,
      content,
      author->{
        bio,
        image,
        name,
        date
      },
      image {
        asset -> {
          _id,
          url
        }
      }
    }[0]
  `;

  const post = await client.fetch(query, { slug });
  return post || null;
};

// Page component for displaying the blog post
const BlogPostPage = ({ params }: { params: Promise<Params> }) => {
  // Ensure params are resolved into a slug
  const [postData, setPostData] = React.useState<Post | null>(null);
  
  React.useEffect(() => {
    // Resolve params
    params.then(async (resolvedParams) => {
      const { slug } = resolvedParams;
      const post = await fetchPostData(slug); // Fetch post data asynchronously
      setPostData(post); // Set fetched data to state
    });
  }, [params]);

  if (!postData) {
    return (
      <div>
        <h1>Loading...</h1> {/* Loading state if post is not fetched yet */}
      </div>
    );
  }

  return (
    <div className="bg-[#ea1b48] h-[700px] relative">
      <article className="flex items-center justify-center pt-16 mb-12">
        <div className="flex flex-col max-w-[820px] w-full bg-white rounded-[8px] mt-12">
          {/* Header Section */}
          <div className="bg-[#ea1b48] pb-12 px-4 sm:px-8">
            <h1 className="text-[2rem] sm:text-[3rem] text-[#f6f7f9] font-[800] text-center lg:text-left">
              {postData.title || 'No Title Available'}
            </h1>
            <p className="text-[1rem] sm:text-[1.2rem] font-[600] text-[#f6f7f9] mt-4 text-center lg:text-left">
              {postData.summary || 'No Summary Available'}
            </p>
            <div className="flex flex-wrap items-center mt-8 justify-between">
              <div className="flex items-center gap-4 ">
                <Image
                  className="h-[60px] object-cover sm:h-[80px] w-[60px] sm:w-[80px] rounded-full"
                  src={urlFor(postData.author.image)}
                  alt="Author"
                  width={200}
                  height={200}
                  
                />
                <p className="text-[1rem] sm:text-[1.1rem] text-black font-[700]">
                  By <span className="text-[#f6f7f9]">{postData.author.name}</span>
                </p>
              </div>
              <div>
                <p className="text-[0.9rem] sm:text-[1rem] font-[700] text-black">
                  {postData.author.date}
                </p>
              </div>
            </div>
          </div>

          {/* Blog Image */}
          <div className="">
            <Image
              className="h-[200px] sm:h-[320px] w-full rounded-b-[8px] object-cover"
              src={urlFor(postData.image)}
              alt="Blog Cover"
              width={200}
              height={200}
            />
          </div>

          {/* Content Section */}
          <div className="mt-8 px-4 sm:px-8">
            <h1 className="text-[1.2rem] sm:text-[1.5rem] font-[700]">
              BLOG <span className="text-[#ea1b48] mb-4">ARTICLE</span>
            </h1>
            <div className="mt-4">
              {postData.content && (
                <PortableText value={postData.content} components={components} />
              )}
            </div>

            <h1 className="mt-8 text-[1rem] sm:text-[1.2rem] font-[700]">
              ABOUT <span className="text-[#ea1b48]">AUTHOR</span>
            </h1>
            <div className="flex items-center gap-4 my-4">
              <Image
                className="h-[70px] object-cover border-[#ea1b48] border-[2px] sm:h-[80px] w-[70px] sm:w-[80px] rounded-full"
                src={urlFor(postData.author.image)}
                alt="Author"
                width={200}
                height={200}
                
              />
              <p className="text-[1rem] sm:text-[1.1rem] font-[600]">{postData.author.name}</p>
            </div>
            <div className="mt-4 text-gray-700 mb-12 font-[500] text-[1rem] sm:text-[1.1rem] leading-8">
              {postData.author.bio}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;