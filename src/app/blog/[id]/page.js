export default async function BlogPage({ params }) {
  // let id = 0;
  const { id } = await params

  return (
 <>
    <h1 className="text-4xl">Blogs - ({id})</h1>
</>
  );
}
