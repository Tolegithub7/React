export async function Get(request) {
  const users = [
    { name: "john", id: 11 },
    { name: "doe", id: 22 },
  ];
  return new Response(JSON.stringify(users));
}
