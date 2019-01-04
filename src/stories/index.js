import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
/** @jsx jsx */
import { jsx } from "@emotion/core";

storiesOf("Button", module).add("with text", () => (
  <button css={{ color: "hotpink" }} onClick={action("clicked")}>
    Hello Button
  </button>
));
