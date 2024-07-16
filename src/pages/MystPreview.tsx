import React, { useEffect, useState } from "react";
import type { NodeRenderer } from "@myst-theme/providers";
import { mystParse } from "myst-parser";
import { MyST, DEFAULT_RENDERERS } from "myst-to-react";

import BASIC_RENDERERS from "./basic";
import type { GenericParent, GenericNode } from "myst-common";
import {
  ReferencesProvider,
  ThemeProvider,
  Theme,
} from "@myst-theme/providers";

export const MY_RENDERERS: Record<string, NodeRenderer> = {
  ...DEFAULT_RENDERERS,
  mystDirective({ node }) {
    return (
      <pre title={node.message}>
        <span className="text-red-500">
          {node.message}
          {"\n\n"}
        </span>
        {node.value}
      </pre>
    );
  },
  text({ node }) {
    // Change zero-width space into `<wbr>` which is better for copying
    // These are used in links, and potentially other long words
    if (!node.value?.includes("​")) {
      return <>{node.value}</>;
    }
    const text = node.value.split("​");
    return (
      <>
        {text.map((v: any, i: any) => (
          <React.Fragment key={i}>
            {v}z{i < text.length - 1 && <wbr />}
          </React.Fragment>
        ))}
      </>
    );
  },
};

const MystPreview = ({ content }: { content: string }) => {
  const [astNodes, setAstNodes] = useState<GenericNode | undefined>();
  const MYST_THEME = Theme.light;
  useEffect(() => {
    const mdast: GenericParent = mystParse(content);
    console.log(mdast);
    setAstNodes(mdast);
  }, [content]);
  return (
    <ThemeProvider renderers={MY_RENDERERS} theme={MYST_THEME}>
      <MyST ast={astNodes} />
    </ThemeProvider>
  );
};

export default MystPreview;
