import { View } from "react-native";
import { CartesianChart, Line } from "victory-native";

interface LineChartProps {
  data: { x: number; y: number }[];
}

export function LineChart({ data }: LineChartProps) {
  return (
    <View style={{ width: 200, height: 300 }}>

      <CartesianChart data={data} xKey="x" yKeys={["y"]}>
        {({ points }) => (
          //👇 pass a PointsArray to the Line component, as well as options.
          <Line
            points={points.y}
            color="red"
            strokeWidth={3}
            animate={{ type: "timing", duration: 300 }}
          />
        )}
      </CartesianChart>
    </View>
  )
}