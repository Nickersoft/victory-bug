import type { Meta, StoryFn } from "@storybook/react";
import React, { ComponentType } from "react";
import { View } from "react-native";

import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

const meta = {
  title: "My Chart",
  // component: ,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<any>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Basic: Story = () => (
  <WithSkiaWeb
    getComponent={() =>
      import("./Chart").then((x) => ({
        default: x.LineChart as ComponentType,
      }))
    }
    fallback={<div>Fuck</div>}
  />
)
