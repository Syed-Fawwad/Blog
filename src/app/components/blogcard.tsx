"use client";
import React from "react";
import Link from "next/link";
import {urlFor} from '../../sanity/lib/image';
import Image from "next/image";
import { PortableTextBlock } from "next-sanity";

interface Post {
  title: string;
  summary: string;
  content: PortableTextBlock[];
  slug:string,
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}
const Webpage = ({ post }: { post: Post }) => {
  return (
    <div className="p-0 lg:p-6 bg-gray-50 min-h-auto flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Blog Post Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
          {/* Post Image */}
          {post.image ? (
            <Image
              src={urlFor(post.image)}
              alt={post.title}
              className="w-full h-48 object-cover"
              height={48}
              width={200}
              objectFit="fill"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-400 italic">No image available</p>
            </div>
          )}

          <div className="p-6">
            {/* Post Title */}
            <h1 className="text-2xl font-bold text-gray-800 hover:text-[#ea1b48] transition-colors duration-300">
              {post.title}
            </h1>

            {/* Post Details */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <p>
                by <span className="font-semibold text-gray-800">Syed Farooq</span>
              </p>
              <p>Dec 25, 2024</p>
            </div>

            {/* Read More Link */}
            <Link href={`/blogpost/${post.slug}`}>
              <p className="mt-6 inline-block text-[#ea1b48] font-medium text-lg hover:underline">
                Read More →
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webpage;