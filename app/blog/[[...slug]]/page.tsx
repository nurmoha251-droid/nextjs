type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;

  const path = slug ? slug.join("/") : "";

  return (
    <div>
      <h1>You visited: /{path}</h1>
    </div>
  );
}