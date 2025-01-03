
import React from 'react';

import {client} from '../sanity/lib/client';
import Webpage from './components/blogcard';
import Landing from './landingpage/page';
import Footer from './footer/page';
import Navbar from './navbar/page';
import Comment from './components/CommentSection';
import Contact from './contact/page';

 
interface Post {
  title: string;
  summary: string;
  content: any;
  slug:string,
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

export default async function Home() {
  // Fetch blog posts
  const posts: Post[] = await client.fetch(`
    *[_type == 'blog'] | order(_createdAt asc) {
      summary,
      title,
      image {
        asset -> {
          _id,
          url
        }
      },
      "slug": slug.current
    }
  `);

  // Debugging log to confirm posts
  console.log('Fetched Posts:', posts);

  return (
<>
<Navbar/>
<Landing/>

<div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {posts.map((post: Post) => (
        <Webpage key={post.slug} post={post} />
      ))}
    </div>
    <Comment/>
    <Contact/>
    <Footer/>
    </>
  );
}