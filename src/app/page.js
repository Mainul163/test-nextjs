import Image from "next/image";
import styles from "./page.module.css";
import InputComponent from "./components/InputComponent";

export default function Home() {
  return (
    <div>
      <h1>main page</h1>
      <InputComponent />
    </div>
  );
}
