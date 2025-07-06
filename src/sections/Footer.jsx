import SocialIcons from "../components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/30 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-lg mb-6">
          &copy; {new Date().getFullYear()} Manish Kulal. Crafted with passion
          and precision.
        </p>
        <div className="flex justify-center space-x-8">
          <SocialIcons isMailVisible={true} />
        </div>
      </div>
    </footer>
  );
}
