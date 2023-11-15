import "./App.css";
import Colors from "./components/Colors";
import colors from "./assests/color";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      {colors.map((color) => {
        return (
          <Colors
            bgcolor={color.backgroundColor}
            colorName={color.colorName}
            colorCode={color.colorCode}
            textColor={color.textColor}
          />
        );
      })}
    </div>
  );
}

export default App;
