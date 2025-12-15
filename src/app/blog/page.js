import Image from "next/image";
import Link from "next/link";

export default function Blog() {

    const blogs = [
        {
            id: 1,
            title: 'Blog One Title.'
        },
        {
            id: 2,
            title: 'Blog Tow Title.'
        }
    ]

    return (
        <>
            <h1 className="text-4xl">Blogs</h1>

            <ul>
                {blogs.map((item) => (
                    <li key={item.id}>
                        <Link href={"/blog/" + item.id}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
