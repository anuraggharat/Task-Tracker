

export default function Layout({children}) {
  return (
    <div className="w-100 bg-gray-200">
      <div className="container mx-auto  min-h-screen p-16">
        <div className="container ">{children}</div>
      </div>
    </div>
  );
}
