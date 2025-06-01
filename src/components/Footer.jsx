import { myInfo } from "../utils/MyInfo";

export default function Footer() {
  return (
    <footer className="py-4 mt-5 text-center">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} {myInfo.firstname} {myInfo.surname}
      </p>
    </footer>
  );
}
