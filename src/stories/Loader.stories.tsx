import Loader from "../components/Loader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loader> = {
  title: "Loader",
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
