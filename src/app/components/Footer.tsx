export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <footer className="text-center">
        <p className="text-gray-600 text-sm mb-2">
          Copyright &copy; 2023-{currentYear} Facundo Fernandez
        </p>
      </footer>
    </div>
  );
}
