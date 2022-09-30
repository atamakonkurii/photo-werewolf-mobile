import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { Hello } from "./component/Hello";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Hello />
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
