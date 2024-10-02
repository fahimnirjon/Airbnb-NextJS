'use client';

import Image from "next/image";

const Avatar = () => {
    return (
       <Image  className="rounded-full h-auto" height="20" width="30" alt="Avatar" src="/public/images/place.jpg" />
    );
};

export default Avatar;