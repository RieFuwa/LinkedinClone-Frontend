import React from 'react'
import CreatePost from '../../Post/CreatePost'
import PostCard from '../../Post/PostCard'
import AdCard from '../../ScreenCard/AdCard'
import UserProfileCard from '../../ScreenCard/UserProfileCard'

function Home() {
    return (
        <div className="flex mx-auto max-w-7xl py-6 sm:px-6 lg:px-5  ">
            <UserProfileCard ></UserProfileCard>
            <div class="grid-cols-1 mt-20 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1  mx-5">
                <CreatePost></CreatePost>
                <PostCard></PostCard>
                <PostCard></PostCard> <PostCard></PostCard> <PostCard></PostCard> <PostCard></PostCard> <PostCard></PostCard> <PostCard></PostCard>
            </div>
            <AdCard></AdCard>
        </div>
    )
}

export default Home