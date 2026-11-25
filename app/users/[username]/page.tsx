type PageProps = {
  params: Promise<{
    username: string;
  }>;
};

export default async function UserPage({ params }: PageProps) {
  const { username } = await params;

  return (
    <div>
      <h1>Welcome, {username}</h1>
    </div>
  );
}