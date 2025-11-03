import React from "react";
import profilepic from "../../public/profilepic.jpg";

function About() {
    return (
        <div className="min-h-screen py-20">
            {/* About Us Section */}
            <div className="text-center mb-16">
                <h1 className="text-3xl font-bold mb-4 p-5">About Us</h1>
                <p className="m-3">
                    Welcome to our Bookstore - a haven for book lovers. We aim to provide
                    a vast collection of books and foster a community of readers.
                </p>
                <p className="m-2">
                    Our mission is to make books accessible to everyone and promote the joy of reading.
                </p>
            </div>

            {/* Features Section */}
            <div className="flex flex-wrap justify-center gap-6">
                {/* Our Collection */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center hover:scale-105 duration-200 dark:bg-slate-700 dark:text-white dark:border">
                    <div className="text-yellow-500 text-4xl mb-4">📚</div>
                    <h2 className="text-xl font-semibold mb-2">Our Collection</h2>
                    <p>
                        Explore a diverse range of books from fiction, non-fiction, academic
                        resources, and much more.
                    </p>
                </div>

                {/* Our Mission */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center hover:scale-105 duration-200 dark:bg-slate-700 dark:text-white dark:border">
                    <div className="text-yellow-500 text-4xl mb-4">🎯</div>
                    <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                    <p>
                        To inspire and connect readers by offering quality books and a
                        community-driven experience.
                    </p>
                </div>

                {/* Customer Satisfaction */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center hover:scale-105 duration-200 dark:bg-slate-700 dark:text-white dark:border">
                    <div className="text-yellow-500 text-4xl mb-4">😊</div>
                    <h2 className="text-xl font-semibold mb-2">Customer Satisfaction</h2>
                    <p>
                        Providing exceptional service and creating memorable reading
                        experiences for our customers.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-light p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-center text mb-8">Meet Our Team</h2>
                <div className="flex justify-center ">
                    <div className="team-member bg-white p-6 hover:scale-105 duration-200 shadow-md rounded-lg text-center max-w-sm dark:bg-slate-700 dark:text-white dark:border">
                        <img
                            src={profilepic}
                            alt="Team Member"
                            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                        />
                        <h3 className="text-xl font-semibold mb-2">Sandeep Kumar</h3>
                        <p className="text-lg">Full Stack Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
