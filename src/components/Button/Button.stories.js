import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { description: "버튼 문구" },
    size: { description: "버튼의 크기" },
    color: { description: "버튼 글씨 색상" },
    backgroundColor: { description: "버튼 배경 색상 " },
    borderWidth: { description: "버튼 테두리 너비" },
    borderColor: { description: "버튼 테두리 색상" },
  },
};

export default meta;

export const Large = {
  args: {
    text: "Button",
    size: "large",
    color: "#000000",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
  },
  parameters: {
    docs: {
      description: {
        story: "Large 버튼 컴포넌트 예시입니다.",
      },
    },
  },
};

export const Medium = {
  args: {
    text: "Button",
    size: "medium",
    color: "#000000",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
  },
  parameters: {
    docs: {
      description: {
        story: "Medium 버튼 컴포넌트 예시입니다.",
      },
    },
  },
};

export const Small = {
  args: {
    text: "Button",
    size: "small",
    color: "#000000",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000000",
  },
  parameters: {
    docs: {
      description: {
        story: "Small 버튼 컴포넌트 예시입니다.",
      },
    },
  },
};

// Large.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const button = canvas.getByTestId("storybook-button");
//   userEvent.click(button);
// };
